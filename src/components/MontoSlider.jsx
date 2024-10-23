import React from 'react';
import { Box, Slider, Typography, Grid } from '@mui/material';

// recibo como parametro el monto y la función que se ejecutará al cambiar el monto
// del componente padre SimuladorCredito
const MontoSlider = ({ monto, onMontoChange }) => {
    return (
        <Box sx={{ width: '80%', padding: 1, margin: '0 auto' }}>
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid item>
                    <Typography variant="body2" color="white">
                        MONTO TOTAL
                    </Typography>
                </Grid>
                <Grid item>
                    {/* Caja con borde y monto ajustada */}
                    <Box 
                        sx={{
                            padding: '2px 6px',
                            border: '1px solid white',
                            borderRadius: 1,
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '1.2rem',  
                            minWidth: '80px',   
                            textAlign: 'center'
                        }}>
                        €{monto.toLocaleString()}
                    </Box>
                </Grid>
            </Grid>

            <Slider
                value={monto} // valor del monto (useState) del componente padre
                onChange={onMontoChange} //setMonto del componente padre
                min={5000}
                max={50000}
                step={100}
                sx={{
                    color: 'white',
                    '& .MuiSlider-thumb': {
                        backgroundColor: 'white',
                        border: '2px solid white',
                        width: 12,  
                        height: 12,
                    },
                    '& .MuiSlider-rail': {
                        backgroundColor: 'white',
                        height: 4,  
                    },
                    '& .MuiSlider-track': {
                        backgroundColor: 'white',
                        height: 4,
                    },
                }}
            />

            {/* Etiquetas de los valores mínimo y máximo */}
            <Grid container justifyContent="space-between">
                <Typography variant="body2" color="white">€ 5.000</Typography>
                <Typography variant="body2" color="white">€ 50.000</Typography>
            </Grid>
        </Box>
    );
};

export default MontoSlider;
