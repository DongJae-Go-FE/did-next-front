"use client";

import { useCallback, useRef, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { throttle } from "lodash";
import Marker from "./marker";
import data from "../public/data";
import type { Locale } from "@/app/(nation)/_lib/content";

import resionJson1 from "../public/regions/region01.json";
import resionJson2 from "../public/regions/region02.json";
import resionJson3 from "../public/regions/region03.json";
import resionJson4 from "../public/regions/region04.json";
import resionJson5 from "../public/regions/region05.json";
import resionJson6 from "../public/regions/region06.json";
import resionJson7 from "../public/regions/region07.json";
import resionJson8 from "../public/regions/region08.json";
import resionJson9 from "../public/regions/region09.json";
import resionJson10 from "../public/regions/region10.json";
import resionJson11 from "../public/regions/region11.json";
import resionJson12 from "../public/regions/region12.json";
import resionJson13 from "../public/regions/region13.json";
import resionJson14 from "../public/regions/region14.json";
import resionJson15 from "../public/regions/region15.json";
import resionJson16 from "../public/regions/region16.json";
import resionJson17 from "../public/regions/region17.json";

const results: unknown[] = [
  resionJson1,
  resionJson2,
  resionJson3,
  resionJson4,
  resionJson5,
  resionJson6,
  resionJson7,
  resionJson8,
  resionJson9,
  resionJson10,
  resionJson11,
  resionJson12,
  resionJson13,
  resionJson14,
  resionJson15,
  resionJson16,
  resionJson17,
];

const regionColors = [
  "#FF6B9D",
  "#C44569",
  "#A55EEA",
  "#4B7BEC",
  "#45AAF2",
  "#26C6DA",
  "#20BF6B",
  "#26DE81",
  "#A5D6A7",
  "#FED330",
  "#F7B731",
  "#FA8231",
  "#FC5C65",
  "#EB3B5A",
  "#8854D0",
  "#778CA3",
  "#4B6584",
];

export type NaverMap = naver.maps.Map;

interface GeoJSONFeature {
  geometry: {
    type: string;
    coordinates: number[][][] | number[][][][];
  };
  properties: {
    area?: string;
    area1?: string;
  };
}

interface GeoJSONData {
  features: GeoJSONFeature[];
}

export default function Map({ locale = "kr" }: { locale?: Locale }) {
  const mapId = `naver-map-${locale}`;
  const mapRef = useRef<NaverMap | null>(null);
  const polygonsRef = useRef<naver.maps.Polygon[]>([]);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<naver.maps.Marker[]>([]);
  const linePolylinesRef = useRef<naver.maps.Polyline[]>([]);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapOpacity, setMapOpacity] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 1079);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!mapContainerRef.current) return;

      const rect = mapContainerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const mapHeight = rect.height;

      const scrollProgress = Math.max(
        0,
        Math.min(1, (windowHeight - rect.top) / (windowHeight + mapHeight))
      );
      setMapOpacity(Math.min(1, scrollProgress * 2));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = throttle(() => {
      const map = mapRef.current;
      if (!map) return;

      map.autoResize();

      const screenWidth = window.innerWidth;
      const isMobileScreen = screenWidth <= 1079;
      const isSmallScreen = screenWidth <= 767;

      map.setCenter(
        isMobileScreen
          ? new window.naver.maps.LatLng(36.5, 127.8)
          : new window.naver.maps.LatLng(35.886, 127.6)
      );
      map.setZoom(isSmallScreen ? 6 : isMobileScreen ? 6 : 7);
    }, 200);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      handleResize.cancel();
    };
  }, []);

  const convertCoordinates = (coordinates: number[][][]) =>
    coordinates.map((ring) =>
      ring.map((coord) => new window.naver.maps.LatLng(coord[1], coord[0]))
    );

  const createPolygon = useCallback(
    (map: NaverMap, paths: naver.maps.LatLng[][], color: string) => {
      const polygon = new window.naver.maps.Polygon({
        map,
        paths,
        fillColor: color,
        fillOpacity: 0.3,
        strokeColor: color,
        strokeOpacity: 0.6,
        strokeWeight: 2,
        clickable: true,
      });

      window.naver.maps.Event.addListener(polygon, "mouseover", () => {
        polygon.setOptions({ fillOpacity: 0.6, strokeWeight: 3 } as naver.maps.PolygonOptions);
      });
      window.naver.maps.Event.addListener(polygon, "mouseout", () => {
        polygon.setOptions({ fillOpacity: 0.3, strokeWeight: 2 } as naver.maps.PolygonOptions);
      });

      return polygon;
    },
    []
  );

  const drawPolygons = useCallback(
    (map: NaverMap) => {
      polygonsRef.current.forEach((polygon) => polygon.setMap(null));
      polygonsRef.current = [];

      results.forEach((regionData, regionIndex: number) => {
        const geoData = regionData as GeoJSONData;
        if (!geoData?.features) return;

        const color = regionColors[regionIndex % regionColors.length];

        geoData.features.forEach((feature) => {
          const geometryType = feature.geometry?.type;

          if (geometryType === "Polygon") {
            const paths = convertCoordinates(feature.geometry.coordinates as number[][][]);
            polygonsRef.current.push(createPolygon(map, paths, color));
          } else if (geometryType === "MultiPolygon") {
            (feature.geometry.coordinates as number[][][][]).forEach((polygonCoords) => {
              polygonsRef.current.push(createPolygon(map, convertCoordinates(polygonCoords), color));
            });
          }
        });
      });
    },
    [createPolygon]
  );

  const clearConnectionLines = useCallback(() => {
    linePolylinesRef.current.forEach((line) => line.setMap(null));
    linePolylinesRef.current = [];
  }, []);

  const drawConnectionLines = useCallback(() => {
    const map = mapRef.current;
    if (!map || isMobile) {
      clearConnectionLines();
      return;
    }

    clearConnectionLines();

    data.forEach((diocese) => {
      if (!diocese.latitude2 || !diocese.longitude2) return;

      const start = new window.naver.maps.LatLng(diocese.latitude2, diocese.longitude2);
      const end = new window.naver.maps.LatLng(diocese.latitude, diocese.longitude);
      const midLng = (diocese.longitude2 + diocese.longitude) / 2;

      const path = [
        start,
        new window.naver.maps.LatLng(diocese.latitude2, midLng),
        new window.naver.maps.LatLng(diocese.latitude, midLng),
        end,
      ];

      const baseLine = new window.naver.maps.Polyline({
        map,
        path,
        strokeColor: "#0047BB",
        strokeOpacity: 0.95,
        strokeWeight: 2,
        clickable: false,
        zIndex: 10,
      });

      linePolylinesRef.current.push(baseLine);
    });
  }, [clearConnectionLines, isMobile]);

  const updateMarkerPositions = useCallback(() => {
    const map = mapRef.current;
    if (!map) return;

    markersRef.current.forEach((marker) => marker.setMap(null));
    markersRef.current = [];

    data.forEach((diocese) => {
      const markerContainer = document.createElement("div");
      markerContainer.className = "custom-marker";
      markerContainer.style.zIndex = "9999";
      markerContainer.style.position = "relative";

      const root = createRoot(markerContainer);
      root.render(<Marker name={diocese.name} locale={locale} />);

      const lat = isMobile ? diocese.latitude2 : diocese.latitude;
      const lng = isMobile ? diocese.longitude2 : diocese.longitude;

      const marker = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(lat, lng),
        map,
        icon: {
          anchor: new naver.maps.Point(15, 30),
          content: markerContainer,
        },
        zIndex: 9999,
      });

      markersRef.current.push(marker);
    });
  }, [isMobile, locale]);

  const initializeMap = useCallback(() => {
    if (!window.naver || !window.naver.maps) return;

    const screenWidth = window.innerWidth;
    const isMobileScreen = screenWidth <= 1079;
    const isSmallScreen = screenWidth <= 767;

    const map = new window.naver.maps.Map(mapId, {
      center: isMobileScreen
        ? new window.naver.maps.LatLng(36.5, 127.8)
        : new window.naver.maps.LatLng(35.886, 127.6),
      zoom: isSmallScreen ? 6 : isMobileScreen ? 6 : 7,
      scaleControl: true,
      mapDataControl: true,
      scrollWheel: false,
      pinchZoom: isMobileScreen,
      disableDoubleClickZoom: !isMobileScreen,
      disableDoubleTapZoom: !isMobileScreen,
      draggable: isMobileScreen,
      zoomControl: false,
      logoControlOptions: { position: naver.maps.Position.BOTTOM_LEFT },
    });

    mapRef.current = map;
    drawPolygons(map);
    updateMarkerPositions();
    drawConnectionLines();
    setMapLoaded(true);
  }, [mapId, drawPolygons, updateMarkerPositions, drawConnectionLines]);

  useEffect(() => {
    if (!mapLoaded) return;
    updateMarkerPositions();
    drawConnectionLines();
  }, [isMobile, mapLoaded, updateMarkerPositions, drawConnectionLines]);

  useEffect(() => {
    if (window.naver && window.naver.maps) {
      initializeMap();
      return;
    }

    const script = document.createElement("script");
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&submodules=geocoder`;
    script.async = true;
    script.onload = initializeMap;
    document.head.appendChild(script);

    return () => {
      clearConnectionLines();
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, [initializeMap, clearConnectionLines]);

  return (
    <div
      ref={mapContainerRef}
      style={{ opacity: mapOpacity, transition: "opacity 0.3s ease-out" }}
      className="relative w-full min-h-[calc(100dvh-208px)]"
    >
      <div id={mapId} className="min-h-[calc(100dvh-208px)] w-full bg-gray-200" />
    </div>
  );
}
