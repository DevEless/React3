import React from 'react';
const Bouton = ({_type, _onclick, _click}) => {
    return (
      <div>
          <button className='bg-sky-500 text-white border rounded-full w-20 hover:bg-sky-300' type={_type} onClick={_onclick}>{_click}</button>
      </div>
    )
  }