import { Dispatch, SetStateAction, useState } from 'react';
import { TPost } from '../types/Posts';
import { THackerNewsResponse } from '../types/HacerNewsResponse';
 
export const usePosts = () => {
	const [posts, setPosts] = useState<TPost[]>([]) 

	const setNewPosts = async (
		query: string, 
		page: number, 
		setTotalPages: Dispatch<SetStateAction<number>>
	) => {
		const api = await fetch(`https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${page}`);
		const response: THackerNewsResponse = await api.json();   
		
		const savePosts:TPost[] = response.hits.filter(post => { 
			if(post.author !== null && post.created_at !== null && post.story_title !== null && post.story_url !== null){
				return post;
			}
		}); 

		setPosts(savePosts);
		setTotalPages(response.nbPages);
	}

	return {
		posts,
		setNewPosts
	}
}
