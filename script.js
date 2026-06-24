let body = document.querySelector("body");

// Array of image links
let photos = ["https://upload.wikimedia.org/wikipedia/en/5/5a/The_Big_Bang_Theory_Season_8.jpg",
    "https://upload.wikimedia.org/wikipedia/en/a/a0/Modern_Family_season_11_poster.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Superstore_%28Universal_Television_sitcom%29.svg/500px-Superstore_%28Universal_Television_sitcom%29.svg.png",
    "https://www.publicbooks.org/wp-content/uploads/2020/04/MV5BMWMxYzBlNWMtYjRlNC00ZTY1LWE4ZTktMzMxYjlhODkwYWRhXkEyXkFqcGdeQXVyNjc5Mjg0NjU@._V1_-1000x600.jpg",
    "https://static01.nyt.com/images/2020/11/24/arts/23gilmoregirls1/23gilmoregirls1-superJumbo.jpg?quality=75&auto=webp",
];


// 1. Push an image link of one of your favorite shows to the photos array.
//  - To find the link, right-click an image and choose 'Copy Image Address'
photos.push ("https://upload.wikimedia.org/wikipedia/en/4/43/SwitchedatBirthCast.jpg");


// HTML selectors
let show1 = document.querySelector(".show-1");
let show2 = document.querySelector(".show-2");
let show3 = document.querySelector(".show-3");
let show4 = document.querySelector(".show-4");
let show5 = document.querySelector(".show-5");
let show6 = document.querySelector(".show-6");


show1.src = photos[0];
// 2. Update the src for each show# variable - use the line above as a reference.
show2.src= photos[1];
show3.src= photos[2];
show4.src= photos[3];
show5.src= photos[4];
show6.src= photos[5];