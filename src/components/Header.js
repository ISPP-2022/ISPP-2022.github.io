import React from 'react';
import LogoLargo from '../assets/img/logo.png';

import config from '../../config';
export default function Footer() {

  const [email, setEmail] = React.useState('');

  const submitEmail = (event) => {
    event.preventDefault();
    console.log(event.currentTarget)
  }

  return (
    <header id="header">
      <style>
      </style>
      <div className='title'>
        <img className='logo' src={LogoLargo} alt={config.authorName} />
        <div>
          <h1 style={{ color: '#975ead', }}>{config.authorName}</h1>
          <p style={{ color: '#4aa7c0', fontWeight: '600', marginTop: 20 }}>{config.authorHeading}</p>
        </div>
      </div>
      <div className=''>
        <h1 style={{ color: '#fff', marginBottom: 30 }}>Alquiler entre particulares</h1>
      </div>
      <div className='body'>
        <div className='body-sell'>
          <h1 style={{ color: '#242424' }}>¿Tienes espacio de sobra en casa?</h1>
          <p style={{ color: '#242424' }} >
            Empieza a sacarle rentabilidad
          </p>
          <p style={{ color: '#242424' }} >
            Busca tu inquilino ideal
          </p>
        </div>
        <div className='body-buy'>
          <h1 style={{ color: '#242424' }}>¿Te falta espacio en casa?</h1>
          <p style={{ color: '#242424' }} >
            Encuentra el espacio que necesitas
          </p>
          <p style={{ color: '#242424' }} >
            Ajústalo a tus necesidades
          </p>
        </div>
      </div>
      <div style={{ padding: '0 15%' }}>
        <p style={{ color: '#f2f2f2', padding: 10, backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 45, marginBottom: 30, fontStyle: 'italic', }}>"Descubre nuestra busqueda inteligente y ahorra tu tiempo"</p>
      </div>
      <div style={{}}>
        <p style={{}} >
          No te pierdas ninguna actualización
        </p>
        <p style={{ margin: 0 }} >
          Añade tu email para mantenerte informado
        </p>
        <form onSubmit={submitEmail}>
          <input type="email" placeholder='Email' value={email} onChange={(event) => setEmail(event.target.value)} style={{ margin: 20, color: '#4aa7c0', border: 'solid 1px grey', borderRadius: '5px' }} />
        </form>
      </div>
    </header>
  );
}
