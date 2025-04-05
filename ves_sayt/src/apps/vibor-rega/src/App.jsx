import './App.css'

function ChooseReg() {


  
  const handleClickUser = () => {
    window.location.href = 'http://localhost:6001/reg';
  }
  const handleClickRecruiter = () => {
    window.location.href = 'http://localhost:6001/reg-recruiters';
  }
  const handleClickOrganization = () => {
    window.location.href = 'http://localhost:6001/reg-organizations';
  }

  return (
    <>
      <div className="ViborReg">
        <h1 className='text'>Как вы хотите зарегистрироваться?</h1>
          <button className="btn-choose" id="user" onClick={handleClickUser}>Как обычный пользователь</button>
          <button className="btn-choose" id="recruiter" onClick={handleClickRecruiter}>Как работодатель</button>
          <button className="btn-choose" id="organization" onClick={handleClickOrganization}>Как организация</button>
          <div className="mini-text">© 2025 FindIt</div>
      </div>
    </>
  )
}

export default ChooseReg
