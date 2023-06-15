import { useState,useEffect } from "react";
const Wishlist = () => {
  const items = [
    {
      id: "1",
      name: "Gray comfortable sofa",
      image: "./images/products/product1.jpg",
      price: "100",
      quantity: 1,
      total: "1000",
    },
    {
      id: "2",
      name: "Gray comfortable sofa",
      image: "./images/products/product2.jpg",
      price: "100",
      quantity: 1,
      total: "1000",
    },
    {
      id: "3",
      name: "Gray comfortable sofa",
      image: "./images/products/product3.jpg",
      price: "100",
      quantity: 1,
      total: "1000",
    },
    {
      id: "4",
      name: "Gray comfortable sofa",
      image: "./images/products/product4.jpg",
      price: "100",
      quantity: 1,
      total: "1000",
    },
    {
      id: "5",
      name: "Gray comfortable sofa",
      image: "./images/products/product5.jpg",
      price: "100",
      quantity: 1,
      total: "1000",
    },
    {
      id: "6",
      name: "Gray comfortable sofa",
      image: "./images/products/product6.jpg",
      price: "100",
      quantity: 1,
      total: "1000",
    },
  ];

  const [wishlist, setWishlist] = useState(items);

  const handleDelete = (id) => {
    const newWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(newWishlist);
  }
    
  useEffect(() => {
  }, []);



  return (
    <div className="flex flex-col gap-9 content-center">
      <div className="flex flex-col gap-4 md:flex-row items-center justify-between">
        <div>
          <h1 className="text-primary mb-2">Wishlist</h1>
          <p className="text-dark">{wishlist.length} items in your wishlist</p>
        </div>
      </div>

      <div className="flex  flex-col lg:flex-row gap-4 bg-bgColor px-5 w-full lg:px-10 py-10 rounded-[16px] shadow-gray ">
        <div className="w-full">
          <div className="flex flex-row gap-3 flex-wrap justify-start">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 gap-y-12 w-full bg-transparent p-5 rounded-[16px] justify-items-center justify-center">
              {wishlist.map((item, ind) => (
                <div
                  className="flex relative h-[270px] flex-col gap-3 min-w-[200px] max-w-[250px] "
                  key={ind}
                >
                  <div className="relative h-[90%]">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full object-cover rounded-[8px]"
                    />

                    <div className="absolute bg-secondary items-center justify-center rounded-[50px] top-2 right-2 flex flex-col gap-2 p-3">
                      <button className="btn-icon" onClick={
                        () => handleDelete(item.id)
                      } >
                        <img src="./icons/filledheart.svg" alt="" />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col absolute -bottom-3 w-[90%] mx-auto self-center bg-white px-4 py-4 rounded-[8px] h-auto gap-2 ">
                    <p className="text-black">{item.name}</p>
                    <div className="flex flex-row justify-between items-center content-center gap-2">
                      <button className="btn-primary">Add to cart</button>
                      <p className="text-black font-bold self-end">
                        {item.price}$
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
