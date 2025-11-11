import { v4 as uuidv4 } from 'uuid';

export const DUMMY_USER_ID = "11111111-1111-1111-1111-111111111111";

export const PRODUCTS = [
  { id: uuidv4(), name: "Wireless Mouse", price: 25.99, category: "Electronics" },
  { id: uuidv4(), name: "Mechanical Keyboard", price: 89.5, category: "Electronics" },
  { id: uuidv4(), name: "Bluetooth Headphones", price: 59.99, category: "Electronics" },
  { id: uuidv4(), name: "USB-C Charger", price: 18.75, category: "Electronics" },
  { id: uuidv4(), name: "Smartwatch", price: 129.99, category: "Electronics" },

  { id: uuidv4(), name: "Water Bottle", price: 12.0, category: "Home" },
  { id: uuidv4(), name: "Ceramic Mug", price: 9.49, category: "Home" },
  { id: uuidv4(), name: "Throw Pillow", price: 15.99, category: "Home" },
  { id: uuidv4(), name: "LED Desk Lamp", price: 27.5, category: "Home" },
  { id: uuidv4(), name: "Wall Clock", price: 19.99, category: "Home" },

  { id: uuidv4(), name: "Running Shoes", price: 59.99, category: "Clothing" },
  { id: uuidv4(), name: "T-Shirt", price: 14.99, category: "Clothing" },
  { id: uuidv4(), name: "Jeans", price: 39.99, category: "Clothing" },
  { id: uuidv4(), name: "Hoodie", price: 44.5, category: "Clothing" },
  { id: uuidv4(), name: "Baseball Cap", price: 11.99, category: "Clothing" },

  { id: uuidv4(), name: "Fiction Novel", price: 17.5, category: "Books" },
  { id: uuidv4(), name: "Programming in Java", price: 45.0, category: "Books" },
  { id: uuidv4(), name: "Cookbook: Easy Recipes", price: 22.99, category: "Books" },
  { id: uuidv4(), name: "Notebook", price: 8.49, category: "Books" },
  { id: uuidv4(), name: "Travel Guide", price: 19.75, category: "Books" },

  { id: uuidv4(), name: "Yoga Mat", price: 29.99, category: "Sports" },
  { id: uuidv4(), name: "Basketball", price: 24.5, category: "Sports" },
  { id: uuidv4(), name: "Tennis Racket", price: 74.99, category: "Sports" },
  { id: uuidv4(), name: "Cycling Helmet", price: 49.99, category: "Sports" },
  { id: uuidv4(), name: "Gym Gloves", price: 14.5, category: "Sports" },
];