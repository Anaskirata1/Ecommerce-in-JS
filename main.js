// get slider items 
var sliderImages = Array.from(document.querySelectorAll('.slider-container img')) ;

// get number of slides
var slidesCount = sliderImages.length ;

// set current slide 
var currentSlide = 1;

// slide number elements
var slideNumberElement = document.getElementById('slider-number') ;

// prev and next button 
var nextButton = document.getElementById('next') ;
var prevButton = document.getElementById('prev') ;

// handle click on previous and next button 

nextButton.onclick = nextSlide ;
prevButton.onclick = prevSlide ;

//create the main ul element
var paginationElement = document.createElement('ul') ;

// set id in ul 
paginationElement.setAttribute('id' , 'pagination-id') ;

// create list items (li)

for( var i = 1 ; i <= slidesCount ; i++){

    // create li
    var paginationItem = document.createElement('li') ;

    // set custom attribute
    paginationItem.setAttribute("data-index" , i) ;

    // set item content 
    paginationItem.appendChild(document.createTextNode(i))  ;

    // append items to the mail list 
    paginationElement.appendChild(paginationItem) ;
}

document.getElementById('indicators').appendChild(paginationElement) ;

// get the ul created 
var paginationCreatedUl = document.getElementById('pagination-id') ;

// get pagination item 
var paginationBullets = Array.from(document.querySelectorAll('#pagination-id li')) ;

// create loop for li click
for(var i = 0  ; i < paginationBullets.length ; i++ ) {
    paginationBullets[i].onclick = function(){
        
        currentSlide = parseInt(this.getAttribute('data-index')) ;
        theChecker() ;
    }
}

// trigger the checker function 
theChecker() ;

// next slide function 
function nextSlide(){

    if(currentSlide == slidesCount){
        return false
    } else{
        currentSlide++ ;
        theChecker() ;
    }
} 

// previous slide function 
function prevSlide(){
    if(currentSlide > 1){
        currentSlide-- ;
        theChecker() ;
    } else{
        return false ;
    }
    }

// create the checker function 
function theChecker () {

    // set the slide number
    slideNumberElement.textContent = 'slide #' + (currentSlide) + ' of ' + (slidesCount) ;

    removeAllActive()

    // set active class on current slide 
    sliderImages[currentSlide -1].classList.add('active')

    // set active class on pagination item 
    paginationCreatedUl.children[currentSlide -1].classList.add('active')

    // check if the current slide is the first

    if(currentSlide == 1){
        prevButton.classList.add('disabled') ;
    } else {
        prevButton.classList.remove('disabled')
    }

    // check if the current slide is the latest 
    if(currentSlide == slidesCount){
        nextButton.classList.add('disabled')
    } else {
        nextButton.classList.remove('disabled')
    }
    
}
// remove all active classes 
function removeAllActive(){

    sliderImages.forEach(function(img){
        img.classList.remove('active')
    }) 

    paginationBullets.forEach(function(bullet){
        bullet.classList.remove('active') ;
    })
}





