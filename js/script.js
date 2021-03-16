// submit.addEventListener("click", function (e) {
//     window.console.log(e.target.innerText);
// }, false);

/*eslint-env global*/

window.addEventListener('load', (e) => {
    "use strict";
    // function display(e) {
    //     window.console.log("here you go:" + e.target.innerHTML);
    
    let div = document.getElementById('empForm');
    div.addEventListener('submit', (e) =>  {   // false is default
        console.log(`here you are ${e.target.className});
     

    }); 
});
