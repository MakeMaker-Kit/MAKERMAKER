import React from "react";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { BiSearchAlt, BiMenu } from "react-icons/bi";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaWhatsapp, FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { IconContextProps } from "./context.type";
import {
  PaperPlaneIcon,
  MinusCircledIcon,
  ClockIcon,
  MixIcon,
  CameraIcon,
  MinusIcon,
  ArchiveIcon,
  HeartFilledIcon,
  HeartIcon,
  ReaderIcon,
  ArrowRightIcon,
} from "@radix-ui/react-icons";
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
        MdOutlineKeyboardArrowDown,
        AiOutlineGooglePlus,
        // READIX ICONS
        PaperPlaneIcon,
        MinusCircledIcon,
        ClockIcon,
        MixIcon,
        CameraIcon,
        MinusIcon,
        ArchiveIcon,
        HeartFilledIcon,
        HeartIcon,
        ReaderIcon,
        ArrowRightIcon,
      }}
    >
      {children}
    </IconContext.Provider>
  );
};
