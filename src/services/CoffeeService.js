import * as genresAPI from "./TypeOfCoffeeService";

const coffees = [
  {
id: "5b21ca3eeb7f6fbccd471815",
src: "https://imgur.com/BKobnAb.jpg",
thumbnail: "https://s3-media0.fl.yelpcdn.com/bphoto/GXI8-4QoYb72bGAts8IE8Q/o.jpg",
thumbnailWidth: 420,
thumbnailHeight: 512,
isSelected:false,
caption: "Iced Pumpkin Spice Latte",
kind:"Latte",
},

{
id: "5b21ca3eeb7f6fbccd471816",
src: "https://s3-media0.fl.yelpcdn.com/bphoto/tg6Oi3j0E_pAq3v6MVKSUg/o.jpg",
thumbnail: "https://s3-media0.fl.yelpcdn.com/bphoto/tg6Oi3j0E_pAq3v6MVKSUg/o.jpg",
thumbnailWidth: 420,
thumbnailHeight: 512,
tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
isSelected:false,
caption: "Hot Pumpkin Spice Latte",
kind:"Latte",
},

{
id: "5b21ca3eeb7f6fbccd471817",
src: "https://imgur.com/Ds8Gqz7.jpg",
thumbnail: "https://imgur.com/Ds8Gqz7.jpg",
thumbnailWidth: 420,
thumbnailHeight: 512,
isSelected:false,
caption: "Coconut Milk Tea X Mango Star Jelly",
kind:"Milk Tea",
description:"We run out of tapioca FAST, so one of our customers improvised and asked for our mango star topping with our coconut milk tea. Had to try it for ourselves last night and we’re a fan!! Good choices made by our awesome customers",
},
{
id: "5b21ca3eeb7f6fbccd471819",
src: "https://s3-media0.fl.yelpcdn.com/bphoto/Jv9HTbsOe6GvONef_KN15w/o.jpg",
thumbnail: "https://s3-media0.fl.yelpcdn.com/bphoto/Jv9HTbsOe6GvONef_KN15w/o.jpg",
thumbnailWidth: 420,
thumbnailHeight: 512,
isSelected:false,
caption: "Hazelnut Hot Chocolate",
kind:"Latte",

},
{
id: "5b21ca3eeb7f6fbccd47181a",
src: "https://s3-media0.fl.yelpcdn.com/bphoto/95-sDqNY65gtHSE3Hm_-Tg/o.jpg",
thumbnail: "https://s3-media0.fl.yelpcdn.com/bphoto/95-sDqNY65gtHSE3Hm_-Tg/o.jpg",
thumbnailWidth: 420,
thumbnailHeight: 512,
tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
isSelected:false,
caption: "Strawberry Matcha Iced with Oat Milk",
kind:"Mixed"
},

{
id: "5b21ca3eeb7f6fbccd47181b",
src: "https://s3-media0.fl.yelpcdn.com/bphoto/SrhFtgEXad7aTTOmYH19Yg/o.jpg",
thumbnail: "https://s3-media0.fl.yelpcdn.com/bphoto/SrhFtgEXad7aTTOmYH19Yg/o.jpg",
thumbnailWidth: 420,
thumbnailHeight: 512,
caption: "Strawberry Ube Latte",
kind:"Latte"
},
{
id: "5b21ca3eeb7f6fbccd47181c",
src: "https://s3-media0.fl.yelpcdn.com/bphoto/dBecbY53_wSnuWClRaIndQ/o.jpg",
thumbnail: "https://s3-media0.fl.yelpcdn.com/bphoto/dBecbY53_wSnuWClRaIndQ/o.jpg",
thumbnailWidth: 420,
thumbnailHeight: 512,
isSelected:false,
caption: "Lychee Rose Soda",
kind:"Mixed"
},
{
id: "5b21ca3eeb7f6fbccd47181d",
src: "https://s3-media0.fl.yelpcdn.com/bphoto/eMci0FVqV-vpmSNf4FNOWg/o.jpg",
thumbnail: "https://s3-media0.fl.yelpcdn.com/bphoto/eMci0FVqV-vpmSNf4FNOWg/o.jpg",
thumbnailWidth: 420,
thumbnailHeight: 512,
isSelected:false,
caption: "Butterfly Pea with Coconut Juice",
kind:"Mixed"
},
{
id: "5b21ca3eeb7f6fbccd47181e",
src: "https://imgur.com/0AoRn0W.jpg",
thumbnail: "https://imgur.com/0AoRn0W.jpg",
thumbnailWidth: 420,
thumbnailHeight: 512,
isSelected:false,
caption: "Strawberry Basil Slushie",
kind:"Mixed"
},
{
id: "5b21ca3eeb7f6fbccd47181f",
src: "https://imgur.com/hxDaQDf.jpg",
thumbnail: "https://imgur.com/hxDaQDf.jpg",
thumbnailWidth: 320,
thumbnailHeight: 412,
isSelected:false,
caption: "Cofee bubble Tea",
kind:"Milk Tea"
},
{
id: "5b21ca3eeb7f6fbccd47181g",
src: "https://imgur.com/K76bqp0.jpg",
thumbnail: "https://imgur.com/K76bqp0.jpg",
thumbnailWidth: 420,
thumbnailHeight: 512,
isSelected:false,
caption: "Pistachio Lavander Latte",
kind:"Latte"
},
{
id: "5b21ca3eeb7f6fbccd47181h",
src: "https://imgur.com/gdkoEEu.jpg",
thumbnail: "https://imgur.com/gdkoEEu.jpg",
thumbnailWidth: 420,
thumbnailHeight: 512,
isSelected:false,
caption: "Galaxy Jade Latte",
kind:"Latte"
},
{
id: "5b21ca3eeb7f6fbccd47181i",
src: "https://imgur.com/zD4xClo.jpg",
thumbnail: "https://imgur.com/zD4xClo.jpg",
thumbnailWidth: 420,
thumbnailHeight: 512,
isSelected:false,
description:'butterfly pea tea naturally changes colors from a deep blue to a light magenta when mixed with citrus',
caption: "Iced Lemonade Butterfly Pea",
kind:"Mixed"
},
{

id: "5b21ca3eeb7f6fbccd47181h",
src: "https://imgur.com/KgarCZT.jpg",
thumbnail: "https://imgur.com/KgarCZT.jpg",
thumbnailWidth: 420,
thumbnailHeight: 512,
isSelected:false,
caption: "Black Sesame Cream Latte",
kind:"Latte",
},
{
id: "5b21ca3eeb7f6fbccd47181j",
src: "https://imgur.com/MGwOBh3.jpg",
thumbnail: "https://imgur.com/MGwOBh3.jpg",
thumbnailWidth: 420,
thumbnailHeight: 512,
isSelected:false,
caption: "Matcha Latte",
kind:"Latte",
},


]

