import { useSelector } from "react-redux";
import { getSelectedCategory } from "../redux/dishesSlice";
import data from "./data";
import Dish from "./Dish";

const Dishes = () => {
  const selectedCategory = useSelector(getSelectedCategory);

  return (
    <div>
      {data
        .filter((dish) => {
          if (selectedCategory === "ALL") return true;
          return selectedCategory === dish.category;
        })
        .map((dish) => (
          <Dish key={dish.id} dish={dish} />
        ))}
    </div>
  );
};
export default Dishes;
