import { sum, multiply } from './utils';
import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css';

$( '#root' ).html( 'Hello, Webpack' ).addClass( 'container' );

console.log( sum( 12, 13 ) );
console.log( multiply( 12, 13 ) );