import { useEffect, useState } from 'react';
import { Dish } from '../Dish';
import './Menu.scss';
import { getDishId } from '../../../utils/getDishesId';
import { fetchDishes } from '../../../utils/getDish';
import { Dish as DishType } from '../../../types/Dish';

type Props = {
  isSearchEnabled?: boolean;
};

type SelectedDishType = Pick<
DishType,
'strMeal' | 'strInstructions' | 'strMealThumb' | 'idMeal'
>;

const initialDishes: SelectedDishType[] = [
  {
    idMeal: '0',
    strMeal: 'Pasta Bolognese',
    strInstructions: `Bring a large pot of water to a boil. 
      Add kosher salt to the boiling water, then add the pasta.Cook according to the package 
      instructions, about 9 minutes.\r\nIn a large skillet over medium- high heat, add the 
      olive oil and heat until the oil starts to shimmer.Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes...`,
    strMealThumb: 'img/pasta.png',
  },
  {
    idMeal: '1',
    strMeal: 'Pasta Bolognese',
    strMealThumb: 'img/pasta.png',
    strInstructions: `Bring a large pot of water to a boil. 
    Add kosher salt to the boiling water, then add the pasta.Cook according to the package 
    instructions, about 9 minutes.\r\nIn a large skillet over medium- high heat, add the 
    olive oil and heat until the oil starts to shimmer.Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes...`,
  },
  {
    idMeal: '2',
    strMeal: 'Pasta Bolognese',
    strMealThumb: 'img/pasta.png',
    strInstructions: `Bring a large pot of water to a boil. 
    Add kosher salt to the boiling water, then add the pasta.Cook according to the package 
    instructions, about 9 minutes.\r\nIn a large skillet over medium- high heat, add the 
    olive oil and heat until the oil starts to shimmer.Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes...`,
  },
];

export const Menu: React.FC<Props> = ({ isSearchEnabled = false }) => {
  const menuPage = isSearchEnabled ? 'menu--page' : '';
  const [isLoading, setIsLoading] = useState(false);
  const [dishes, setDishes] = useState<DishType[] | SelectedDishType[]>(
    initialDishes,
  );
  const [filteredDishes, setFilteredDishes] = useState<
  DishType[] | SelectedDishType[]
  >(initialDishes);
  const [isError, setIsError] = useState(false);
  const [dishesCount, setDishesCount] = useState(5);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    getDishId()
      .then(dishesId => {
        const dishIds = dishesId.meals.map(dish => dish.idMeal);

        fetchDishes(dishIds)
          .then(dishesData => {
            setTimeout(() => {
              setIsLoading(false);
              setDishes(dishesData);
              setFilteredDishes(dishesData);
            }, 1000);
          })
          .catch(() => {
            setIsError(true);
          });
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  const handleAddMore = () => {
    if (dishesCount + 5 <= dishes.length) {
      setDishesCount(prev => prev + 5);
    }
  };

  const handleSearch = () => {
    if (search.trim()) {
      const newFilteredDishes = dishes.filter(
        dish =>
          dish.strMeal.toLowerCase().includes(search.toLowerCase().trim()) ||
          dish.strInstructions
            .toLowerCase()
            .includes(search.toLowerCase().trim()),
      );

      setFilteredDishes(newFilteredDishes);
    }
  };

  return (
    <section className={'menu' + ' ' + menuPage}>
      <h2 className="menu__title">Menu</h2>

      {isSearchEnabled && (
        <div className="menu__controls-wrapper">
          <div className="menu__controls">
            <input
              type="text"
              className="menu__search"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <button className="menu__btn" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      )}

      <div className="menu__dishes">
        {isError && <h1>Something went wrong!</h1>}

        {!isError &&
          filteredDishes.slice(0, dishesCount).map((dish, i) => {
            const { strMealThumb, strInstructions, strMeal } = dish;
            const dishData = { strMealThumb, strInstructions, strMeal };

            return (
              <Dish
                isLoading={isLoading}
                key={dish.idMeal}
                dishData={dishData}
                isLastDish={i === dishes.length - 1}
              />
            );
          })}
      </div>

      {dishesCount !== dishes.length && (
        <button className="menu__more" onClick={handleAddMore}>
          More
        </button>
      )}
    </section>
  );
};
