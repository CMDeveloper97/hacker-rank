import '../styles/components/Post.css';
import Heart from '../assets/heart.svg';
import HeartOutline from '../assets/heart-outline.svg';

export const Post = () => {

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
        <p>3 hours ago by author</p>
        <p>Progressive Web Apps with React.js: Part 1 - Introduction</p>
      </div>
      <div className='Post__button-container'>
        <img className='Post__button' src={HeartOutline} alt="" onClick={(e)=>functionChildExample(e, 1)} />
      </div> 
    </div>
  );
};
