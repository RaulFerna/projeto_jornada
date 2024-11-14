import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Box, TextField, Button } from '@mui/material';
import styles from './login.module.scss'

const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    senha: yup.string().required('Password is required'),
});

export default function Login() {
    const { control, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    
    async function onSubmit (data) 
        {
            console.log(data);
            window.localStorage.setItem("@access/token", "hsuahduashduhusahdu");
            //const response = await fetch("https://localhost:").then(data => toast.success("Login realizado com sucesso")).catch(data => toast.error("Erro no login!"));
        };

    console.log(watch("username"));

    return (
        <Box sx={{

            //mudando cor de fundo
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(-75deg, #f0f0f0, #df80ff,#d24dff, #cc33ff, #d24dff,#df80ff,#f0f0f0)',

        }}> 
           <Box sx={{
            //configurando locais de informações
         
            
            background: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.7)', 
            width: '300px', 
            fontFamily: 'Lucida Handwriting',
            textAlign: 'center',
            fontSize: '24px',
            marginBottom: '20px',

           }}>

                <h2 className='titulo-login'>CPV</h2>

                    <form  onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                        <Controller
                            name="username"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    id="username"
                                    label="Username"
                                    variant="outlined"
                                    error={!!errors.username}
                                    helperText={errors.username ? errors.username.message : ''}
                                />
                            )}
                        />
                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    id="senha"
                                    label="Password"
                                    variant="outlined"
                                    type="password"
                                    error={!!errors.senha}
                                    helperText={errors.senha ? errors.senha.message : ''}
                                />
                            )}
                        />
                        <button variant="outlined" type="submit">Login</button>
                    </form>
                </Box>
        </Box>
    );
}
