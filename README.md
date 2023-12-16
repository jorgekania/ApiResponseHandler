**ApiResponseHandler**

**Descrição**

A classe ApiResponseHandler fornece um mecanismo para obter mensagens de resposta HTTP. Ela contém um mapeamento de códigos de status HTTP para mensagens padrão, bem como um objeto para armazenar mensagens definidas pelo usuário.

**Atributos**

* `defaultMessage`: a mensagem padrão da classe que é retornada se nenhuma mensagem personalizada ou padrão for encontrada.
* `defaultMessages`: um mapeamento de códigos de status HTTP para mensagens padrão.
* `userDefinedMessages`: um objeto para armazenar mensagens definidas pelo usuário.

**Métodos**

* `setCustomMessage(statusCode, message)`: define uma mensagem personalizada para um código de status.
* `getMessage(statusCode)`: obtém a mensagem com base nas prioridades. Sendo a mensagem personalizada prioridade 1, mensagem vinda do HTTP prioridade 2 e mensagens padrões do arquivo HttpStatusMessages prioridade 3

**Exemplo de uso**

```javascript
import ApiResponseHandler from "./src/ApiResponseHandler.js";

const apiResponseHandler = new ApiResponseHandler();

// Chamada para mensagem personalizada
apiResponseHandler.setCustomMessage(
  404,
  "A página que você procura não foi encontrada."
);

// Simule um código de status retornado pela API
const statusCode = 202;

const message = apiResponseHandler.getMessage(statusCode);
console.log("-> Status Code: " + statusCode); // Caso queira mostrar o estatus
console.log("-> Message: " + message.defaultMsg); // Voc~e pode mostrar mensagem
console.log("-> Description: " + message.description); // E se quiser a descrição do status retornado
```
