import React from 'react'
import './index.css'

const SummonerCard = (props) => {
  const [K, D, A] = props.kda

  return (
    <article className={props.win ? 'card card--won' : 'card card--lost'}>
      { /* Card Header */ }
      <section className='card__header'>
        <p className='card__header__title'>
          NAME
        </p>

        <div className='card__header__status'>
          <p>{props.win ? 'VICTORY' : 'DEFEAT'}</p>
        </div>
      </section>

      { /* Card Body */ }
      <section className='card__body'>
        <p className='card__body__account'>
          {props.accountName}
        </p>

        <div className='card__body__stats'>
          <div className='card__body__stats__KDA'>
            <p>K / D/ A </p>
            <strong>{K} / {D} / {A}</strong>
          </div>

          <div className='card__body__stats__CS'>
            <p>Creep Score</p>
            <strong>{props.creepScore} / {props.creepScorePerMin}m</strong>
          </div>

          <div className='card__body__stats__duration'>
            <p>Duration</p>
            <strong>{props.gameDuration}</strong>
          </div>
        </div>
      </section>

      { /* Card Footer */ }
      <section className='card__footer'>
        <div className='card__footer__spells'>
          <p>Spells</p>
          <ul>{
            props.spells.map((spell, $i) => <li key={$i}>{spell}</li>)
          }</ul>
        </div>

        <div className='card__footer__items'>
          <p>Items</p>
          <ul>{
            props.items.map((item, $i) => <li key={$i}>{item}</li>)
          }</ul>
        </div>
      </section>
    </article>
  )
}

export default SummonerCard
