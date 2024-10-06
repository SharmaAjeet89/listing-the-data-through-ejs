// Please don't change the pre-written code
// Import the necessary modules here
import ProductModel from '../models/product.model.js';
const product =new ProductModel();

export default class ProductController {
  getProducts = (req, res) => {

    // Write your code here
    const products =product.fetchProducts()
    res.render("product",{product:products})
  };
}
