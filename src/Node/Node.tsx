import React from "react";
import { NodeType } from "../types";

type Props = {
  node: NodeType;
};

const TAG_MAP = {
  header1: "h1",
  header2: "h2",
  header3: "h3",
  paragraph: "p",
  hyperlink: "a",
  numbered_list: "ol",
  bullet_list: "ul",
  list_item: "li",
  text: React.Fragment,
  bold: "strong",
  italic: "em",
  underline: "u",
  break: "br",
  image: "img",
  video: "video",
};

function Node({ node }: Props) {
  const { attributes, nodes, type: nodeType, text } = node;
  const NodeTag = TAG_MAP[nodeType];

  // Handle self-closing tags
  if (NodeTag === "img" || NodeTag === "br") {
    return <NodeTag {...attributes} />;
  }

  return (
    <NodeTag {...attributes}>
      {text}
      {nodes?.map((node: NodeType, index: number) => {
        return <Node node={node} key={index} />;
      })}
    </NodeTag>
  );
}

export default Node;
