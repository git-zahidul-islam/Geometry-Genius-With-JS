function calculateEllipseArea() {
    const major = getInputValueById('ellipse-major');
    const minor = getInputValueById('ellipse-minor')
    const area = 3.14 * major * minor;

    // set input 
    setInnerTextById('ellipse-area', area);
}