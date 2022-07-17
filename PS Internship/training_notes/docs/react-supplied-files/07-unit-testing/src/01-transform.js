import arithmetic from './modules/arithmetic';

export default function( x, y ) {
    let sum = arithmetic.sum( x, y )
    let product = arithmetic.product( sum, sum );
    return arithmetic.sum( product, product );
}