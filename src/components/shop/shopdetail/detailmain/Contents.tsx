import React from "react";
import cx from "classnames";
import { useIcon } from "../../../../hooks/dispatchContext";
import MainButton from "../../../../hooks/button/mainBTN";
import { TProduct } from "../../../../types/global.types";
import { useDispatch, useSelector } from "react-redux";
import {
  flexLayout,
  themes,
  textStyles,
} from "../../../../styles/themes/theme";
import {
  addToCart,
  decrementProduct,
  incrementProduct,
  ProductQuantity,
} from "../../../../services/redux/features/productslice/ProductSlice";

const Contents = ({
  price,
  title,
  stockItems,
  categories,
  defaultVariant,
  product,
}: TProduct) => {
  const {
    flexCol,
    flexStart,
    flexRowCenter,
    flexRowCenterBetween,
    flexCenter,
  } = flexLayout;
  const { boxFull } = themes;
  const { mainLayout, textCustom } = textStyles;
  const { HeartIcon, AiFillPlusCircle, AiFillMinusCircle } = useIcon();
  const productQuan = useSelector(ProductQuantity);
  const dispatch = useDispatch();
  const increaseProduct = () => dispatch(incrementProduct());
  const decreaseProduct = () => dispatch(decrementProduct({ product }));
  const AddToCart = () => dispatch(addToCart({ product }));

  return (
    <>
      <div className={cx(`${flexCol} ${textCustom} ${mainLayout} space-y-12`)}>
        {/*  */}
        <div className={`${flexCol} space-y-12`}>
          <div className={`${flexRowCenterBetween}`}>
            <h1>{title}</h1>
            <div
              className={cx(
                `h-10 w-10 p-2 border border-orange outline-fuchsia-50 rounded-full`
              )}
            >
              <div className={`${boxFull} ${flexCenter}`}>
                <HeartIcon className={`w-4 h-4`} />
              </div>
            </div>
          </div>

          <div className={`${flexRowCenterBetween}`}>
            <div></div>
            <div
              className={cx(
                `w-14 h-7 px-2 py-1 border border-orange  rounded-md`
              )}
            >
              <div className={cx(`${boxFull} ${flexCenter} flex space-x-1`)}>
                <p>0</p>
                <HeartIcon />
              </div>
            </div>
          </div>
          {/*  */}
          <div
            className={`${flexStart} font-light tracking-wide text-start leading-relaxed`}
          >
            <p>{defaultVariant?.description}</p>
          </div>
          {/*  */}
          <p className={cx(`text-start`)}>Read More</p>
        </div>

        {/*  */}
        <div className={cx(`${flexStart} ${flexRowCenter} space-x-3`)}>
          <h1 className={`text-4xl`}>{price}NGN</h1>
          <p className={`text-lg`}>$23</p>
        </div>
        {/*  */}
        <div className={`${flexCol} space-y-6`}>
          {/*  */}
          <div className={`${flexRowCenterBetween}`}>
            <div className={`w-full max-w-seven ${flexRowCenter}`}>
              <div className={`w-full max-w-six`}>
                <MainButton isRounded={true} handleClick={AddToCart}>
                  Add To Shopping Cart
                </MainButton>
              </div>
              <div className={`w-full max-w-six`}>
                <div
                  className={cx(
                    `${flexRowCenter} space-x-1 ${mainLayout} ${textCustom} text-2xl`,
                    `cursor-pointer`
                  )}
                >
                  <span
                    onClick={decreaseProduct}
                    className={`w-8 h-8 border rounded-full`}
                  >
                    <p className={`${boxFull} ${flexCenter}`}>
                      <AiFillMinusCircle />
                    </p>
                  </span>
                  <span className={`${mainLayout} ${textCustom} text-sm`}>
                    {productQuan}{" "}
                  </span>
                  <span onClick={increaseProduct}>
                    <AiFillPlusCircle />
                  </span>
                </div>
              </div>
            </div>
            <p className={`whitespace-nowrap tracking-wider`}>
              {stockItems ? stockItems : "only one "} item(s) Remaining{" "}
            </p>
          </div>
          {/*  */}
          <div className="w-full h-px bg-gray-900" />
          {/*  */}
          <div className={`${flexRowCenter} space-x-4`}>
            <p>Categories</p>
            <div className={`${flexRowCenter} space-x-3`}>
              {/* @ts-ignore */}
              {categories.map(
                ({
                  title,
                  slug,
                  _id,
                }: {
                  _id?: string;
                  slug?: string;
                  name?: string;
                  title?: string;
                }) => (
                  <div
                    key={_id}
                    className={`p-2 border border-orange rounded-md`}
                  >
                    <div
                      className={`${flexCenter} ${boxFull} whitespace-nowrap`}
                    >
                      <p>{title}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          {/*  */}
          <div className={`${flexRowCenter} gap-x-5`}>
            <p>Selles</p>
            <p className="">MakeMAKER</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contents;
