import React from "react";
import { useNavigate, Link } from "react-router-dom";
import rightArrow from "../../assets/rightArrow.svg";
import WelcomeUser from "../WelcomeUser/WelcomeUser";
import SettingsUserInfo from "../SettingsUserInfo/SettingsUserInfo";
import SettingsNavigation from "../SettingsNavigation/SettingsNavigation";
import UserHeader from "../UserHeader/UserHeader";
import MobileResizeWarning from "../MobileResizeWarning/MobileResizeWarning";
import { ThemeProvider } from "@mui/material/styles";
import { bookmarkd } from "../../definitions/bookmarkdTheme";

function Settings(props) {
  const token = props.token;

  let navigate = useNavigate();

  function handleLogout() {
    sessionStorage.removeItem("token");
    props.setToken(false);
    navigate("/");
  }

  return (
    <>
      <div className="text-white">
        <div className="mx-10">
          <UserHeader token={token} hasProfilePic={props.hasProfilePic} />
          {/* need a section for user email */}
          <SettingsUserInfo
            token={token}
            setHasProfilePic={props.setHasProfilePic}
            getProfilePic={props.getProfilePic}
          />
        </div>
        <div>
          <SettingsNavigation setToken={props.setToken} />
        </div>
      </div>
    </>
  );
}

export default Settings;
