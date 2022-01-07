 
import { createContext } from 'react';
import { TPost } from '../../types/Posts';
import { TPostsState } from './PostsState';

interface PostsContextProps {
	postsState: TPostsState; 
	getPosts: (query: string, page: number) => void;
	addFavorite: (post:TPost) => void; 
	removeFavorite: (id: number) => void;
} 

export const PostsContext = createContext({} as PostsContextProps);