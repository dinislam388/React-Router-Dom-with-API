import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import NavBar from "../../Leyout/NavBar/NavBar";

const Users = () => {
    const users = useLoaderData()
    console.log(users);
    return (
        <div>
            <NavBar/>
            <div className="heading">
                <h1>Users API From JSON Placeholder</h1>
                <h1>User Length:{users.length}</h1>
            </div>
            <div className="userMap">
                {
                users.map((user) => (
                    <User key={User.id} user={user}/>
                ))
                }
            </div>
        </div>
    );
};

export default Users;