import React, { useReducer } from "react";
import { TPost } from "../../types/Posts";
import { PostsReducer } from "./PostsReducer";
import { PostsContext } from "./PostsContext";
import { THackerNewsResponse } from "../../types/HacerNewsResponse";
import { OptionType } from "../../types/OptionsType";
import Angular from '../../assets/angular.png'

export interface TPostsState {
  posts: TPost[];
  favorites: TPost[];
  filter: OptionType;
  page: number;
  totalPages: number;
}

export const PostsProvider = ({ children }: any) => {
  const favorites = localStorage.getItem("hacker_favorites") as string; 
  const filter = localStorage.getItem("hacker_filter") as string; 

  const initialState: TPostsState = {
    posts: [],
    favorites: favorites ? JSON.parse(favorites) : [],
    filter: filter ? JSON.parse(filter) : {value:'angular', label: 'Angular', image: Angular  },
    page:1,
    totalPages: 1
  };

  const [postsState, dispatch] = useReducer(PostsReducer, initialState);

  const changeFilter = (filter: OptionType) => { 
    dispatch({ type: 'changeFilter', payload: filter });
  }

  const addFavorite = (post: TPost) => {
    var index = postsState.posts.map((x) => x.objectID).indexOf(post.objectID);
    postsState.posts[index] = { ...postsState.posts[index], favorite: true };

    post = { ...post, favorite: true };
    dispatch({ type: "addFavorite", payload: post });
  };

  const removeFavorite = (id: string) => {
    var index = postsState.posts.map((x) => x.objectID).indexOf(id);
    postsState.posts[index] = { ...postsState.posts[index], favorite: false };

    dispatch({ type: "removeFavorite", payload: id });
  };

  const getPosts = async (query: OptionType, page: number,) => {
    const api = await fetch(
      `https://hn.algolia.com/api/v1/search_by_date?query=${query.value}&page=${page}`
    );
    const response: THackerNewsResponse = await api.json();
    const savePosts: TPost[] = response.hits.filter((post) =>
        post.author !== null &&
        post.created_at !== null &&
        post.story_title !== null &&
        post.story_url !== null
    );

    savePosts.forEach((post, idx) => {
      if (postsState.favorites.find((x) => x.objectID === post.objectID)) {
        savePosts[idx] = { ...post, favorite: true };
      }
    });

    dispatch({ type: "getPosts", payload: {posts: savePosts, totalPages: response.nbPages} });
  };

  return (
    <PostsContext.Provider
      value={{
        postsState,
        addFavorite,
        getPosts,
        removeFavorite,
        changeFilter
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
