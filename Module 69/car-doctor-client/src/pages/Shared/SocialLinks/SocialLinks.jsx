import React, { useContext } from "react";
import { AuthContext } from "../../../providers/ContextAuth";

const SocialLinks = () => {
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogle = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="divider my-5">OR</div>
      <button className="btn btn-outline btn-circle" onClick={handleGoogle}>
        G
      </button>
    </div>
  );
};

export default SocialLinks;
