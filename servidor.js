const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let jugadores = [
    {
        id: 1,
        nombre: "Francesco Virgolini",
        juego:"CS GO",
        nivel:"4",
        pais:"Italia"
    },
    {
        id: 1,
        nombre: "Francesco Virgolini",
        juego:"CS GO",
        nivel:"4",
        pais:"Italia"
    },
    {
        id: 1,
        nombre: "Francesco Virgolini",
        juego:"CS GO",
        nivel:"4",
        pais:"Italia"
    },
    {
        id: 1,
        nombre: "Francesco Virgolini",
        juego:"CS GO",
        nivel:"4",
        pais:"Italia"
    },
    {
        id: 1,
        nombre: "Francesco Virgolini",
        juego:"CS GO",
        nivel:"4",
        pais:"Italia"
    },
    {
        id: 2,
        nombre: "Ibai Llanos",
        juego:"GTA V",
        nivel:"13",
        pais:"España"
    },
    {
        id: 2,
        nombre: "Ibai Llanos",
        juego:"GTA V",
        nivel:"13",
        pais:"España"
    },
    {
        id: 2,
        nombre: "Ibai Llanos",
        juego:"GTA V",
        nivel:"13",
        pais:"España"
    },
    {
        id: 2,
        nombre: "Ibai Llanos",
        juego:"GTA V",
        nivel:"13",
        pais:"España"
    },
    {
        id: 2,
        nombre: "Ibai Llanos",
        juego:"GTA V",
        nivel:"13",
        pais:"España"
    },
    {
        id: 2,
        nombre: "Ibai Llanos",
        juego:"GTA V",
        nivel:"13",
        pais:"España"
    },
    {
        id: 3,
        nombre: "Alejandro Vascolet",
        juego:"Vascolet",
        nivel:"69",
        pais:"Uruguay"
    },
    {
        id: 3,
        nombre: "Alejandro Vascolet",
        juego:"Vascolet",
        nivel:"69",
        pais:"Uruguay"
    },
    {
        id: 3,
        nombre: "Alejandro Vascolet",
        juego:"Vascolet",
        nivel:"69",
        pais:"Uruguay"
    },
    {
        id: 3,
        nombre: "Alejandro Vascolet",
        juego:"Vascolet",
        nivel:"69",
        pais:"Uruguay"
    },
];
// Juegadores en base al ID
app.get('/jugadorID/:id', (req, res) => {
    const id = parseInt (req.params.id);
    const jugador = jugadores.find(j => j.id === id);

    if (!jugador) {
        return res.stats(404).json({error: "Jugador  no encontrado en el torneo"});
    }

    res.json(jugador);
});

//Juegadores en base al pais
app.get('/jugadorPAIS/:pais', (req, res) => {
    const pais = req.params.pais;
    let resultado = jugadores;

    // console.log(pais)
    // console.log(resultado)

    if (pais){
        resultado = jugadores.filter(j => j.pais.toLowerCase().includes(pais.toLocaleLowerCase()));
    }
    
    res.json(resultado);
});

//Juegadores en base al juego
app.get('/jugadorGAME/:juego', (req, res) => {
    const juego = req.params.juego;
    let resultado = jugadores;

    // console.log(juego)
    // console.log(resultado)

    if (juego){
        resultado = jugadores.filter(j => j.juego.toLowerCase().includes(juego.toLocaleLowerCase()));
    }
    
    res.json(resultado);
});

//Juegadores en base al juego
app.get('/jugadorNIVEL/:nivel', (req, res) => {
    const nivel = req.params.nivel;
    let resultado = jugadores;

    // console.log(juego)
    // console.log(resultado)

    if (nivel){
        resultado = jugadores.filter(j => j.nivel.toLowerCase().includes(nivel.toLocaleLowerCase()));
    }
    
    res.json(resultado);
});



//Metodo POST
app.post('/agreele/:elementos', (req, res) => {
    const elementos = req.body;
    res.json(elementos)
    
    // jugadores.push(elemento);  
    // res.json("Se agrego con exito");  
});

app.get('/array', (req, res) => {
    res.json(jugadores)
});








app.listen(3000, () => {
    console.log('API Torneo de Gaming en https://localhost:3000')
});