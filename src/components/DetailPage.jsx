import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {BsYoutube} from "react-icons/bs";

function DetailPage() {

    const {id} = useParams()

    const [meals, setMeals] = useState({})
    useEffect(()=> {
        fetchData()
    },[])

    const fetchData = async () => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const {meals} = await api.json()
        setMeals(meals[0])
        console.log(meals[0])
    }

    return (
        <div className="grid grid-rows-1 grid-flow-col gap-6">
            <img className={'h-[500px] rounded objective-cover'} src={meals.strMealThumb} alt=""/>
            <div>
                <h1 className={'text-3xl font-bold mb-3'}>{meals.strMeal}</h1>
                <p className={'text-2xl font-semibold mb-3'}>
                    Category: <span className={'font-normal'}>{meals.strCategory}</span>
                </p>
                <p className={'text-2xl font-semibold mb-3'}>
                    Country: <span className={'font-normal'}>{meals.strArea}</span>
                </p>
                <p className={'text-1xl leading-8'}>{meals.strInstructions}</p>
                <a href={meals.strYoutube}>
                    <BsYoutube className={'text-red-500 text-4xl'}/>
                </a>
            </div>
        </div>
    )
}

export default DetailPage
