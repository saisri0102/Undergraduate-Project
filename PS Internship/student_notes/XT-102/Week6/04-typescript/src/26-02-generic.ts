type Product<T1 , T2 = number> =
{
    name: T1,
    price: T2
};

type DetailedName ={
    brand: string,
    productName: string
};

type DetailedPrice ={
    basePrice : number,
    gst: number
}

type ProductShortName = Product<string>;

type ProductDetailedName = Product<DetailedName, DetailedPrice>

// the above line is shortcut for the below 
// type ProductDetailedName = {
//     name :{
//         brand: string,
//         productName: string
//     },
//     price: {
//         basePrice : number,
//         gst: number
//     }
    
// };


const samsungNote : Product<string>={
    name: ' Samsung Note',
    price: 45000
};

const iPhoneX: Product<DetailedName, DetailedPrice> ={
    name:{
        brand: 'Apple',
        productName: 'iPhone X'
    },
    price:{
        basePrice: 40000,
        gst: 5000
    }
}