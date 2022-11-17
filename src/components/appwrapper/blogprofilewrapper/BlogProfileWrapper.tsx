import React from "react";
import cx from "classnames";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import MainButton from "../../../hooks/button/mainBTN";
import { textStyles, themes, flexLayout } from "../../../styles/themes/theme";
import { urlFor } from "../../../client";
import { useIcon } from "../../../hooks/dispatchContext";
type TProps = Omit<React.ComponentProps<"div">, "classNames"> & {};
interface MoreProps extends TProps {
  name?: string;
  slug?: string;
  image?: string;
  readonly bio?: Object[];
  occupation?: string;
  social: string[];
}
const ProfileWrapper = React.forwardRef<HTMLDivElement, MoreProps>(
  ({ children, name, slug, image, social, occupation }) => {
    const { boxFull, imageLayout } = themes;
    const { flexColCenter, flexRowCenter, flexCenter } = flexLayout;
    const { mainLayout, textCustom } = textStyles;
    const { FaLinkedinIn } = useIcon();
    const navigate = useNavigate();
    return (
      <>
        <div
          className={`px-4 py-8 bg-white border border-dotted border-gray-300 rounded-lg shadow`}
        >
          <div className={`${boxFull} ${flexColCenter} gap-y-6`}>
            {/* image */}
            <div className={`h-24 w-24 border border-double rounded-full p-3`}>
              <div
                className={cx(
                  `${boxFull} border border-dotted border-gray-300 rounded-full`
                )}
              >
                <img
                  src={urlFor(image).url()}
                  alt=""
                  title=""
                  data-loading="lazy"
                  className={cx(`${imageLayout} object-center rounded-full`)}
                />
              </div>
            </div>
            {/*  */}
            <div className={`${flexColCenter}`}>
              <p>{name}</p>
              <p>Nigeria</p>
            </div>
            {/*  */}
            <div className={`${flexCenter} text-center`}>
              {/* MAIN DESTRUCTION */}
            </div>
            {/*  */}
            <ul className={`${flexRowCenter} gap-x-4`}>
              {social.map((items: string, index: number) => (
                <Link
                  to={`/${items}`}
                  rel="no-referee"
                  className={`h-10 w-10 p-2 border bg-gray-100 rounded-full`}
                  key={index}
                >
                  <div className={`${boxFull} ${flexCenter}`}>
                    <FaLinkedinIn />
                  </div>
                </Link>
              ))}
            </ul>
            {/*  */}
            <div className={`w-full max-w-five `}>
              <MainButton
                isRounded={true}
                handleClick={() =>
                  navigate(`/profile/${name}`, { replace: true })
                }
              >
                View Profile
              </MainButton>
            </div>
          </div>
        </div>
      </>
    );
  }
);

export default ProfileWrapper;
