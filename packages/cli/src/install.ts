import shell from 'shelljs';
// Check npm version
const npm = shell.exec('npm -v').stdout;

if (parseFloat(npm) < 5) {
  throw new Error('[ERROR: DashpadX] You need npm version @>=5');
}

const nodeVersion = shell.exec('node -v').stdout.replace('v', '');

if (parseFloat(nodeVersion) < 10.1) {
  throw new Error('[ERROR: DashpadX] You need to use node version @>=10');
}

// Store installation start date.
const silent = process.env.npm_config_debug !== 'true';

const watcher = (label: string, cmd: string, withSuccess = true) => {
  if (label.length > 0) {
    shell.echo(label);
  }

  const data = shell.exec(cmd, {
    silent,
  });

  if (data.stderr && data.code !== 0) {
    console.error(data.stderr);
    process.exit(1);
  }

  if (label.length > 0 && withSuccess) {
    shell.echo('✅  Success');
    shell.echo('');
  }
};

shell.echo('');
shell.echo('🕓  The setup process can take few minutes.');
shell.echo('');

// Remove existing binary.
shell.rm('-f', '/usr/local/bin/dpx');
watcher('📦  Linking DashpadX-cli...', 'ln -s "$(pwd)/bin/cli" /usr/local/bin/dpx');

shell.echo('✅  DashpadX has been succesfully installed.');
shell.echo('✅  Try `dpx --help`');
