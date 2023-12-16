/* Códigos de status de respostas HTTP:
   https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status#respostas_informativas
   Adicione novos códigos http conforme a necessidade de sua API
*/

const HttpStatusMessages = {
  100: {
    defaultMsg: "Continue",
    description:
      "Essa resposta provisória indica que o cliente deve continuar a solicitação ou ignorar a resposta se a solicitação já estiver concluída.",
  },
  101: {
    defaultMsg: "Mudando Protocolos",
    description:
      "Esse código é enviado em resposta a um cabeçalho de solicitação Upgrade (en-US) do cliente e indica o protocolo para o qual o servidor está mudando.",
  },
  102: {
    defaultMsg:
      "servidor recebeu e está processando a requisição, mas nenhuma resposta está disponível ainda",
    description:
      "Este código indica que o servidor recebeu e está processando a requisição, mas nenhuma resposta está disponível ainda.",
  },

  200: {
    defaultMsg: "Requisição bem-sucedida",
    description: "O significado do resultado de sucesso depende do método",
  },
  201: {
    defaultMsg:
      "A requisição foi bem sucedida e um novo recurso foi criado como resultado",
    description:
      "Esta é normalmente a resposta enviada após as solicitações POST ou algumas solicitações PUT",
  },
  202: {
    defaultMsg: "A solicitação foi recebida, mas ainda não foi atendida",
    description:
      "É sem compromisso, pois não há como no HTTP enviar posteriormente uma resposta assíncrona indicando o resultado da solicitação. Destina-se a casos em que outro processo ou servidor manipula a solicitação ou processamento em lote.",
  },
  204: {
    defaultMsg:
      "Não há conteúdo para enviar para esta solicitação, mas os cabeçalhos podem ser úteis",
    description:
      "O agente do usuário pode atualizar seus cabeçalhos em cache para este recurso com os novos.",
  },

  300: {
    defaultMsg: "Múltiplas escolhas",
    description:
      "A solicitação tem mais de uma resposta possível. O agente do usuário ou usuário deve escolher um deles. (Não há uma maneira padronizada de escolher uma das respostas, mas links HTML para as possibilidades são recomendados para que o usuário possa escolher).",
  },
  301: {
    defaultMsg: "Movido permanentemente",
    description:
      "A URL do recurso solicitado foi alterada permanentemente. A nova URL é fornecida na resposta.",
  },

  400: {
    defaultMsg: "Requisição inválida",
    description:
      "O servidor não pode ou não irá processar a solicitação devido a algo que é percebido como um erro do cliente (por exemplo, sintaxe de solicitação malformada, enquadramento de mensagem de solicitação inválida ou roteamento de solicitação enganosa).",
  },
  401: {
    defaultMsg: "Não autorizado",
    description:
      "Embora o padrão HTTP especifique unauthorized, semanticamente, essa resposta significa unauthenticated. Ou seja, o cliente deve se autenticar para obter a resposta solicitada.",
  },
  403: {
    defaultMsg: "Proibido",
    description:
      "O cliente não tem direitos de acesso ao conteúdo; ou seja, não é autorizado, portanto o servidor está se recusando a fornecer o recurso solicitado. Ao contrário do 401 Unauthorized, a identidade do cliente é conhecida pelo servidor.",
  },
  404: {
    defaultMsg: "Recurso não encontrado",
    description:
      "O servidor não pode encontrar o recurso solicitado. No navegador, isso significa que o URL não é reconhecido. Em uma API, isso também pode significar que o endpoint é válido, mas o próprio recurso não existe. Os servidores também podem enviar esta resposta em vez de 403 Forbidden para ocultar a existência de um recurso de um cliente não autorizado. Este código de resposta é provavelmente o mais conhecido devido à sua ocorrência frequente na web.",
  },

  500: {
    defaultMsg: "Erro interno do servidor",
    description: "O servidor encontrou uma situação com a qual não sabe lidar.",
  },
  501: {
    defaultMsg: "Não implementado",
    description:
      "O método da requisição não é suportado pelo servidor e não pode ser manipulado. Os únicos métodos que servidores devem suportar (e portanto não devem retornar este código) são GET e HEAD.",
  },
  502: {
    defaultMsg: "Bad Gateway",
    description:
      "Essa resposta de erro significa que o servidor, enquanto trabalhava como um gateway para obter uma resposta necessária para lidar com a solicitação, obteve uma resposta inválida.",
  },
};

export default HttpStatusMessages;
