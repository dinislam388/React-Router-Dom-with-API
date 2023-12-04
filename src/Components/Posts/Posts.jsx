import { useLoaderData } from "react-router-dom";
import NavBar from "../../Leyout/NavBar/NavBar";
import Post from "../Post/Post";
import './Posts.css'
const Posts = () => {
    const posts = useLoaderData()
    console.log(posts);
    return (
        <>
            <NavBar/>
            <div className="heading">
                <h1>Posts API From JSON Placeholder</h1>
                <h1>Posts Length {posts.length}</h1>
            </div>
            <div className="postsMap">
                {
                    posts.map((post)=> (
                        <Post key={Post.id} 
                        post={post}/>
                    ))
                }
            </div>
        </>
    );
};

export default Posts;