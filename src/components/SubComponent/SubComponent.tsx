export function SubComponent(props: { name: string }) {
  // useEffect(() => {
  //   const res = fetch('https://pokeapi.co/api/v2/pokemon/ditto');

  // })

  return (
    <div>
      <h1>Hello {props.name}</h1>
      <p>The time is now {renderTime()}</p>
    </div>
  );
}

function renderTime() {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return formatter.format(Date.UTC(2023, 0, 9));
}
