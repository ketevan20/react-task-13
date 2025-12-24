import { useState } from "react";
import Profile from "../Profile/Profile"
import WithLoader from "../WithLoader/WithLoader"
import Home from "../Home/Home";

type ContainerType = {
  toggleTheme: () => void;
}

const Container = ({ toggleTheme }: ContainerType) => {
  const [loading, setLoading] = useState(true);

  const ProfileWithLoader = WithLoader(Profile);
  const HomeWithLoader = WithLoader(Home);

  setTimeout(() => {
    setLoading(false);
  }, 10000);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6">
      <button onClick={toggleTheme} className="bg-amber-400 p-6 rounded-2xl text-amber-50 mb-4">Change Theme</button>
      <div className="flex gap-12">
        <ProfileWithLoader isLoading={loading} />
        <HomeWithLoader isLoading={loading} />
      </div>
    </div>
  )
}

export default Container