import React from "react";
import { BiSearchAlt, BiMenu } from "react-icons/bi";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaWhatsapp, FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { IconContextProps } from "./context.type";

interface IconContextTypes {}
export const IconContext = React.createContext<any>({});

export const IconContextProvider: React.FC<IconContextProps> = ({
  children,
}) => {
  return (
    <IconContext.Provider
      value={{
        BiSearchAlt,
        BiMenu,
        FiFacebook,
        FiInstagram,
        FaWhatsapp,
        FaPinterestP,
        FaLinkedinIn,
        BsTwitter,
      }}
    >
      {children}
    </IconContext.Provider>
  );
};
