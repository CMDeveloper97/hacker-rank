import { Dispatch, SetStateAction } from 'react';
type Props = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>; 
}

export const Filter = ({query, setQuery}: Props) => {   
  return (
    <div className='Container'>
      <select onChange={e=>setQuery(e.target.value)} value={query}>
        <option value="angular">Angular</option>
        <option value="react">React</option>
        <option value="vue">Vue</option>
      </select>
    </div>
  );
};
