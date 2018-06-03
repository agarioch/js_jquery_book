var width = 600;
var shape = {width: 200};

var getWidth = function() {
    document.write(this.width);
};

getWidth();
document.write("<br/><p>As shape object method:</p>")
shape.showWidth = getWidth;
shape.showWidth();