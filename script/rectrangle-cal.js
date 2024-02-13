function calculatorRectangleArea() {
    // rectangle width
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidth.value;
    const width = parseFloat(rectangleWidthText);
    // console.log(width)

    // rectangle length
    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLength.value;
    const length = parseFloat(rectangleLengthText);

    // calculate
    const area = width * length;
    // console.log(area);
    // show in the text
    const rectangleShowAns = document.getElementById('rectangle-show-ans');
    rectangleShowAns.innerText = area;
}