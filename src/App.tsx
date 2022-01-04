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
import { useState } from "react";

function App() {
  const [favsSelected, setfavsSelected] = useState(false)

  return (
    <div className="App"> 
      <Header />
 

      <pre>
        {'favsSelected: ' + JSON.stringify(favsSelected)}
      </pre>

      <MainContainer>
        <FavsSelector selected={favsSelected} onClick={setfavsSelected} />
        <Filter />
        <PostsContainer />
        <Pagination />
      </MainContainer>
    </div>
  );
}

export default App;
