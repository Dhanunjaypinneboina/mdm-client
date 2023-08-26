import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { MdOutlineDoubleArrow } from "react-icons/md";

const Submenu = (props) => {
  const { categoryId, category, product } = props.value;
  const history = useHistory();
  return (
    <Fragment>
      {/* Submenu Section */}
      <section className="mx-4 mt-24 md:mx-12 md:mt-32 lg:mt-24">
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center text-sm flex space-x-2 font-bold">
            <span
              className="hover:text-yellow-1000 cursor-pointer strong "
              onClick={(e) => history.push("/")}
            >
              Shop
            </span>
            <MdOutlineDoubleArrow />
            <span
              className="hover:text-yellow-1000 cursor-pointer strong truncate"
              onClick={(e) => history.push(`/products/category/${categoryId}`)}
            >
              {category}
            </span>
            <MdOutlineDoubleArrow />
            <span className="text-yellow-800 cursor-default strong truncate">
              {product}
            </span>
          </div>
        </div>
      </section>
      {/* Submenu Section */}
    </Fragment>
  );
};

export default Submenu;
