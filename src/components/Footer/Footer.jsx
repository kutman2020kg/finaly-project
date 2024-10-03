import React from 'react'
import "./Footer.scss"
import visa from "../../assets/svg/visa.svg"
import krug from "../../assets/svg/krug.svg"
import mir from "../../assets/svg/mir.svg"
import visac from "../../assets/svg/visac.svg"
import krugc from "../../assets/svg/krugc.svg"
import mirc from "../../assets/svg/mirc.svg"
import bilyard from "../../assets/svg/bilyard.svg"
import inst from "../../assets/svg/inst.svg"
import feisb from "../../assets/svg/feisb.svg"
import wk from "../../assets/svg/wk.svg"
import youtub from "../../assets/svg/youtub.svg"


function Footer() {
  return (
    <div className='main-footer container'>
      <div className='head-footer'>
      <div className='head1'>
        <h3>Компания</h3>
        <ul>
          <li>О компании</li>
          <li>Проекты</li>
          <li>Партнеры</li>
          <li>Новости</li>
          <li>Контакты</li>
        </ul>
      </div>
      <div className='head1'>
        <h3>Информация</h3>
        <ul>
          <li>Способы оплаты</li>
          <li>Условия доставки</li>
          <li>Гарантия на товар</li>
        </ul>
      </div>
      <div  className='head1'>
        <h3>Сотрудничество</h3>
        <ul>
          <li>Дизайнерам</li>
          <li>Поставщикам</li>
        </ul>
      </div>
      <div  className='head1'>
        <h3>Способы оплаты</h3>
        <ul>
          <li>Вы можете оплатить покупки <br /> онлайн, наличными в наших <br /> салонах, а также по <br /> выставленному счёту</li>
        </ul>
        <div className='head-img'>
          <div className='head-icon'>
          <img className='img1' src={visac} alt="" />
          </div>
          <div className='head-icon'>
          <img className='img1' src={krugc} alt="" />
          </div>
          <div className='head-icon'>
          <img className='img1' src={mirc} alt="" />
          </div>
        </div>
      </div>
      <div  className='head1'>
        <h3>Контакты</h3>
        <ul>
          <li>8 (800) 500-29-40</li>
          <li className='zakaz-zvonok' >Заказать звонок</li>
        </ul>
        <div className='web-icons'>
        <img src={inst} alt="" />
        <img src={feisb} alt="" />
        <img src={wk} alt="" />
        <img src={youtub} alt="" />
        </div>
      </div> 
      </div>
       <hr className='head-hr' />
      <div className='botom-footer'>
        <div>
          <img src={bilyard} alt="" />
        </div>
        <div>
          <p>2020 © Группа компаний Бильярд №1</p>
        </div>
        <div>
          <p>Политика конфиденциальности</p>
        </div>
        <div>
          <p>Публичная  оферта</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
