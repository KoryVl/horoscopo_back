const express = require('express');
const { urlencoded, json } = require('express');
const router = require('./routes/signos.routes.js');
const authRouter = require('./routes/auth.routes.js'); // Importa el router de autenticación
const cors = require('cors');

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

app.use(cors());
app.use(cors({
    origin: 'https://horoscopo-front-pi.vercel.app/', // URL de tu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'] // Cabeceras permitidas
  }));
// Rutas existentes
app.use('/v1/signos', router);

// Nueva ruta de autenticación
app.use('/v1/auth', authRouter);

app.listen(4000, () => {
    console.log('Listening at port 4000');
});