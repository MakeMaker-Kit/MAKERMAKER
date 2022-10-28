import React from "react";
import { IconContextProps } from "./context.type";

interface IconContextTypes {}
export const IconContext = React.createContext<any>({});

export const IconContextProvider: React.FC<IconContextProps> = ({
  children,
}) => {
  return <IconContext.Provider value={{}}>{children}</IconContext.Provider>;
};
