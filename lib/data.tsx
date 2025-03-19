import { RxLightningBolt } from "react-icons/rx";
import { Feature } from "./types";
import { BiShield } from "react-icons/bi";
import { FiMessageCircle } from "react-icons/fi";
import { FaUsers } from "react-icons/fa6";

export const features: Feature[] = [
  {
    icon: <RxLightningBolt size="48" />,
    title: "Lightning Fast",
    text: "Real-time messaging with minimal latency",
  },
  {
    icon: <BiShield size="48" />,
    title: "Secure",
    text: "Secure authentication service to protect user privacy",
  },
  {
    icon: <FaUsers size="48" />,
    title: "Group Chat",
    text: "Seamless collaboration with teams",
  },
  {
    icon: <FiMessageCircle size="48" />,
    title: "Rich Media",
    text: "Share files, images and more",
  },
];
