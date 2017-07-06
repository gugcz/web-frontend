exports.NotFound = class NotFound extends Error {

  constructor(message) {
    super(message);
    this.name = 'NotFound';
  }

};
