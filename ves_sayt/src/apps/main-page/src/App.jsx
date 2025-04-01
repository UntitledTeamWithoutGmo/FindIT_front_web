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
        <div className='vacancy-buttons'>
          <a className='btn1 brown' href='http://localhost:6001/log'>Войти</a>
          <a className='btn1 blue' href='http://localhost:6001/log-recruiters'>Войти как работодатель</a>
          <a className='btn1 green' href='http://localhost:6001/reg'>Зарегистрироваться</a>
          <a className='btn1 blue' href='http://localhost:6001/reg-recruiters'>Зарегистрироваться как работодатель</a>
        </div>
        <p className="mini-text" id="y">© 2025 FindIt</p>
      </div>
    </>
  )
}

export default MainPage
