 function drawEarth(x,y,r,color){
        ctx.beginPath();
        ctx.lineWidth = "1";
        ctx.strokeStyle = "#000";
        ctx.fillStyle = color;
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }