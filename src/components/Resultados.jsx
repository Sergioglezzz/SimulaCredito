import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import Botones from './Botones';

const Resultados = ({ cuota }) => {
    return (
        <Box sx={{ marginTop: 2, textAlign: 'center' }}>
            <Grid container justifyContent="space-between" alignItems="center" sx={{ backgroundColor: '#012b57'}}>
                <Grid item xs={6}>
                    <Typography variant="h6" align="left" sx={{ paddingLeft: '25px'}}>
                        Cuota fija por mes
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h4" align="right"  sx={{ paddingRight: '15px'}}>
                        €{cuota}
                    </Typography>
                </Grid>
            </Grid>
            <Botones resultadoCuota={cuota} />
        </Box>
    );
};

export default Resultados;
