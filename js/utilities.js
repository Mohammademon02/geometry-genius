
// get the value of input field by function
function getInputValueById (inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    inputField.value = '';
    return inputFieldValue;
}

// calculate triangle area by function
// function triangleArea (base, height){
//     area = 0.5 * base * height;
//     return area;
// }


// calculate rectangle area by function

// function rectangleArea (width, height) {
//     area = width * height;
//     return area;
// }


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


// calculate rhombus area by function

function rhombusArea (diagonal1, diagonal2) {
    area = 0.5 * diagonal1 * diagonal2;
    return area;
}


// calculate pentagon area by function

function pentagonArea (perimeter, base) {
    area = 0.5 * perimeter * base;
    return area;
}


// calculate pentagon area by function

function ellipseArea (A, B) {
    area = 3.1416 * A * B;
    return area;
}


// add to card by function

function card(serial, geometryName, geometryValue){
    const container = document.getElementById('table-container');
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${geometryName}</td>
    <td>${geometryValue}cm<sup>2</td>
    <td><button class="bg-emerald-700 py-3 px-2 text-white rounded">Convert to m<sup>2</sup><button></td>
    `
    const documents = container.appendChild(tr);
    console.log(documents)
}


