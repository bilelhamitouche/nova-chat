import { ReactNode } from "react";

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="shadow-sm hover:shadow-lg card bg-base-100">
      <div className="flex flex-col gap-3 items-center text-center card-body">
        {icon}
        <h2 className="text-xl font-bold card-title">{title}</h2>
        <p className="text-base">{text}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
