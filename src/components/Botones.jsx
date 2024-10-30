import { Button, Box } from '@mui/material';

const Botones = ({ resultadoCuota, onDetalleClick  }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
            <Button 
                variant="contained" 
                color="success" 
                sx={{ paddingLeft: '70px', paddingRight: '70px', flexGrow: 1, whiteSpace: 'nowrap' }}
                onClick={() => alert(`Has solicitado un crédito de ${resultadoCuota}`)}
            >
                OBTENER CRÉDITO
            </Button>
            <Button 
                variant="outlined" 
                color="primary" 
                sx={{ color: 'white' }}
                onClick={onDetalleClick}
            >
                VER DETALLE DE CUOTAS
            </Button>
        </Box>
    );
};

export default Botones;

//prompt
// pero la mision es cuando haga click en: onClick={() => alert(`Los detalles de la cuota ${resultadoCuota} son...`)} en vez del alert me lleve al componente DetallesCuotas y se carge en SimuladorCredito.jsx