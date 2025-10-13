import { MapPin, Clock, MessageCircle } from "lucide-react";

const icons = {
  faq: <MessageCircle className="w-8 h-8 text-gray-300" />,
  hq: <MapPin className="w-8 h-8 text-gray-300" />,
  hours: <Clock className="w-8 h-8 text-gray-300" />,
};

export default function ContactCard({ type, title, description, link }) {
  return (
<div className="bg-[#0a0a23] shadow-md rounded-xl text-center p-6 hover:shadow-lg transition text-white hover:shadow-black hover:shadow-sm">
      <div className="flex justify-center mb-4">{icons[type]}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-300 text-sm mt-2">{description}</p>
      <a href={link} className="text-sky-500 font-medium mt-3 inline-block">
        {type === "hq" ? "View Locations →" : "Help Center →"}
      </a>
    </div>
  );
}
