'use client'

import React, { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { words } from  "/lib/data";

const SearchBar = () => {

  const [activeSearch, SetActiveSearch] = useState ([])

  const handleSearch = (e) => {
    if(e.target_value == ''){
      SetActiveSearch([])
        return false
    }
    SetActiveSearch(words.filter(w => w.includes(e.target_value)).slice(0.8))
  }
  return (
    <form className='w-[450px] relative '>
        <div className="relative">
          <input type="search" placeholder = 'Type Here' className='w-full p-4 rounded-full bg-slate-800' onChange ={(e) => handleSearch(e)} />
          <button className='absolute right-1 top-2 p-3.5 bg-slate-900 rounded-full  border-white'>
  <AiOutlineSearch />
         

          </button>
        </div>
        {
          activeSearch.length > 0 && (
            <div className='absolute top-20 p-4 bg-slate-800 text-white w-full rounded left-1/2 -translate-x-1/2 flex flex-col gap-2'>
              {
                activeSearch.map (s => (
                  <span>{s}</span>
                ))
              }
            </div>
          )
        }


 
      </form>
  )
}

export default SearchBar