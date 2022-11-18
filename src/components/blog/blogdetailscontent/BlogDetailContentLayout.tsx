import React from "react";
import cx from "classnames";
import { flexLayout, textStyles, themes } from "../../../styles/themes/theme";
import BlogMore from "../blogcontents/blogmore/BlogMore";
import BlogMainLayout from "./blogmain/BlogMainLayout";
import { useParams } from "react-router-dom";
import { ProfileWrapper } from "../../appwrapper";
// import { getBlogDetail } from "../../../utils/GROC";
import { useDispatch, useSelector } from "react-redux";
import { TBlogs } from "../../../types/global.types";
import { useAwesomwContext } from "../../../services/context/stylediconcontext/OnStyledIconContext";
import {
  fetchSingleBlog,
  TextDetails,
} from "../../../services/redux/features/sanitytoclientmain/SanityToClientSliceMain";
import {
  BlogDetails,
  getBlogDetails,
} from "../../../services/redux/features/sanitytoclientmain/SanityToClientSliceMain";
import { getBlogDetail } from "../../../utils/GROC";

const BlogDetailContentLayout = () => {
  let ID: string | undefined;
  const blogId = useParams();
  ID = blogId.id;
  const dispatch = useDispatch();
  const blogDetail = useSelector(BlogDetails);
  const testdetail = useSelector(TextDetails);
  const { flexResponsive } = flexLayout;
  const { mainLayout, textCustom } = textStyles;
  const { fetchSingleBlog, singleBlog } = useAwesomwContext();
  // gerneate Query

  const { themeWrapper, boxFull, XFull, containerWrapper, boxExtend } = themes;
  const { mainMarX } = themeWrapper;
  console.log("Params Id Respone", ID);
  React.useEffect(() => {
    let cancelled = false;
    const query = getBlogDetail(ID);
    // @ts-ignore
    // dispatch(getBlogDetails(ID));
    // dispatch(fetchSingleBlog(ID));
    !cancelled && fetchSingleBlog(query);
    return () => {
      cancelled = true;
    };
  }, []);
  console.log("Blog Detail Response", blogDetail, singleBlog);
  const AuthorProfile =
    singleBlog && singleBlog?.map(({ author }: TBlogs) => author);
  console.log("Autho Respone", AuthorProfile);
  return (
    <>
      <div className={`${mainMarX}`}>
        <div className={cx(`${boxExtend}`)}>
          <div
            className={cx(`${flexResponsive.flexRowCol} gap-y-4 md:gap-x-4`)}
          >
            <div
              className={cx(
                `w-full md:w-full md:max-w-full lg:w-seven lg:max-w-seven px-10`
              )}
            >
              <div className={cx(`${boxFull} `)}>
                {singleBlog &&
                  singleBlog?.map((detail: TBlogs) => (
                    <BlogMainLayout {...detail} detail={detail} />
                  ))}
              </div>
            </div>
            <div
              className={cx(
                `w-full md:w-full lg:w-three lg:max-w-three h-auto`
              )}
            >
              {/* <BlogMore /> */}
              {AuthorProfile.map((auth) => (
                // @ts-ignore
                <ProfileWrapper {...auth} />
              ))}
              {/* New / popular Blogs Display  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailContentLayout;
