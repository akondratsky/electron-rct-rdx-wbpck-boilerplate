console.log('serve.js launched');

const { spawn } = require('child_process');
const electron = require('electron');
const browserSync = require('browser-sync');
const browserSyncConnectUtils = require('browser-sync/dist/connect-utils');
const bsync = browserSync.create();

const getRootUrl = (options) => {
  const port = options.get('port');
  return `http://localhost:${port}`;
};

const getClientUrl = (options) => {
  const pathname = browserSyncConnectUtils.clientScript(options);
  return getRootUrl(options) + pathname;
};

const runElectron = (browserSyncUrl) => {
  const child = spawn(electron, ['./src/main/index.js', '--enable-logging'], {
    env: {
      ...{
        NODE_ENV: 'development',
        BROWSER_SYNC_CLIENT_URL: browserSyncUrl,
      },
      ...process.env,
    },
    stdio: 'inherit',
  });

  child.on('close', onCloseElectron);

  return child;
};

const onCloseElectron = () => process.exit();

bsync.init(
  {
    ui: false,
    // Port 35829 = LiveReload's default port 35729 + 100.
    // If the port is occupied, Browsersync uses next free port automatically.
    port: 35829,
    ghostMode: false,
    open: false,
    notify: false,
    logSnippet: false,
    socket: {
      // Use the actual port here.
      domain: getRootUrl,
    },
  },
  (err, bs) => {
    if (err) return console.error(err);

    const browserSyncUrl = getClientUrl(bs.options);

    let child = runElectron(browserSyncUrl);
    const updateChild = () => { 
      child.removeListener('close', onCloseElectron);
      child.kill();
      child = runElectron(browserSyncUrl);
    };
    
    bsync.watch('build/main/**/*').on('change', updateChild);
    bsync.watch('build/renderer/**/*').on('change', bsync.reload);
  },
);
