import CountUpModule from "react-countup";

const CountUp = CountUpModule.default;

const stats = [
  {
    end: 100,
    suffix: "+",
    label: "Learning Hours",
  },
  {
    end: 25,
    suffix: "+",
    label: "Projects",
  },
  {
    end: 6,
    suffix: "",
    label: "Months",
  },
  {
    end: 100,
    suffix: "%",
    label: "Certification",
  },
];

function RoadmapStats() {
  return (
    <div className="grid md:grid-cols-4 gap-8 mt-20">
      {stats.map((item) => (
        <div
          key={item.label}
          className="bg-white rounded-3xl shadow-lg p-8 text-center"
        >
          <h2 className="text-5xl font-black text-blue-600">
            <CountUp end={item.end} duration={2} />
            {item.suffix}
          </h2>

          <p className="mt-3 text-gray-600">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default RoadmapStats;