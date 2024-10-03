import React from 'react'
import "./Home.scss"
import mts from ".././assets/svg/mts.svg"
import nornikel from ".././assets/svg/nornikel.svg"
import rusi from ".././assets/svg/rusi.svg"
import pa from ".././assets/svg/pa.svg"
import rostelecom from ".././assets/svg/rostelecom.svg"
import gazprombank from ".././assets/svg/gazprombank.svg"
import homeImg1 from ".././assets/image/home-img1.png"
import homeImg2 from ".././assets/image/home-img2.png"
import homeImg3 from ".././assets/image/home-img3.png"
import line from ".././assets/svg/line.svg"
import galochka from ".././assets/svg/galochka.svg"
import companyS1 from ".././assets/image/company-sifra.png"
import companyS2 from ".././assets/image/company-sifra2.png"
import bilStol from ".././assets/image/bilyard-stol.png"
import homeCarta from ".././assets/image/home-karta.png"
import vipIcon from ".././assets/svg/vip-icon.svg"
import hFooter from ".././assets/image/hFooter.png"
import left from ".././assets/svg/left-icon.svg"
import right from ".././assets/svg/right.svg"
import homeLogo from ".././assets/image/home-logo.png"
import hIcon from ".././assets/svg/home-icon.svg"

import krut from ".././assets/image/krut.png"
// import stul from "../../pages/image/stul.png"
// import cnop from "../../assets/cnop.svg"
// import bil1 from "../../pages/image/bil1.png"
// import bil2 from "../../pages/image/bil2.png"
// import bil3 from "../../pages/image/bil3.png"
// import bil4 from "../../pages/image/bil4.png"
// import bil5 from "../../pages/image/bil5.png"
// import bil6 from "../../pages/image/bil6.png"

function Home() {
  return (
    <div className='home container'>
      <div className='bliyard-vip'>
      <div className='big container'>
         <img src={krut} alt="" />
         <h1>Экслюзивный <br /> интерьер игровой <br /> комнаты</h1>
         <h3>Индивидуальный дизайн любой сложности</h3>
      </div>
      <div className='but'>
        <p>Узнать подробнее</p>
      </div>
      <div className='strelki'>
        <h4>←</h4>
        </div>
        <div className='strelka'>
            <h4>→</h4>
        <h5>01 / 05</h5>
        </div>
    </div>
    <div className='table'>
        <div className='stul'>
            {/* <img src={stul} alt="" /> */}
            <h2>Готовые решения </h2>
            <h6>Наборы мебели и игрового инвентаря <br />
            для бильярдной и игровой комнаты.</h6>
        </div>
        <div className='box'>
            <h1>Категории <br />
            каталога</h1>
            <hr />
            {/* <img src={cnop} alt="" /> */}
        </div>
            <div className='bil'>
            <div className='fil'>
            {/* <img src={bil1} alt="" /> */}
            <p>Бильярдные столы</p>
            </div>
            <div className='fil'>
            {/* <img src={bil2} alt="" /> */}
            <p>Бильярдные кии</p>
            </div>
            <div className='fil'>
            {/* <img src={bil3} alt="" /> */}
            <p>Киевницы</p>
            </div>
            <div className='fil'>
            {/* <img src={bil4} alt="" /> */}
            <p>Бильярдные шары</p>
            </div>
            <div className='fil'>
            {/* <img src={bil5} alt="" /> */}
            <p>Треугольники</p>
            </div>
            <div className='fil'>
            {/* <img src={bil6} alt="" /> */}
            <p>Светильники</p>
            </div>
            </div>
        </div>
      <div className='nashi'>
        <h1>Наши клиенты</h1>
        <img className='nashi-i' src={hIcon} alt="" />
      </div>
      <div className='home-icon'>
        <img src={mts} alt="" />
        <img src={nornikel} alt="" />
        <img src={rusi} alt="" /> 
        <img src={pa} alt="" />
        <img src={rostelecom} alt="" />
        <img src={gazprombank} alt="" />
      </div>
      <div className='home-images'>
        <img className='home-im' src={homeImg1} alt="" />
        <img className='home-im' src={homeImg2} alt="" />
        <img className='home-im' src={homeImg3} alt="" />
      </div>
        <div className='img-inp'>
          <h1>Не знаете, что вам <br />
          подойдет?</h1>
          <img className='line' src={line} alt="" />
          <h4>Оставьте заявку и наши специлисты <br />
          помогут вам:</h4>
            <div className='img-gal'>
              <img src={galochka} alt="" />
              <p>Создать дизайн-проект будущего изделия;</p>
            </div>
            <div className='img-gal'>
              <img src={galochka} alt="" />
              <p>Подготовят смету в нескольких ценовых <br /> диапозонах;</p>
            </div>
            <div className='img-gal'>
              <img src={galochka} alt="" />
              <p>Оформят доставку и сборку изделия.</p>
            </div>
          <button className='home-btn'>Получить консультацию</button>
        </div>
        <div className='comp-sifra container'>
          <img className='sifra-img1' src={companyS1} alt="" />
          <img className='sifra-img2' src={companyS2} alt="" />
        </div>
        <div className='home-master container'>
          <div className='bio-bil'>
            <h6>О компании</h6>
            <h1>Компания искусных <br />
            и талантливых мастеров </h1>
            <img src={line} alt="" />
            <p>Фабрика «Бильярд №1» — производитель бильярдных столов и крупнейший в <br /> России онлайн-гипермаркет бильярдных аксессуаров. Наша основная <br /> специализация – производство и 
              продажа столов для разных типов игры: <br /> русской пирамиды, американского пула, снукера. Столы различаются между <br /> собой размерами, зарезкой луз, фактурой сукна и конструкцией
               бортов. От <br /> типа игры зависит также материал, толщина плиты и многие другие <br /> параметры бильярдного стола.</p>
            <button className='bil-btn'>Узнать больше</button>
          </div>
          <img className='bil-stol' src={bilStol} alt="" />
        </div>
        <div className='home-carta container'>
          <img className='carta-img' src={homeCarta} alt="" />
          <img className='vip-icon' src={vipIcon} alt="" />
          <div className='home-contact'>
            <h1>Как с нами <br /> связаться?</h1>
            <img className='contact-line' src={line} alt="" />
            <h4>+996 (222 15 11 08)</h4>
            <h4>+996 (556 61 25 66)</h4>
            <p>mnv.k116@gmail.com</p>
            <p>г.Бишкек, улица Турусбекова <br /> 4 этаж, 411 кабинет</p>
          </div>
        </div>
        <div className='h-footer container'>
          <img className='h-fon' src={hFooter} alt="" />
          <img className='vectorl' src={left} alt="" />
          <img className='h-logo' src={homeLogo} alt="" />
          <img className='vectorr' src={right} alt="" />
        </div>
    </div>
  )
}

export default Home
