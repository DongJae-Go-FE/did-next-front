import Image from "next/image";
import type { NotionBlock } from "@/lib/notion-notice";

type RichText = {
  plain_text?: string;
  href?: string | null;
  annotations?: {
    bold?: boolean;
    italic?: boolean;
    strikethrough?: boolean;
    underline?: boolean;
    code?: boolean;
    color?: string;
  };
};

function renderRichText(richTexts?: RichText[]) {
  if (!richTexts?.length) return null;
  return richTexts.map((text, i) => {
    const { bold, italic, strikethrough, underline, code } =
      text.annotations ?? {};
    let el: React.ReactNode = text.plain_text ?? "";

    if (code) el = <code key={i} className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">{el}</code>;
    if (bold) el = <strong key={i}>{el}</strong>;
    if (italic) el = <em key={i}>{el}</em>;
    if (strikethrough) el = <s key={i}>{el}</s>;
    if (underline) el = <u key={i}>{el}</u>;

    if (text.href) {
      el = (
        <a
          key={i}
          href={text.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0047BB] underline hover:opacity-70"
        >
          {el}
        </a>
      );
    }

    return <span key={i}>{el}</span>;
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getBlockContent(block: any) {
  const type = block.type;
  return block[type] ?? {};
}

function NotionBlockRenderer({ block }: { block: NotionBlock }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const b = block as any;
  const content = getBlockContent(b);

  switch (b.type) {
    case "paragraph":
      return (
        <p className="mb-3 leading-7 text-gray-800">
          {renderRichText(content.rich_text)}
        </p>
      );

    case "heading_1":
      return (
        <h1 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
          {renderRichText(content.rich_text)}
        </h1>
      );

    case "heading_2":
      return (
        <h2 className="text-xl font-bold mt-6 mb-3 text-gray-900">
          {renderRichText(content.rich_text)}
        </h2>
      );

    case "heading_3":
      return (
        <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-900">
          {renderRichText(content.rich_text)}
        </h3>
      );

    case "bulleted_list_item":
      return (
        <li className="ml-6 mb-1 list-disc leading-7 text-gray-800">
          {renderRichText(content.rich_text)}
        </li>
      );

    case "numbered_list_item":
      return (
        <li className="ml-6 mb-1 list-decimal leading-7 text-gray-800">
          {renderRichText(content.rich_text)}
        </li>
      );

    case "quote":
      return (
        <blockquote className="border-l-4 border-[#0047BB] pl-4 py-2 my-4 text-gray-700 italic">
          {renderRichText(content.rich_text)}
        </blockquote>
      );

    case "callout":
      return (
        <div className="flex gap-3 p-4 my-4 bg-gray-50 rounded-lg border border-gray-200">
          {content.icon?.emoji && (
            <span className="text-xl">{content.icon.emoji}</span>
          )}
          <div className="flex-1 leading-7">
            {renderRichText(content.rich_text)}
          </div>
        </div>
      );

    case "code":
      return (
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg my-4 overflow-x-auto text-sm">
          <code>{renderRichText(content.rich_text)}</code>
        </pre>
      );

    case "divider":
      return <hr className="my-6 border-gray-200" />;

    case "image": {
      const url =
        content.type === "external"
          ? content.external?.url
          : content.file?.url;
      const caption = renderRichText(content.caption);
      if (!url) return null;
      return (
        <figure className="my-6">
          <div className="relative w-full h-auto">
            <Image
              src={url}
              alt={content.caption?.[0]?.plain_text ?? "notice image"}
              width={800}
              height={400}
              className="rounded-lg w-full h-auto object-contain"
              unoptimized
            />
          </div>
          {caption && (
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              {caption}
            </figcaption>
          )}
        </figure>
      );
    }

    case "toggle":
      return (
        <details className="my-3 border border-gray-200 rounded-lg">
          <summary className="cursor-pointer p-3 font-medium text-gray-800 hover:bg-gray-50">
            {renderRichText(content.rich_text)}
          </summary>
        </details>
      );

    case "bookmark":
      return (
        <a
          href={content.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block my-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-[#0047BB] underline"
        >
          {content.url}
        </a>
      );

    default:
      return null;
  }
}

export default function NotionRenderer({ blocks }: { blocks: NotionBlock[] }) {
  // Group consecutive list items
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < blocks.length) {
    const block = blocks[i];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const type = (block as any).type;

    if (type === "bulleted_list_item") {
      const items: NotionBlock[] = [];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      while (i < blocks.length && (blocks[i] as any).type === "bulleted_list_item") {
        items.push(blocks[i]);
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="my-3">
          {items.map((item) => (
            <NotionBlockRenderer key={item.id} block={item} />
          ))}
        </ul>
      );
    } else if (type === "numbered_list_item") {
      const items: NotionBlock[] = [];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      while (i < blocks.length && (blocks[i] as any).type === "numbered_list_item") {
        items.push(blocks[i]);
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="my-3">
          {items.map((item) => (
            <NotionBlockRenderer key={item.id} block={item} />
          ))}
        </ol>
      );
    } else {
      elements.push(<NotionBlockRenderer key={block.id} block={block} />);
      i++;
    }
  }

  return <div className="notion-content">{elements}</div>;
}
