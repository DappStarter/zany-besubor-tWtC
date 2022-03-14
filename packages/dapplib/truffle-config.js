require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen food chaos rifle stereo evil impulse light army gesture'; 
let testAccounts = [
"0x4a12162dbf22f1cc2a29580e38636ca9bb953182dd80548a6c0abb65d3adca33",
"0x2ef6eeb04a1c2dcd4070e23ec8e218015bbdb0e4f4d1a4bcab68f3bae9853a4b",
"0x9561d6250c15dc84a90163f54c066b19c2a65a8c6d6a2d93568fc0533f8ae6c4",
"0xa5f04128be1807a350807ad4b722edda947c6a65d7f34eab6ba782cd50b49f24",
"0xbec2fa15f76970ef9541750b331a6c8f18c5b36aa718a78ec35fd52603cbb97b",
"0x579f3443e6dfb2b85ef966c5c677a252fa25f3d5573393765f77ce963bf40951",
"0xf456e433329cc1dd63ef04b693cdf526ca42191b7f2deb09edf3e4aa7afef413",
"0xd2903ac6cf10304a9d54e5cf7c332d69edcf19bca6d6563c6c9c01ae16e234ff",
"0x46602142a66ee489801ccdc1432280ddfb5299fff69d733f190050cf7d3574e7",
"0x42a8a3b4761a777eb9e3d23219aa5618783e19c340498c021277c8f4278de182"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

