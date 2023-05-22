
import { Link as RouterLink } from 'react-router-dom';
import { Typography, TextField, Button, Link, Alert, Grid } from '@mui/material'
import { Google } from '@mui/icons-material/'
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';
import { useMemo, useState } from 'react';

const formData = {
    email: '',
    password: ''
};

const formValidations = {
    email: [(value) => value.includes('@'), 'El correo debe tener un @'],
    password: [(value) => value.length >= 6, 'El password debe tener más de 6 letras.']
}

export const LoginPage = () => {

    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const { status, errorMessage } = useSelector(state => state.auth);

    const {
        formState, email, password, onInputChange,
        isFormValid, emailValid, passwordValid,
    } = useForm(formData, formValidations);

    const isAuthenticating = useMemo(() => status === 'checking', [status])

    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);

        if (!isFormValid) return;

        dispatch(startLoginWithEmailPassword(formState));
    }

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn());
    };

    return (
        <AuthLayout title='Login'>
            <form
                onSubmit={onSubmit}
                className='animate__animated animate__fadeIn animate__faster'>
                <Grid container >
                    <Grid item xs={12} md={6} sx={{ mt: 2 }}>
                        <TextField
                            label='Correo'
                            type='email'
                            placeholder='correo@google.com'
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            error={!!emailValid && formSubmitted}
                            helperText={emailValid}>

                        </TextField>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ mt: 2 }}>
                        <TextField
                            label='Contraseña'
                            type='password'
                            placeholder='Contraseña'
                            name='password'
                            fullWidth
                            ame="password"
                            value={password}
                            onChange={onInputChange}
                            error={!!passwordValid && formSubmitted}
                            helperText={passwordValid}>

                        </TextField>
                    </Grid>

                    <Grid container spacing={2} sx={{ my: 2 }}>
                        <Grid item
                            display={!!errorMessage ? '' : 'none'}
                            xs={12}>
                            <Alert severity='error' >{errorMessage}</Alert>
                        </Grid>


                        <Grid item xs={12} sm={6}>
                            <Button type="submit" variant='contained' fullWidth disabled={isAuthenticating}>Login</Button>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Button variant='contained' fullWidth onClick={onGoogleSignIn} disabled={isAuthenticating}>
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        direction='row'
                        justifyContent='end'>

                        <Link component={RouterLink} color='inherit' to='/auth/register'>Crear una cuenta</Link>

                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}
