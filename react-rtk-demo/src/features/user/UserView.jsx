import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";


const UserView = () => {
    const users = useSelector(state => state.user)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    return (
        <div>
            <h2>List of users {users.users.length}</h2>
            {users.loading && <div>Loading...</div>}
            {users.error && <div>Error: {users.error}</div>}
            {!users.loading && users.users.length ? (
                <div>
                    {users.users.map(user => <p key={user.id}>{user.name}</p>)}
                </div>
            ) : null}
        </div>
    );
};

export default UserView;