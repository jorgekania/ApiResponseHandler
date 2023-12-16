import HttpStatusMessages from "./HttpStatusMessages.js";

export default class ApiResponseHandler {
  constructor() {
    this.defaultMessage = "Ocorreu um erro na requisição.";
    this.defaultMessages = HttpStatusMessages;

    this.userDefinedMessages = {};
  }

  setCustomMessage(statusCode, message) {
    this.userDefinedMessages[statusCode] = message;
  }

  getMessage(statusCode) {
      if (this.userDefinedMessages[statusCode]) {
          return this.userDefinedMessages[statusCode];
        }

        if (this.defaultMessages[statusCode]) {
        return this.defaultMessages[statusCode];
    }
    
    return this.defaultMessage;
  }
}
