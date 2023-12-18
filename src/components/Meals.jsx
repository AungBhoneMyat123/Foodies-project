import React, {useEffect, useState} from "react";
import MealCard from "./MealCard.jsx";

function Meals () {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
        const {meals} = await api.json()
        setMeals(meals)
        console.log(meals)
    }
    return (
        <div className={'flex flex-wrap justify-center gap-10 mx-5 my-5'}>
            {meals.map(meal => {
                return(
                    <MealCard key={meal.idMeal} name={meal.strMeal} image={meal.strMealThumb} id={meal.idMeal}/>
                )
            })}
        </div>
    )
}

export default Meals