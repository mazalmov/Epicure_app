export interface CardData {
    id: string;
    title: string;
    description?: string;
    imageUrl: string;
    icon?: "spicy" | "vegetarian" | "vegan";
    chefName?: string;
    stars?: number;
    price?: number;
    restaurantIds?: string[]; 
    chefInfo?: string;
  }
  export interface CardRestaurantData {
    id:string;
    title: string;
    imageUrl:string,
    chefName: string; 
    stars: number;
  }
  export interface  CardChefData {
    name: string;
    restaurantIds: string[]; 
    image: string;
    chefInfo?: string;
}