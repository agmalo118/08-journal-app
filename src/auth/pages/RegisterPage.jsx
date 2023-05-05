
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Typography, TextField, Button, Link } from '@mui/material'
import { Google } from '@mui/icons-material/'
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
    return (
        <AuthLayout title='Crear cuenta'>
            <form>
                <Grid container>
                    <Grid item xs={12} md={6} sx={{ mt: 2 }}>
                        <TextField label='Nombre completo' type='text' placeholder='Nombre completo' fullWidth>

                        </TextField>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ mt: 2 }}>
                        <TextField label='Correo' type='email' placeholder='correo@google.com' fullWidth>

                        </TextField>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ mt: 2 }}>
                        <TextField label='Contraseña' type='password' placeholder='Contraseña' fullWidth>

                        </TextField>
                    </Grid>

                    <Grid container spacing={2} sx={{ my: 2 }}>
                        <Grid item xs={12}>
                            <Button variant='contained' fullWidth>Crear cuenta</Button>
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        direction='row'
                        justifyContent='end'>
                        <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
                        <Link component={RouterLink} color='inherit' to='/auth/login'>ingresar</Link>

                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}
