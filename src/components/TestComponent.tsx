export function TestComponent(props: { name: string }) {
  return (
    <section>
      <h1>Hello {props.name}</h1>
      <p>The time is now {renderTime()}</p>
    </section>
  );

  function renderTime() {
    const formatter = new Intl.DateTimeFormat(undefined, {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });

    return formatter.format(new Date());
  }
}
