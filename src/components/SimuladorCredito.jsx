import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import MontoSlider from './MontoSlider';
import PlazoSlider from './PlazoSlider';
import Resultados from './Resultados';

const SimuladorCredito = () => {
  const [monto, setMonto] = useState(5000); // Estado inicial del monto
  const [plazo, setPlazo] = useState(3); // Estado inicial del plazo

  const handleMontoChange = (event, newValue) => {
    console.log(event);
    setMonto(newValue);
  };

  const handlePlazoChange = (event, newValue) => {
    console.log(event);
    setPlazo(newValue);
  };

  // Función que simula el cálculo de la cuota fija
  const calcularCuota = () => {
    const tasaInteres = 0.05; // tasa de interés mensual del 5%
    const cuota = (monto * tasaInteres) / (1 - Math.pow(1 + tasaInteres, -plazo));
    return cuota.toFixed(2);
  };

  return (
    <Box sx={{ width: '400px',maxWidth: '1080px' , padding: 2, backgroundColor: '#003366', color: 'white', borderRadius: 2 }}>
      <Typography variant="h6" sx={{ textAlign: 'center', marginBottom: 2 }}>
        Simula tu crédito
      </Typography>
      <MontoSlider monto={monto} onMontoChange={handleMontoChange} />
      <PlazoSlider plazo={plazo} onPlazoChange={handlePlazoChange} />
      <Resultados cuota={calcularCuota()} />
    </Box>
  );
};

export default SimuladorCredito;
