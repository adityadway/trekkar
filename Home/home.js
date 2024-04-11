// Get the modal
var modal = document.getElementById("iddetail");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function addBox() {
  var boxCount = document.querySelectorAll('.boxin').length + 1;
  var newBox = document.createElement('div');
  newBox.classList.add('boxin');
  newBox.textContent = 'Box ' + boxCount;
  newBox.style.top = (boxCount * 220) + 'px'; // Adjust top position based on box count
  newBox.style.left = '0';
  document.querySelector('.boxout').appendChild(newBox);
}
window.addEventListener('scroll', function() {
  var create = window.scrollY || document.documentElement.scrollTop;

  // Apply animation to mountain2 when scrolling
  create.style.transform = 'translateY(' + scrollTop / 2 + 'px)';
});