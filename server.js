import Hapi from 'hapi';
import good from 'good';
import goodConsole from 'good-console';
import WebpackPlugin from 'hapi-webpack-plugin';
import config from './server/config';
import app from './index';


const server = new Hapi.Server(config.hapi.options);

server.connection({
  host: config.host, port: config.port,
  routes: { state: { parse: false, failAction: 'ignore' } }
});

const plugins = [
  {
    register: good,
    options: {
      reporters: {
        console: [ {
          module: 'good-console'
        }, 'stdout' ]
      }
    }
  },
  {
    register: WebpackPlugin,
    options: './webpack.config.js'
  },
  { register: app }
];

server.register(plugins, (err) => {
  if (err) throw err;

  server.start(() => {
    console.log('Hapi server started @' + server.info.uri);
  });
});
