import Badge from "../Badge/Badge";

function SectionTitle({
  badge,
  title,
  highlight,
  description,
}) {
  return (
    <div className="text-center mb-16">
      {badge && (
        <Badge>
          {badge}
        </Badge>
      )}

      <h2 className="text-4xl lg:text-5xl font-black mt-5">
        {title}

        <span className="text-blue-600">
          {" "}
          {highlight}
        </span>
      </h2>

      <p className="mt-5 text-slate-500 max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  );
}

export default SectionTitle;