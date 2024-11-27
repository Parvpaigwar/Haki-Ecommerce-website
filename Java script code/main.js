import './style.css';

import products from "./api/prodcuts.json";
import { showProductContainer } from './homeProductCards';


// call the functions to display all the products as a card
// Define a function named 'showProductContainer' that takes an array of prodcuts as input
showProductContainer(products);

