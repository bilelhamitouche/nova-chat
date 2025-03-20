import {
  FaAward,
  FaEnvelope,
  FaGlobe,
  FaMap,
  FaPhone,
  FaShield,
  FaUsers,
} from "react-icons/fa6";
import { Accolate, ContactInfo } from "./types";

export const accolates: Accolate[] = [
  {
    icon: <FaUsers size={48} className="text-primary" />,
    record: "100+",
    text: "Active Users",
  },
  {
    icon: <FaShield size={48} className="text-primary" />,
    record: "100%",
    text: "Secure Messages",
  },
  {
    icon: <FaGlobe size={48} className="text-primary" />,
    record: "150",
    text: "Countries",
  },
  {
    icon: <FaAward size={48} className="text-primary" />,
    record: "15+",
    text: "Industry Awards",
  },
];

export const contactInfo: ContactInfo[] = [
  {
    icon: <FaEnvelope size={48} className="text-primary" />,
    title: "Email",
    text: ["support@novachat.com", "business@novachat.com"],
  },
  {
    icon: <FaPhone size={48} className="text-primary" />,
    title: "Phone",
    text: ["+1 (555) 123-4567", "Mon-Fri, 9AM-6PM EST"],
  },
  {
    icon: <FaMap size={48} className="text-primary" />,
    title: "Office",
    text: ["Issat Idir Street, CA 95245", "Ain Benian, Algiers"],
  },
];
