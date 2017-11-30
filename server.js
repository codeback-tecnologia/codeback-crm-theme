const express = require( 'express' );
const app     = express();
const path    = require( 'path' );

// Seta os caminhos dos arquivos estáticos
app.use( express.static( 'docs') );
app.use( express.static( 'dist') );

// Seta a rota padrão
app.get( '/', ( req, res ) => {
    res.sendFile( path.join( __dirname, 'docs/home.html' ) ); 
});

// Inicia o servidor
app.listen( 3000, () => {
    console.log( 'Servidor rodando na porta 3000' );
});

// End of file