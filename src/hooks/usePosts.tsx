import { useState } from 'react'; 
 
export const usePosts = () => { 
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);  

	return { 
		page,
		totalPages, 
		setPage,
		setTotalPages, 
	}
}
