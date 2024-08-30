import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { TranslationSwitcher } from "../Translation/Translations";

function Navbar({
  handleOpen,
  username,
  setUsername,
  t,
  language,
  setLanguage,
}) {
  // username mavjudligini tekshirish
  const profileLink = username ? `/preview/${username}` : "/preview";
  const editLink = username ? `/edit/${username}` : "/edit";

  // Sahifa yangilanganda username'ni localStorage'dan olish
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, [setUsername]);

  // Username o'zgarganda, uni localStorage'da saqlash
  useEffect(() => {
    if (username) {
      localStorage.setItem("username", username);
    }
  }, [username]);

  return (
    <nav className="h-14 px-6 flex items-center sticky top-0 left-0 shadow-md z-10">
      <div className="flex items-center">
        <HiMenu className="text-xl cursor-pointer" onClick={handleOpen} />
      </div>
      <div className="flex-grow flex justify-center md:justify-center gap-8 font-helvetica">
        <NavLink
          to={profileLink}
          className={({ isActive }) =>
            isActive
              ? "text-lg text-blue-500 transition duration-300"
              : "text-lg hover:text-blue-500 transition duration-300"
          }
        >
          {t.preview}
        </NavLink>
        <NavLink
          to={editLink}
          className={({ isActive }) =>
            isActive
              ? "text-lg text-blue-500 transition duration-300"
              : "text-lg hover:text-blue-500 transition duration-300"
          }
        >
          {t.edit}
        </NavLink>
      </div>
      <div className="flex items-center pb-6">
        <TranslationSwitcher language={language} setLanguage={setLanguage} />
      </div>
    </nav>
  );
}

export default Navbar;
