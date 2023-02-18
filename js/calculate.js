



// triangleArea calculate
document.getElementById('btn-triangle').addEventListener('click', function(){

    const triangleFieldBase = getInputValueById('triangle-field-b');

    const triangleFielHeight = getInputValueById('triangle-field-h')

    const area = triangleArea(triangleFieldBase, triangleFielHeight);

    console.log(area)
})


// rectangle area calculate

document.getElementById('btn-rectangle').addEventListener('click', function () {

    const rectangleFieldwidth = getInputValueById('rectangle-field-w');

    const rectangleFieldHeight = getInputValueById('rectangle-field-l');

    const area = rectangleArea(rectangleFieldwidth, rectangleFieldHeight);

    console.log(area);

})


// parallelogram area calculate

document.getElementById('btn-parallelogram').addEventListener('click', function () {

    const parallelogramBase = getTextElementValueById('parallelogram-base');

    const parallelogramHeight = getTextElementValueById('parallelogram-height')

    const area = parallelogramArea(parallelogramBase, parallelogramHeight);

    console.log(area)
})


// rhombus area calculate

