export interface Dish {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
}

export interface ApiResponse {
  meals: Dish[];
}
