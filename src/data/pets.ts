export interface PetCategory {
  id: string;
  name: string;
  image: string;
  description: string;
}

export const petCategories: PetCategory[] = [
  {
    id: "dogs",
    name: "Dogs",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Find premium food, toys, and accessories for your canine companion."
  },
  {
    id: "cats",
    name: "Cats",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Explore our selection of cat food, litter, toys, and more for your feline friend."
  },
  {
    id: "fish",
    name: "Fish",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Discover aquariums, filters, food, and decorations for your aquatic pets."
  },
  {
    id: "birds",
    name: "Birds",
    image: "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Browse cages, perches, food, and toys for your feathered companions."
  },
  {
    id: "small-pets",
    name: "Small Pets",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Find everything for hamsters, guinea pigs, rabbits, and other small animals."
  },
  {
    id: "reptiles",
    name: "Reptiles",
    image: "https://images.unsplash.com/photo-1504450874802-0ba2bcd9b5ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Shop terrariums, heat lamps, food, and accessories for your reptilian pets."
  }
];