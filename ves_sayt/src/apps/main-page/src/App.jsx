import { useState } from 'react'
import './App.css'

function MainPage() {
  
  return (
    <>
      <div>
        <div>
          <p className="fgtext">FindIt</p>
          <h3 className="hgtext">Платформа поиска работы</h3>
          <h3 className="hgtext" id="hg">Встроенная система уровней</h3>
          <h3 className="hgtext" id="fg">Код и задания каждый день</h3>
        </div>
        <div className='vacancys-buttons'>
          <a className='btn1 brown' href='http://localhost:6001/vibor-logina'>Войти</a>
          <a className='btn1 green' href='http://localhost:6001/vibor-rega'>Зарегистрироваться</a>
          <a className='btn1 fiol' href='http://localhost:6001/prof'>Профиль</a>
        </div>
        <p className="mini-text" id="y">© 2025 FindIt</p>
      </div>
    </>
  )
}

export default MainPage
