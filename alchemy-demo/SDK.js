const { Network, Alchemy } = require('alchemy-sdk');

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: 'J9olWwxNpGCGScXgkiyty0r6GB8YL46K', // Replace with your Alchemy API Key.
    network: Network.eth-mainnet.g.alchemy.com/v2/J9olWwxNpGCGScXgkiyty0r6GB8YL46K// Replace with your network.
    };

    const alchemy = new Alchemy(settings);