import React, {useEffect, useState} from "react";
import {GiKnifeFork} from "react-icons/gi";
import {NavLink, useNavigate} from "react-router-dom";

function Navbar() {

    const [search, setSearch] = useState("")
    const nav = useNavigate()

    const submitHandler = e => {
        e.preventDefault()
        nav(`/search/${search}`)
    }

    return (
        <div className='flex justify-around h-[60px] content-center items-center mx-3 rounded-lg shadow'>
            <NavLink to={'/'}>
                <GiKnifeFork/>
            </NavLink>
            <form action="" onSubmit={submitHandler}>
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search Meal' className='ps-2 pt-2 pb-2 focus:outline-none placeholder:italic border-b-2 border-b-grey-500'/>
            </form>
        </div>
    )
}

export default Navbar
