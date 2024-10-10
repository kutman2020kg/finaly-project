import React from 'react'
import "./Header.scss"
import bilyard from "../../assets/svg/bilyard.svg"
import register from "../../assets/svg/register.svg"
import paket from "../../assets/svg/paket.svg"
import menu from "../../assets/svg/menu.svg"
import search from "../../assets/svg/search.svg"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='content'>
      <div className='header container'>
        <div className='b'>
        <img src={bilyard} alt="" /> 
        </div>
        <div className='vip'>
        </div>
        <div className='texti'>
          <p>Дизайн-студия интерьеров <br />
          бильярдных и игровых комнат </p>
        </div>
        <div className='number'>
          <h2>+996 (222 15 11 08)</h2>
          <h2>+996 (556 61 25 66)</h2>
          </div>
          <div className='call'>
          <button>Заказать звонок</button>
          </div>
          <div className='op'>
          <select>
            <option value="kg">KGZ</option>
            <option value="re">RUS</option>
            <option value="en">ENG</option>
          </select>
          </div>
          <div className='register'>
          Войти / Регистрация
          <img src={register} alt="" />
          <img src={paket} alt="" />
          </div>
      </div>
      <div className='header-home container'>
        <ul>
          <img src={menu} alt="" />
          <li></li>
          <Link to="/"><li>Каталог товаров</li></Link>
          <Link to="/project"><li>Проекты</li></Link>
          <li>Как купить</li>
          <Link to="/service"><li>Новости</li></Link>
          <Link to="/about"><li>О компании</li></Link>
          <Link to="/cooperation"><li>Сотрудничество</li></Link>
          <Link to="/contact"><li>Контакты</li></Link>
          <div className='sear'>
            <img src={search} alt="" />
            </div>
            <div className='inputs'>
          <input type="title" placeholder='поиск'/>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Header
