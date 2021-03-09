import React from "react";

import { default as Content } from "../content.json";
import { ErrorBoundary } from "./ErrorBoundary";
import { NodeType } from "../types";
import Node from "../Node";

interface Props {
  id: string;
}

function Root(props: any) {
  return props.nodes.map((node: NodeType, index: number) => {
    return <Node node={node} key={index} />;
  });
  // return (
  //   <div>
  //     <p>
  //       Content ID: <code>{props.id}</code>
  //     </p>
  //     <pre>{JSON.stringify(props.nodes, null, 2)}</pre>
  //   </div>
  // );
}

export function TextSection({ id }: Props) {
  const nodes: any = (Content as any)[id];

  return (
    <ErrorBoundary id={id}>
      <Root id={id} nodes={nodes} />
    </ErrorBoundary>
  );
}
