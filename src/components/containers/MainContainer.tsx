import React from 'react'

type Props = {
	children: React.ReactNode;
}

export const MainContainer = ({children}: Props) => {
	return (
		<div>
			{children}
		</div>
	)
}
