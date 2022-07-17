
function increaseRating(){
    this.rating= this.rating + 0.1;
}
const swiggy=[
    {
        name: 'Punjabi Rasoi',
        type: 'North Indian',
        rating: 4.2,
        time: '51 MINS',
        price: 400,

        increaseRating: increaseRating
    },

    {
        name: 'Baba Da Dhaba',
        type: 'Punjabi, North Indian, Biryani',
        rating: 4.1,
        time: '58 MINS',
        price: 200,
        increaseRating: increaseRating
    },
    {
        name: 'Taco Bell',
        type: 'Mexican',
        rating: 4.1,
        time: '56 MINS',
        price: 300,
        increaseRating: increaseRating
    },
    {
        name: 'Cafe Coffee Day',
        type: 'Beverages, Desserts, Snacks',
        rating: 4.3,
        time: '44 MINS',
        price: 150,
        increaseRating: increaseRating
    },
    {
        name: 'Kani Sweets',
        type: 'Desserts',
        rating: 4.5,
        time: '31 MINS',
        price: 50,
        increaseRating: increaseRating
    
    }

]

console.log(swiggy);
swiggy[1].increaseRating();
console.log(swiggy);

