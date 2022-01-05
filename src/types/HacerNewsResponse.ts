import { TPost } from './Posts';

export type THackerNewsResponse = { 
	hits: TPost[];
	hitsPerPage: number;
	nbHits: number;
	nbPages: number;
	page: number; 
}