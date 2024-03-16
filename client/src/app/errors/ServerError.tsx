import { Container, Paper, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ServerError(){
    const navigate = useNavigate();
    const handleGoHome = () =>{
        navigate('/');
    }
    return (
        <Container component={Paper} sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Box
                component="img"
                sx={{
                    height: 'auto',
                    width: '100%', 
                    maxHeight: { xs: 233, md: 400 }, 
                    maxWidth: { xs: 350, md: 400 },  
                    mb: 4,  
                }}
                src="/images/server-error.png"  
                alt="500 Server Error"
            />
            <Typography variant="h4" component="h1" gutterBottom>
                Oops! Something went wrong.
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                The server encountered an internal error and was unable to complete your request.
            </Typography>
            
            <Button variant="contained" color="primary" onClick={handleGoHome}>
                Go Home
            </Button>
        </Container>
    )
}