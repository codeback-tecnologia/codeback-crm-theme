const elixir   = require( 'laravel-elixir' );
const gulp     = require( 'gulp' );
const nunjucks = require( 'nunjucks' );
const fs       = require( 'fs' );
const Task     = elixir.Task;
require( 'laravel-elixir-livereload' );

// Setup do nunjucks
nunjucks.configure( 'views', {
    noCache : true
});

// Setup do elixir
elixir.config.publicPath = 'dist';
elixir.config.assetsPath = 'src';

/**
 * compile
 * 
 * compila os arquivos html
 */
elixir.extend( 'compile', () => {

    // Retorna uma nova tarefa
    new Task( 'compile', () => {
        
        // Ler as paginas
        const files = fs.readdirSync( './views/pages' );
    
        // Percorre as paginas encontradas
        files.forEach( file => {
    
            // Compila o arquivo html
            const str = nunjucks.render( `pages/${file}` );
    
            // Escreve o documento html
            fs.writeFileSync( `./docs/${file}`, str );
        });
    }).watch( [ './views/**/**/*.html' ] );
});

// Chama de fato o elixir
elixir( mix => {
    mix.compile()
       .sass( '../app/app.scss' )
       .webpack( '../app/app.js' )
       .livereload([
           'docs/*.html',
           'dist/css/*.css',
           'dist/js/*.js'
       ]);
});

// End of file