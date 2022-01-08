 import { TPostsState } from './PostsState';
import { TPost } from '../../types/Posts';

type PostAction = 
  | {type: 'addFavorite'; payload: TPost} 
  | {type: 'removeFavorite', payload: string } 
  | {type: 'getPosts', payload: TPost[] } 

export const PostsReducer = (state: TPostsState, action: PostAction): TPostsState => {
	switch (action.type) {
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
				posts: action.payload
			}
		default:
			return state;
	}
}
