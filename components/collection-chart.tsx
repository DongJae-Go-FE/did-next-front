"use client";

import { useEffect, useRef, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const rawData = [
  {
    name: "서울",
    현재인원: 8700,
    목표인원: 10000,
    color: "#8884d8",
  },
  {
    name: "인천",
    현재인원: 3200,
    목표인원: 5000,
    color: "#82ca9d",
  },
  {
    name: "수원",
    현재인원: 4600,
    목표인원: 5000,
    color: "#ffc658",
  },
  {
    name: "청주",
    현재인원: 2340,
    목표인원: 3000,
    color: "#ff8042",
  },
  {
    name: "대전",
    현재인원: 3300,
    목표인원: 6000,
    color: "#a4de6c",
  },
  {
    name: "전주",
    현재인원: 2130,
    목표인원: 3000,
    color: "#d0ed57",
  },
  {
    name: "광주",
    현재인원: 4450,
    목표인원: 5000,
    color: "#83a6ed",
  },
  {
    name: "제주",
    현재인원: 860,
    목표인원: 2000,
    color: "#8dd1e1",
  },
  {
    name: "의정부",
    현재인원: 2880,
    목표인원: 3000,
    color: "#d084d0",
  },
  {
    name: "춘천",
    현재인원: 1700,
    목표인원: 2500,
    color: "#ffb6c1",
  },
  {
    name: "원주",
    현재인원: 2460,
    목표인원: 3000,
    color: "#ffa07a",
  },
  {
    name: "안동",
    현재인원: 1180,
    목표인원: 2000,
    color: "#98d8c8",
  },
  {
    name: "대구",
    현재인원: 5460,
    목표인원: 6000,
    color: "#f7b7a3",
  },
  {
    name: "부산",
    현재인원: 6000,
    목표인원: 8000,
    color: "#c9a0dc",
  },
  {
    name: "마산",
    현재인원: 2520,
    목표인원: 3000,
    color: "#ffcc99",
  },
  {
    name: "군종",
    현재인원: 1860,
    목표인원: 3000,
    color: "#aed6f1",
  },
];

interface ChartData {
  name: string;
  현재인원: number;
  목표인원: number;
  color: string;
  달성률: number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: ChartData;
  }>;
}

interface CustomActiveBarProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  payload?: ChartData;
}

const data: ChartData[] = rawData.map((item) => ({
  ...item,
  달성률: Math.round((item.현재인원 / item.목표인원) * 100),
}));

const lightenColor = (color: string, percent: number) => {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = ((num >> 8) & 0x00ff) + amt;
  const B = (num & 0x0000ff) + amt;
  return (
    "#" +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  );
};

const CustomLegend = () => {
  return (
    <div className="w-full p-2.5">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
        {data.map((item, index) => (
          <div key={`legend-${index}`} className="flex items-center gap-1.5">
            <div
              className="w-3.5 h-3.5 rounded-sm flex-shrink-0"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-xs sm:text-sm text-gray-600 truncate">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-2.5 border border-gray-300 rounded">
        <div className="flex items-center gap-2 mb-1.5">
          <div
            className="w-3.5 h-3.5 rounded-sm"
            style={{ backgroundColor: data.color }}
          />
          <p className="m-0 font-bold">{data.name}</p>
        </div>
        <p className="m-0 text-gray-600">
          신청 현황: {data.달성률}% ({data.현재인원.toLocaleString()}명/
          {data.목표인원.toLocaleString()}명)
        </p>
      </div>
    );
  }

  return null;
};

const CustomActiveBar = ({
  x = 0,
  y = 0,
  width = 0,
  height = 0,
  payload,
}: CustomActiveBarProps) => {
  if (!payload) return null;

  const hoverColor = lightenColor(payload.color, 20);

  return (
    <Rectangle
      fill={hoverColor}
      stroke={payload.color}
      strokeWidth={2}
      x={x}
      y={y}
      width={width}
      height={height}
    />
  );
};

export default function CollectionChart() {
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = chartRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5,
        rootMargin: "0px",
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const displayData = isVisible
    ? data
    : data.map((item) => ({ ...item, 달성률: 0 }));

  return (
    <div ref={chartRef} className="w-full">
      <BarChart
        style={{
          width: "100%",
          maxWidth: "100%",
          maxHeight: "80vh",
          aspectRatio: 2 / 1,
        }}
        data={displayData}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis
          width="auto"
          domain={[0, 100]}
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey="달성률"
          activeBar={<CustomActiveBar />}
          animationDuration={1000}
          animationEasing="ease-out"
        >
          {displayData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
      <CustomLegend />
    </div>
  );
}
