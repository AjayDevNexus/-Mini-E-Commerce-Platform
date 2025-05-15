# 🛍️ Mini E-Commerce Platform

A simple full-stack e-commerce web application built with React, Node.js, Express, PostgreSQL, and Tailwind CSS. Users can add, browse, search, and delete products through a responsive interface.

## ✨ Features

- 📝 Product Submission (name, price, description, image URL)
- 📋 Product Listing (grid view with search functionality)
- 🔍 Search (filter by name or description)
- 🗑️ Delete Products
- 🔐 Secure environment variables via .env
- 📱 Fully responsive UI with Tailwind CSS

## 🛠 Tech Stack

- Frontend: React.js, Tailwind CSS
- Backend: Node.js, Express
- Database: PostgreSQL
- Tools: Axios, dotenv

## ✅ Prerequisites

- Node.js (v16 or v18)
- PostgreSQL (e.g., v16+)
- Git
- npm

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ecommerce-platform.git
cd ecommerce-platform
```
## 2. Required Backend Dependencies
- express
- cors
- pg
- dotenv
- nodemon (for development)
```bash
npm install express cors pg dotenv
npm install -g nodemon
```
### Create a PostgreSQL Database & Table
```bash
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  description TEXT,
  image_url VARCHAR(255)
);
```
### 🛡️ Backend .env Example
### Create a file named `.env` inside the server directory and add the following:
```env
DB_USER=postgres
DB_HOST=localhost
DB_NAME=ecommerce
DB_PASSWORD=your_password
DB_PORT=5432
```
### Run
```bash
nodemon server.js
```
## 3. Frontend
### 🏁 Getting Started

### 1. Create a new React app (command prompt)

```bash
npx create-react-app client
cd client
```
### 📦 Required Frontend Dependencies
- react
- axios
- tailwindcss
- postcss
- autoprefixer

Install with:

```bash
npm install axios
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
## RUN
```
npm start
```
## ⚠️ Note on Deployment Delay

Please note that the deployed version of this app may take **10–20 seconds** to load on the **first request**. This delay is due to the limitations of the **free-tier server**, which puts the app to sleep after inactivity (cold start behavior).

🔗 **Live Deployment:** https://mini-e-commerce-platform.netlify.app/

Once the server wakes up, the app will respond normally on subsequent requests.

Thanks for your patience!

