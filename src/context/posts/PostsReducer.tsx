 import { TPostsState } from './PostsState';
import { TPost } from '../../types/Posts';
import { OptionType } from '../../types/OptionsType';

type PostAction = 
    {type: 'changeFilter'; payload: OptionType} 
  | {type: 'addFavorite'; payload: TPost} 
  | {type: 'removeFavorite', payload: string } 
  | {type: 'getPosts', payload: {posts: TPost[], totalPages: number} } 

export const PostsReducer = (state: TPostsState, action: PostAction): TPostsState => {
	switch (action.type) {
		case 'changeFilter':
			localStorage.setItem('filter', JSON.stringify(action.payload));
			return{
				...state,
				filter: action.payload,
				page: 1,
				posts: []
			}
		case 'addFavorite': 
			localStorage.setItem('favorites', JSON.stringify([...state.favorites, action.payload ]));
			return {
				...state,
				favorites: [...state.favorites, action.payload ]
			} 
		case 'removeFavorite':  
			const newArray = state.favorites.filter(favorite=> favorite.objectID !== action.payload);
			localStorage.setItem('favorites', JSON.stringify(newArray));
			return {
				...state,
				favorites: state.favorites.filter(favorite=> favorite.objectID !== action.payload)
			}
		case 'getPosts':     
		
			return {
				...state,
				posts: state.posts.concat(action.payload.posts),
				page: state.page+=1,
				totalPages: action.payload.totalPages
			}
		default:
			return state;
	}
}
