require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grid nation flock system egg develop remind arrow grid arctic orange genre'; 
let testAccounts = [
"0x7e94ea89a923af885f464842f0b7d250f64ee7bcb68c660a5faf22e215ff18d9",
"0x1852d4a1836a10372b529ed2a4e7e62feaa01a65fca18918f992b5b9df6d8f0f",
"0x38db02cbc763154098146c5b71cf8b90f662b65fe5d3697270300c4ea053ac20",
"0x0d09bb870721f8f0773408d36f4e6048b147f53287edf302cc18e17eb6493aa8",
"0x5e77cfba9007183b6cf16f602506f44cbb5e047e4900aad75ff710fdd0e3a7de",
"0x06509f0f8d22b22a4867ec31d558cf5b87cff4a111123e0cee5589ae25f6b2fd",
"0xce84186ae8c2239666463de24f1a134e7b4fb514d038b38afcb3b530a6e4522a",
"0x7348074a0430a10e31f11b2f4fba41c2ecf4645845d1dd64e02f2019ab805b0c",
"0xab795240dc8947d2b41dc7d8b4c41238f95df155951a7169fc306c2fe04424f5",
"0x6d99ff886c9b44e5b94347a2a23c213aa9c75aab7b535f5fe28fe1b669340881"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


