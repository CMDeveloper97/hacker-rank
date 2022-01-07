import "./App.css";
import "./styles/global.css" 

import { PostsProvider } from './context/posts/PostsState';
import { MainScreen } from "./screens/MainScreen";

const App = () => {

  
  return(
    <PostsProvider>
      <MainScreen/>
    </PostsProvider>
  )
}    
 
export default App;
