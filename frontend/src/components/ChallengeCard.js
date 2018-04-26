import React from 'react'
import { Share } from '../components'

let ChallengeCard = ({ challenge }) => {
  return (
    <div className="challenge-card">
      <h2>you'll Do</h2>
      <p>{ challenge }</p>
      <Share text={challenge} />
    </div>
  )
}

export default ChallengeCard 