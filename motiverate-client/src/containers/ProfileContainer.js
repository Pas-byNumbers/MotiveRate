import React from "react";
import UserCard from "../components/cards/UserCard";
import UserItemsContainer from "./UserItemsContainer";

const ProfileContainer = ({ currentUser, handleLogOut }) => {

  // const [userValidate, setUserValidate] = React.useState(false)
  // const [currentUserObj, setCurrentUserObj] = React.useState({})

  

  return (
    <div>
  
      {
        (currentUser && localStorage.token) ? 
        (
          <div>
          <UserCard currentUser={currentUser} handleLogOut={handleLogOut} />
      
          <UserItemsContainer currentUser={currentUser} />
        </div>
        ) : null
      } 
    </div>
    
  );
};

export default ProfileContainer;
