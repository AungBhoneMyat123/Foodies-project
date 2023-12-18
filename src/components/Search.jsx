import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {BiSearch} from "react-icons/bi";
import './MealCard.css'

function Search ({id}) {

    const {name} = useParams()

    const [item, useItem] = useState({})
    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        const {meals} = await api.json()
        useItem(meals[0])
    }

    return (
        <div className={'parent w-[17rem] flex justify-center relative'}>
            <img src={item.strMealThumb} className='h-[15rem] w-[16rem] objective-cover rounded-lg' alt=""/>
            <Link to={`/detail/${id}`} >
                <p className={'icon z-[-1] w-10 h-10 right-[40%] bg-orange-500 flex justify-center items-center rounded-[100%] top-[40%] absolute'}>
                    <BiSearch className={'text-3xl text-gray-500'}/>
                </p>
            </Link>
        </div>
    )
}

export default Search