const express = require('express');

const app = express();

app.get('/',(req,res) => res.send('Api corriendo'));

const PORT = process.env.PORT || 5000; //Busca por una variable de ambiente llamada PORT, si no la encuentra se va al puerto 5000

app.listen(PORT, () => console.log(`El server comenzo en el puerto ${PORT}`));
