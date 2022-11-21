import React from "react";
import {
  AiOutlineGooglePlus,
  AiOutlineShoppingCart,
  AiFillCalendar,
} from "react-icons/ai";
import { BiSearchAlt, BiMenu, BiCartAlt } from "react-icons/bi";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaWhatsapp, FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown, MdMarkEmailUnread } from "react-icons/md";
import { BsTwitter, BsFillTelephoneOutboundFill } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { IconContextProps } from "./context.type";
import { CiFaceMeh } from "react-icons/ci";
import { HiChatAlt2 } from "react-icons/hi";
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
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowLeftIcon,
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
        BiCartAlt,
        AiOutlineShoppingCart,
        FiShoppingCart,
        AiFillCalendar,
        BsFillTelephoneOutboundFill,
        MdMarkEmailUnread,
        CiFaceMeh,
        HiChatAlt2,
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
        ChevronDownIcon,
        ChevronUpIcon,
        ArrowLeftIcon,
      }}
    >
      {children}
    </IconContext.Provider>
  );
};
