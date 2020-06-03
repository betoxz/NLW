import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('listagem de usuários')

    //envia html
    //response.send('<b>Lista de Usuários</b>')

    //envia imagem, caminho fisico
    //response.sendFile('C:/Users/betov/Desktop/Curso NLW/server/src/uploads/baterias.svg')

    //envia json
    response.json([
        'Carlos',
        'Alberto',
        'Martins',
        'Silva'
    ])
});

app.listen(3333);