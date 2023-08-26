import React, { Fragment, useContext, useEffect, useState } from "react";
import AllReviews from "./AllReviews";
import ReviewForm from "./ReviewForm";

import { ProductDetailsContext } from "./";
import { LayoutContext } from "../layout";

import RelatedProducts from "./RelatedProducts";

import { isAuthenticate } from "../auth/fetchApi";

import "./style.css";

const Menu = () => {
  const { data, dispatch } = useContext(ProductDetailsContext);
  const { data: layoutData } = useContext(LayoutContext);

  return (
    <Fragment>
      <div className="flex flex-row md:flex-row items-center justify-center">
        <div
          onClick={(e) => dispatch({ type: "menu", payload: true })}
          className={`${
            data.menu ? "border-b-2 border-yellow-700 font-bold" : ""
          } px-4 py-3 cursor-pointer font-bold`}
        >
          Related Products
        </div>
        <div
          onClick={(e) => dispatch({ type: "menu", payload: false })}
          className={`${
            !data.menu ? "border-b-2 border-yellow-700 font-bold" : ""
          } px-4 py-3 relative flex cursor-pointer font-bold`}
        >
          Reviews
          <span className="absolute text-xs top-0 right-0 mt-2 bg-yellow-700 text-white rounded px-1">
            {layoutData.singleProductDetail.pRatingsReviews.length}
          </span>
        </div>
      </div>
    </Fragment>
  );
};

const RatingReview = () => {
  return (
    <Fragment>
      <AllReviews />
      {isAuthenticate() ? (
        <ReviewForm />
      ) : (
        <div className="mb-12 md:mx-16 lg:mx-20 xl:mx-24 bg-red-200 px-4 py-2 rounded mb-4">
          You need to login in for review
        </div>
      )}
    </Fragment>
  );
};

const ProductDetailsSectionTwo = (props) => {
  const { data } = useContext(ProductDetailsContext);
  const { data: layoutData } = useContext(LayoutContext);
  const [singleProduct, setSingleproduct] = useState({});
  //  const [retatedproducts, setRelatedProducts] = useState([])

  useEffect(() => {
    setSingleproduct(
      layoutData.singleProductDetail ? layoutData.singleProductDetail : ""
    );
    // products()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const products = async()=> {
  //   const cId = '64d5d3068999367f187a883b'
  //   const data = await axios.post("http://localhost:8080/api/product/related-products-by-category", { catId: cId })
  //   console.log(data)
  // }

  return (
    <Fragment>
      <section className=" m-4 md:mx-12 md:my-8">
        <Menu />
        {data.menu ? (
          <div className="m-2 md:mx-8 md:my-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <RelatedProducts />
          </div>
        ) : (
          <RatingReview />
        )}
      </section>
      <div className="m-4 md:mx-8 md:my-6 flex justify-center capitalize font-light tracking-widest bg-white border-t border-b text-gray-800 px-4 py-4 space-x-4">
        <div>
          <span>Category :</span>
          <span className="text-sm text-gray-600">
            {singleProduct.pCategory ? singleProduct.pCategory.cName : ""}
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetailsSectionTwo;
