const path = require('path');
const fs = require('fs');

// Get all package directories from the modules folder
const modulesDir = path.join(__dirname, 'modules');
const modules = fs.readdirSync(modulesDir);

// Helper function to find podspec file
const findPodspecPath = modulePath => {
  const files = fs.readdirSync(modulePath);
  const podspecFile = files.find(file => file.endsWith('.podspec'));
  return podspecFile ? path.join(modulePath, podspecFile) : null;
};

// Generate dependencies configuration dynamically
const dependencies = modules.reduce((acc, moduleName) => {
  const modulePath = path.join(modulesDir, moduleName);

  // Skip if not a directory
  if (!fs.statSync(modulePath).isDirectory()) return acc;

  try {
    const packageJson = require(path.join(modulePath, 'package.json'));

    // Skip packages that don't have react-native in their dependencies
    const hasReactNative =
      packageJson.dependencies?.['react-native'] ||
      packageJson.peerDependencies?.['react-native'] ||
      packageJson.devDependencies?.['react-native'];

    if (!hasReactNative) {
      console.log(`Skipping ${packageJson.name} - not a React Native package`);
      return acc;
    }

    const podspecPath = findPodspecPath(modulePath);

    acc[packageJson.name] = {
      root: modulePath,
      platforms: {
        /**
         * @type {import('@react-native-community/cli-types').IOSDependencyConfig}
         */
        ios: {
          podspecPath,
        },
        /**
         * @type {import('@react-native-community/cli-types').AndroidDependencyConfig}
         */
        android: {},
      },
    };
  } catch (error) {
    console.warn(`Warning: Could not process module at ${modulePath}`, error);
  }

  return acc;
}, {});

/**
 * @type {import('@react-native-community/cli-types').Config}
 */
module.exports = {
  dependencies,
};
