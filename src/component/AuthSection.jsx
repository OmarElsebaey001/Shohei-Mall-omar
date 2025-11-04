import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useLanguage } from "../context/LanguageContext";

const AuthSection = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const { t } = useLanguage();

  console.log(isAuthenticated);

  return (
    <div className="md:flex  align-center justify-center md:items-center md:ml-7 hidden sm:block">
      {isAuthenticated ? (
        <>
          <img
            src={user.picture}
            alt={user.name}
            className="w-8 h-8 rounded-full mr-2"
          />
          <div className="flex align-center justify-center">
            <span className="text-white hover:bg-orange-400 rounded-md px-3 py-2 text-sm font-medium">
              {user.name}
            </span>
          </div>
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            className="text-white md:ml-7 w-full hover:bg-orange-400 rounded-md px-3 py-2 text-sm font-medium"
          >
            {t("navbar.logout")}
          </button>
        </>
      ) : (
        <button
          onClick={loginWithRedirect}
          className="text-white hover:bg-orange-400 rounded-md px-3 py-2 text-sm font-medium"
        >
          {t("navbar.login")}
        </button>
      )}
    </div>
  );
};

export default AuthSection;
