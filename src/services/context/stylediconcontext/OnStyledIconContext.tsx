import React from "react";
import { TBlogs } from "../../../types/global.types";
import { client } from "../../../client";
import { AxiosError } from "axios";

type AwesomeContextType = {
  awesomeState: number;
  setAwesomeState: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  blogsByAuthorSlug: null;
  setBlogsByAuthorSlug: React.Dispatch<React.SetStateAction<null>>;
  fetchBlogsByAuthorSlug: (queryResponse: string) => void;
};
export const AwesomeContext = React.createContext<null | AwesomeContextType>(
  null
);
type Props = {
  children: React.ReactNode;
};
type ValidationError = { errorMessage: string };
export const AwesomeContextProvider = ({ children }: Props) => {
  const [awesomeState, setAwesomeState] = React.useState(0);
  const [blogsByAuthorSlug, setBlogsByAuthorSlug] = React.useState(null);
  const [page, setPage] = React.useState(0);
  const fetchBlogsByAuthorSlug = (queryResponse: string) => {
    client
      .fetch(queryResponse)
      .then((response) => {
        console.log("kkdjdfjfj");
        setBlogsByAuthorSlug(response);
      })
      .catch((err: any) => {
        let Error: AxiosError<ValidationError> = err;
        if (!Error.response) throw Error;
        return Error.response.data;
      });
  };
  const memiosedContextValue = React.useMemo(
    () => ({
      awesomeState,
      setAwesomeState,
      page,
      setPage,
      blogsByAuthorSlug,
      setBlogsByAuthorSlug,
      fetchBlogsByAuthorSlug,
    }),
    [awesomeState, setAwesomeState, page, setPage, blogsByAuthorSlug]
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
