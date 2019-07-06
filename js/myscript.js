// Writing into an HTML element, using innerHTML.
// Writing into the HTML output using document.write().
// Writing into an alert box, using window.alert().
// Writing into the browser console, using console.log().
function testingInnerHTML() {
    document.getElementById('content-changer').innerHTML = 'My Second JavaScript';
}
function testingDocWrite() {
    document.write('I used document.write()! If used after page loaded, it will delete HTML!');
}
function testingWindowAlert() {
    alert('I used alert!');
}
function testingFunctions() {
    var x, y, z;          // How to declare variables
    x = 5; y = 6;      // How to assign values
    z = x + y;         // How to compute values
    // ==	equal to
    // ===	equal value and equal type
    // !=	not equal
    // !==	not equal value or not equal type
    // >	greater than
    // <	less than
    // >=	greater than or equal to
    // <=	less than or equal to
    // ?	ternary operator
}
function Complex(real_part, imaginary_part) {
    this.real_part = real_part;
    this.imaginary_part = imaginary_part;

    this.add = function (/*Complex*/ c1, /*Complex*/c2) {
        if (c2 == undefined) {
            c2 = c1;
            c1 = this;
        }
        return new Complex(
            c1.real_part + c2.real_part,
            c1.imaginary_part + c2.imaginary_part
        );
    }
    this.mult = function (/*Complex*/ c1, /*Complex*/c2) {
        if (c2 == undefined) {
            c2 = c1;
            c1 = this;
        }
        return new Complex(
            c1.real_part * c2.real_part - c1.imaginary_part * c2.imaginary_part,
            c1.real_part * c2.imaginary_part + c1.imaginary_part * c2.real_part
        );
    }
};