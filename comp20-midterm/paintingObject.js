/* Painting format and structure */

var MLE = "Martha Leugers-Encherman", mi = "Michigan";

function Painting(title, artist, location, width, height, price, source) {
    this.title = title;
    this.artist = artist;
    this.location = location;
    this.width = width;
    this.height = height;
    this.price = price;
    this.source = source;
}



var gallery = [
    Painting("3 Birches", MLE, mi, "2'", "3'", 200, "images/MLE_3_birches.jpg"), 
    Painting("8 Birches", MLE, mi, "2'", "3'", 500, "images/MLE_8_birches.jpg"),
    Painting("M-22 Montage", MLE, mi, "2'", "3'", 350, "images/MLE_M_22_montage.jpg"),
    Painting("Birches and Butterflies", MLE, mi, "2'", "3'", 350, "images/MLE_M_22_montage.jpg"),
    Painting("Blue Water, Gold Sand", MLE, mi, "1.5'", "2'", 350, "images/MLE_blue_water_gold_sand.jpg")
    ]

