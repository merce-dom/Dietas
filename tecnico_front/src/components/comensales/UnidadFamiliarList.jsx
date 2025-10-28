import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE = 'http://127.0.0.1:8000/api/comensales';

export default function UnidadFamiliarList() {
  const [items, setItems] = useState([]);
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  // imagen simple (no subida con file input aquí; sería más adelante)
  const fetchItems = () => {
    axios.get(`${API_BASE}/unidad_familiares/`)
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { nombre, edad: Number(edad), usuario: 1 }; // usuario = 1 temporal: ajusta según tu lógica
    axios.post(`${API_BASE}/unidad_familiares/`, payload)
      .then(() => {
        setNombre(''); setEdad('');
        fetchItems();
      })
      .catch(err => console.error(err));
  };

  const handleDelete = (id) => {
    axios.delete(`${API_BASE}/unidad_familiares/${id}/`)
      .then(() => fetchItems())
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Unidades Familiares</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} required />
        <input placeholder="Edad" type="number" value={edad} onChange={e => setEdad(e.target.value)} required />
        <button type="submit">Crear</button>
      </form>

      <ul>
        {items.map(i => (
          <li key={i.id}>
            <strong>{i.nombre}</strong> — {i.edad}
            <button onClick={() => handleDelete(i.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
