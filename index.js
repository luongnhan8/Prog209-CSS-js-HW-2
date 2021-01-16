
//list data variables:
let fistScreen = document.getElementById("fistScreen");
let lastScreen = document.getElementById("lastScreen");
let startbutton = document.getElementById("startbutton");
let swapbutton = document.getElementById("swapbutton");

lastScreen.style.visibility = "hidden";
swapbutton.style.visibility = "hidden";

// ---Start button click event happens-----//
startbutton.addEventListener("click", enterinputword);

// promt to get user input words
function enterinputword()
{
  for (let i=0; i<3; i++)
  {
      let inputword = prompt("please enter a word: ", "  ");
      if (inputword != null)
      {
        inputwordarray.push(inputword);
      }
  }

  //call out function to display input word array
  makeListfirst();
}

//put user input words into array 
let inputwordarray = [];

//function to display input word array
function makeListfirst()
{
    let ul = document.createElement('ul');
    document.getElementById('firstList').appendChild(ul);
    for (let i = 0; i < inputwordarray.length; i++) 
    {
        // added transform CSS for the li element and the hover li
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = inputwordarray[i];
    }
    //display the change word button
    startbutton.style.display = "none";
    swapbutton.style.visibility = "visible";
}

//----swap button being click event -----//
swapbutton.addEventListener("click", swapword);

// swapping words
function swapword()
{
  //take care of screen and button
  fistScreen.style.display = "none"; 
  lastScreen.style.visibility = "visible";
  swapbutton.style.display = "none";
  //call out make swap word array
  makeListlast();
}

//now swapping first and last charaters
function makeListlast()
{
  //for swaping word here now
  let lastarray = inputwordarray.map(function(oneWord) {
        return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0); });
  
  //for display the swaped word list
    let ul = document.createElement('ul');
    document.getElementById('lastList').appendChild(ul);
    for (let i = 0; i < lastarray.length; i++) 
    {
        // added transform CSS for the li element and the hover li
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = lastarray[i];
    }
}
//end of hw2
