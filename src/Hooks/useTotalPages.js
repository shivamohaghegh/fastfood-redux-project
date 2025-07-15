import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useTotalPages = () => {
  const { category, searchTerm, limit } = useSelector((state) => state.product);
  const [foodItems, setFoodItems] = useState([]);

  const baseUrl = "https://6844019c71eb5d1be032236c.mockapi.io/FoodList";
  const params = new URLSearchParams();
  if (category && category !== "All") {
    params.append("category", category);
  }
  if (searchTerm) {
    params.append("filter", searchTerm);
  }

  const finalUrl = `${baseUrl}?${params.toString()}`;

  useEffect(() => {
    fetch(finalUrl)
      .then((response) => response.json())
      .then((json) => setFoodItems(json));
  }, [category, searchTerm, limit]);

  const totalPages = Math.ceil(foodItems.length / limit);

  return totalPages;
};

export default useTotalPages;
