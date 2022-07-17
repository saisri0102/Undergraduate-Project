const buf = Buffer.alloc(256);

const len = buf.write('\u00bd + \u00bc = \u00be', 0);

console.log(`${len} bytes: ${buf.toString('utf8', 0, len)}`);
// Prints: 12 bytes: ½ + ¼ = ¾

const buffer = Buffer.alloc(10);

let length = buffer.write('ab', 7);
length = buffer.write('cd', 9);

console.log(`${length} bytes: ${buffer.toString('utf8', 8, 10)}`);