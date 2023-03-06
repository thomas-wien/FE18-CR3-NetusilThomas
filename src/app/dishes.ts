export class dish {
  name: string;
  description: string;
  image: string;
  price: number;
  available: boolean;
  count: number;


  constructor(name: string, description: string, image: string, price: number, available: boolean, count: number) { // 
    this.name = name;
    this.description = description;
    this.image = "./assets/images/dishes/" + image; // 
    this.price = price;
    this.available = available;
    this.count = count;
  }
}

export let dishes = [
  new dish("Healthy gazpacho with fermented vegetables", "This vibrant vegetarian chilled soup  is packed with nutrients and colour, with the smoked celeriac purée and fermented vegetables bringing an unusual depth of flavour to the dish.", "gazpacho.webp", 11, true, 0),
  new dish("Pizza Margherita", "Our bestseller Ø 28 cm tomato sauce, cheese, basil", "pizza.jpg", 12, true, 0),
  new dish("Gnocchi with herbs, garlic sauce and black truffle", "gnocchi with decadent shavings of black truffle and a subtle herb crust. It's the perfect starter for vegetarians if you swap the Parmesan for a similar cheese made from non-animal rennet.", "gnocchi.webp", 18, false, 0),
  new dish("Cannelloni with couscous, mango and alfafa sprouts", "These simple rice paper rolls make an interesting and unusual vegetarian starter dish. The couscous filling is lightly flavoured with chilli and herbs, and is matched perfectly by the fresh and vibrant mango purée and some lightly pickled onions.", "cannelloni.webp", 12, true, 0),
  new dish("Risotto with ginger, shiitake mushroom, daikon and miso sauce", "This vegan mushroom risotto recipe from Fabrizio Marino is a melting pot of flavours, incorporating miso, tamari and ginger with creamy risotto and celeriac.", "risotto.webp", 25, true, 0),
  new dish("Roast tomato and spring onion risotto with seared tuna", "Serves up a delicious Mediterranean-style dish, with a vibrant cherry tomato and spring onion risotto as the base for a lightly seared tuna steak. The tuna is a lovely meaty addition, but the risotto also makes a fantastic recipe on its own, which could be useful if also serving to vegetarian guests.", "tuna.webp", 45, true, 0),
  new dish("Orange and pink risotto", "The striking colours and presentation of this vegetarian dish, sure to make it a new go-to favourite. With layers of carrot and beetroot barley risottos, tender roasted butternut squash cubes and crunchy almonds, these flavours are sure to match style with flavour.", "orangerisotto.webp", 19, true, 0)
];