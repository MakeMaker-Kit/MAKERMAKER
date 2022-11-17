import React from "react";
import { TBlogs } from "../../../types/global.types";
import { BlogQuery } from "../../../utils/querypaths";
import { client } from "../../../client";
import { AxiosError } from "axios";

type AwesomeContextType = {
  awesomeState: number;
  setAwesomeState: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  blogsByAuthorSlug: [];
  setBlogsByAuthorSlug: React.Dispatch<React.SetStateAction<never[]>>;
  fetchBlogsByAuthorSlug: (queryResponse: string) => void;
  blogPosts: [];
  setBlogPosts: React.Dispatch<React.SetStateAction<never[]>>;
  fetchBlogPosts: (queryResponse: string) => void;
  singleBlog: [];
  setSingleBlog: React.Dispatch<React.SetStateAction<never[]>>;
  fetchSingleBlog: <T>(queryResponse: T) => void;
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
  const [blogsByAuthorSlug, setBlogsByAuthorSlug] = React.useState([]);
  const [blogPosts, setBlogPosts] = React.useState([]);
  const [singleBlog, setSingleBlog] = React.useState([]);
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
  //  Fetch Blog Posts
  const fetchBlogPosts = (queryResponse: string) => {
    client
      .fetch(queryResponse)
      .then((response) => {
        setBlogPosts(response);
        console.log("BlogPosts Response", response);
      })
      .catch((err: any) => {
        if (err instanceof Error) {
          return err.message;
        }
      });
  };
  /// fetch Single Blog
  const fetchSingleBlog = (queryResponse: string) => {
    client
      .fetch(queryResponse)
      .then((response) => {
        setSingleBlog(response);
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
      fetchBlogPosts,
      blogPosts,
    }),
    [
      awesomeState,
      setAwesomeState,
      page,
      setPage,
      blogsByAuthorSlug,
      fetchBlogPosts,
      blogPosts,
      fetchSingleBlog,
      singleBlog,
    ]
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
