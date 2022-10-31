export const fontFamily = {
  primary: "text-cascadiacode",
  primaryItalic: "text-cascadiacodeItalic",
  secondary: "text-cascadiacodePL",
  secondaryItalic: "cascadiacodePLItalic",
};
const { primary, primaryItalic, secondary, secondaryItalic } = fontFamily;
export const textStyles = {
  mainLayout: `overflow-hidden antialised text-ellipsis`,
  mainText: `${primary} text-sm text-gray-600`,
  textCustom: `${primary} text-sm `,
};
export const elementStyles = {
  ul: `list-type-style-none `,
  li: ``,
};
export const wrapperStypes = {
  pageCenter: "max-w-default mx-auto",
};
export const themes = {
  themeWrapper: {
    marX: "mx-4 breakpoint_md:mx-10 breakpoint_lg:mx-28",
    largeMarX: "mx-40",
    padY: "py-40",
    dropdwonLayout: "relative z-[999] text-left",
    formPadL: "px-4"
  },
  Centralised: "max-w-default mx-auto",
  boxFull: "w-full h-full",
  XFull: "w-full",
  YFull: "h-full",
  XExtend: "w-full min-w-full max-w-full",
  YExtend: "h-full min-h-full max-h-full",
  boxExtend: "min-w-full w-full max-w-full min-h-full h-full max-h-full",
  containerWrapper: "bg-white border-2 border-gray-800 shadow-lg ",
  transition: "transition duration-600 delay-100",
  border: "w-full h-px bg-gray-100 my-2",
  transitions: "transition duration-300 delay-100 ease-linear",
  backgroundImagelayout: "bg-[50%] bg-no-repeat relative bg-white max-w-full w-full h-full bg-cover pt-[30vh] pb-[14vh]", 
  formLayout: ``
};

export const flexLayout = {
  flexStart: "flex justify-start ",
  flexBetween: "flex justify-between ",
  flexRowBetween: "flex flex-row justify-between",
  flexRowCenterBetween: `flex flex-row justify-between items-center `,
  flexRow: "flex flex-row",
  flexRowReverse: "flex flex-row-reverse",
  flexRowCenter: "flex flex-row items-center",
  flexAround: "flex flex-row justify-around",
  flexEvenly: "flex flex-row justify-evenly",
  flexCenter: "flex justify-center items-center",
  flexJusEnd: "flex justify-end",
  flexItemEnd: "flex items-end",
  flexCol: "flex flex-col",
  flexWrap: "flex flex-wrap",
  flexColCenter: "flex flex-col items-center",
  flexColBetween: "flex flex-col justify-between",
  flexColStart: "flex flex-col  items-start ",
  flexResponsive: {
    flexColRow: "",
    flexRowCol: "flex flex-col breakpoint_md:flex-col breakpoint_lg:flex-row",
    flexRowColReverse:
      "flex flex-col-reverse breakpoint_md:flex-col-reverse breakpoint_lg:flex-row",
  },
};
// Consolas, 'Courier New', monospace ===
