import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import MontoSlider from './MontoSlider';
import PlazoSlider from './PlazoSlider';
import Resultados from './Resultados';
import DetallesCuota from './DetallesCuotas';


const SimuladorCredito = () => {
  const [monto, setMonto] = useState(5000); // Estado inicial del monto
  const [plazo, setPlazo] = useState(3); // Estado inicial del plazo
  const navigate = useNavigate();

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

  // Función que genera las cuotas para cada mes
  const generarCuotas = () => {
    const cuotas = [];
    const fechaActual = new Date(); // Fecha actual

    for (let i = 0; i < plazo; i++) {
      const fechaCuota = new Date(fechaActual);
      fechaCuota.setMonth(fechaActual.getMonth() + i); // Incrementa el mes según el índice

      // Ajustar el día del mes para evitar problemas con meses de diferente longitud
      if (fechaCuota.getDate() !== fechaActual.getDate()) {
        fechaCuota.setDate(0); // Establecer al último día del mes anterior
      }

      const mes = fechaCuota.toLocaleString('default', { month: 'long' }); // Nombre del mes
      const año = fechaCuota.getFullYear(); // Año

      cuotas.push({ mes: `${mes} ${año}`, valor: calcularCuota() });
    }

    return cuotas;
  };

  return (
    <Box sx={{ width: '400px', maxWidth: '1080px', padding: 2, backgroundColor: '#003366', color: 'white', borderRadius: 2 }}>
      <Typography variant="h6" sx={{ textAlign: 'center', marginBottom: 2 }}>
        Simula tu crédito
      </Typography>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MontoSlider monto={monto} onMontoChange={handleMontoChange} />
              <PlazoSlider plazo={plazo} onPlazoChange={handlePlazoChange} />
              <Resultados cuota={calcularCuota()} onDetalleClick={() => navigate('/detalles-cuota')} />
            </>
          }
        />
        <Route path="/detalles-cuota" element={<DetallesCuota cuotas={generarCuotas()} />} />
      </Routes>
    </Box>
  );
};

export default SimuladorCredito;
