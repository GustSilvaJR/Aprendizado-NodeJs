/* eslint-disable max-len */
process.title = 'MyApp'; // Caso alguém analise o processo/serviço em relação a este servidor, irá notar ler este nome

const args = process.argv; // Este argv é um atributo de process que armazena as variáveis vindas via command line quando o node js é inicializado

const port = args[2] || 7070; // Se tiver sido passado a porta como parametro para args, usa ela. Se não, utiliza uma default 7070.

const webServer = require('./server');

// Este metodo listen é responsável pela definição de qual porta o cliente irá utiliar para requisitar serviços do servidor
webServer.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
