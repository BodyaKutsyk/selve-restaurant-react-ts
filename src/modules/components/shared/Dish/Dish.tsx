import classNames from 'classnames';
import './Dish.scss';

type Props = {
  isLastDish?: boolean;
  isLoading?: boolean;
  dishData: {
    strInstructions: string;
    strMeal: string;
    strMealThumb: string;
  };
};

export const Dish: React.FC<Props> = ({
  isLastDish = false,
  isLoading = false,
  dishData,
}) => {
  const { strInstructions, strMeal, strMealThumb } = dishData;

  return (
    <article
      className={classNames('dish', {
        'dish--last': isLastDish,
        'dish--loading': isLoading,
      })}
    >
      <div className="dish__info">
        <h3 className="dish__title">{strMeal}</h3>
        <img src={strMealThumb} alt="Dish logo" className="dish__info-img" />
        <p className="dish__description">{strInstructions}</p>
      </div>
      <div className="dish__image">
        <img src={strMealThumb} alt="Dish logo" className="dish-img" />
      </div>
    </article>
  );
};
