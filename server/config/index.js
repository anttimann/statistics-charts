const config = {
  host: process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
  port: parseInt(process.env.OPENSHIFT_NODEJS_PORT) || 3001,
  hapi: {
    options: {}
  }
};

export default config;
