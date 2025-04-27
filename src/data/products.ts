export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: 'food' | 'toys' | 'accessories' | 'health';
  price: number;
  image: string;
  description: string;
  rating: number;
  inStock: boolean;
  featured?: boolean;
}

export const products: Product[] = [
  // Dogs Products
  {
    id: "dog-food-1",
    name: "Premium Dry Dog Food",
    category: "dogs",
    subcategory: "food",
    price: 3499,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "High-quality dry food with balanced nutrition for adult dogs of all breeds.",
    rating: 4.8,
    inStock: true,
    featured: true
  },
  {
    id: "dog-food-2",
    name: "Grain-Free Wet Dog Food",
    category: "dogs",
    subcategory: "food",
    price: 1899,
    image: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Grain-free wet food made with real meat and vegetables for sensitive stomachs.",
    rating: 4.6,
    inStock: true
  },
  {
    id: "dog-toy-1",
    name: "Durable Chew Toy",
    category: "dogs",
    subcategory: "toys",
    price: 899,
    image: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Long-lasting rubber chew toy designed for aggressive chewers.",
    rating: 4.7,
    inStock: true
  },
  {
    id: "dog-toy-2",
    name: "Interactive Puzzle Toy",
    category: "dogs",
    subcategory: "toys",
    price: 1299,
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Mental stimulation toy that dispenses treats as your dog solves the puzzle.",
    rating: 4.5,
    inStock: true,
    featured: true
  },
  {
    id: "dog-accessory-1",
    name: "Adjustable Leather Collar",
    category: "dogs",
    subcategory: "accessories",
    price: 1999,
    image: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Handcrafted genuine leather collar with durable metal hardware.",
    rating: 4.9,
    inStock: true
  },
  {
    id: "dog-accessory-2",
    name: "Reflective Dog Harness",
    category: "dogs",
    subcategory: "accessories",
    price: 2499,
    image: "https://images.unsplash.com/photo-1605897472359-85e4b94c6a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "No-pull harness with reflective strips for safe nighttime walks.",
    rating: 4.7,
    inStock: true
  },
  
  // Cats Products
  {
    id: "cat-food-1",
    name: "Indoor Cat Formula",
    category: "cats",
    subcategory: "food",
    price: 2799,
    image: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Specially formulated dry food for indoor cats to maintain healthy weight.",
    rating: 4.8,
    inStock: true,
    featured: true
  },
  {
    id: "cat-food-2",
    name: "Gourmet Wet Cat Food",
    category: "cats",
    subcategory: "food",
    price: 1599,
    image: "https://images.unsplash.com/photo-1607374624420-e7800c3bef08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Premium wet food with real seafood pieces in savory gravy.",
    rating: 4.6,
    inStock: true
  },
  {
    id: "cat-toy-1",
    name: "Interactive Feather Wand",
    category: "cats",
    subcategory: "toys",
    price: 799,
    image: "https://images.unsplash.com/photo-1526336179256-1347bdb255ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Extendable wand with replaceable feather attachments to engage hunting instincts.",
    rating: 4.7,
    inStock: true
  },
  {
    id: "cat-toy-2",
    name: "Catnip Mouse Toys (3-Pack)",
    category: "cats",
    subcategory: "toys",
    price: 599,
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Soft plush mice filled with premium catnip to stimulate play.",
    rating: 4.5,
    inStock: true
  },
  {
    id: "cat-accessory-1",
    name: "Modern Cat Tree",
    category: "cats",
    subcategory: "accessories",
    price: 8999,
    image: "https://images.unsplash.com/photo-1606675725083-8d344f38f3eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Stylish multi-level cat tree with scratching posts and cozy hideaways.",
    rating: 4.9,
    inStock: true,
    featured: true
  },
  {
    id: "cat-accessory-2",
    name: "Self-Cleaning Litter Box",
    category: "cats",
    subcategory: "accessories",
    price: 14999,
    image: "https://images.unsplash.com/photo-1603752445035-7b10638fe9fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Automatic self-cleaning litter box that reduces odor and maintenance.",
    rating: 4.7,
    inStock: true
  },
  
  // Fish Products
  {
    id: "fish-food-1",
    name: "Tropical Fish Flakes",
    category: "fish",
    subcategory: "food",
    price: 599,
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Nutritionally balanced flake food for all tropical fish species.",
    rating: 4.6,
    inStock: true
  },
  {
    id: "fish-food-2",
    name: "Betta Fish Pellets",
    category: "fish",
    subcategory: "food",
    price: 499,
    image: "https://images.unsplash.com/photo-1520302519878-3fba5b03cff4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Specially formulated floating pellets for betta fish with added vitamins.",
    rating: 4.7,
    inStock: true
  },
  {
    id: "fish-accessory-1",
    name: "10-Gallon Aquarium Kit",
    category: "fish",
    subcategory: "accessories",
    price: 5999,
    image: "https://images.unsplash.com/photo-1571166581031-9d5a4bedc3f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Complete starter kit with tank, filter, heater, and LED lighting.",
    rating: 4.8,
    inStock: true,
    featured: true
  },
  {
    id: "fish-accessory-2",
    name: "Aquarium Decorative Plants",
    category: "fish",
    subcategory: "accessories",
    price: 999,
    image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Realistic silk plants that provide hiding places for fish.",
    rating: 4.5,
    inStock: true
  },
  {
    id: "fish-accessory-3",
    name: "Aquarium Water Test Kit",
    category: "fish",
    subcategory: "health",
    price: 1899,
    image: "https://images.unsplash.com/photo-1601263732236-9ba51d79cb53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Complete water testing kit for pH, ammonia, nitrite, and nitrate levels.",
    rating: 4.9,
    inStock: true
  },
  
  // Birds Products
  {
    id: "bird-food-1",
    name: "Premium Parakeet Seed Mix",
    category: "birds",
    subcategory: "food",
    price: 899,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Nutritious seed blend specifically formulated for parakeets and budgies.",
    rating: 4.7,
    inStock: true
  },
  {
    id: "bird-food-2",
    name: "Organic Parrot Pellets",
    category: "birds",
    subcategory: "food",
    price: 1499,
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Organic, non-GMO pellets for medium to large parrots.",
    rating: 4.8,
    inStock: true,
    featured: true
  },
  {
    id: "bird-toy-1",
    name: "Colorful Rope Perch",
    category: "birds",
    subcategory: "toys",
    price: 1199,
    image: "https://images.unsplash.com/photo-1591198936750-16d8e15edc9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Flexible rope perch with colorful wooden beads for climbing and chewing.",
    rating: 4.6,
    inStock: true
  },
  {
    id: "bird-accessory-1",
    name: "Deluxe Bird Cage",
    category: "birds",
    subcategory: "accessories",
    price: 10999,
    image: "https://images.unsplash.com/photo-1520808663317-647b476a81b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Spacious cage with multiple perches, feeding stations, and play areas.",
    rating: 4.9,
    inStock: true
  },
  {
    id: "bird-accessory-2",
    name: "Bird Bath Attachment",
    category: "birds",
    subcategory: "accessories",
    price: 699,
    image: "https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Easy-to-attach bath that provides birds with a place to bathe and play.",
    rating: 4.5,
    inStock: true
  },
  
  // Small Pets Products
  {
    id: "small-pet-food-1",
    name: "Premium Rabbit Pellets",
    category: "small-pets",
    subcategory: "food",
    price: 999,
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "High-fiber pellets formulated specifically for rabbit digestive health.",
    rating: 4.8,
    inStock: true,
    featured: true
  },
  {
    id: "small-pet-food-2",
    name: "Hamster & Gerbil Mix",
    category: "small-pets",
    subcategory: "food",
    price: 599,
    image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Complete seed and grain mix with added vitamins for small rodents.",
    rating: 4.6,
    inStock: true
  },
  {
    id: "small-pet-toy-1",
    name: "Wooden Chew Toys Set",
    category: "small-pets",
    subcategory: "toys",
    price: 799,
    image: "https://images.unsplash.com/photo-1535590069402-77a8daee8a8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Natural wooden toys that help maintain dental health for rabbits and guinea pigs.",
    rating: 4.7,
    inStock: true
  },
  {
    id: "small-pet-accessory-1",
    name: "Multi-Level Habitat",
    category: "small-pets",
    subcategory: "accessories",
    price: 6999,
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Spacious habitat with multiple levels, tunnels, and exercise wheel.",
    rating: 4.9,
    inStock: true
  },
  {
    id: "small-pet-accessory-2",
    name: "Exercise Ball",
    category: "small-pets",
    subcategory: "accessories",
    price: 499,
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Safe exercise ball for hamsters and gerbils to explore outside their cage.",
    rating: 4.5,
    inStock: true
  },
  
  // Reptiles Products
  {
    id: "reptile-food-1",
    name: "Bearded Dragon Diet",
    category: "reptiles",
    subcategory: "food",
    price: 1299,
    image: "https://images.unsplash.com/photo-1597526287005-1a21180ddf66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Complete pelleted diet for bearded dragons with added calcium.",
    rating: 4.7,
    inStock: true
  },
  {
    id: "reptile-food-2",
    name: "Premium Turtle Pellets",
    category: "reptiles",
    subcategory: "food",
    price: 899,
    image: "https://images.unsplash.com/photo-1581123309007-7f6d2990a53a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Floating pellets formulated for aquatic turtles with vitamins and minerals.",
    rating: 4.6,
    inStock: true
  },
  {
    id: "reptile-accessory-1",
    name: "Heat Lamp Kit",
    category: "reptiles",
    subcategory: "accessories",
    price: 2999,
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Complete heat lamp setup with fixture, bulb, and thermostat.",
    rating: 4.8,
    inStock: true,
    featured: true
  },
  {
    id: "reptile-accessory-2",
    name: "Terrarium Background",
    category: "reptiles",
    subcategory: "accessories",
    price: 1499,
    image: "https://images.unsplash.com/photo-1504450874802-0ba2bcd9b5ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Realistic 3D rock background that adds depth and climbing surfaces.",
    rating: 4.5,
    inStock: true
  },
  {
    id: "reptile-accessory-3",
    name: "Digital Thermometer/Hygrometer",
    category: "reptiles",
    subcategory: "health",
    price: 1899,
    image: "https://images.unsplash.com/photo-1584553391841-4d55f3ea8a3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Accurate digital device to monitor temperature and humidity in reptile habitats.",
    rating: 4.9,
    inStock: true
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductsBySubcategory = (category: string, subcategory: string): Product[] => {
  return products.filter(product => product.category === category && product.subcategory === subcategory);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};