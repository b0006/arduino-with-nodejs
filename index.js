const { Board, Led } = require("johnny-five");

const LED_PIN = 13;

const arduinoBoard = new Board({ port: 'COM3' });
arduinoBoard.on("ready", function() {
   console.log("LED has Started Blinking!");
   const led = new Led(LED_PIN);
   led.strobe(1000);
});
