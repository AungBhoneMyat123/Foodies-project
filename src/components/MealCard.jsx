import React from "react";
import {BiSearch} from "react-icons/bi";
import './MealCard.css'
import {Link} from "react-router-dom";

function MealCard ({name, image, id}) {
    return (
        <div className={'parent w-[17rem] flex justify-center relative'}>
            {/*<p className={'text-wrap'}>{name}</p>*/}
            <img src={image} className='h-[15rem] w-[16rem] objective-cover rounded-lg' alt=""/>
            <Link to={`/detail/${id}`} >
                <p className={'icon z-[-1] w-10 h-10 right-[40%] bg-orange-500 flex justify-center items-center rounded-[100%] top-[40%] absolute'}>
                    <BiSearch className={'text-3xl text-gray-500'}/>
                </p>
            </Link>
        </div>
    )
}

export default MealCard