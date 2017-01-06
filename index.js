import inert from 'inert';
import packageJson from './package.json';

function register(server, options, next) {
  const plugins = [
    { register: inert }
  ];
    
  server.register(plugins, (err) => {
    server.route({
      method: 'GET',
      path: '/{param*}',
      handler: {
        directory: {
          path: 'public'
        }
      }
    });

    next();
  });
}

register.attributes = {
  pkg: packageJson
};

export default register;
