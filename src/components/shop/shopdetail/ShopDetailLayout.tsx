import React from "react";
import { Transition, Dialog } from "@headlessui/react";
import classNames from "classnames";
import { themes, flexLayout, textStyles } from "../../../styles/themes/theme";
import { useDispatch, useSelector } from "react-redux";
import {
  closeShopComponent,
  openShopModal,
} from "../../../services/redux/features/globalslice/GlobalStateSlice";
import DetailMoreWrapper from "./detailmain/DetailMoreWrapper";
import DetailMore from "./detailmore/DetailMore";
import ProductMore from "./detailproducts/ProductMore";
import {
  TFunction,
  USEContext,
} from "../../../services/context/learncontext/LearnContext";
import { client } from "../../../client";
import {
  fetchRelatedProducts,
  fetchSingleProducts,
} from "../../../services/context/learncontext/types/IVehicle";
import { RelatedProducts, SingleProduct } from "../../../utils/GROC";
import { useParams } from "react-router-dom";

const ShopDetailLayout = () => {
  const { containerWrapper, boxFull } = themes;
  const { flexCol } = flexLayout;
  const {} = textStyles;
  const dispatchs = useDispatch();
  const modalState = useSelector(openShopModal);
  const closeModal = () => dispatchs(closeShopComponent());
  const { state, dispatch } = USEContext();
  const { singleProduct, relatedProducts } = state;
  const params = useParams();
  const { id } = params;
  const fetchSingleProduct: TFunction = async (payloadResponse) => {
    let RelatedQuery: string;
    return await client
      .fetch(payloadResponse)
      .then((res) => {
        if (res) {
          return res && fetchSingleProducts(dispatch, res);
        } else if (res) {
          console.log("res res", res);

          RelatedQuery = RelatedProducts(res);
          client.fetch(RelatedQuery).then((response) => {
            response && fetchRelatedProducts(dispatch, response);
            return fetchRelatedProducts(dispatch, response);
          });
        }
        return res && fetchSingleProducts(dispatch, res);
      })
      .catch((err) => err instanceof Error && err.message);
  };

  React.useEffect(() => {
    let cancelled = false;
    !cancelled && fetchSingleProduct(SingleProduct(id));
    return () => {
      cancelled = true;
    };
  }, []);
  console.log("single Product", singleProduct, relatedProducts);

  return (
    <>
      <div>
        <Transition appear show={modalState} as={React.Fragment}>
          <Dialog as="div" className={"relative z-[999]"} onClose={closeModal}>
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-400"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>
            <div className=" fixed top-0 overflow-y-auto">
              <div className="flex min-h-full h-screen max-h-max w-screen items-center justify-center  text-center">
                <Transition.Child
                  as={React.Fragment}
                  enter="ease-out duration-500"
                  enterFrom="opacity-0 scale-95 translate-y-[100%]"
                  enterTo="opacity-100 scale-100 translate-y-[0%] transition-[all_0.6s_ease] "
                  leave="transition  ease-in duration-500"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className=" align-middle h-[100vh] bg-white w-[86vw] rounded-xl shadow-xl  border border-solid px-8 pt-12 overflow-y-auto scrollbar-none">
                    <div
                      className={classNames(` ${boxFull}  ${flexCol} gap-y-4`)}
                      // ${containerWrapper}
                    >
                      {/* Product maain */}
                      {/* @ts-ignore */}
                      <DetailMoreWrapper
                        {...singleProduct}
                        product={singleProduct}
                      />
                      {/* prodcut moe  */}
                      <div className="w-full h-2 bg-gray-900" />
                      {/* @ts-ignore */}
                      <DetailMore {...singleProduct} />
                      <div className="w-full h-1 bg-gray-900" />
                      {/* more products display @apply  */}
                      <ProductMore {...relatedProducts} />
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
      ,
    </>
  );
};

export default ShopDetailLayout;
