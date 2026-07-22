import CountUpModule from "react-countup";

const CountUp = CountUpModule.default;

function HeroStats() {
  const stats = [
    { end: 100, suffix: "+", label: "Projects" },
    { end: 50, suffix: "+", label: "Clients" },
    { end: 99, suffix: "%", label: "Success Rate" },
  ];

  return (
    <div className="flex gap-10 mt-14">
      {stats.map((item) => (
        <div key={item.label}>
          <h2 className="text-4xl font-bold text-blue-600">
            <CountUp
              end={item.end}
              duration={2.5}
              enableScrollSpy
              scrollSpyOnce
            />
            {item.suffix}
          </h2>

          <p className="text-gray-500 mt-2">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default HeroStats;