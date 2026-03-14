console.log('Test start');
import { colord, extend } from 'colord';
import a11yPlugin from 'colord/plugins/a11y';
extend([a11yPlugin]);
console.log('Colord contrast:', colord('#ffffff').contrast('#000000'));
console.log('Test end');
