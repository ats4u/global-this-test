const { Console } =  require('node:console');
const { get : mod_a_get } = require('./mod-a.cjs');
const { get : mod_b_get } = require('./mod-b.cjs');

globalThis.console = new Console({ stdout: process.stderr, stderr: process.stderr });

console.error( `mod_a_get()===mod_b_get()`, mod_a_get()===mod_b_get() );


