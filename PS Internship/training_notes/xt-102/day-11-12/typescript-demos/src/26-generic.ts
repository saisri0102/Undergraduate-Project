// generic is a blueprint for a class (,interface, function, types etc.)
// class is a blueprint for creating objects

type Product<T1, T2 = number> = {
    name: T1,
    price: T2
}

type DetailedName = {
    brand: string,
    productName: string
};

type DetailedPrice = {
    basePrice: number,
    gst: number
}

// option 1 : you can define these types for convenience
type ProductShortName = Product<string>; // { name: string, price: number }

// type ProductDetailedName = {
//     name: {
//         brand: string,
//         productName: string
//     },
//     price: {
//         basePrice: number,
//         gst: number
//     }
// }
type ProductDetailedName = Product<DetailedName, DetailedPrice>;

// create the type on the fly and use it
const samsungNote : Product<string> = {
    name: 'Samsung Note',
    price: 45000
};

const iPhoneX : Product<DetailedName, DetailedPrice> = {
    name: {
        brand: 'Apple',
        productName: 'iPhone X'
    },
    price: {
        basePrice: 40000,
        gst: 5000
    }
};