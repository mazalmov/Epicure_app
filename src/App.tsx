import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import PopularRestorants from "./components/PopularRestorants/PopularRestorants";


// import image1 from './assets/Desktop/FullStar.png'
// import { CardData } from './constants/CardData';
// interface CardData {
//   id: number;
//   title: string;
//   description?: string;
//   imageUrl: string;
//   icon?: "spicy" | "vegetarian" | "vegan";
//   chefname?: string;
//   stars?: number;
//   price?: number;
// }
// const cards: CardData[] = [
//   { id: 1, title: 'Card 1', description: 'Description for card 1', imageUrl: image1, icon: 'spicy', chefname: "Asaf Granit", stars: 1, price: 67 },
//   { id: 2, title: 'Card 2', description: 'Description for card 2', imageUrl: image1, icon: 'vegetarian', chefname: "Yosi Shitrit", stars: 3, price: 76 },
//   { id: 3, title: 'Card 3', description: 'Description for card 3', imageUrl: image1, icon: 'vegan' },
//   { id: 4, title: 'Card 4', description: 'Description for card 4', imageUrl: image1 },
//   { id: 5, title: 'Card 5', description: 'Description for card 5', imageUrl: image1, price: 88 },
// ];
function App() {
  return (
    <>
      <Header />
      <Hero />
      <PopularRestorants/>

    </>
  );
}

export default App;
