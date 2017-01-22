import Hapi from 'hapi';
import good from 'good';
import Webpack from 'webpack';
import DevMiddleware from 'webpack-dev-middleware';
import HotMiddleware from 'webpack-hot-middleware';
import config from './server/config';
import webPackConfig from './webpack.config.js';
import app from './index';


const compiler = Webpack(webPackConfig);
const devMiddleware = DevMiddleware(compiler, {
  host: config.host,
  port: config.port,
  historyApiFallback: true,
  publicPath: webPackConfig.output.publicPath
});
const hotMiddleware = HotMiddleware(compiler, { log: () => {} });

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
  { register: app }
];

server.register(plugins, (err) => {
  if (err) throw err;

  server.start(() => {
    console.log('Hapi server started @' + server.info.uri);
  });
});

server.ext('onRequest', (request, reply) => {
  devMiddleware(request.raw.req, request.raw.res, (err) => {
    if (err) { return reply(err); }
    reply.continue();
  });
});

server.ext('onRequest', (request, reply) => {
  hotMiddleware(request.raw.req, request.raw.res, (err) => {
    if (err) { return reply(err); }
    reply.continue();
  });
});
