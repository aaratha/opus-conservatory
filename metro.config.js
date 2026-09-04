const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// pnpm's default node_modules layout uses symlinks; without this, Metro
// fails to resolve packages (including the app's own expo-router entry
// point) that only live behind a symlinked directory.
config.resolver.unstable_enableSymlinks = true;

module.exports = config;
