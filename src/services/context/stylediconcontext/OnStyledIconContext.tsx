import React from "react";

type AwesomeContextType = {
  awesomeState: number;
  setAwesomeState: React.Dispatch<React.SetStateAction<number>>;
};
export const AwesomeContext = React.createContext<null | AwesomeContextType>(
  null
);
type Props = {
  children: React.ReactNode;
};

export const AwesomeContextProvider = ({ children }: Props) => {
  const [awesomeState, setAwesomeState] = React.useState(0);
  const memiosedContextValue = React.useMemo(
    () => ({
      awesomeState,
      setAwesomeState,
    }),
    [awesomeState, setAwesomeState]
  );
  return (
    <AwesomeContext.Provider value={memiosedContextValue}>
      {children}
    </AwesomeContext.Provider>
  );
};

export const useAwesomwContext = () => {
  const awesomeContext = React.useContext(AwesomeContext);
  if (!awesomeContext)
    throw new Error(`You need to use these context in the provider `);
  return awesomeContext;
};