import './App.css'

function ChooseLogin() {


  
  const handleClickUser = () => {
    window.location.href = 'http://localhost:6001/log';
  }
  const handleClickRecruiter = () => {
    window.location.href = 'http://localhost:6001/log-recruiters';
  }

  return (
    <>
    <div className="Page-buttons">
        <nav className='navigation'>
          <a className="btn1 fiol" href="http://localhost:6001/main-page">Главная страница</a>
          <a className="btn1 fiol" href="http://localhost:6001/vakansii" id="vak">Вакансии</a>
          <a className="btn1 fiol" href="http://localhost:6001/task" id="zad">Задание</a>

        </nav>
        </div>
      <div className="ViborLogin">
        <h1 className='text'>Как вы хотите войти?</h1>
          <button className="btn-choose" id="user" onClick={handleClickUser}>Как обычный пользователь</button>
          <button className="btn-choose" id="recruiter" onClick={handleClickRecruiter}>Как работодатель</button>
          <div className="mini-text">© 2025 FindIt</div>
      </div>
    </>
  )
}

export default ChooseLogin
