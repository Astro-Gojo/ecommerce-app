# E-Commerce Web Application

A full-stack e-commerce web application built using Node.js, Express.js, MySQL, HTML, CSS, and JavaScript.

## Features

### Authentication

- User Registration
- User Login
- Password Hashing with bcrypt
- Session Management
- Role-Based Access (Admin/User)

### Product Management

- Add Product
- View Products
- Update Products
- Delete Products

### Cart System

- Add To Cart
- View Cart
- Remove From Cart

### Order Management

- Place Orders
- Track Orders

### Frontend Pages

- Login Page
- Products Page
- Cart Page
- Orders Page

## Technologies Used

### Frontend

- HTML
- CSS
- JavaScript

### Backend

- Node.js
- Express.js

### Database

- MySQL

### Packages

- mysql2
- bcrypt
- express-session
- nodemon

### Tools

- VS Code
- Postman
- Git
- GitHub
- Vercel

## Project Structure

```
ecommerce-app
│
├── db
│    connection.js
│
├── routes
│    auth.js
│    products.js
│    cart.js
│    orders.js
│
├── public
│    index.html
│    products.html
│    cart.html
│    orders.html
│
│    script.js
│    products.js
│    cart.js
│    orders.js
│
│    style.css
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/Astro-Gojo/ecommerce-app.git
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

Open:

```
http://localhost:3000
```

## APIs

### Authentication

- POST /register
- POST /login
- GET /dashboard
- GET /admin

### Products

- POST /products/add
- GET /products
- PUT /products/update/:id
- DELETE /products/delete/:id

### Cart

- POST /cart/add
- GET /cart
- DELETE /cart/delete/:id

### Orders

- POST /orders/place
- GET /orders

## Deployment

Deployed using Vercel.

## Author

Gokul Nair