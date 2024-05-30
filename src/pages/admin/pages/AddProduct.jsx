import React, { useContext } from "react";
import myContext from "../../../context/data/myContext";

function AddProduct() {
  const context = useContext(myContext);
  const { products, setProducts, addProduct } = context;
  return (
    <div>
      <div className=" flex justify-center items-center h-screen">
        <div className=" bg-[#5D6A49] px-10 py-10 rounded-xl ">
          <div className="">
            <h1 className="text-center text-[#F7F3F3] text-xl mb-4 font-bold">
              Add Product
            </h1>
          </div>
          <div>
            <input
              type="text"
              onChange={(e) =>
                setProducts({ ...products, title: e.target.value })
              }
              value={products.title}
              name="title"
              className=" bg-[#C7C0C0] mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-[#3B3333] placeholder:text-[#918989] outline-none"
              placeholder="Product title"
            />
          </div>
          <div>
            <input
              type="text"
              name="price"
              onChange={(e) =>
                setProducts({ ...products, price: e.target.value })
              }
              value={products.price}
              className=" bg-[#C7C0C0] mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-[#3B3333] placeholder:text-[#918989] outline-none"
              placeholder="Product price"
            />
          </div>
          <div>
            <input
              type="text"
              name="imageurl"
              onChange={(e) =>
                setProducts({ ...products, imageUrl: e.target.value })
              }
              value={products.imageUrl}
              className=" bg-[#C7C0C0] mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-[#3B3333] placeholder:text-[#918989] outline-none"
              placeholder="Product imageUrl"
            />
          </div>
          <div>
            <input
              type="text"
              name="category"
              onChange={(e) =>
                setProducts({ ...products, category: e.target.value })
              }
              value={products.category}
              className=" bg-[#C7C0C0] mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-[#3B3333] placeholder:text-[#918989] outline-none"
              placeholder="Product category"
            />
          </div>
          <div>
            <textarea
              cols="30"
              rows="10"
              name="description"
              onChange={(e) =>
                setProducts({ ...products, description: e.target.value })
              }
              className=" bg-[#C7C0C0] mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-[#3B3333] placeholder:text-[#918989] outline-none"
              placeholder="Product title"
            ></textarea>
          </div>
          <div className=" flex justify-center mb-3">
            <button className=" bg-[#9CDE35] w-full text-[#3B3333] font-bold  px-2 py-2 rounded-lg" onClick={addProduct}>
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
