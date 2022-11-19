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
  blogCategoryBySlug: [];
  setBlogCategoryBySlug: React.Dispatch<React.SetStateAction<never[]>>;
  fetchCategoryBlogs: <T>(queryResponse: T) => void;
  blogTagPost: {} | null;
  setBlogTagPost: React.Dispatch<React.SetStateAction<never[]>>;
  fetchTagPosts: (queryResponse: string) => void;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  toggleLoader: () => (curState: boolean) => boolean;
  blogCategories: [];
  setBlogCategories: React.Dispatch<React.SetStateAction<never[]>>;
  fetchBlogCategories: (queryResponse: string) => void;
  setHomeBlog: React.Dispatch<React.SetStateAction<never[]>>;
  homeBlog: [];
  fetchHomeBlog: (queryResponse: string) => void;
};
export const AwesomeContext = React.createContext<null | AwesomeContextType>(
  null
);
type Props = {
  children: React.ReactNode;
};
type TFunction = (queryResponse: string) => void;
type ValidationError = { errorMessage: string };
export const AwesomeContextProvider = ({ children }: Props) => {
  const [awesomeState, setAwesomeState] = React.useState(0);
  const [blogsByAuthorSlug, setBlogsByAuthorSlug] = React.useState([]);
  const [blogPosts, setBlogPosts] = React.useState([]);
  const [singleBlog, setSingleBlog] = React.useState([]);
  const [blogCategoryBySlug, setBlogCategoryBySlug] = React.useState([]);
  const [blogTagPost, setBlogTagPost] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [blogCategories, setBlogCategories] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [homeBlog, setHomeBlog] = React.useState([]);
  const toggleLoader = () => setIsLoading((curState) => !curState);
  const fetchBlogsByAuthorSlug = (queryResponse: string) => {
    client
      .fetch(queryResponse)
      .then((response) => {
        response && setIsLoading(false);
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
        response && setIsLoading(false);
        setBlogPosts(response);
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
        response && setIsLoading(false);
        setSingleBlog(response);
      })
      .catch((err: any) => {
        let Error: AxiosError<ValidationError> = err;
        if (!Error.response) throw Error;
        return Error.response.data;
      });
  };
  //
  const fetchCategoryBlogs: TFunction = (queryResponse) => {
    client
      .fetch(queryResponse)
      .then((response) => {
        response && setIsLoading(false);
        setSingleBlog(response);
      })
      .catch((err: any) => {
        let Error: AxiosError<ValidationError> = err;
        if (!Error.response) throw Error;
        return Error.response.data;
      });
  };
  ///  fetch tags posts
  const fetchTagPosts: TFunction = (queryResponse) => {
    client
      .fetch(queryResponse)
      .then((response) => {
        response && setIsLoading(false);
        setBlogTagPost(response);
      })
      .catch((err: any) => {
        let Error: AxiosError<ValidationError> = err;
        if (!Error.response) throw Error;
        return Error.response.data;
      });
  };
  ///
  const fetchBlogCategories: TFunction = (queryResponse) => {
    client
      .fetch(queryResponse)
      .then((response) => {
        response && setIsLoading(false);
        setBlogCategories(response);
      })
      .catch((err: any) => {
        let Error: AxiosError<ValidationError> = err;
        if (!Error.response) throw Error;
        return Error.response.data;
      });
  };
  // fetch home Blog
  const fetchHomeBlog: TFunction = (queryResponse) => {
    client
      .fetch(queryResponse)
      .then((response) => {
        response && setIsLoading(false);
        setHomeBlog(response);
      })
      .catch((err: any) => {
        let Error: AxiosError<ValidationError> = err;
        if (!Error.response) throw Error;
        return Error.response.data.errorMessage;
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
      fetchSingleBlog,
      singleBlog,
      blogCategoryBySlug,
      fetchCategoryBlogs,
      blogTagPost,
      fetchTagPosts,
      isLoading,
      toggleLoader,
      blogCategories,
      fetchBlogCategories,
      fetchHomeBlog,
      setHomeBlog,
      homeBlog,
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
      blogCategoryBySlug,
      fetchCategoryBlogs,
      blogTagPost,
      fetchTagPosts,
      isLoading,
      toggleLoader,
      blogCategories,
      fetchBlogCategories,
      fetchHomeBlog,
      homeBlog,
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
