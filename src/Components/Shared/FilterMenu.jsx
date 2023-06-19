const FilterMenu = ({
  categories,
  currentCategory,
  getProductInCategory,
  colors,
  currentColor,
  changeCurrentColor,
}) => {
  return (
    <>
      <div className="filterPrice  ps-4 mb-8">
        <h1 className="text-lg mb-4">Price</h1>
        <input
          type="range"
          min="0"
          max="100"
          value="40"
          className="range range-xs"
        />
      </div>
      <div className="filtercategory mb-4 ps-4">
        <h1 className="text-xl mb-4 font-bold">Categories</h1>
        <div className=" flex justify-center flex-col ms-5">
          {categories.data?.map((category) => {
            return (
              <h1
                key={category.id}
                className={
                  "text-primary text-lg py-1 cursor-pointer capitalize font-medium hover:text-secondary " +
                  (category.id === currentCategory ? "text-secondary" : "")
                }
                // onClick={() => changeCurrentCateegory(category.id)}
                onClick={() => {
                  getProductInCategory(category);
                  // changeCurrentCateegory(category.id);
                  console.log(currentCategory, category.id);
                }}
              >
                {category.name}
              </h1>
            );
          })}
        </div>
      </div>

      <div className="filtercolor mb-4 ps-4">
        <h1 className="text-xl mb-4 font-bold">Colors</h1>
        <div className=" flex justify-center flex-col ms-5">
          {colors?.map((color) => {
            return (
              <div style={{ display: "flex", gap: "8px" }} key={color.id}>
                <span
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    backgroundColor: color.name,
                  }}
                ></span>
                <h1
                  className={`categorylink mb-4 ${
                    color.id === currentColor ? "categoryactive" : ""
                  }`}
                  onClick={() => changeCurrentColor(color.id)}
                >
                  {color.name}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FilterMenu;
