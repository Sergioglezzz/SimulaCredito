
import React from 'react'

import { BrowserRouter } from 'react-router-dom';
import SimuladorCredito from './components/SimuladorCredito';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <SimuladorCredito />
      </BrowserRouter>
    </>
  )
}
