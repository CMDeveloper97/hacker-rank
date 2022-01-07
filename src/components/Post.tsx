import '../styles/components/Post.css';
import Heart from '../assets/heart.svg';
import HeartOutline from '../assets/heart-outline.svg';
import { TPost } from '../types/Posts'; 
import { useContext } from 'react';   
import { PostsContext } from '../context/posts/PostsContext'; 

export const Post = (props: TPost) => {
  const { author, created_at, story_title, story_url, favorite } = props; 
  const { addFavorite, removeFavorite } = useContext(PostsContext); 
 
  const functionExample = () =>{ 
    window.open(story_url, '_blank'); 
  }

  const onHeartPress = (e: any, post: TPost) =>{  
    e.stopPropagation();   
    if(favorite){ 
      removeFavorite(post.story_id)
    }else {
      addFavorite(post);
    }
    

  }

  return (
    <div className="Post" onClick={functionExample}>
      <div className='Post__main'> 
        <p>{favorite}</p>
        <p>{author}</p>
        <p>{story_title}</p>
      </div>
      <div className='Post__button-container'>
        <img className='Post__button' src={ favorite ? Heart : HeartOutline} alt="" onClick={(e)=>onHeartPress(e, props)} />
      </div> 
    </div>
  );
};
