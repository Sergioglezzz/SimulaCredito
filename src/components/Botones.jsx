import { Button, Box } from '@mui/material';

const Botones = ({ resultadoCuota }) => {
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
                onClick={() => alert(`Los detalles de la cuota ${resultadoCuota} son...`)}
            >
                VER DETALLE DE CUOTAS
            </Button>
        </Box>
    );
};

export default Botones;