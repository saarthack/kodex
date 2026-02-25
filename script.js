var cars = [
    {
        "carName": "Mahindra XUV700",
        "carType": "SUV",
        "carColor": [
            { "name": "Everest White", "hex": "#F2F3F4" },
            { "name": "Midnight Black", "hex": "#080808" },
            { "name": "Electric Blue", "hex": "#003399" },
            { "name": "Red Rage", "hex": "#8B0000" }
        ],
        "parentCompany": "Mahindra & Mahindra",
        "Engine": "2.0L mStallion Turbo Petrol / 2.2L mHawk Diesel",
        "price": "₹13.99 - 26.99 Lakh",
        "pros": [
            "Class-leading performance engines",
            "Futuristic dual-screen dashboard",
            "Sony 12-speaker premium audio system",
            "Smooth 6-speed torque converter auto",
            "High safety tech and AWD option"
        ],
        "cons": [
            "Long waiting periods in some cities",
            "Boot space with all 7 seats up is nil",
            "Petrol engine is quite thirsty",
            "Occasional software glitches",
            "Ride is slightly firm on low speeds"
        ],
        "image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter-3.jpeg",
        "mileage": "13.0 - 17.0 kmpl",
        "available": false
    },
    {
        "carName": "Hyundai Creta",
        "carType": "Mid-size SUV",
        "carColor": [
            { "name": "Abyss Black", "hex": "#121212" },
            { "name": "Robust Emerald", "hex": "#004225" },
            { "name": "Atlas White", "hex": "#FFFFFF" },
            { "name": "Fiery Red", "hex": "#B22222" }
        ],
        "parentCompany": "Hyundai India",
        "Engine": "1.5L MPi Petrol / 1.5L CRDi Diesel / 1.5L Turbo GDi",
        "price": "₹10.99 - 20.15 Lakh",
        "pros": [
            "Vast feature list (Ventilated seats, Panoramic Sunroof)",
            "Refined and quiet engines",
            "Strong resale value in India",
            "Wide service network reach",
            "Comfortable suspension for city drives"
        ],
        "cons": [
            "Polarizing front-end design for some",
            "Safety rating is lower than some rivals",
            "Turbo variant is expensive",
            "Rear seat is best for two adults only",
            "Light steering lacks feedback on highways"
        ],
        "image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/141115/creta-exterior-right-front-three-quarter-16.jpeg",
        "mileage": "17.4 - 21.8 kmpl",
        "available": true
    },
    {
        "carName": "Toyota Innova Hycross",
        "carType": "MPV",
        "carColor": [
            { "name": "Blackish Ageha", "hex": "#1C2841" },
            { "name": "Platinum White", "hex": "#E5E4E2" },
            { "name": "Attitude Black", "hex": "#000000" },
            { "name": "Silver Metallic", "hex": "#C0C0C0" }
        ],
        "parentCompany": "Toyota India",
        "Engine": "2.0L VVTi Hybrid",
        "price": "₹19.77 - 30.98 Lakh",
        "pros": [
            "Legendary Toyota reliability",
            "Extreme comfort with Ottoman seats",
            "Incredible fuel efficiency for a large car",
            "Light steering, easy to drive",
            "Huge cabin space"
        ],
        "cons": [
            "Very long waiting periods",
            "No Manual transmission option",
            "Interior quality doesn't match the 30L price",
            "Missing a spare wheel in some trims",
            "Thin tires for the car's bulk"
        ],
        "image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/115025/innova-hycross-exterior-right-front-three-quarter-73.jpeg",
        "mileage": "23.24 kmpl",
        "available": true
    },
    {
        "carName": "MG Hector",
        "carType": "SUV",
        "carColor": [
            { "name": "Dune Brown", "hex": "#5D4037" },
            { "name": "Havana Grey", "hex": "#4F4F4F" },
            { "name": "Candy White", "hex": "#FFFFFF" },
            { "name": "Glaze Red", "hex": "#D32F2F" }
        ],
        "parentCompany": "MG Motor India",
        "Engine": "1.5L Turbo Petrol / 2.0L Diesel",
        "price": "₹13.99 - 22.24 Lakh",
        "pros": [
            "Massive 14-inch touchscreen",
            "Soft, plush ride quality",
            "Best-in-class rear legroom",
            "Panoramic sunroof is huge",
            "Premium 'Internet Inside' features"
        ],
        "cons": [
            "Petrol CVT is very fuel-thirsty",
            "Handling is soft, lots of body roll",
            "Touchscreen is prone to fingerprint smudges",
            "Diesel lacks an Automatic option",
            "Design might be too 'blingy' for some"
        ],
        "image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/130583/hector-exterior-right-front-three-quarter-75.jpeg",
        "mileage": "12.0 - 15.5 kmpl",
        "available": true
    },
]
var sum = ''

cars.forEach(function (elem) {
    sum += `<div class="car-card">
            <div class="div1">
                <img src="${elem.image}"
                    alt="">
                ${elem.available ? '<h5>available</h5>' : ''}
            </div>
            <div class="div2">
                <h2>${elem.carName} <span>(${elem.carType})</span></h2>
                <h3>${elem.parentCompany}</h3>
                <h4>Engine : ${elem.Engine}</h4>
                <h5>Mileage : ${elem.mileage}</h5>
                <div class="colors">
                    <h6>Colors : </h6>
                     <div style="background-color: ${elem.carColor[0].hex};"></div>
                     <div style="background-color:  ${elem.carColor[1].hex};"></div>
                     <div style="background-color:  ${elem.carColor[2].hex};"></div>
                    <p>+4</p>
                </div>
                <h6>Price : ${elem.price}/-</h6>
            </div>
            <div class="div3">
                <h3 class="pros">Pros - </h3>
                <div class="pros-p">
                    <p>${elem.pros[0]}</p>
                    <p>${elem.pros[1]}</p>
                    <p>${elem.pros[2]}</p>
                </div>
                <h3 class="cons">Cons - </h3>
                <div class="cons-p">
                    <p>${elem.cons[0]}</p>
                    <p>${elem.cons[1]}</p>
                    <p>${elem.cons[2]}</p>
                </div>
            </div>
        </div>`
})

var main = document.querySelector('main')

main.innerHTML = sum
