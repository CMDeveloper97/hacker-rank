import { Dispatch, SetStateAction } from "react"

type Props = {
	page: number;
	totalPages: number;
	setPage: Dispatch<SetStateAction<number>>
}

export const Pagination = ({page, totalPages, setPage}: Props) => {
	
	const prevPage = () => {
		setPage(page--);
	}
	const nextPage = () => {
		setPage(page++);
	}

	return (
		<div>
			<p onClick={prevPage}>{'<-'}</p>
			<p>{page}</p>
			<p>{totalPages}</p>
			<p onClick={nextPage}>{'->'}</p>
		</div>
	)
}
