export interface ProductCategory {
  id: string;
  name: string;
  image: string;
  description: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: "food",
    name: "Pet Food",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Premium nutrition for all your pets. From dry kibble to wet food, find the perfect meal."
  },
  {
    id: "toys",
    name: "Toys & Enrichment",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Keep your pets entertained and mentally stimulated with our selection of toys."
  },
  {
    id: "beds",
    name: "Beds & Furniture",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Comfortable beds, houses, and furniture to give your pets the perfect place to rest."
  },
  {
    id: "grooming",
    name: "Grooming Supplies",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Everything you need to keep your pet looking and feeling their best."
  },
  {
    id: "health",
    name: "Health & Wellness",
    image: "https://images.unsplash.com/photo-1584553391841-4d55f3ea8a3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Supplements, medications, and health monitoring tools for optimal pet health."
  },
  {
    id: "travel",
    name: "Travel & Outdoors",
    image: "https://images.unsplash.com/photo-1541781286675-7b70223358d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Carriers, leashes, and outdoor gear for adventures with your pet."
  },
  {
    id: "training",
    name: "Training & Behavior",
    image: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Training aids, behavior solutions, and educational resources for pet owners."
  },
  {
    id: "aquariums",
    name: "Aquariums & Terrariums",
    image: "https://images.unsplash.com/photo-1571166581031-9d5a4bedc3f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Complete setups and accessories for fish, reptiles, and amphibians."
  }
];