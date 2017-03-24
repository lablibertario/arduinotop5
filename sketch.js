var serial; // variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodem1411'; // fill in your serial port name here

var circle1 = {
  x: 400,
  y: 300,
  d: 10,
  sp: 800
}

var counter = 0;

function setup() {
  
  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('list', printList); // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen); // callback for the port opening
  serial.on('data', serialEvent); // callback for when new data arrives
  serial.on('error', serialError); // callback for errors
  serial.on('close', portClose); // callback for the port closing

  //serial.list(); // list the serial ports
  serial.open(portName); // open a serial port
 
  createCanvas(800,600);
  background(240);
}

function draw() {
    action();
}

function action() {
  ellipse(circle1.x,circle1.y,circle1.d,circle1.d);
  counter = counter + 1;
  fill(random(255),random(255),random(255));
  circle1.d = circle1.d + 50;
  if (counter % 5 === 0){
    circle1.d = 5;
  }
  if (counter % 2 === 0){
    circle1.x = random(800);
    circle1.y = random(600);
  }
}


function serialEvent() {
 
}

function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}

function portClose() {
  console.log('The serial port closed.');
}

function printList(portList) {
  for (var i = 0; i < portList.length; i++) {
    console.log(i + " " + portList[i]);
  }
}


function serverConnected() {
  console.log('connected to server.');
}

function portOpen() {
  console.log('the serial port opened.')
}