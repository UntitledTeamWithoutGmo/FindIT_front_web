import './App.css'
import {Works} from "./components/works.jsx";

function App() {
  return (
    <>
        <div className="head">
            <div className="nav">
                Find It
                <a href="" className="u">Home</a>
                <a href="" className="k">Your Profile</a>
                <a href="" className="k">Registation</a>
                <a href="" className="k">Login</a>
                <a href="" className="k">For recruiters</a>
            </div>
        </div>
        <div className="main">
          <div className="top">
              <h1 className="text">Have you been looking for a job as a programmer for a long time, and you can't find one?</h1>
          </div>
          <Works />
        </div>
    </>
  )
}

export default App