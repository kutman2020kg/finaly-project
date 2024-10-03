import React from 'react'
import "./Project.scss"
import { Link } from 'react-router-dom'

function Project() {
  return (
    <div className='wrap'>
      <div className='project container'>
        <h1>Проекты бильярдных и игровых</h1>
        <img src="" alt="" />
        <ul>
          <Link><li>Все проекты</li></Link>
          <Link><li>Частные дома, дачи, коттеджи</li></Link>
          <Link><li>Бильярдные клубы</li></Link>
          <Link><li>Игровые комнаты</li></Link>
        </ul>
      </div>
      <div className="homer">
        <Link to="/"><button>Назад</button></Link>
      </div>
    </div>
  )
}

export default Project
