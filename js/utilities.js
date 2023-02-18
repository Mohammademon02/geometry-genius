
// get the value of input field by function
function getInputValueById (inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    inputField.value = '';
    return inputFieldValue;
}

// calculate triangle area by function
function triangleArea (base, height){
    area = 0.5 * base * height;
    return area;
}


// calculate rectangle area by function

function rectangleArea (width, height) {
    area = width * height;
    return area;
}


// get the value of text element by function

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue =parseFloat(elementValueString);
    return elementValue;
}


// calculate parallelogram area by function

function parallelogramArea (base, height){
    area = base * height;
    return area;
}


