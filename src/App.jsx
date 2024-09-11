
import './App.css'
import Avatar from './components/Avatar'
import UserInfo from './components/UserInfo'
import UserStats from './components/UserStats'

function App() {
  return (
    <>
     <div className="card-container">
      <div className="card">
        < div className="background">
          <img src="/src/assets/bg-pattern-card.svg" alt="Background Pattern" className="background-image" />
        </div>
        <Avatar/>
        <UserInfo/>
        <UserStats/>
      </div>
    </div>
    </>
  )
}

export default App
