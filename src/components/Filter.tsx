import "../styles/components/Filter.css";

import { Dispatch, SetStateAction } from 'react';
import { OptionType } from "../types/OptionsType"; 
import Select from 'react-select' 

import Angular from '../assets/angular.png'
import React from '../assets/react.png'
import Vue from '../assets/vue.png'

type Props = {
  query: OptionType;
  setQuery: Dispatch<SetStateAction<OptionType>>; 
}

const options: OptionType[] = [
  { value: 'angular', label: 'Angular', image: Angular },
  { value: 'react', label: 'React', image: React  },
  { value: 'vue', label: 'VueJs', image: Vue  }
]

export const Filter = ({query, setQuery}: Props) => {    
  return (
    <div className='Container Filter'>
       <Select 
        value={query}
        isSearchable={false}
        options={options} 
        onChange={(e: any)=>setQuery(e)}
        formatOptionLabel={opt=>(
          <div style={{display:'flex', alignItems:'center'}}>
            <img src={opt.image}  width="20px" alt="filter-img"/>
            <p style={{marginLeft:'1rem'}}>{opt.label} </p>
          </div>
        )}

      />  
    </div>
  );
};
