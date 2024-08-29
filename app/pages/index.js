// pages/index.js
import { SignIn, UserButton } from "@clerk/clerk-react";

export default function Home() {
  return (
    <div>
      <UserButton />
      <SignIn />
    </div>
  );
}
