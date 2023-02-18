



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

    const areaContainer = document.getElementById('area-container');

    areaContainer.innerHTML = `<li class="text-2xl mt-5"> Rectangle Area <span> ${area}cm </span>`;

})


// parallelogram area calculate

document.getElementById('btn-parallelogram').addEventListener('click', function () {

    const parallelogramBase = getTextElementValueById('parallelogram-base');

    const parallelogramHeight = getTextElementValueById('parallelogram-height')

    const area = parallelogramArea(parallelogramBase, parallelogramHeight);

    const areaContainer = document.getElementById('area-container');

    const ol = document.createElement('ol');
    ol.innerText = `<li class="text-2xl mt-5"> Parallelogram Area <span> ${area}cm </span>`
    // areaContainer.innerHTML = `<li class="text-2xl mt-5"> Parallelogram Area <span> ${area}cm </span>`;
})


// rhombus area calculate

document.getElementById('btn-rhombus').addEventListener('click', function () {

    const rhombusDiagonalFirst = getTextElementValueById('rhombus-diagonal1');

    const rhombusDiagonalSecond = getTextElementValueById('rhombus-diagonal2')

    const area = parallelogramArea(rhombusDiagonalFirst, rhombusDiagonalSecond);

    const areaContainer = document.getElementById('area-container');

    areaContainer.innerHTML = `<li class="text-2xl mt-5"> Rhombus Area <span> ${area}cm </span>`;
})



// pentagon area calculate

document.getElementById('btn-pentagon').addEventListener('click', function () {

    const pentagonP = getTextElementValueById('pentagon-p');

    const pentagonB = getTextElementValueById('pentagon-b')

    const area = pentagonArea(pentagonP, pentagonB);

    const areaContainer = document.getElementById('area-container');

    areaContainer.innerHTML = `<li class="text-2xl mt-5"> Pentagon Area <span> ${area}cm </span>`;
})



// ellipse area calculate

document.getElementById('btn-ellipse').addEventListener('click', function () {

    const ellipseA = getTextElementValueById('ellipse-a');

    const ellipseB = getTextElementValueById('ellipse-b')

    const area = ellipseArea(ellipseA, ellipseB);

    const areaContainer = document.getElementById('area-container');

    areaContainer.innerHTML = `<li class="text-2xl mt-5"> Ellipse Area <span> ${area}cm </span>`;
})



