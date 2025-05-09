import { useState } from "react"
import SearchBar from "./components/SearchBar"
import RobotsList from "./components/RobotsList"
import searchRobots from "./api"


function App() {
  // searchRobots
  const [robots, setrobots] = useState ([])

  const handleSubmit = async(term) => {
    console.log('Usted esta buscando con: ', term)
    const result = await searchRobots(term)
    setrobots(result)
  }
  return (
    <>
      <h1>My Robots</h1>
      <SearchBar onSubmit={handleSubmit}/>
      <RobotsList robots={robots}/>
    </>
  )
}

export default App