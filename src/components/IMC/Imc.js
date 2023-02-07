import React from 'react'
import App from '../../App.js'

const Imc = ({_nom, _poids, _taille}) => {
  return (
    <div>
        <div>
            <h1>IMC de {_nom}</h1>
            <span><strong>{_poids}</strong>/{_taille}<sup>2</sup> = {_poids / Math.floor(_taille * _taille)}</span>
        </div>
    </div>
  )
}

export default Imc