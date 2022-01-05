import "./App.css";
import "./styles/global.css"

import {
  Header,
  MainContainer,
  FavsSelector,
  Filter,
  Pagination,
  PostsContainer,
} from "./components";
import { useEffect, useState } from "react";
import { TPost } from "./types/Posts";

function App() {
  const [favsSelected, setfavsSelected] = useState(false);
  const [query, setQuery] = useState<string>('angular');
  const [posts, setPosts] = useState<TPost[]>([])

  useEffect(() => {
    fetchAPI(query);
  }, [query])

  const fetchAPI = async (query: string) => {
    const api = await fetch(`https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=0`);
    const response = await api.json();  
    setPosts(response.hits);
  }

  return (
    <div className="App"> 
      <Header /> 
      
      <pre>
        {'favsSelected: ' + JSON.stringify(favsSelected)} 
      </pre>

      <MainContainer>
        <FavsSelector selected={favsSelected} onClick={setfavsSelected} />
        <Filter query={query} setQuery={setQuery}/>
        <PostsContainer posts={posts} />
        <Pagination />
      </MainContainer>
    </div>
  );
}

export default App;
