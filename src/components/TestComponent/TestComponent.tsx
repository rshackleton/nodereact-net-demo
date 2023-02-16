import * as React from "react";

const SubComponent = React.lazy(() =>
  import("../SubComponent/SubComponent").then((m) => ({
    default: m.SubComponent,
  }))
);

export function TestComponent(props: { count: number }) {
  return (
    <section>
      <React.Suspense fallback={<div>Loading...</div>}>
        {Array.from(Array(props.count)).map((_, index) => (
          <div key={index} data-index={index}>
            <SubComponent name={`World ${index}`} />
          </div>
        ))}
      </React.Suspense>
    </section>
  );
}
