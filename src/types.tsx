export type BlockContentType =
  | "header1"
  | "header2"
  | "header3"
  | "paragraph"
  | "hyperlink"
  | "numbered_list"
  | "bullet_list"
  | "list_item";

export type TextContentType =
  | "bold"
  | "italic"
  | "underline"
  | "break"
  | "text";

export type MediaContentType = "image" | "video";

export type NodeType = {
  type: BlockContentType | TextContentType | MediaContentType;
  nodes: NodeType[];
  attributes?: { [key: string]: string };
  text?: string;
};

// export type TextNodeType = {
//   type: TextContentType;
//   text: string;
// };

// export type MediaNodeType = {
//   type: MediaContentType;
//   attributes: { [key: string]: string };
// };

// export type BlockNodeType = {
//   type: BlockContentType;
//   attributes?: { [key: string]: string };
//   nodes: (TextNodeType | MediaNodeType | BlockNodeType)[];
// };

// export type NodeType = TextNodeType | MediaNodeType | BlockNodeType;
