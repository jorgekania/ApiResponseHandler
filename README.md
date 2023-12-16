**ApiResponseHandler**

**Descrição**

A classe ApiResponseHandler fornece um mecanismo para obter mensagens de resposta HTTP. Ela contém um mapeamento de códigos de status HTTP para mensagens padrão, bem como um objeto para armazenar mensagens definidas pelo usuário.

**Atributos**

* `defaultMessage`: a mensagem padrão da classe que é retornada se nenhuma mensagem personalizada ou padrão for encontrada.
* `defaultMessages`: um mapeamento de códigos de status HTTP para mensagens padrão.
* `userDefinedMessages`: um objeto para armazenar mensagens definidas pelo usuário.

**Métodos**

* `setCustomMessage(statusCode, message)`: define uma mensagem personalizada para um código de status.
* `getMessage(statusCode)`: obtém a mensagem com base nas prioridades.

**Exemplo de uso**

```javascript
const apiResponseHandler = new ApiResponseHandler();

// Define uma mensagem personalizada para o código de status 401
apiResponseHandler.setCustomMessage(401, "O usuário não está autorizado.");

// Obtém a mensagem para o código de status 401
const message = apiResponseHandler.getMessage(401);

console.log(message); // "O usuário não está autorizado."
```
