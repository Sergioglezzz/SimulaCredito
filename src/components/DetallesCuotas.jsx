import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Resultados from './Resultados';

const DetallesCuota = ({ cuotas }) => {
  const navigate = useNavigate();

  // Calcula la cuota total sumando todas las cuotas
  const cuotaTotal = cuotas.reduce((total, cuota) => total + parseFloat(cuota.valor), 0).toFixed(2);

  return (
    <Box sx={{ padding: 2, backgroundColor: '#003366', color: 'white', borderRadius: 2 }}>
      <Typography variant="h6" align="center" sx={{ marginBottom: 2 }}>
        Cuotas
      </Typography>
      <TableContainer component={Paper} sx={{ backgroundColor: '#012b57' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'white', textAlign: 'center'}}>Mes</TableCell>
              <TableCell sx={{ color: 'white', textAlign: 'center' }}>Cuota</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cuotas.map((cuota, index) => (
              <TableRow key={index}>
                <TableCell sx={{ color: 'white' }}>{cuota.mes}</TableCell>
                <TableCell sx={{ color: 'white', textAlign: 'end' }}>€{cuota.valor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Resultados cuota={cuotaTotal} onDetalleClick={() => { }} />
      <Box sx={{ marginTop: 4, textAlign: 'center' }}>
        <Button variant="contained" color="primary" onClick={() => navigate('/')}>
          Volver a Simular Crédito
        </Button>
      </Box>      
    </Box>
  );
};

export default DetallesCuota;