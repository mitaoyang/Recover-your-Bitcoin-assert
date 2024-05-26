const BIP86 = require('./index.js')

var mnemonic = ''
var root = new BIP86.fromMnemonic(mnemonic)
var child0 = root.deriveAccount(0)

console.log('mnemonic:', mnemonic)
console.log('rootpriv:', root.getRootPrivateKey())
console.log('rootpub:', root.getRootPublicKey())
console.log('\n');

var account0 = new BIP86.fromXPrv(child0)

console.log("Account 0, root = m/86'/0'/0'");
console.log('Account 0 xprv:', account0.getAccountPrivateKey())
console.log('Account 0 xpub:', account0.getAccountPublicKey())
console.log('\n');

console.log("Account 0, first receiving address = m/86'/0'/0'/0/0");
console.log('Prvkey:', account0.getPrivateKey(0,0))
console.log('Pubkey:', account0.getPublicKey(0,0))
console.log('Address:', account0.getAddress(0,0))
console.log('\n');

console.log("Account 0, second receiving address = m/86'/0'/0'/1/3");
console.log('Prvkey:', account0.getPrivateKey(3,1))
console.log('Pubkey:', account0.getPublicKey(3,1))
console.log('Address:', account0.getAddress(3,1))
console.log('\n');

console.log("Account 0, first change address = m/86'/0'/0'/1/2");
console.log('Prvkey:', account0.getPrivateKey(2,1))
console.log('Pubkey:', account0.getPublicKey(2,1))
console.log('Address:', account0.getAddress(2,1))
console.log('\n');
