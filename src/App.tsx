import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { MainContainer } from "./components/containers/MainContainer";
import { FavsSelector } from "./components/FavsSelector";
import { Filter } from './components/Filter';
import { Pagination } from './components/Pagination';
import { PostsContainer } from "./components/containers/PostsContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer>
        <FavsSelector/>
        <Filter/>
        <PostsContainer/>
        <Pagination/>
      </MainContainer>
    </div>
  );
}

export default App;
