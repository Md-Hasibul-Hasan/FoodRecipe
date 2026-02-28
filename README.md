# 🍽️ MealExplorer (FoodRecipe App)

MealExplorer is a modern single-page recipe browsing application built with **React** and **Tailwind CSS**.  
It fetches live data from **TheMealDB API** and allows users to explore global cuisines using filtering, search, and pagination.

---

## 🚀 Features

- 🌍 Browse meals from multiple cuisines
- 🔍 Real-time search by meal name
- 🗂️ Cuisine-based filtering (Italian, Turkish, Japanese, etc.)
- 🔁 Centralized filtering logic (search + filter combined)
- 📄 Client-side pagination (8 meals per page)
- ⚡ API data fetching with async/await
- 🎨 Professional, responsive UI with Tailwind CSS
- 📱 Fully responsive layout (mobile → desktop)

---

## 🛠️ Tech Stack

- **React** (Hooks: useState, useEffect)
- **Tailwind CSS**
- **JavaScript (ES6+)**
- **TheMealDB API**

API Used:
```
https://www.themealdb.com/api/json/v1/1/search.php?s=
```

---

## 📁 Project Structure

```
src/
│
├── pages/
│   └── Home.jsx
│
├── App.jsx
└── main.jsx
```

---

## 🧠 Core Implementation

### 🔥 Central Filtering Logic

Filtering and search are handled inside a single `useEffect`:

- Starts from full API dataset
- Applies cuisine filter (if not "All")
- Applies search filter (if input is not empty)
- Updates filtered list
- Resets pagination when filter/search changes

This ensures:
- No double filtering bugs
- Clean state management
- Predictable UI updates

---

### 📄 Pagination

- Displays 8 meals per page
- Uses `Array.slice()` to calculate visible items
- Dynamically calculates total pages
- Automatically resets page when filters change

---

## ▶️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/mealexplorer.git
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start development server

```bash
npm run dev
```

---

## 🎨 UI Highlights

- Sticky header with branding
- Hero section with call-to-action
- Interactive cuisine filter buttons
- Smooth card hover animation
- Responsive grid layout
- Clean and minimal pagination controls

---

## 🔮 Future Improvements

- 🔗 Meal details page with React Router
- ❤️ Favorite / Save recipes feature
- 🧾 Ingredient and instructions view
- 🔐 Authentication system
- 🌗 Dark/Light mode toggle
- 📡 Backend integration for custom recipes

---

## 📌 Best Practices Used

- Centralized filtering logic
- Controlled search input
- Derived state for pagination
- API integration using async/await
- Clean component structure
- Responsive design principles

---

## 👨‍💻 Author

MealExplorer — Built as a React project to practice:

- API integration
- Filtering and search logic
- Pagination
- State management
- Professional UI design
