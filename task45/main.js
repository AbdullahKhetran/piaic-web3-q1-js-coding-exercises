function carDetails(manufacturer, model, color = "", nickname = "", cool_features = "") {
    var Object = {
        manufacturer: manufacturer,
        model_name: model,
        color: color,
        nickname: nickname,
        coolFeatures: cool_features,
    }
    return Object
}
let car1 = carDetails("toyota", "corrola");
console.log(car1);

let car2 = carDetails("honda", "civic", "white");
console.log(car2);

let car3 = carDetails("suzuki", "mehran", "silver", "boss", "braggin rights");
console.log(car3);