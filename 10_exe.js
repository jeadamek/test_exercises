// Create new div
var newElement = document.createElement("div");
newElement.setAttribute("style", "margin-bottom: 15px")
// Get parent and sibling
var siblingElement = document.getElementById("cat-fran-rows");
var parentElement = document.getElementById('cat-tiles-content')
// Insert new div
parentElement.insertBefore(newElement, siblingElement)

// Gets categories titles and search options
var title = document.querySelectorAll(".anavmfe__accordion__item__name")
var srOpts = document.querySelectorAll('.anavmfe__accordion__body') 
var search = ''
var label = ''
// Loop over all categories and creates links
for (var i = 1; i < title.length; i++){
    var srOpt = srOpts[i].getElementsByTagName('input')
    label = srOpt[0].ariaLabel
    for (var j = 0; j < srOpt.length; j++){
        search += srOpt[j].value
        if((j + 1) < srOpt.length)
            search += ','
    }
    newElement.innerHTML += `<a class="swb-anchor-tag" style="margin:3px" href="https://www.dell.com/en-us/member/shop/dell-laptops/sr/laptops/${label}?appliedRefinements=${search}">${title[i].innerText}</a>`
    search = ''
}