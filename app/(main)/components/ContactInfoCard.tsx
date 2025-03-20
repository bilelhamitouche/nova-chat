import { ContactInfo } from "../lib/types";

function ContactInfoCard({ icon, title, text }: ContactInfo) {
  return (
    <div className="flex flex-col gap-4 items-center p-4 w-96 text-center shadow-lg card rounded-box">
      {icon}
      <span className="card-title">{title}</span>
      <div className="flex flex-col gap-1 text-gray-500">
        <span>{text[0]}</span>
        <span>{text[1]}</span>
      </div>
    </div>
  );
}

export default ContactInfoCard;
