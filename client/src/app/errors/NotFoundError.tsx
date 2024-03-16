import { Container, Paper, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NotFound(){
    const navigate = useNavigate();
    const handleGoHome = () =>{
        navigate('/');
    }
    return(
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
                src="/images/page-not-found.png"  
                alt="404 Not Found"
            />
            <Typography variant="h4" component="h1" gutterBottom>
                Oops! Page not found.
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                We can't seem to find the page you're looking for.
            </Typography>

            <Button variant="contained" color="primary" onClick={handleGoHome}>
                Go Home
            </Button>
        </Container>
    )
}