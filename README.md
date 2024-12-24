# React Native Nitro Module Template

A scalable monorepo starter template for building React Native Nitro Modules - featuring TypeScript support, native platform implementations, and modern development workflows.

## Features

- ⚡️ Nitro Modules integration
- 📱 iOS and Android nitro module implementations
- 🧪 Jest testing setup
- 📦 Modern package management
- 🚀 TypeScript support out of the box

### Project Structure

```bash
.
├── android/              # Android application source
├── ios/                  # iOS application source
├── src/                  # React Native app code
├── packages/             # JavaScript/TypeScript module packages
│   └── my-nitro-module/  # Example of a nitro module
│       ├── __tests__/    # Test files
│       ├── android/      # Android native module implementation
│       ├── ios/          # iOS native module implementation
│       └── src/          # native module specs
├── package.json          # Project configuration
├── tsconfig.json         # TypeScript settings
└── README.md             # Documentation
```

### Usage

```bash
bunx react-native init MyApp --template react-native-nitro-module-template
cd MyApp
bun install
```

### Quick Start With Nitro Modules

> [!TIP]
> To quickly generate Nitro Modules in your app, use [Create Nitro Module](https://www.npmjs.com/package/create-nitro-module).
> `bun create nitro-module my-nitro-module --module-dir packages`

### Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

### License

This project is licensed under the MIT License - see the LICENSE file for details.

### Learn More

- [React Native Documentation](https://reactnative.com)
- [Nitro Modules](https://nitro.margelo.com)
