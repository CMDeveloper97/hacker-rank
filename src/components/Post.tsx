import '../styles/components/Post.css';
import Heart from '../assets/heart.svg';
import HeartOutline from '../assets/heart-outline.svg';
import { TPost } from '../types/Posts';
 

export const Post = (props: TPost) => {
  const { author, created_at, story_title, story_url } = props;

  const functionExample = () =>{
    console.log("Parent"); 
  }

  const functionChildExample = (e: any, id: number) =>{
    /**
     * stopPropagation - Prevents further propagation of the current event in the bubbling phase
     */ 
    e.stopPropagation();  
  }

  return (
    <div className="Post" onClick={functionExample}>
      <div className='Post__main'> 
        <p>{author}</p>
        <p>{story_title}</p>
      </div>
      <div className='Post__button-container'>
        <img className='Post__button' src={HeartOutline} alt="" onClick={(e)=>functionChildExample(e, 1)} />
      </div> 
    </div>
  );
};
