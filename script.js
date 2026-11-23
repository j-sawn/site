// code related to header

function splitWrap(id) { // splits preferred title text and wraps it all individually into workable nodes for animation
  var target = document.getElementById(id);
  if (!target) return; // because 'hometitle' and 'title' are in different pages
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

splitWrap("hometitle");
splitWrap("title");

function rockyAnim(id) { // iterates through each character of the title text to apply the animation sequentially

  var target = document.getElementById(id);
  if (!target) return; // because 'hometitle' and 'title' are in different pages
  
  var letters = target.getElementsByTagName('span');
  
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

rockyAnim("hometitle");
rockyAnim("title");

// code related to positioning

function buttonPos() { 
  var buttons = document.getElementsByClassName('homebutton');
  for (let i = 0; i < buttons.length; i++)
    {
      var left_val = ((1 - i) * 150);
      buttons[i].style.left = ((window.innerWidth/2) - left_val) + 'px';
      
      var top_val = 0;
      if (i%2 == 1) { // bigger button
        top_val += 200;
      }
      else { // smaller buttons
        top_val += 30;
      }
      buttons[i].style.top = ((window.innerHeight/4) + top_val) + "px";
    }
}

// intial positioning
buttonPos();

window.addEventListener('resize', function() {
  buttonPos();
});

// button clicking stuff bc I'm a lazy bum lol

function clickManager(id) {
	var target = document.getElementById(id);
	if (!target) return;
	target.addEventListener("click", () => {
  window.location.href = `https://asogou.nekoweb.org/${id}.html`;
});
}

clickManager("about")
clickManager("stuff")
clickManager("more")

// music playing

const record = new Audio('dont-let-the-moon-catch-you-cryin.mp3');
record.loop = true;
record.volume = 0.5;

const recimage = document.getElementById("recimage");

recimage.addEventListener('click', () => {
	if (record.paused) {
		record.play();
		recimage.style.animation = `spinning 10s linear infinite`;
	} 
	else {
	    record.pause();
	    recimage.style.animation = 'none';
	    recimage.style.transform = `rotate(0deg)`;
	}
});
