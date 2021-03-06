const express = require('express');

const app = express();
const cors = require('cors');
const { config } = require('./config/config');
const userApi = require('./routes/user-routes');
// const universityApi = require('./routes/university-routes');
const questionApi = require('./routes/questions-routes');
const universityesApi = require('./routes/university-routes');
// Usamos el middleware de express que nos permite leer datos en formato Json, body-parser
app.use(express.json());
app.use(cors());

// la aplicacionde express que gestiona las rutas
userApi(app);
// questionApi(app);
questionApi(app);
// universityesApi
universityesApi(app);


app.listen(config.port, () =>
    console.log(`Example app listening on port http://localhost:${config.port}`)
);