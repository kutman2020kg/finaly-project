import React from 'react'
import "./Contact.scss"
import line from "../assets/svg/line.svg"
import contact1 from "../assets/image/contact1.png"
import contact2 from "../assets/image/contact2.png"
import contact3 from "../assets/image/contact3.png"

function Contact() {
  return (
    <div className='contact container'>
      <div className='contact-img'>
      <img src={contact1} alt="" />
      <img src={contact2} alt="" />
      <img src={contact3} alt="" />
      </div>
      <div className='contact-a'>
        <div className='contact-b'>
        <h1>Оставьте заявку и мы вам перезвоним</h1>
        <img src={line} alt="" />
        <div className='contact-c'>
          <input type="text" placeholder='Как к вам обращаться*' />
          <input type="text" placeholder='Телефон*' />
          <input type="text" placeholder='Ваш вопрос*' />
        </div> 
        </div> <hr />
        <div className='contact-d'>
          <input type="checkbox" name="" id="" />
          <p>Я согласен c <span>Политикой конфиденциальности</span></p>
          <button>Отправить </button>
        </div>
      </div> 
    </div>
  )
}

export default Contact
