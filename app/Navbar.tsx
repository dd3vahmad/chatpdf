import React from "react";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    // <div>
    //   <LoginLink>Sign in</LoginLink>
    //   <RegisterLink>Sign up</RegisterLink>
    //   {user && user.family_name}
    // </div>
    <nav className="flex justify-between p-10">
      <h1>Renai</h1>
      {user ? <p>Welcome, {user.given_name}</p> : <LoginLink>Login</LoginLink>}
    </nav>
  );
};

export default Navbar;
