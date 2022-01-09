import React, { useContext, useEffect } from "react";
import { PostsContext } from "../context/posts/PostsContext"; 
import {
	Header,
	MainContainer,
	PostsContainer,
	FavsSelector,
	Filter, 
  } from "../components/"; 
  
import { useState } from "react";
import { usePosts } from "../hooks/usePosts"; 
import { OptionType } from "../types/OptionsType";

export const MainScreen = () => {
  const { postsState, getPosts } = useContext(PostsContext);
  const { favorites, posts, filter } = postsState; 

  const [isFav, setIsFav] = useState(false); 
  const { page  } = usePosts();

  useEffect(() => {  
    getPosts(filter, page);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <>
      <Header />
      <MainContainer>
        <FavsSelector selected={isFav} onClick={setIsFav} />
        {!isFav && <Filter />} 
        <PostsContainer posts={isFav ? favorites : posts} /> 
        {/* <Pagination page={page} totalPages={totalPages} setPage={setPage} /> */}
      </MainContainer>
    </>
  );
};
