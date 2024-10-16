import React from 'react'
import "./Service.scss"
import newsImg from "../assets/image/news.png"
import newsC from "../assets/svg/newsCnop.svg"
import newsV from "../assets/svg/newsVector.svg"
import group from "../assets/svg/group.svg"

function Service() {
  return (
    <div className='main-news container'>
      <p>Главная  /  Новости  /  Российский бильярдист представит Европу на Mosconi Cup  </p>
      <div className='news'>
        <div className='head-news'>
        <h1>Российский бильярдист представит Европу на Mosconi Cup</h1>
        <img src={group} alt="" />
        </div>
        <p>24 Августа 2020</p>
        <img className='main-img' src={newsImg} alt="" />
        <p>Очередной сезон легендарного межконтинентального турнира по пулу стартует  только через четыре месяца. Однако <br /> организаторы уже назвали имена первых двух участников – представителей каждой команды. Одним из игроков,<br /> удостоившихся чести выступить на Кубке Москони, оказался Федор Горст. В прошлом году он стал первым россиянином,<br /> завоевавшим «золото» в международном турнире по пулу. На этом спортсмен не остановился и блестяще проявил себя еще в <br /> нескольких соревнованиях, возглавив европейский отборочный рейтинг на Mosconi Cup.</p>
        <p>В связи с пандемией при отборе организаторы учитывали результаты бильярдистов на чемпионатах, которые проходили в <br /> первые три месяца 2020 года. Несмотря на то, что «значимых» поединков в этот период почти не было, капитаны сборных <br /> решили отметить игроков, которые сумели проявить себя за столь короткий промежуток времени.</p>
        <p>Федор Горст уже начал подготовку к состязаниям. Спортсмен активно тренируется по Skype с лидером своей команды <br /> Алексом Лели и берет уроки у профессионального игрока в пул, шестикратного победителя Кубка Москони, Йохана Рюйсинка. <br /> Россиянин уверен, что рекомендации опытного наставника помогут ему на турнире.</p>
        <p>Один из соперников Горста – американец Джастин Бергман, который также занимает лидирующие позиции в своем рейтинге. <br /> Имена остальных участников будут названы позже.</p>
        <div className='bottom-news'>
          <div className='vector-img'>
        <img className='newsC'  src={newsC} alt="" />
        <img className='newsV' src={newsV} alt="" />
          </div>
        <button>Назад к списку новостей</button>
        </div>
      </div>
    </div>
  )
}

export default Service
