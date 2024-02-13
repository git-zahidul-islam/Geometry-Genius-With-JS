
function calculatorParallelogramArea() {
    const base = getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height');
    const area = base * height
    // console.log('area is here', area)
    // show 
    // const areaReturn = document.getElementById('parallelogram-show-ans')
    // areaReturn.innerText = area

    setInnerTextById('parallelogram-area', area);
}

// reuseable function
function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldText = inputField.value;
    const inputFieldValue = parseFloat(inputFieldText);
    return inputFieldValue;
}
// reuseable Display function
function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}