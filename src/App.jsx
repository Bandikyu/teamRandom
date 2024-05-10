import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import { Button } from 'react-bootstrap'
import AddPlayers from './components/AddPlayer'
import MyModal from './components/Modal'


function App() {
  const [key, setKey] = useState(0)
  const [name, newName] = useState([])
  const [players, setPlayers] = useState([]);

  const reiniciarComponente = () => {
    setKey(prevKey => prevKey + 1);
  };
  const savePlayers = () => {
    setPlayers(name);
  }

  return (
    <>
      <h1 style={{ textAlign : 'center', margin: '20px 0' }}>Random Teams</h1>
      <Cards key={key} players={players}/>
      <div className='bar'>
        <MyModal style={{backgroundColor:'transparent'}}>
          <AddPlayers namesState={[name, newName]}/>
          <Button style={{position:'absolute', right:'10px'}} onClick={savePlayers} variant='primary'>
            Save
          </Button>
        </MyModal>
        <Button onClick={reiniciarComponente} variant='success'>🗘</Button>
      </div>
    </>
  )
}

export default App
