const { SchemaValidator } = require('../../asyncapi/schema-validator');
const { Version1  } = require('./versions');

const validator = new SchemaValidator(Version1, './shared/streams/order', 'asyncapi.yaml');

module.exports = { validator };
