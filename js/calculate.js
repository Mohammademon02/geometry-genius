



// triangleArea calculate

let serial = 0;

document.getElementById('btn-triangle').addEventListener('click', function(){

    serial +=1;
    const triangleFieldBase = getInputValueById('triangle-field-b');

    const triangleFielHeight = getInputValueById('triangle-field-h')

    const area = 0.5 * (triangleFieldBase * triangleFielHeight);

    const traingleHeading = document.getElementById("traingle-heading");
    const traingleName = traingleHeading.innerText;

    if(isNaN (area)){
        alert('Please enter a valid number')
    }
    else{
        const traingleCalculate = area.toFixed(2);
        const traingle = card( serial, traingleName, traingleCalculate);
    }

})


// rectangle area calculate

document.getElementById('btn-rectangle').addEventListener('click', function () {

    serial +=1;
    const rectangleFieldwidth = getInputValueById('rectangle-field-w');

    const rectangleFieldHeight = getInputValueById('rectangle-field-l');

    const area = (rectangleFieldwidth * rectangleFieldHeight);
    const reactangleHeading = document.getElementById("rectangle-heading");
    const reactangleName = reactangleHeading.innerText;

    if(isNaN (area)){
        alert('Please enter a valid number')
    }
    else{
        const reactangleCalculate = area.toFixed(2);
        const rectangle = card(serial, reactangleName, reactangleCalculate);
    }

})


// parallelogram area calculate

document.getElementById('btn-parallelogram').addEventListener('click', function () {

    serial += 1;
    const parallelogramBase = getTextElementValueById('parallelogram-base');

    const parallelogramHeight = getTextElementValueById('parallelogram-height')

    const area = parallelogramArea(parallelogramBase, parallelogramHeight);

    const parallelogramHeading = document.getElementById("parallelogram-heading");
    const parallelogramName = parallelogramHeading.innerText;

    const parallelogramCalculate = area.toFixed(2);
    const parallelogram = card(serial, parallelogramName , parallelogramCalculate);

})


// rhombus area calculate

document.getElementById('btn-rhombus').addEventListener('click', function () {
    serial += 1;
    const rhombusDiagonalFirst = getTextElementValueById('rhombus-diagonal1');

    const rhombusDiagonalSecond = getTextElementValueById('rhombus-diagonal2')

    const area = parallelogramArea(rhombusDiagonalFirst, rhombusDiagonalSecond);

    const rhombusHeading = document.getElementById("rhombus-heading");
    const rhombusName = rhombusHeading.innerText;
    const rhombusCalculate = area.toFixed(2);
    const rhombus = card(serial, rhombusName , rhombusCalculate);

    
})



// pentagon area calculate

document.getElementById('btn-pentagon').addEventListener('click', function () {
    serial += 1;
    const pentagonP = getTextElementValueById('pentagon-p');

    const pentagonB = getTextElementValueById('pentagon-b')

    const area = pentagonArea(pentagonP, pentagonB);

    const pentagonHeading = document.getElementById("pentagon-heading");
    const pentagonName = pentagonHeading.innerText;
    const pentagonCalculate = area.toFixed(2);
    const pentagon = card(serial, pentagonName , pentagonCalculate)
})



// ellipse area calculate

document.getElementById('btn-ellipse').addEventListener('click', function () {
    serial += 1;
    const ellipseA = getTextElementValueById('ellipse-a');

    const ellipseB = getTextElementValueById('ellipse-b')

    const area = ellipseArea(ellipseA, ellipseB);

    const ellipseHeading = document.getElementById("ellipse-heading");
    const ellipseName = ellipseHeading.innerText;
    const ellipseCalculate = area.toFixed(2);
    const pentagon = card(serial, ellipseName , ellipseCalculate)
})



