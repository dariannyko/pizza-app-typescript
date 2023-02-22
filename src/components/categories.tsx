import { memo } from "react";
import { useDispatch } from "react-redux";
import { setCategoryId } from "../store/slice/filter-slice";

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

type CategoriesProps = {
  categoryId: number;
};

const Categories = memo(({ categoryId }: CategoriesProps) => {
  const dispatch = useDispatch();

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  return (
    <ul className="categories">
      {categories.map((item, index) => (
        <li
          key={index}
          onClick={() => onChangeCategory(index)}
          className={categoryId === index ? "active" : ""}
        >
          {item}
        </li>
      ))}
    </ul>
  );
});

export { Categories };
