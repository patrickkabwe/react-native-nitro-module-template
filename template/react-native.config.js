const path = require('path');
const fs = require('fs');

// Get all package directories from the packages folder
const packagesDir = path.join(__dirname, 'packages');
const packages = fs.readdirSync(packagesDir);

// Helper function to find podspec file
const findPodspecPath = packagePath => {
  const files = fs.readdirSync(packagePath);
  const podspecFile = files.find(file => file.endsWith('.podspec'));
  return podspecFile ? path.join(packagePath, podspecFile) : null;
};

// Generate dependencies configuration dynamically
const dependencies = packages.reduce((acc, packageName) => {
  const packagePath = path.join(packagesDir, packageName);

  // Skip if not a directory
  if (!fs.statSync(packagePath).isDirectory()) return acc;

  try {
    const packageJson = require(path.join(packagePath, 'package.json'));

    // Skip packages that don't have react-native in their dependencies
    const hasReactNative =
      packageJson.dependencies?.['react-native'] ||
      packageJson.peerDependencies?.['react-native'] ||
      packageJson.devDependencies?.['react-native'];

    if (!hasReactNative) {
      console.log(`Skipping ${packageJson.name} - not a React Native package`);
      return acc;
    }

    const podspecPath = findPodspecPath(packagePath);

    acc[packageJson.name] = {
      root: packagePath,
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
    console.warn(`Warning: Could not process package at ${packagePath}`, error);
  }

  return acc;
}, {});

/**
 * @type {import('@react-native-community/cli-types').Config}
 */
module.exports = {
  dependencies,
};
