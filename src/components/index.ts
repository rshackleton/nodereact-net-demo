import React from "react";

const TestComponent = React.lazy(() =>
  import("./TestComponent/TestComponent").then((m) => ({
    default: m.TestComponent,
  }))
);

export default { TestComponent };
