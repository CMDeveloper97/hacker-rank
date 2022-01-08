import "../styles/components/Filter.css";

import { Dispatch, SetStateAction } from 'react';
import { OptionType } from "../types/OptionsType"; 
import Select from 'react-select' 

type Props = {
  query: OptionType;
  setQuery: Dispatch<SetStateAction<OptionType>>; 
}

const options: OptionType[] = [
  { value: 'angular', label: 'Angular' },
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'VueJs' }
]

export const Filter = ({query, setQuery}: Props) => {   
  return (
    <div className='Container Filter'>
       <Select 
        value={query}
        isSearchable={false}
        options={options} 
        onChange={(e: any)=>setQuery(e)}
      />  
    </div>
  );
};
