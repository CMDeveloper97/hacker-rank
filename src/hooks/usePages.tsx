import React, { useState } from 'react'

export const usePages = () => {
	const [page, setPage] = useState(0);
	const [totalPages, setTotalPages] = useState(0);

	return {
		page,
		totalPages,
		setPage,
		setTotalPages
	}
}
