import { useEffect, useState } from "react";

function AnimatedNumber({ end, duration = 2000 }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
      }

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

    
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setValue(Math.floor(easeOut * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [end, duration]);

  return value;
}

function HeroStats() {
  const stats = [
    {
      end: 500,
      suffix: "+",
      label: "Students Trained",
    },
    {
      end: 3,
      suffix: " Months",
      label: "Hands-on Program",
    },
    {
      end: 30,
      suffix: "+",
      label: "Hiring Partners",
    },
    {
      end: 92,
      suffix: "%",
      label: "Placement Rate",
    },
  ];

  return (
    <div
      className="
        grid
        grid-cols-2
        gap-y-10
        sm:grid-cols-4
        sm:gap-8
      "
    >
      {stats.map((item) => (
        <div
          key={item.label}
          className="
            text-center
          "
        >
         

          <div
            className="
              text-3xl
              font-black
              tracking-tight
              text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
            <AnimatedNumber end={item.end} />

            <span className="text-cyan-400">
              {item.suffix}
            </span>
          </div>

         

          <p
            className="
              mt-2
              text-sm
              text-slate-400
              sm:text-base
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