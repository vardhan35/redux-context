import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";

const UserContainer = ({ fetchUserData, userData }) => {
  useEffect(() => {
    fetchUserData();
  }, []);
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.err ? (
    <h2>{userData.err}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => <p key={user.id}>{user.name}</p>)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserData: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
