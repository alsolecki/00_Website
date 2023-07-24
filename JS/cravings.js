
class Craving {
    constructor(dishName, restaurant, description, image) {
        this.dishName = dishName;
        this.restaurant = restaurant;
        this.description = description;
        this.image = image;
    }
    
    select = () => console.log('Pick Me!')
    unselect = () => console.log('Do not pick me.')

}

const mamaDumpling = new Craving('Mama Special Dumpling', 'China Bistro', 'pan fried; Pork, shrimp, chives and napa.', "../images/mamaSpecialDumpling");

const papusa = new Craving('Papusa Revuelta', 'La Casita Papusaria & Market', 'Ground pork Chicharron + cheese', '../images/papusaRevuelta.png');

const wings = new Craving('<h4>Hot Wing Combo</h4>', 'Wingstop', '8 piece wing combo, well-done, hot flavor, with veggies sticks and ranch for dipping', '');

const pizza = new Craving('Pizza', 'Petes', 'Edge of the Woods')

const indian = new Craving('Indian', 'Jewel of India', 'Muligatawny Soup')

