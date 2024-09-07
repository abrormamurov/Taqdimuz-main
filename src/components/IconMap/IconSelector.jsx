// IconSelector.jsx
import React from "react";
import { BsTelephone, BsYoutube } from "react-icons/bs";
import {
  FaInstagram,
  FaTwitter,
  FaTelegramPlane,
  FaWhatsapp,
  FaFacebookF,
  FaGlobe,
  FaGithub,
  FaLinkedin,
  FaSnapchatGhost,
  FaSteam,
  FaTiktok,
  FaOdnoklassniki,
  FaVk,
  FaDropbox,
} from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { FaThreads, FaViber, FaXTwitter } from "react-icons/fa6";
import yusroLogo from "../../assets/Yusro1.svg";

import "./IconSelector.css";

const iconMap = {
  Instagram: {
    icon: <FaInstagram size={24} color="#E1306C" />,
    label: "Instagram",
  },
  X: {
    icon: <FaXTwitter size={24} color="#000" />,
    label: "X",
  },
  Telegram: {
    icon: <FaTelegramPlane size={24} color="blue" />,
    label: "Telegram",
  },
  Whatsapp: {
    icon: <FaWhatsapp size={24} color="green" />,
    label: "WhatsApp",
  },
  Facebook: {
    icon: <FaFacebookF size={24} color="blue" />,
    label: "Facebook",
  },
  Web: {
    icon: <FaGlobe size={24} color="#000" />,
    label: "Website",
  },
  YouTube: {
    icon: <BsYoutube size={24} color="red" />,
    label: "YouTube",
  },
  PhoneNumber: {
    icon: <BsTelephone size={24} color="#000" />,
    label: "PhoneNumber",
  },
  GitHub: {
    icon: <FaGithub size={24} color="grey" />,
    label: "GitHub",
  },
  LinkedIn: {
    icon: <FaLinkedin size={24} color="#000" />,
    label: "LinkedIn",
  },
  Snapchat: {
    icon: <FaSnapchatGhost size={24} color="#000" />,
    label: "Snapchat",
  },
  Steam: {
    icon: <FaSteam size={24} color="#000" />,
    label: "Steam",
  },
  TikTok: {
    icon: <FaTiktok size={24} color="#000" />,
    label: "TikTok",
  },
  Odnoklassniki: {
    icon: <FaOdnoklassniki size={24} color="#000" />,
    label: "Odnoklassniki",
  },
  VK: {
    icon: <FaVk size={24} color="#000" />,
    label: "VK",
  },
  Dropbox: {
    icon: <FaDropbox size={24} color="#000" />,
    label: "Dropbox",
  },
  GoogleMaps: {
    icon: <SiGooglemaps size={24} color="#000" />,
    label: "Google Maps",
  },
  Threads: {
    icon: <FaThreads size={24} color="#000" />,
    label: "Threads",
  },
  Viber: {
    icon: <FaViber size={24} color="#000" />,
    label: "Viber",
  },
  YusroTour: {
    icon: (
      <img
        src={yusroLogo}
        alt="Yusro Tour"
        style={{ width: 24, height: 24, color: "#149c54" }} // Ikona o'lchamini sozlash
      />
    ),
    label: "Yusro Tour",
  },
};

const IconSelector = ({ type }) => {
  const iconInfo = iconMap[type] || { icon: null, label: "" };

  return (
    <div className="icon-selector ">
      {iconInfo.icon && <div className="icon-display">{iconInfo.icon}</div>}
      {iconInfo.label && <div className="icon-label">{iconInfo.label}</div>}
    </div>
  );
};

export default IconSelector;
