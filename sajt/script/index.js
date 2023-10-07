var $popupContainer = document.getElementById('popup-container'),
    $popup = $popupContainer.querySelector('.popup');

document.getElementById('potvrdi').onclick = function(){
//////////////////////////////////////////////////////////////////////////////////////
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  //datum
  let dateInput = document.getElementById("datum").value;
  let selectedDate = new Date(dateInput);
  let currentDate = new Date();
  
  
  //vreme
  let timeInput = document.getElementById("vreme").value;
  let timeParts = timeInput.split(":");
  let hours = parseInt(timeParts[0]);
  let minutes = parseInt(timeParts[1]);

  let selectedTime = new Date();
  selectedTime.setHours(hours, minutes);

  let startTime = new Date();
  startTime.setHours(9, 0);

  let endTime = new Date();
  endTime.setHours(20, 0);
//////////////////////////////////////////////////////////////////////////////////////
//sporedni podaci
let mail = document.getElementById("mail").value;
let people = document.getElementById("people").value;


if(fname.length < 2 || fname.length > 25){

  alert("First name must be between 2 and 25 characters long!")

} else if(lname.length < 2 || lname.length > 25){

  alert("Last name must be between 2 and 25 characters long!")

} else if(timeInput == "") {

  alert("Please select time.")

} else if (selectedTime < startTime || selectedTime > endTime) {

    alert("The time must be between 09:00AM and 08:00PM!");

} else if(dateInput == ""){

  alert("Please select date.")
  
}

else if (selectedDate.getTime() < currentDate.getTime()) {

    alert("The date must be at least the day after today!");

} else{

  alert("Name: " + fname + " " + lname + "\nDate: " + dateInput + "\nTime: " + timeInput +"\nE-mail: " + mail + "\nPeople: " + people);

  $popupContainer.style.display = 'block';
  //fade In
   setTimeout(function () {
     $popupContainer.style.opacity = 1;
   }, 100);

}

}

$( "#popup-container" ).on( "click", function() {
  $( "#popup-container" ).fadeOut( "slow" );
});

$popup.onclick = function(e){
  e.stopPropagation();
}