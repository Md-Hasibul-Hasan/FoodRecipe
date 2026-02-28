// import React, { useState, useEffect } from "react";

// const Home = () => {
//   const [apidata, setApidata] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [search, setSearch] = useState("");
//   const [active, setActive] = useState("All");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 8;

//   const cuisines = [
//     "All",
//     "Italian",
//     "Uruguayan",
//     "Saudi Arabian",
//     "Turkish",
//     "Argentinian",
//     "Japanese",
//     "Spanish",
//     "Ukrainian",
//   ];

//   useEffect(() => {
//     const fetchdata = async () => {
//       const api = await fetch(
//         "https://www.themealdb.com/api/json/v1/1/search.php?s="
//       );
//       const data = await api.json();
//       setApidata(data.meals);
//       setFilteredData(data.meals);
//     };
//     fetchdata();
//   }, []);

//   // 🔥 Central Filtering Logic
//   useEffect(() => {
//     let temp = apidata;

//     if (active !== "All") {
//       temp = temp.filter((item) => item.strArea === active);
//     }

//     if (search !== "") {
//       temp = temp.filter((item) =>
//         item.strMeal.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     setFilteredData(temp);
//     setCurrentPage(1);
//   }, [active, search, apidata]);

  
//   const lastIndex = currentPage * itemsPerPage;
//   const firstIndex = lastIndex - itemsPerPage;
//   const currentMeals = filteredData.slice(firstIndex, lastIndex);
//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);

//   return (
//     <div className="bg-gray-100 min-h-screen p-6">
//       <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
//         Meal Recipes
//       </h1>

//       {/* Cuisine Filter */}
//       <div className="flex flex-wrap gap-3 justify-center mb-8">
//         {cuisines.map((item) => (
//           <button
//             key={item}
//             onClick={() => setActive(item)}
//             className={`px-4 py-2 rounded-full font-semibold transition ${
//               active === item
//                 ? "bg-red-500 text-white"
//                 : "bg-gray-200 hover:bg-red-400 hover:text-white"
//             }`}
//           >
//             {item}
//           </button>
//         ))}
//       </div>

//       {/* Search Bar */}
//       <div className="flex justify-center mb-8">
//         <input
//           type="text"
//           placeholder="Search meals..."
//           className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       {/* Meal Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {currentMeals?.map((item) => (
//           <div
//             key={item.idMeal}
//             className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
//           >
//             <img
//               src={item.strMealThumb}
//               alt={item.strMeal}
//               className="w-full h-56 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-lg font-semibold mb-2">
//                 {item.strMeal}
//               </h2>
//               <p className="text-sm text-gray-500">
//                 {item.strArea} Cuisine
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//     {/* Pagination  */}
//     <div className="flex justify-center gap-2 mt-8">
//     {[...Array(totalPages)].map((_, index) => (
//         <button
//         key={index}
//         onClick={() => setCurrentPage(index + 1)}
//         className={`px-3 py-1 rounded ${
//             currentPage === index + 1
//             ? "bg-red-500 text-white"
//             : "bg-gray-300"
//         }`}
//         >
//         {index + 1}
//         </button>
//     ))}
//     </div>


//     </div>
//   );
// };

// export default Home;





import React, { useState, useEffect } from "react";

const Home = () => {
  const [apidata, setApidata] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const cuisines = [
    "All",
    "Italian",
    "Uruguayan",
    "Saudi Arabian",
    "Turkish",
    "Argentinian",
    "Japanese",
    "Spanish",
    "Ukrainian",
  ];

  useEffect(() => {
    const fetchdata = async () => {
      const api = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      const data = await api.json();
      setApidata(data.meals);
      setFilteredData(data.meals);
    };
    fetchdata();
  }, []);

  useEffect(() => {
    let temp = apidata;

    if (active !== "All") {
      temp = temp.filter((item) => item.strArea === active);
    }

    if (search !== "") {
      temp = temp.filter((item) =>
        item.strMeal.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredData(temp);
    setCurrentPage(1);
  }, [active, search, apidata]);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentMeals = filteredData.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-500">
            MealExplorer
          </h1>
          <p className="text-sm text-gray-500">
            Discover global cuisines
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-red-500 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Explore Delicious Recipes
          </h2>
          <p className="text-lg opacity-90">
            Filter by cuisine and search your favorite meals.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* Filter + Search */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-10">

          {/* Search */}
          <div className="flex justify-center mb-6">
            <input
              type="text"
              placeholder="Search meals..."
              className="w-full max-w-md px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Cuisine Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            {cuisines.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  active === item
                    ? "bg-red-500 text-white shadow-md"
                    : "bg-gray-100 hover:bg-red-100 text-gray-700"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

        </div>

        {/* Meal Grid */}
        {currentMeals.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            No meals found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {currentMeals.map((item) => (
              <div
                key={item.idMeal}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <img
                  src={item.strMealThumb}
                  alt={item.strMeal}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2">
                    {item.strMeal}
                  </h3>
                  <span className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded-full">
                    {item.strArea}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-10">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  currentPage === index + 1
                    ? "bg-red-500 text-white shadow-md"
                    : "bg-gray-200 hover:bg-red-100"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MealExplorer. All rights reserved.
      </footer>

    </div>
  );
};

export default Home;