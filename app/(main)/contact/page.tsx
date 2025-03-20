import ContactInfoCard from "../components/ContactInfoCard";
import { contactInfo } from "../lib/data";

function Contact() {
  return (
    <div className="container flex flex-col gap-16 items-center py-28 mx-auto max-w-6xl">
      <div className="space-y-4 max-w-2xl text-center">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className="text-xl text-gray-500">
          Have questions? We're here to help. Reach out to our team through any
          of the channels below.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
        {contactInfo.map((contact, index) => (
          <ContactInfoCard
            key={index}
            icon={contact.icon}
            title={contact.title}
            text={contact.text}
          />
        ))}
      </div>
    </div>
  );
}

export default Contact;
