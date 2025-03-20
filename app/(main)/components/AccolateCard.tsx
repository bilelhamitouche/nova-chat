import { Accolate } from "../lib/types";

function AccolateCard({ icon, record, text }: Accolate) {
  return (
    <div className="flex flex-col gap-2 items-center w-52">
      {icon}
      <span className="text-xl font-bold">{record}</span>
      <span className="text-lg text-gray-500">{text}</span>
    </div>
  );
}

export default AccolateCard;
