const Post = ({post}) => {
    const {id, title, body} = post
    return (
        <>
        <div className="PostsCards">
            <h3>Id: {id}</h3>
            <h2>Title: {title}</h2>
            <p>Description: {body}</p>
        </div>
        </>
    );
};

export default Post;