function pentagonCalculateArea() {
    const perimeter = getInputValueById('pentagon-perimeter');
    const apothem = getInputValueById('pentagon-apothem');
    const area = 0.5 * perimeter * apothem
    // display
    setInnerTextById('pentagon-area',area);
};

// reuse function
function getInputValueById(inputField) {
    const inputFieldId = document.getElementById(inputField);
    const inputFieldText = inputFieldId.value;
    const value = parseFloat(inputFieldText);
    return value;
};
// showing value
function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}