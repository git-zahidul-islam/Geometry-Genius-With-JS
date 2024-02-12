function calculateTriangleArea() {
    // triangle base
    const triangleBase = document.getElementById('triangle-base');
    const triangleBaseText = triangleBase.value;
    const base = parseFloat(triangleBaseText)
    // console.log(base);

    // triangle height
    const triangleHeight = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeight.value;
    const height = parseFloat(triangleHeightText);
    // console.log(height);
    // calculate
    const area = 0.5 * base * height;
    // console.log('The is The result:', area);
    // area showing
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;
}