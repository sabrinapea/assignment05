/*eslint-env global*/
window.addEventListener('load', init => {

    // helper function to get DOM elements
    const $ = (elID) => {return document.getElementById(elID);};

    function displayForm(e) {
        e.preventDefault(e);
        console.log(`ID: ${$('id').value}`);
        console.log(`Name: ${$('fullname').value}`);
        console.log(`Extension: ${$('ext').value}`);
        console.log(`Email: ${$('email').value}`);
        console.log(`Department: ${$('department').value}`);     
    }

    $('empForm col-md-6').addEventListener('submit', displayForm);

});