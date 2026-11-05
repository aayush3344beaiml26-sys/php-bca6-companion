import {jspi} from 'wasm-feature-detect';
export async function getPHPLoaderModule(){return await jspi()?await import('./php83/jspi/php_8_3.js'):await import('./php83/asyncify/php_8_3.js');}
export async function getIntlExtensionPath(){throw new Error('Optional intl extension is not bundled in this teaching runtime.');}
