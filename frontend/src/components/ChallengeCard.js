import React from 'react'
import { Share } from '../components'

let ChallengeCard = ({ challenge, show }) => {
  return show && (
    <div className="challenge-card">
      <h2>{ challenge.name }</h2>
      <p>{ challenge.text }</p>
      <Share text={challenge.text} />
    </div>
  )
}

export default ChallengeCard 