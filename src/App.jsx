
import './App.css'
import Avatar from './components/Avatar'
import UserInfo from './components/UserInfo'
import UserStats from './components/UserStats'

function App() {
  return (
    <>
     <div className="card-container">
      <div className="card">
        <Avatar/>
        <UserInfo/>
        <UserStats/>
      </div>
    </div>
    </>
  )
}

export default App
