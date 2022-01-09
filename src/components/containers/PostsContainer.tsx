import "../../styles/components/PostsContainers.css";
import { TPost } from "../../types/Posts";
import { Post } from "..";
import InfiniteScroll from "react-infinite-scroll-component";
import { PostsContext } from "../../context/posts/PostsContext";
import { useContext } from "react";

type Props = {
  posts: TPost[];
  favSelected: boolean;
};

export const PostsContainer = ({ posts, favSelected }: Props) => {
  const {
    postsState: { filter, page, totalPages },
    getPosts,
  } = useContext(PostsContext);

  const fetchMoreData = () => {
    getPosts(filter, page);
  };

  return (
    <>
      {favSelected ? ( 
	   <PostsContainerMain posts={posts} />
      ) : (
			<InfiniteScroll
			dataLength={page * 20}
			next={fetchMoreData}
			hasMore={page <= totalPages}
			loader={<h4 className="Posts__loading">Loading...</h4>}
		>
			<PostsContainerMain posts={posts} />
		</InfiniteScroll>
      )}
    </>
  );
};

export const PostsContainerMain = ({ posts }: { posts: TPost[] }) => {
  return (
    <div className="Container Posts-container">
      {posts.map((post) => (
        <Post key={post.objectID} {...post} />
      ))}
    </div>
  );
};
