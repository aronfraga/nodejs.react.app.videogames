const { Router } = require('express');
const videogames = require('./videogamesRoute');
const videogame = require('./videogameRoute');
const genres = require('./genresRoute');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', videogames);
router.use('/videogame', videogame);
router.use('/genres', genres);

module.exports = router;
