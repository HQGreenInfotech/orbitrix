import ProgramCard from "./ProgramCard";
import { roadmap } from "./programData";

function ProgramTimeline() {
  return (
    <div className="mt-24">
      <div className="grid lg:grid-cols-3 gap-8">
        {roadmap.map((item, index) => (
          <ProgramCard
            key={item.month}
            item={item}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default ProgramTimeline;