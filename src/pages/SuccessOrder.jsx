import successOrder from "../../public/images/successOrderO.gif";
const SuccessOrder = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img src={successOrder} className="w-2/3 lg:w-1/3" />
        <h4 className=" text-primary text-opacity-70 font-semibold capitalize">
          {" "}
          Thank you for your Order
        </h4>
      </div>
    </>
  );
};

export default SuccessOrder;
