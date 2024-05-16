// Complete the following functions to make our program work!

/**
 * Takes a F number and returns the number to C
 * @param {string} fahren temperature in degrees F
 * @returns {number} the number of degrees C
 */
function convertToCelsius(fahren) {
    console.log("Input Fahrenheit:", fahren);
    // Convert string input to number
    let fahrenheit = parseFloat(fahren);
    console.log("Parsed Fahrenheit:", fahrenheit);
    // Convert Fahrenheit to Celsius
    let celsius = (fahrenheit - 32) * (5 / 9);
    console.log("Converted Celsius:", celsius);
    // Return the Celsius value
    return celsius;
  }
  
  /**
   * Takes both numbers (F, C) and display a message with
   * both numbers and how that temp makes you feel using
   * this chart
   *
   *   Temp      Feels
   * ---------|----------
   *   < 32   |  "very cold"
   *   < 64   |  "cold"
   *   < 86   |  "warm"
   *   < 100  |  "hot"
   *
   * @param {number} fahren
   * @param {number} celc
   */
  function createMessage(fahren, celc) {
    // Initialize an empty string to store the message
    let message = '';
    
    // Determine the feeling based on the Fahrenheit temperature
    if (fahren < 32) {
      message = "very cold";
    } else if (fahren < 64) {
      message = "cold";
    } else if (fahren < 86) {
      message = "warm";
    } else if (fahren < 100) {
      message = "hot";
    }
  
    // Return the message including Fahrenheit and Celsius temperatures
    return `Fahrenheit: ${fahren}, Celsius: ${celc}, Feels: ${message}`;
  }
  
  /**
   * Takes a number and returns a random integer from 0 to the limit
   * @param {number} limit
   * @returns {number} a number between 0 and the int passed in
   */
  function rand(limit) {
    // Generate a random number between 0 and limit
    return Math.floor(Math.random() * (limit + 1));
  }
  
  // -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //
  
  let fahren = parseFloat(prompt(
    "enter a number, we will convert that number from fahrenheit to celcius"
  ));
  console.log("Input Fahrenheit:", fahren);
  let celc = convertToCelsius(fahren);
  let output = createMessage(fahren, celc);
  console.log(output);
  
  fahren = parseFloat(prompt(
    "Lets try that again. enter a number, we will convert that number from fahrenheit to celcius"
  ));
  console.log("Input Fahrenheit:", fahren);
  celc = convertToCelsius(fahren);
  output = createMessage(fahren, celc);
  console.log(output);
  
  fahren = rand(110);
  console.log("Random Fahrenheit:", fahren);
  celc = convertToCelsius(fahren);
  output = createMessage(fahren, celc);
  console.log(output);
  
  fahren = rand(110);
  console.log("Random Fahrenheit:", fahren);
  celc = convertToCelsius(fahren);
  output = createMessage(fahren, celc);
  console.log(output);
  

