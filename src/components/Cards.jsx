import { useState } from 'react'
import random from '../helper/random'
import { Card } from 'react-bootstrap'
import './cards.css'

export default function Cards({players}) {
  const [count, setCount] = useState(0)

  let [team1 , team2] = random(players)
  const headers = ['top', 'jg', 'mid', 'adc', 'supp'];

  return (
    <>
      <div className='contentCard'>
        <div className='col1'>
          {team1.map((name , index) => (
            <Card key={index+1} bg='danger' text='white' style={{ width: '10rem', textAlign : "center"}}>
            <Card.Header>{headers[index]}</Card.Header>
            <Card.Body>
              <Card.Text>
                {name}
              </Card.Text>
            </Card.Body>
            </Card>
            ))}
        </div>
        <div className='col2'>
          {team2.map((name , index) => (
            <Card key={index+1} bg='primary' text='white' style={{ width: '10rem', textAlign : "center"}}>
            <Card.Header>{headers[index]}</Card.Header>
            <Card.Body>
              <Card.Text>
                {name}
              </Card.Text>
            </Card.Body>
            </Card>
            ))}
        </div>
      </div>
    </>
  )
}
