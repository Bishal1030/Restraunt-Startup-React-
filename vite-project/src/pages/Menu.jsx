import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Menu() {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]); 
  const [loading, setLoading] = useState(false);


  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search) {
      setLoading(true);
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`)
        .then((res) => {
          setTimeout(() =>{
          setMeals(res.data.meals || []); 
          setLoading(false);
        }, 1500)
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } else {
      setMeals([]); 
    }
  }, [search]);

  return (
    <>
      <div className="flex justify-center mt-36">
        <input
          type="text"
          id="search"
          placeholder="Search for a dish..."
          className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={search}
          onChange={handleSearch}
        />
      </div>

      {loading ? (
        /* From Uiverse.io by devAaus */ 
<div className="mt-8 flex-col gap-4 w-full flex items-center justify-center">
  <div
    className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
  >
    <div
      className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
    ></div>
  </div>
</div>

      ) : meals.length > 0 ? (
        <div className="grid grid-cols-3 gap-4 mt-8">
          {meals.slice(0, 6).map((meal) => (
            <div key={meal.idMeal} className="text-center p-4 border border-gray-200 rounded-lg shadow-lg">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-auto rounded-lg mb-4"
              />
              <h2 className="text-lg font-semibold">{meal.strMeal}</h2>
            </div>
          ))}
        </div>
      ) : (
        search && <p className="text-center mt-8">No meals found. Try another ingredient.</p>
      )}
    </>
  );
}
