import React, { useContext, useEffect } from "react";
import { PostsContext } from "../context/posts/PostsContext"; 
import {
	Header, 
	PostsContainer,
	FavsSelector,
	Filter, 
  } from "../components/"; 
  
import { useState } from "react";
import { usePosts } from "../hooks/usePosts";  

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
      <FavsSelector selected={isFav} onClick={setIsFav} />
       {!isFav && <Filter />} 
       <PostsContainer posts={isFav ? favorites : posts} />  
        {/* <Pagination page={page} totalPages={totalPages} setPage={setPage} /> */} 
    </>
  );
};
