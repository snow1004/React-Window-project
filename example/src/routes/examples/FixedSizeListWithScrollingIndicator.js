import React from "react";
import { FixedSizeList } from "react-virtualized-v10";
import CodeBlock from "../../components/CodeBlock";
import CodeSandboxLink from "../../components/CodeSandboxLink";

import "./shared.css";

export default function() {
  return (
    <div class="ExampleWrapper">
    <div className="Example">
      <div className="ExampleDemo">
        <FixedSizeList
          cellSize={35}
          className="List"
          count={1000}
          height={150}
          useIsScrolling
          width={300}
        >
          {({ key, index, isScrolling, style }) => (
            <div
              className={index % 2 ? 'ListItemOdd' : 'ListItemEven'}
              key={key}
              style={style}
            >
              {isScrolling ? `Scrolling ${index}` : `Row ${index}`}
            </div>
          )}
        </FixedSizeList>

        <div className="TryItOutLink">
          <CodeSandboxLink to="#" />
        </div>
      </div>
      <div className="ExampleCode">
        <CodeBlock value={SNIPPET} />
      </div>
    </div>
    </div>
  );
}

const SNIPPET = `
// If your component's cells are expensive to render,
// You can boost performance by rendering a placeholder while the user is scrolling.
// To do this, add the \`useIsScrolling\` property to your List or Grid.
// Now an additional parameter, \`isScrolling\`, will be passed to your render method:
<FixedSizeList useIsScrolling {...props}>
  {({ key, index, isScrolling, style }) => (
    <div
      className={index % 2 ? 'ListItemOdd' : 'ListItemEven'}
      key={key}
      style={style}
    >
      {isScrolling ? \`Scrolling \${index}\` : \`Row \${index}\`}
    </div>
  )}
</FixedSizeList>
`;