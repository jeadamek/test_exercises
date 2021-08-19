// Declare a fragment
var fragment = document.createDocumentFragment();
// Append source element to the fragment
fragment.appendChild(document.getElementById('solncat-hero'));
// Append fragment to destination element
document.querySelectorAll('.column-control-v3')[1].appendChild(fragment);

/*
OR USING JQUERY

var source = document.querySelector('#solncat-hero');
var destination = document.querySelectorAll('.column-control-v3');
$(source).appendTo(destination[1]);

*/


