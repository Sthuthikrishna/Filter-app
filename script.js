let array = [
    { foodName: "Burger", foodCategory: "Snacks", isJunkFood: true, calories: 300, foodItemImageUrl: "https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F3150%2Ftrend20210603071422.jpg" },
    { foodName: "Sand witch", foodCategory: "Breakfast", isJunkFood: true, calories: 350, foodItemImageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTSN5kicUBlMoNDVdzAAnPrhJchSbdkYM70g&usqp=CAU" },
    { foodName: "Pizza", foodCategory: "Dinner", isJunkFood: true, calories: 266, foodItemImageUrl: "https://b.zmtcdn.com/data/pictures/chains/3/19056943/06029b048ef65a9180d3ab70f50c3f19.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" },
    { foodName: "Omlette", foodCategory: "Breakfast", isJunkFood: false, calories: 150, foodItemImageUrl: "https://www.mygorgeousrecipes.com/wp-content/uploads/2018/02/Worlds-Best-Vegetarian-Omelette-Quick-and-Easy-500x500.jpg" },
    { foodName: "Biriyani", foodCategory: "Lunch", isJunkFood: true, calories: 290, foodItemImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Biryani_of_Lahore.jpg/640px-Biryani_of_Lahore.jpg" },
    { foodName: "Momos", foodCategory: "Snacks", isJunkFood: true, calories: 290, foodItemImageUrl: "https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg" },
    { foodName: "Rice", foodCategory: "Lunch", isJunkFood: false, calories: 130, foodItemImageUrl: "https://myfoodstory.com/wp-content/uploads/2020/04/How-to-cook-Basmati-Rice-3-Ways-2.jpg" },
    { foodName: "Popcorn", foodCategory: "Snacks", isJunkFood: false, calories: 375, foodItemImageUrl: "https://www.twosisterscrafting.com/wp-content/uploads/2016/01/perfect-stovetop-popcorn-1200-featured-735x735.jpg" },
    { foodName: "KFC", foodCategory: "Snacks", isJunkFood: true, calories: 550, foodItemImageUrl: "https://content.jdmagicbox.com/comp/tumkur/b7/9999px816.x816.210929202557.b5b7/catalogue/kfc-shankar-mall--sira-road-tumkur-tumkur-kfc-1bvtnkjdsv.jpg?clr=#491d1d?fit=around%7C270%3A130&crop=270%3A130%3B%2A%2C%2A" },
    { foodName: "Sushi", foodCategory: "Snacks", isJunkFood: false, calories: 150, foodItemImageUrl: "https://foodhub.scene7.com/is/image/woolworthsltdprod/coohea256sessus_025:Mobile-1300x1150" },

]

function Filter(type) {
    document.querySelector(".container-food-list ").innerHTML = ""
    if (type == 'breakfast') {

        array.filter(function(item) {
            if (item.foodCategory == "Breakfast") {
                document.querySelector(".container-food-list ").innerHTML += `<div class="food-item animate">
                <img class="images" src="${item.foodItemImageUrl}" alt="">
                <h1>${item.foodName}</h1>
                <p>${item.foodCategory}</p>
                <p>${item.calories} calories</p>
    
            </div>`

            }
        })
    } else if (type == 'calories') {

        array.filter(function(item) {
            if (item.calories < 300) {
                document.querySelector(".container-food-list ").innerHTML += `<div class="food-item animate">
                <img class="images" src="${item.foodItemImageUrl}" alt="">
                <h1>${item.foodName}</h1>
                <p>${item.foodCategory}</p>
                <p>${item.calories} calories</p>
    
            </div>`
            }
        })
    } else if (type == 'junk') {

        array.filter(function(item) {
            if (item.isJunkFood == true) {
                document.querySelector(".container-food-list ").innerHTML += `<div class="food-item animate">
                <img class="images" src="${item.foodItemImageUrl}" alt="">
                <h1>${item.foodName}</h1>
                <p>${item.foodCategory}</p>
                <p>${item.calories} calories</p>
    
            </div>`
            }
        })
    } else {
        array.filter(function(item) {
            document.querySelector(".container-food-list ").innerHTML += `<div class="food-item animate">
            <img class="images" src="${item.foodItemImageUrl}" alt="">
            <h1>${item.foodName}</h1>
            <p>${item.foodCategory}</p>
            <p>${item.calories} calories</p>

        </div>`
        })
    }

}
array.filter(function(item) {
    document.querySelector(".container-food-list ").innerHTML += `<div class="food-item">
                <img class="images" src="${item.foodItemImageUrl}" alt="">
                <h1>${item.foodName}</h1>
                <p>${item.foodCategory}</p>
                <p>${item.calories} calories</p>
    
            </div>`
})