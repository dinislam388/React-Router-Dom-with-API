import './user.css'
const User = ({user}) => {
    const {name, username, email } = user
    return (
        <>
        <div className='cards'>
            <div className="userInfo">
                <h1>Name: {name}</h1>
                <h2>UserName: {username}</h2>
                <p>{email}</p>
            </div>
        </div>
        </>
    );
};

export default User;