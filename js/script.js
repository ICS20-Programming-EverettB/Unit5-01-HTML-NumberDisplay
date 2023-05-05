// Created by: Everett
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function dislays numbers between the users min and max .
 */
function calculate () {
  
  // user min and max input
  let counter = parseInt(document.getElementById('min').value);
  let max = parseInt(document.getElementById('max').value);
  
  //numbers empty string
  let numbers = ""

  // while loop to display numbers between min and max
  if (counter< max) {
    
    while (counter <= max) {
  
   //number string with a line break each time
    numbers = numbers + counter + "<br>"

    //step each loop number
    counter = counter +1
    }
  }
  
  //if statment for error display
  else if ( counter >= max) {
    numbers = "ERROR, Min is greater then Max."
  }
    
  // else statment for no input
  else {
    numbers = "Please enter an integer."
  }
  
  // output all intigers between min and max
  document.getElementById('display-numbers').innerHTML = numbers

}
 