const coffeesCarousel = [
    
  {
    "id": "5b21ca3eeb7f6fbccd471815",
    "author": "Iced Pumpkin Spice Latte",
    "width": 5616,
    "height": 3744,
    "url": "https://imgur.com/BKobnAb",
    "download_url": "https://s3-media0.fl.yelpcdn.com/bphoto/GXI8-4QoYb72bGAts8IE8Q/o.jpg"
  },
  {
    "id": "5b21ca3eeb7f6fbccd471816",
    "author": "Hot Pumpkin Spice Latte",
    "width": 5616,
    "height": 3744,
    "url": "https://s3-media0.fl.yelpcdn.com/bphoto/tg6Oi3j0E_pAq3v6MVKSUg/o.jpg",
    "download_url": "https://s3-media0.fl.yelpcdn.com/bphoto/tg6Oi3j0E_pAq3v6MVKSUg/o.jpg"
  },
  {
    "id": "5b21ca3eeb7f6fbccd471817",
    "author": "Coconut Milk Tea X Mango Star Jelly",
    "width": 5616,
    "height": 3774,
    "url": "https://imgur.com/Ds8Gqz7.jpg",
    "download_url": "https://imgur.com/Ds8Gqz7.jpg"
  },
  {
    "id": "5b21ca3eeb7f6fbccd471819",
    "author": "Hazelnut Hot Chocolate",
    "width": 5616,
    "height": 3774,
    "url": "https://s3-media0.fl.yelpcdn.com/bphoto/Jv9HTbsOe6GvONef_KN15w/o.jpg",
    "download_url": "https://s3-media0.fl.yelpcdn.com/bphoto/Jv9HTbsOe6GvONef_KN15w/o.jpg"
  },
  {
    "id": "5b21ca3eeb7f6fbccd47181a",
    "author": "Strawberry Matcha Iced with Oat Milk",
    "width": 5616,
    "height": 3774,
    "url": "https://s3-media0.fl.yelpcdn.com/bphoto/95-sDqNY65gtHSE3Hm_-Tg/o.jpg",
    "download_url": "https://s3-media0.fl.yelpcdn.com/bphoto/95-sDqNY65gtHSE3Hm_-Tg/o.jpg"
  },
  {
    "id": "5b21ca3eeb7f6fbccd47181b",
    "author": "Strawberry Ube Latte",
    "width": 5616,
    "height": 3774,
    "url": "https://s3-media0.fl.yelpcdn.com/bphoto/SrhFtgEXad7aTTOmYH19Yg/o.jpg",
    "download_url": "https://s3-media0.fl.yelpcdn.com/bphoto/SrhFtgEXad7aTTOmYH19Yg/o.jpg"
  },
  {
    "id": "5b21ca3eeb7f6fbccd47181c",
    "author": "Lychee Rose Soda",
    "width": 5616,
    "height": 3774,
    "url": "https://s3-media0.fl.yelpcdn.com/bphoto/dBecbY53_wSnuWClRaIndQ/o.jpg",
    "download_url": "https://s3-media0.fl.yelpcdn.com/bphoto/dBecbY53_wSnuWClRaIndQ/o.jpg"
  },
  {
    "id": "5b21ca3eeb7f6fbccd47181d",
    "author": "Butterfly Pea with Coconut Juice",
    "width": 5616,
    "height": 3774,
    "url": "https://s3-media0.fl.yelpcdn.com/bphoto/eMci0FVqV-vpmSNf4FNOWg/o.jpg",
    "download_url": "https://s3-media0.fl.yelpcdn.com/bphoto/eMci0FVqV-vpmSNf4FNOWg/o.jpg",
  },
  {
    "id": "5b21ca3eeb7f6fbccd47181e",
    "author": "Strawberry Basil Slushie",
    "width": 5616,
    "height": 3744,
    "url": "https://imgur.com/0AoRn0W.jpg",
    "download_url": "https://imgur.com/0AoRn0W.jpg"
  },
  {
    "id": "5b21ca3eeb7f6fbccd47181j",
    "author": "Matcha Latte",
    "width": 5616,
    "height": 3774,
    "url": "https://imgur.com/MGwOBh3.jpg",
    "download_url": "https://imgur.com/MGwOBh3.jpg"
  },
  {
    "id": "5b21ca3eeb7f6fbccd47181f",
    "author": "Cofee bubble Tea",
    "width": 5616,
    "height": 3774,
    "url": "https://imgur.com/hxDaQDf.jpg",
    "download_url": "https://imgur.com/hxDaQDf.jpg"
  },
  {
    "id": "5b21ca3eeb7f6fbccd47181g",
    "author": "Pistachio Lavander Latte",
    "width": 5616,
    "height": 3744,
    "url": "https://imgur.com/K76bqp0.jpg",
    "download_url": "https://imgur.com/K76bqp0.jpg"
  },
  {
    "id": "5b21ca3eeb7f6fbccd47181h",
    "author": "Galaxy Jade Latte",
    "width": 5616,
    "height": 3774,
    "url": "https://imgur.com/gdkoEEu.jpg",
    "download_url": "https://imgur.com/gdkoEEu.jpg"
  },
  {
    "id": "5b21ca3eeb7f6fbccd47181i",
    "author": "Iced Lemonade Butterfly Pea",
    "width": 5616,
    "height": 3774,
    "url": "https://imgur.com/zD4xClo.jpg",
    "download_url": "https://imgur.com/zD4xClo.jpg"
  },
  {
    "id": "5b21ca3eeb7f6fbccd47181h",
    "author": "Black Sesame Cream Latte",
    "width": 5616,
    "height": 3774,
    "url": "https://imgur.com/KgarCZT.jpg",
    "download_url": "https://imgur.com/KgarCZT.jpg"
  },
  
]

export function getCoffees() {
  return coffees;
}

export function getMovie(id) {
  return coffees.find(m => m.id === id);
}

export function getCoffeesCarousel(){
  return coffeesCarousel;
  
}

// export function saveMovie(movie) {
//   let movieInDb = coffees.find(m => m._id === movie._id) || {};
//   movieInDb.title = movie.title;
//   movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
//   movieInDb.numberInStock = movie.numberInStock;
//   movieInDb.dailyRentalRate = movie.dailyRentalRate;

//   if (!movieInDb._id) {
//     movieInDb._id = Date.now().toString();
//     coffees.push(movieInDb);
//   }

//   return movieInDb;
// }

// export function deleteMovie(id) {
//   let movieInDb = coffees.find(m => m._id === id);
//   coffees.splice(coffees.indexOf(movieInDb), 1);
//   return movieInDb;
// }