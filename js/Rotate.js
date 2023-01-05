const mybox = document.querySelector('.TheBox')

// Drag Mybox
document.addEventListener('mousedown', function(event){

});

// Move Mybox

mybox.addEventListener('mousedown', function(event){
    event.stopPropagation();
    const self = this;
    
    const getPositionWithBoundary = (minX, minY, maxX, maxY, x, y) =>{
        if (x < minX) x = minX
        if (x > maxX) x = maxX
        if (y < minY) y = minY
        if (y > maxY) y = maxY
        return {
            x,
            y
        };
    };
    document.onmousemove = function(e){
       const {x,y}  = getPositionWithBoundary (
        0,
        0,
        this.body.offsetWidth - self.offsetWidth,
        this.body.offsetHeight - self.offsetHeight,
        e.clientX - 125,
        e.clientY - 250
        );
       
        self.style.cssText += `
            left: ${x}px;
            top: ${y}px;
        `;
    };
   
    document.onmouseup = function(){
       
        document.onmousemove = null;
    }

});