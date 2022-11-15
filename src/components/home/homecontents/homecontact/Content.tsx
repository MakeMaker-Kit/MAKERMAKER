import React from "react";
import cx from "classnames";
import GoogleMapReact from "google-map-react";
import { useDispatch, useSelector } from "react-redux";
import {
  themes,
  textStyles,
  flexLayout,
} from "../../../../styles/themes/theme";
import { defaultProps, LocationProps } from "../../../../types/global.types";
import {
  getContactInfo,
  ContactInformation,
} from "../../../../services/redux/features/sanitytoclientmain/SanityToClientSliceMain";
import { ContactInfoQuery, ContactQuery } from "../../../../utils/querypaths";
const LocationContainer = ({ text }: LocationProps) => <p>{text}</p>;
const Content = () => {
  const { flexCenter, flexStart, flexCol, flexRowCenter } = flexLayout;
  const { mainLayout, mainText, textCustom } = textStyles;
  const { themeWrapper, boxFull } = themes;
  const {} = themeWrapper;
  const dispatch = useDispatch();
  const contactInfo = useSelector(ContactInformation);
  const defaultProps: defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  /// FECH
  React.useLayoutEffect(() => {
    // @ts-ignore
    dispatch(getContactInfo(ContactInfoQuery));
  }, [dispatch]);
  console.log("====================================");
  console.log("Contaxct Information ", contactInfo);
  console.log("====================================");
  return (
    <>
      <div className={cx(`${flexCenter}`)}>
        <h1 className={cx(`${mainLayout} ${textCustom} text-4xl text-gray-50`)}>
          Contact Infromation
        </h1>
      </div>
      {/* Contact Details */}
      <div className={cx(`${flexCol} ${flexStart} space-y-6`)}>
        <div
          className={`${flexCol} ${mainLayout} ${textCustom} text-sm text-gray-50`}
        >
          <p className="text-gray-200">Our Address</p>
          <p>No 9 Stallion Rd</p>
          <p>Abia State, Nigeria</p>
        </div>

        {Array(5)
          .fill(0)
          .map((i) => (
            <>
              <p
                className={cx(
                  `${mainLayout} ${textCustom} text-sm text-gray-50 whitespace-nowrap ${flexRowCenter} space-x-2`
                )}
                key={i + 1}
              >
                {" "}
                Email:{" "}
                <span
                  className={`w-auto max-w-five p-2 h-4 bg-white ${flexCenter}`}
                >
                  {" "}
                  <p className="text-xs text-gray-800">Makemaker@info.com</p>
                </span>
              </p>
            </>
          ))}
        {/* Map  
        <div className="w-56 h-40">
          <div className={cx(`${boxFull}`)}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <LocationContainer
                lat={59.955413}
                lng={30.337844}
                text={"MakeMaker"}
              />
            </GoogleMapReact>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
};

export default Content;
