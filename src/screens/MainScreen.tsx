import React, { useContext, useEffect } from "react";
import { PostsContext } from "../context/posts/PostsContext"; 
import {
	Header,
	MainContainer,
	PostsContainer,
	FavsSelector,
	Filter,
	Pagination, 
  } from "../components/"; 
  
import { useState } from "react";
import { usePosts } from "../hooks/usePosts"; 

export const MainScreen = () => {
  const { postsState, getPosts } = useContext(PostsContext);
  const { favorites, posts } = postsState; 

  const [favsSelector, setFavsSelector] = useState(false);
  const [query, setQuery] = useState<string>("angular");
  const { page, totalPages, setPage } = usePosts();

  useEffect(() => { 
    getPosts(query, page);
  }, [query, page]);

  return (
    <>
      <Header />
      <MainContainer>
        <FavsSelector selected={favsSelector} onClick={setFavsSelector} />
        {!favsSelector && <Filter query={query} setQuery={setQuery} />} 
        <PostsContainer posts={favsSelector ? favorites : posts} /> 
        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      </MainContainer>
    </>
  );
};
