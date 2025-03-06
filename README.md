# Online-Shopping-Cart
An online Shopping project with Next.js, Context API, Tailwind and ReactQuery

This project is a responsive product page built with React and Next.js showcasing interactive product details, option selections, reviews, and ratings. Styled with Tailwind CSS for a modern, responsive UI


--- ProductPage.tsx file:
Displays the product's images, price, description. Reacts to changes in size and color selections from `OptionsSelector` and shows the updated product variant.


--- CartPage.tsx file:
Shows the products in the cart with name, price, and quantity.


--- OptionsSelector.tsx file:
Provides dropdowns for selecting size and color. On selection change, product variant updates dynamically. 


--- Reviews.tsx file:
Handles both displaying and submitting reviews.
- Lists all reviews with name, rating, and text.  
- Allows users to submit a new review.


--- useProduct.tsx:
It is responsible for fetching the product details (like name, description, price, reviews, etc.). This hook is used inside the ProductPage component.


--- CartContext.ts:  
This file contains the context for managing the shopping cart.
- addToCart: Adds products to the cart and increments their quantity if they already exist.
- removeFromCart: Removes a product from the cart.
- selectedOptions: Manages the size and color options selected by the user.
- CartProvider: A provider that wraps the app and gives access to the cart data and actions throughout the application.


--- ProductContext.ts file:
This file defines the context for managing product-related data. It wraps around product data and provides the ability to update product details



Centralized state management using React’s Context API:  
- Stores product details, selected options, and reviews.  
- Provides functions like addReview to components.  
- Average rating updates automatically in "ProductDetail".  
- Ensures seamless data flow across the app. 	


