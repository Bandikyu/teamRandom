import { useState } from 'react';
import { Button } from 'react-bootstrap';

const AddPlayers = ({namesState}) => {
  const [name, newName] = namesState;
  const [nuevoNombre, setNuevoNombre] = useState('');

  const handleInputChange = (e) => {
    setNuevoNombre(e.target.value);
  };

  const agregarNombre = () => {
    if (nuevoNombre.trim() !== '') {
      newName([...name, nuevoNombre.trim()]);
      setNuevoNombre('');
    }
  };

  const eliminarNombre = (index) => {
    const nuevoNombre = [...name];
    nuevoNombre.splice(index, 1);
    newName(nuevoNombre);
  };

  return (
    <div style={{
        display:'flex',
        flexDirection:'column',
    }}>
      <ul style={{display:'flex', flexDirection:'column', gap:'2px'}}>
        {name.map((nombre, index) => (
          <li style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent:'space-between',
            width: '100%',
            borderBottom: '1px solid #fff',
          }} key={index}>
          {nombre}
          <Button variant='danger' onClick={() => eliminarNombre(index)} style={{fontSize:'15px', padding:'4px 8px'}}>
            ✕
            </Button>
          </li>
        ))}
      </ul>
      <div style={{
        position: 'fixed',
        width:'100%',
        bottom:'5px',
        display:'flex',
        alignItems: 'center',
        justifyContent:'center',
        right: '5px',
        gap: '5px',
      }}>
          <input
          onKeyDown={(e) => {
              if (e.key === 'Enter') {
                agregarNombre();
              }
            }}
          style={{height: '35px'}}
            type="text"
            value={nuevoNombre}
            onChange={handleInputChange}
            placeholder="Add player..."
          />
          <Button onClick={agregarNombre} style={{fontSize:'30px', padding:'0 12px'}}>+</Button>
      </div>
    </div>
  );
};

export default AddPlayers;