import React from 'react';
import { Box, Slider, Typography, Grid } from '@mui/material';

const PlazoSlider = ({ plazo, onPlazoChange }) => {
    return (
        <Box sx={{ width: '80%', padding: 1, margin: '0 auto' }}>
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid item>
                    <Typography variant="body2" color="white">
                        PLAZO
                    </Typography>
                </Grid>
                <Grid item>
                    <Box 
                        sx={{
                            padding: '2px 6px',
                            border: '1px solid white',
                            borderRadius: 1,
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '1.2rem', 
                            minWidth: '50px',    
                            textAlign: 'center'
                        }}>
                        {plazo}
                    </Box>
                </Grid>
            </Grid>

            <Slider
                value={plazo}
                onChange={onPlazoChange}
                min={3}
                max={24}
                step={1}
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

            <Grid container justifyContent="space-between">
                <Typography variant="body2" color="white">3</Typography>
                <Typography variant="body2" color="white">24</Typography>
            </Grid>
        </Box>
    );
};

export default PlazoSlider;
