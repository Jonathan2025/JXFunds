import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Chat from "./Chat";
import Login from "../../pages/Login";

const Profile = (props) => {
  const { user, isAuthenticated} = useAuth0();

  if (!isAuthenticated) {
    return (
      <Login />
    );
  }

  return (
    isAuthenticated && (
      <div>
        {/* pass in the username as a prop into the chat component */}
        <Chat userName={user.name} />
      </div>
    )
  );
};

export default Profile;