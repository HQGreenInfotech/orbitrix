import { roadmap } from "./roadmapData";
import RoadmapCard from "./RoadmapCard";
import RoadmapStats from "./RoadmapStats";

function Roadmap() {
  return (
    <section className="py-28 bg-slate-50">
      <div className="container mx-auto px-6">

        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold uppercase">
            Learning Roadmap
          </span>

          <h2 className="text-5xl font-black mt-4">
            Become a Professional Developer
          </h2>

          <p className="text-gray-500 mt-6 max-w-3xl mx-auto">
            Our structured six-month roadmap takes you from beginner
            to job-ready through live classes, projects, AI, robotics,
            and career preparation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {roadmap.map((item) => (
            <RoadmapCard
              key={item.month}
              item={item}
            />
          ))}
        </div>

        <RoadmapStats />
      </div>
    </section>
  );
}

export default Roadmap;