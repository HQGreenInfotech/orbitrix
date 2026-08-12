import CountUpModule from "react-countup";

const CountUp = CountUpModule.default;

function Counter({
  end,
  suffix = "",
}) {
  return (
    <>
      <CountUp
        end={end}
        duration={2}
      />
      {suffix}
    </>
  );
}

export default Counter;