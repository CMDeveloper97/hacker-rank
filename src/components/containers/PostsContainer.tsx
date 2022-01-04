import '../../styles/components/PostsContainers.css';
import { Post } from '../Post'

export const PostsContainer = () => {
	return (
		<div className='Container Posts-container'>
			{
				[1,2,3,4,5].map(element=> ( 
					<Post/>
				))
			}
		</div>
	)
}
