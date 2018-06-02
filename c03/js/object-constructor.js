function Hotel(name, rooms, booked) {
    // constructor names typically begin w/ capital, unlike regular functions
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;

    this.checkAvailability = function() {
        return this.rooms - this.booked;
    };
}

var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);

quayHotel.gym = true;
quayHotel.pool = false;


var hotel1 = quayHotel.name + ' rooms: ';
    hotel1 += quayHotel.checkAvailability();

var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = hotel1;

var hotel2 = parkHotel.name + ' rooms: ';
    hotel2 += parkHotel.checkAvailability();

var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = hotel2;

var elName = document.getElementById('hotelName');
elName.textContent = quayHotel.name;

var elGym = document.getElementById('gym');
elGym.className = 'Gym: ' + quayHotel.gym;

var elPool = document.getElementById('pool');
elPool.className = 'Pool: ' + quayHotel.pool;

