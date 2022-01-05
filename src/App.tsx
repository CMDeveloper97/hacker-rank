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
import { THackerNewsResponse } from "./types/HacerNewsResponse";
import { usePages } from "./hooks/usePages";
import { usePosts } from './hooks/usePosts';

function App() {
  const [favsSelected, setfavsSelected] = useState(false);
  const [query, setQuery] = useState<string>('angular');   
  
  const { posts, setNewPosts } = usePosts();
  const { page, totalPages, setPage, setTotalPages } = usePages();
 
  useEffect(() => {
    setNewPosts(query, page, setTotalPages);
  }, [query, page]) 

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
        {/* <Pagination page={page} totalPages={totalPages} setPage={setPage}/> */}
      </MainContainer>
    </div>
  );
}

export default App;
