import "../styles/components/Filter.css";

import { Dispatch, SetStateAction } from 'react';
import { OptionType } from "../types/OptionsType"; 
import Select from 'react-select' 

import Angular from '../assets/angular.png'
import React from '../assets/react.png'
import Vue from '../assets/vue.png'

type Props = {
  setQuery: Dispatch<SetStateAction<OptionType>>; 
}

const options: OptionType[] = [
  { value: 'angular', label: 'Angular', image: Angular },
  { value: 'react', label: 'React', image: React  },
  { value: 'vue', label: 'VueJs', image: Vue  }
]

const customStyles = {
  option: (provided: any, state:any) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200,
  }),
  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

export const Filter = ({setQuery}: Props) => {    
  return (
    <div className='Container Filter'>
      <div className="Filter__main">
        <Select 
          defaultValue={options[0]} 
          isSearchable={false}
          options={options} 
          onChange={(e: any)=>setQuery(e)}  
          formatOptionLabel={opt=><FilterOpt opt={opt}/> } 
        />  
      </div>
    </div>
  );
};
 
const FilterOpt = ({opt}: {opt: OptionType}) => {
  return (
    <div style={{display:'flex', alignItems:'center'}}>
      <img src={opt.image}  width="20px" alt="filter-img"/>
      <p style={{marginLeft:'1rem'}}>{opt.label} </p>
    </div>
  )
}

