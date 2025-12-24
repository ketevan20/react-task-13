import { useState } from "react";
import Container from "./components/Container/Container"
import WithTheme from "./components/WithTheme/WithTheme"

const App = () => {
  const [theme, setTheme ] = useState("light");

  function ToggleTheme () {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  const ContainerWiththeme = WithTheme(Container);

  return (
    <div className="flex flex-col items-center">
      <ContainerWiththeme theme={theme} toggleTheme={ToggleTheme}/>
    </div>
  )
}

export default App