import '../styles/components/Post.css';

import Heart from '../assets/heart.svg';
import Hour from '../assets/hour.svg';
import HeartOutline from '../assets/heart-outline.svg';
import { TPost } from '../types/Posts'; 
import { useContext } from 'react';   
import { PostsContext } from '../context/posts/PostsContext'; 
import moment from 'moment';

export const Post = (props: TPost) => {
  const { author, created_at, story_title, story_url, favorite } = props; 
  const { addFavorite, removeFavorite } = useContext(PostsContext);     

  const functionExample = () =>{ 
    window.open(story_url, '_blank'); 
  }

  const onHeartPress = (e: any, post: TPost) =>{  
    e.stopPropagation();   
    if(favorite) removeFavorite(post.objectID)
    else addFavorite(post);
  }

  return (
    <div className="Post" onClick={functionExample}>
      <div className='Post__main'>  
        <div className='Post__hour'>
          <img src={Hour} alt="" />
          <p>{moment(created_at).fromNow()} by {author}</p>
        </div>
        <div className='Post__text'>
          <p>{story_title}</p>
        </div>
      </div>
      <div className='Post__button-container' onClick={(e)=>onHeartPress(e, props)}>
        <img className='Post__button' src={ favorite ? Heart : HeartOutline} alt=""  />
      </div> 
    </div>
  );
};
