import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneOutboundFill, BsTelephone } from "react-icons/bs";
import {
  FaInstagram,
  FaTwitter,
  FaTelegramPlane,
  FaWhatsapp,
  FaFacebookF,
  FaLinkedin,
  FaSnapchatGhost,
  FaSteam,
  FaTiktok,
  FaOdnoklassniki,
  FaVk,
  FaDropbox,
  FaGlobe,
  FaViber,
  FaGithub,
  FaFilePdf,
} from "react-icons/fa";
import { BsYoutube, BsFillTelephoneForwardFill } from "react-icons/bs";
import { FaMapMarkedAlt, FaCopy } from "react-icons/fa"; // FaMapMarkedAlt ham Fa dan
import { FaThreads } from "react-icons/fa6"; // FaThreads ham Fa dan
import toast from "react-hot-toast";

function UserPreview({ setUsername, t }) {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);
  const [qrCodeUrl, setQrCodeUrl] = useState(null); // QR kod URL holati
  const getFileNameFromUrl = (url) => {
    // URL'dan fayl nomini ajratib olish
    const fileName = url.substring(url.lastIndexOf("/") + 1);
    // .pdf kengaytmasini olib tashlash
    return fileName.replace(".pdf", "");
  };
  const handleCopy = () => {
    navigator.clipboard
      .writeText(`https://taqdim.uz/${username}`)
      .then(() => {
        toast.success(t.userpreviewcopy);
      })
      .catch((error) => {
        console.error("Error copying URL:", error);
      });
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://api.taqdim.uz/profile/list/${username}`
        );

        setUserData(response.data);
        setQrCodeUrl(response.data.qr_code); // QR kod URLni o'rnatish
        if (setUsername) setUsername(username); // Update username state
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setAuthError(t.User_not_found);
        } else if (error.response && error.response.status === 401) {
          setAuthError(t.Authentication_credentials_were_not_provided);
        } else {
          console.error("Error fetching user data:", error);
          setAuthError("An error occurred. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username, setUsername]);

  const handleDownload = async () => {
    try {
      if (!qrCodeUrl) return;

      const response = await fetch(qrCodeUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `qr_code_${username}.png`;
      document.body.appendChild(a);
      a.click();

      URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading QR code:", error);
    }
  };

  if (loading) {
    return <div className="text-center text-xl text-red-500">{t.loading}</div>;
  }

  if (authError) {
    return <div className="text-center text-xl text-red-500">{authError}</div>;
  }

  return (
    <div className="p-5 max-w-4xl mx-auto rounded-lg mt-5">
      <div className="flex justify-center gap-10 flex-col md:flex-row items-center mb-5">
        <div className="mb-4 md:mb-0">
          {userData?.profile_image ? (
            <img
              src={userData.profile_image}
              alt="Profile Avatar"
              className="w-40 h-40 rounded-full object-cover shadow-lg"
            />
          ) : (
            <div className="w-40 h-40 bg-gray-300 rounded-full flex items-center justify-center text-gray-700">
              {t.NoImage}
            </div>
          )}
        </div>
        <div className="text-center md:text-left md:ml-6">
          <h1 className="text-3xl font-bold text-gray-800">
            {userData?.username}
          </h1>
          <a
            className="text-xl text-blue-600 hover:underline flex items-center justify-center md:justify-start mt-2"
            href={`tel:${userData?.telephone}`}
          >
            <BsFillTelephoneOutboundFill className="mr-2" />
            {userData?.telephone}
          </a>
          <p className="text-lg mt-2">{userData?.about}</p>
        </div>
      </div>
      <div className="mt-5 text-center flex justify-center items-center">
        <div className="flex h-10 pr-0 border-2 border-[#dedeff] rounded-3xl items-center justify-between w-96 p-4">
          <span className="text-gray-700 block">
            <a
              href={`https://taqdim.uz/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 overflow-hidden"
            >
              <code
                className="flex-shrink-0 w-full text-ellipsis"
                style={{ minWidth: "0" }}
              >
                https://taqdim.uz/{username}
              </code>
            </a>
          </span>

          <button
            onClick={handleCopy}
            className="ml-3 m-0 hover:text-gray-800 border text-center border-blue-500 rounded-3xl px-6 py-0"
            aria-label="Copy URL"
          >
            <FaCopy size={20} />
          </button>
        </div>
      </div>

      <div className="mt-5">
        <div className="space-y-2">
          {userData?.sites?.map((site, index) => {
            let Icon;
            let backgroundColor;
            let href;

            // Ikonani va fon rangini aniqlash
            switch (site.icon) {
              case "Instagram":
                Icon = FaInstagram;
                backgroundColor = "bg-pink-600";
                break;
              case "Twitter":
                Icon = FaTwitter;
                backgroundColor = "bg-blue-400";
                break;
              case "Telegram":
                Icon = FaTelegramPlane;
                backgroundColor = "bg-blue-500";
                break;
              case "Whatsapp":
                Icon = FaWhatsapp;
                backgroundColor = "bg-green-500";
                break;
              case "Facebook":
                Icon = FaFacebookF;
                backgroundColor = "bg-blue-800";
                break;
              case "GitHub":
                Icon = FaGithub;
                backgroundColor = "bg-gray-800";
                break;
              case "YouTube":
                Icon = BsYoutube;
                backgroundColor = "bg-red-600";
                break;
              case "LinkedIn":
                Icon = FaLinkedin;
                backgroundColor = "bg-blue-700";
                break;
              case "Snapchat":
                Icon = FaSnapchatGhost;
                backgroundColor = "bg-yellow-500";
                break;
              case "Steam":
                Icon = FaSteam;
                backgroundColor = "bg-gray-600";
                break;
              case "TikTok":
                Icon = FaTiktok;
                backgroundColor = "bg-black";
                break;
              case "Odnoklassniki":
                Icon = FaOdnoklassniki;
                backgroundColor = "bg-orange-500";
                break;
              case "VK":
                Icon = FaVk;
                backgroundColor = "bg-blue-600";
                break;
              case "Dropbox":
                Icon = FaDropbox;
                backgroundColor = "bg-blue-500";
                break;
              case "GoogleMaps":
                Icon = FaMapMarkedAlt;
                backgroundColor = "bg-red-500";
                break;
              case "Threads":
                Icon = FaThreads;
                backgroundColor = "bg-black";
                break;
              case "Viber":
                Icon = FaViber;
                backgroundColor = "bg-purple-500";
                break;
              case "Phone":
                Icon = BsFillTelephoneForwardFill;
                backgroundColor = "bg-green-500";
                break;
              case "Website":
                Icon = FaGlobe;
                backgroundColor = "bg-gray-600";
                break;
              default:
                Icon = FaGlobe;
                backgroundColor = "bg-gray-300";
                break;
            }

            // Agar nom mavjud bo'lsa, uni ko'rsatamiz; aks holda faqat ikonani
            return (
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center p-3 rounded-lg ${backgroundColor} text-white`}
                key={index}
              >
                <Icon className="text-xl mr-3" />
                {site.name ? (
                  site.name
                ) : (
                  <span className="text-xl font-semibold ">{site.icon}</span>
                )}
              </a>
            );
          })}
        </div>
      </div>

      {userData?.pdf && (
        <div className="mt-2 text-center">
          <a
            href={userData.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#cf1b0e] text-white rounded-lg shadow-lg transition gap-3 duration-300 w-full p-2 text-lg font-helvetica font-medium "
          >
            <FaFilePdf className="w-6 h-6 pl-2" />
            {getFileNameFromUrl(userData.pdf)}
          </a>
        </div>
      )}

      {qrCodeUrl && (
        <div className="mt-5 text-center">
          <img
            src={qrCodeUrl}
            alt="QR Code"
            className="w-16 h-16 mx-auto border-2 border-gray-800 rounded-lg"
          />
          <div className="flex gap-3 mt-5 justify-center items-center">
            <a
              href={qrCodeUrl}
              download={`qr_code_${username}.png`}
              className="text-white bg-blue-500 hover:bg-blue-700 px-2 py-2 rounded-lg"
            >
              {t.qrCode}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserPreview;
