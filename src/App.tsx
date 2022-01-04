import "./App.css";
import {
  Header,
  MainContainer,
  FavsSelector,
  Filter,
  Pagination,
  PostsContainer,
} from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer>
        <FavsSelector />
        <Filter />
        <PostsContainer />
        <Pagination />
      </MainContainer>
    </div>
  );
}

export default App;
