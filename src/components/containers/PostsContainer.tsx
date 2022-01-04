import React from 'react'
import { Post } from '../Post'

export const PostsContainer = () => {
	return (
		<div>
			{
				[1,2,3,4,5].map(element=> ( 
					<Post/>
				))
			}
		</div>
	)
}
