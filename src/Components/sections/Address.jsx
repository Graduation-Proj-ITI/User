const Address = () => {
  return (
    <div className="flex flex-col gap-9 content-center">
      <div className="flex flex-col gap-4 md:flex-row items-center justify-between">
        <div>
          <h1 className="text-primary mb-2">Address</h1>
          <p className="text-dark">
            Manage your saved addresses for fast and easy checkout across our
            marketplaces{" "}
          </p>
        </div>
        <button className="btn-primary py-2 px-10 text-[16px] text-white rounded-[26px] self-end">
          Add New Address
        </button>
      </div>

      <div className="flex  flex-col lg:flex-row gap-4 bg-bgColor px-5 w-full lg:px-10 py-10 rounded-[16px] shadow-gray ">
        <div className="w-full">
          <div className="flex flex-row gap-1 justify-between">
            <h3 className="text-primary mb-2">Address</h3>

            <div className=" btns space-x-4  ">
              <button className="btn-secondary py-1 px-1 text-[14px] text-white rounded-[6px] transition duration-500">
                <img src="./icons/edit.svg" alt="edit" className=" invert" />
              </button>
              <button className="btn-error  px-1 py-1 text-[14px] text-white rounded-[6px] hover:bg-red-700 transition duration-500 ">
                <img
                  src="./icons/delete.svg"
                  alt="delete"
                  className=" invert"
                />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-full flex flex-col md:flex-row  gap-1 ">
              <p className="text-dark">User Name: </p>
              <p className="text-primary text-bold"> John DOe </p>
            </div>

            <div className="w-full flex flex-col md:flex-row  gap-1 ">
              <p className="text-dark"> Address: </p>
              <p className="text-primary text-bold">
                {" "}
                123, Lorem Ipsum Street, Lorem Ipsum, Lorem, Nigeria{" "}
              </p>
            </div>
            <div className="w-full flex flex-col md:flex-row  gap-1">
              <p className="text-dark">Phone Number: </p>
              <p className="text-primary text-bold"> +234 00 00 00 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
