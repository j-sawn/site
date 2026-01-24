// code related to header

function splitWrap() { // splits preferred title text and wraps it all individually into workable nodes for animation
  var target = document.getElementById("title");
  var letters = target.textContent.split("");
  target.textContent = "";
  
  for (let i = 0; i < letters.length; i++)
    {
      var newNode = document.createElement('span');
      newNode.innerHTML = letters[i];
      newNode.style.display = "inline-block";
      target.appendChild(newNode);
    }
}

splitWrap();

function rockyAnim() { // iterates through each character of the title text to apply the animation sequentially
  
  var letters = document.getElementById('title').getElementsByTagName('span');
  
  for (let i = 0; i < letters.length; i++)
    {
      letters[i].animate(
        [
        { transform: "rotate(-15deg)"},
        { transform: "translate(0px, 1px)" },
        { transform: "rotate(10deg)"},
        { transform: "translate(1px, 1px)" },
        { transform: "translate(0px, -1px)" },
        { transform: "rotate(0deg)"},
        ], 
        { duration: 1500, iterations: Infinity, easing: "steps(5, end)", delay: i * 100}
      );
    }
  
}

rockyAnim();

// code related to positioning

function buttonPos() { 
  var buttons = document.getElementsByClassName('navbutton');
  for (let i = 0; i < buttons.length; i++)
    {
      var left_val = ((1 - i) * 150);
      buttons[i].style.left = ((window.innerWidth/2) - left_val) + 'px';
      
      var top_val = 0;
      if (i%2 == 1) { // bigger button
        top_val += 150;
      }
      else { // smaller buttons
        top_val -= 25;
      }
      buttons[i].style.top = (top_val) + "px";
    }
}

// intial positioning
buttonPos();

// for when the user updates their window dimensions
window.addEventListener('resize', function() {
  buttonPos();
});





