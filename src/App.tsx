import React from "react";
import { Route, Routes } from "react-router-dom";
import Blogs from "./views/Blogs";
import ShopDetailLayout from "./components/shop/shopdetail/ShopDetailLayout";
import { useSelector } from "react-redux";
import { IsLoggedIn } from "./services/redux/features/sanitytoclientmain/SanityToClientSliceMain";
import { Cart } from "./services/redux/features/productslice/ProductSlice";
import { toast } from "react-hot-toast";
import { AppContact } from "./pages";
import {
  BlogCategory,
  BlogProfile,
  BlogSnug,
  BlogTag,
  Home,
  Shop,
  ShopDetail,
  Checkout,
  NotFound,
  Gallery,
} from "./views";

const App = () => {
  const isLogged = useSelector(IsLoggedIn);
  const cartItems = useSelector(Cart);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogSnug />} />
        <Route path="/profile/:profileID" element={<BlogProfile />} />
        {/* Tag Collection Route */}
        <Route path="/tag/:tagID" element={<BlogTag />} />
        <Route path="/category/:categoryID" element={<BlogCategory />} />
        {/* Categories Collections */}
        {/* Shop / Ecommerce Routes */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories/:id" element={""} />
        <Route path="/shop/:id" element={<Shop />} />
        {(isLogged && cartItems.length == 0) ||
        (cartItems.length > 1 &&
          toast.error("You are not yet Authenticated ", {
            duration: 4000,
            className: `text-xs`,
          })) ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/review" element={<Checkout />} />
        )}
        <Route path="/*" element={<NotFound />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path={"/contactus"} element={<AppContact />} />
      </Routes>
    </>
  );
};

export default App;
