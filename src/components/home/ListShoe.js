import React from "react";
import CardShoe from "./CardShoe";
async function getListShoes() {
  try {
    const listdata = await fetch("https://shop.cyberlearn.vn/api/Product", {
      next: { revalidate: 5 },
    });
    const data = await listdata.json();
    console.log(data);
    return data;
  } catch (error) {}
}
const ListShoe = async () => {
  const data = await getListShoes();
  return (
    <div className="grid grid-cols-4 gap-6 py-7">
      {data.content.map((phone) => {
        return <CardShoe phone={phone} />;
      })}
    </div>
  );
};

export default ListShoe;
