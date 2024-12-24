import './App.css'
import { PostComponent } from './components/PostCardComponent'
function App() {

  return (
    <>
    <PostComponent 
      name = {"kumar Bishwajeet"}
      subtitle = {"Software Engineer"}
      time = {1}
      image = {"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
      description = {"I am currently woring in Adani"}
    ></PostComponent>
    </>
  )
}

export default App
