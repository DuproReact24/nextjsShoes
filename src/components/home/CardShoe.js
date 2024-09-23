import Link from "next/link";
import React from "react";

const CardShoe = (props) => {
  const { phone } = props;
  return (
    <Link href={"/"} className="  p-3 space-y-3 border rounded-lg shadow">
      <div className="border rounded-md w-full h-96 overflow-hidden">
        <img src={phone.image} className="w-full h-full object-cover" alt="" />
      </div>
      <div className=" space-y-5">
        <p className="font-semibold text-sm">{phone.name}</p>

        <p className="">
          <span>
            {phone.price}
            <i className="fa-sharp fa-solid fa-dollar-sign"></i>
          </span>
        </p>
      </div>
    </Link>
  );
};

export default CardShoe;
