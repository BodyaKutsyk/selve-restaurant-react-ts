import { Dish } from '../types/Dish';

export async function fetchDishes(productIDS: string[]): Promise<Dish[]> {
  const dishesAPI = productIDS.map(id =>
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`),
  );

  const products = await Promise.all(dishesAPI);

  const dishes = await Promise.all(products.map(response => response.json()));

  const validDishes = dishes.map(dish => dish.meals).flat();

  return validDishes;
}
