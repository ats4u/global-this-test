import { Console } from 'node:console';
import { get as mod_a_get } from 'global-test/mod-a';
import { get as mod_b_get } from 'global-test/mod-b';

globalThis.console = new Console({ stdout: process.stderr, stderr: process.stderr });

console.error( `mod_a_get() === mod_b_get()`, mod_a_get() === mod_b_get() );


