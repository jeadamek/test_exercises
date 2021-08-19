// Select title from each category
var title = document.querySelectorAll('a[data-testid="mainCategory"]')
// Selects ul from categories
var ul = document.querySelectorAll("#category-list-container")
// Loop on each category changing li text
for (let i = 0; i < title.length; i++){
    var li = ul[i].querySelectorAll("li")
        for (let j = 0; j < li.length; j++){
        li[j].innerHTML = title[i].innerText + ' - ' + li[j].innerText
    }
}