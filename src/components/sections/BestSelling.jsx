import ProductCard from "../common/ProductCard";

const BestSelling = () => {
  return (
    <section className="my-[160px] mx-[7.5rem]">
      <h2 className="text-[#133A5E] w-96 my-10  leading-8	text-4xl font-bold md:text-3xl lg:text-4xl 2xl:text-5xl  ">
        Best Selling
      </h2>
      <ProductCard />
    </section>
  );
};

export default BestSelling;
