let slideIndex = [1,0];
let slideId = ["mySlides1", "mySlides3",]
showSlides(1, 0);


function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

function removeDiscount() {
  const discountDiv = document.querySelector('.discount');
  if (discountDiv) {
    discountDiv.style.display = 'none';
  }
}




