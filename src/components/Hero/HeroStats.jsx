import CountUpModule from "react-countup";

const CountUp = CountUpModule.default;


function HeroStats() {
  const stats = [
    {
      end: 100,
      suffix: "+",
      label: "Projects",
    },
    {
      end: 50,
      suffix: "+",
      label: "Clients",
    },
    {
      end: 99,
      suffix: "%",
      label: "Success Rate",
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-8 sm:gap-12">
      {stats.map((item) => (
        <div key={item.label} className="group">
          <div
            className="
              flex
              items-baseline
              text-3xl
              sm:text-4xl
              font-black
              text-white
              transition-all
              duration-300
              group-hover:text-cyan-400
            "
          >
            <CountUp
              end={item.end}
              duration={2.5}
              enableScrollSpy
              scrollSpyOnce
            />

            <span className="text-cyan-400">
              {item.suffix}
            </span>
          </div>

          <p
            className="
              mt-2
              text-sm
              sm:text-base
              text-slate-400
              transition-colors
              duration-300
              group-hover:text-slate-300
            "
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default HeroStats;