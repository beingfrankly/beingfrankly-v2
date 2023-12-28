import { isElement } from "hast-util-is-element";
import { visit } from "unist-util-visit";

export default function rehypeAccessibleLinks() {
  // const { externalClass, externalAttributes } = options;

  return (tree) => {
    visit(tree, "text", (node) => {
      console.log({ node });
      if (isElement(node, "a")) {
        console.log({ node });
        const href = node.properties.href as string;

        if (href.startsWith("/") || href.startsWith("#")) {
          node.properties.class = "internal-link";
        } else {
          node.properties.class = "external-link";
        }
      }
    });
  };
}
