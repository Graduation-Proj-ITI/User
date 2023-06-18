import ProductCard from "../common/ProductCard";

const BestSelling = () => {
  return (
    <section className="py-16 max-sm:py-5 sm:py-10">
      <div className="flex justify-between max-sm:mb-3 sm:mb-3 md:mb-5 lg:mb-10">
        <h2 className="font-poppins max-sm:text-lg sm:text-xl md:text-2xl lg:text-2xl 2xl:text-2xl font-bold text-primary">
          Best Selling
        </h2>
        <button className="btn bg-transparent btn-primary-outline btn-sm rounded-2xl">
          See All
        </button>
      </div>

      <ProductCard />
    </section>
  );
};

export default BestSelling;
