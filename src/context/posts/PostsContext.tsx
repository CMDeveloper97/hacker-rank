 
import { createContext } from 'react';
import { OptionType } from '../../types/OptionsType';
import { TPost } from '../../types/Posts';
import { TPostsState } from './PostsState';

interface PostsContextProps {
	postsState: TPostsState; 
	getPosts: (query: OptionType, page: number) => void;
	addFavorite: (post:TPost) => void; 
	removeFavorite: (id: string) => void;
	changeFilter: (filter: OptionType) => void;
} 

export const PostsContext = createContext({} as PostsContextProps);