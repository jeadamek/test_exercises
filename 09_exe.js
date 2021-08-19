// Get all categories in an array
var cat = document.querySelectorAll('[data-testid="quicklink_module_link"]')
// Prevents event of redirect
$(cat).click(function(e){ e.preventDefault();});

// Loop over the array creating Listeners 
for (let i = 0; i < cat.length; i++){
    if( i == 0 || i % 3 == 0){
        cat[i].addEventListener('click', function(){
            $('.gray-light').css({"background-color": 'purple'})
        })
    } else if ( i == 1 || i == 4 || i == 7 || i == 10){
        cat[i].addEventListener('click', function(){
            $('.gray-light').css({"background-color": 'green'})
        })
    } else {
        cat[i].addEventListener('click', function(){
            $('.gray-light').css({"background-color": 'orange'})
        })
    }
}

// Change images from Networking section
var img = document.querySelectorAll('[data-testid="featured_module_image"]')
img[20].src="//snpi.dell.com/snp/images2/110/ab722660.jpg"
img[21].src = "//snpi.dell.com/snp/images2/110/ab702946.jpg"
img[22].src="//snpi.dell.com/snp/images2/110/ab391670.jpg"
img[23].src="//snpi.dell.com/snp/images2/110/aa542563.jpg"