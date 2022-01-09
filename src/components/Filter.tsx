import "../styles/components/Filter.css";

import { useContext } from 'react';
import { OptionType } from '../types/OptionsType'; 
import Select from 'react-select' 

import Angular from '../assets/angular.png'
import React from '../assets/react.png'
import Vue from '../assets/vue.png'
import { PostsContext } from '../context/posts/PostsContext';

const options: OptionType[] = [
  { value: 'angular', label: 'Angular', image: Angular },
  { value: 'react', label: 'React', image: React  },
  { value: 'vue', label: 'VueJS', image: Vue  }
]

export const Filter = () => {      
  const { postsState:{ filter }, changeFilter } = useContext(PostsContext); 

  const onChangeFilter = (e:OptionType) => { 
    if(e.value !== filter.value){ 
      changeFilter(e);
    }
  }

  return (
    <div className='Container Filter'>
      <div className="Filter__main"> 
        <Select 
          value={filter}
          styles={customStyles} 
          isSearchable={false}
          options={options} 
          onChange={(e: any)=>onChangeFilter(e)}  
          formatOptionLabel={opt=><FilterOpt opt={opt}/> } 
          components={{
            IndicatorSeparator: () => null
          }}
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

const customStyles = {
  control: (base: any) => ({
    ...base,
    cursor:'pointer', 
    border: '1px solid black !important', 
    boxShadow: '0 !important', 
    '&:hover': {
      backgroundColor:'var(--gray-hover)'
   }
  }),
  option: (provided: any, state:any) => { 
    return {
      ...provided, 
      cursor:'pointer',
      color: 'black',
      padding: 12,
      backgroundColor: 'white', 
      '&:hover': {
        backgroundColor:'var(--gray-hover)'
     }
    }
  },  
  dropdownIndicator: (provided: any, state:any) => { 
    return{
      ...provided, 
      color: 'black'
    }
  },
  singleValue:(provided: any, state:any) => {
    return {
      ...provided, 
      border: '1x solid black'
    }
  }, 
}