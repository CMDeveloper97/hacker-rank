
import '../../styles/components/PostsContainers.css';
import { TPost } from '../../types/Posts'; 
import { Post } from '..';

type Props = {
	posts: TPost[];
}

export const PostsContainer = ({posts}: Props) => {
	return (
		<div className='Container Posts-container'>
			{
				posts.map(post=> ( 
					<Post key={post.objectID} {...post} />
				))
			}
		</div>
	)
}
