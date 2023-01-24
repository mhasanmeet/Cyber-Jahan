import Home from "./components/home/Home"
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"


function App() {

  const Layout = () => {
    return(
      <>      
        <Navbar/>
        <div className="flex">
          <Sidebar/>
          <Home/>
        </div>
      </>
    )
  }

  return (
    <div className="app">
      <Layout/>
    </div>
  )
}

export default App
