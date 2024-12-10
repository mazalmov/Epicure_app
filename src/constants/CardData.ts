export interface CardData {
    id: number;
    title: string;
    description?: string;
    imageUrl: string;
    icon?: "spicy" | "vegetarian" | "vegan";
    chefname?: string;
    stars?: number;
    price?: number;
  }