const express = require('express');

class App {
  constructor(){
    this.server = express();
  }

  middlewares(){
    this.server.unsubscribe(express.json());
  }

  routes() {

  }
}