// class is a blueprint for creating objects
// generic is a blueprint for a class (interface, function, types etc)

type Product ={
    name: string,
    price: number
};

type ProductDetailedName = {
    name :{
        brand: string,
        productName: string
    },
    price: number
};
// here both types are similar but with some differences 

const samsungNote : Product ={
    name: ' Samsung Note',
    price: 45000
};

export {}