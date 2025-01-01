import { ApiResponse } from '../types/Dish';

const URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian';

export function getDishId(): Promise<ApiResponse> {
  return fetch(URL).then(res => res.json());
}
