console.log("JS QUERY IS LIVE")
const target = [34,26]
let counter=1;


//creates 6 random rectangles
// function randomRectangles(){
//     const holder = document.getElementById('grid-container2');
//     for(let i=1; i<7;i++){
//         const canvas =document.createElement('canvas');
//         canvas.id = (`canvas`+i); 
//         let randVal = (Math.random()*75)+(Math.random()*10)
//         const ctx = canvas.getContext('2d');
//         ctx.fillStyle = "rgba(0,0,255,.5)"
//         ctx.fillRect(randVal,randVal,randVal,randVal);
//         holder.appendChild(canvas)
//     }
// }
// randomRectangles(); // successfully created new canvases with set parameters in css
//creates 10 (num) evenly distributed canvas objects
function buildingBlock(num){
    const holder = document.getElementById('grid-container2');
    for(let i=1; i<=num;i++){
        const canvas =document.createElement('canvas'); //create a canvas
        canvas.id = (`canvas`+i);
        canvas.className = "holder"              //creates ids for each of the new boxes
        canvas.setAttribute("width", "200px"); // you cannot change the size of the canvas in css. 
        canvas.setAttribute("height", "200px");
        holder.appendChild(canvas)
        randomRectangles(4,i,200); 
    }
       
}
//Note - review toBlob Functionality; https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob
//storing files on DB - http://menge.io/2015/03/24/storing-small-images-in-mongodb/
https://code.google.com/archive/p/canvas-svg/
buildingBlock(4); 

function randomRectangles(unit,versions,containerWidth){
    
    let val = containerWidth/unit;
    let col = 0;
    let row = 0;
    let unitCount = unit*unit
    for(let v=1; v<=3;v++){
        const holder = document.getElementById(`canvas${versions}`);
        for(let i=0; i<unitCount;i++){
            let randVal = ((Math.random()*100)+1)
            let colorChoice = randVal;
            const ctx = holder.getContext('2d');
            if (colorChoice<33) {
                ctx.fillStyle = `rgba(200,0,200,${colorChoice/66})`;
            } else {
                ctx.fillStyle = `rgba(255, 255, 255,.8)`;
            }
            
            // console.log(i,'i', col, 'col', row,'row', `canvas${v}`,'<<<canvas id' )
            // console.log(val*col, val*row, val*(col+1), val*(row+1))
            if (i===0){
                ctx.fillRect(val*col, val*row, val*(col+1), val*(row+1)); 
                
            }
            else if(i%unit === 0 ){ 
                col=0;
                row=row+1;
                ctx.fillRect(val*col, val*row, val*(col+1), val*(row+1));
                 //problem - currently skipping the 4th
                 
            } else {
                col=col+1;
                ctx.fillRect(val*col, val*row, val*(col+1), val*(row+1));
            };  
        }
        console.log('____________________________________________________')
        console.log('____________________________________________________')
    }
    
}
 // successfully created new canvases with set parameters in css
// creates 10 (num) evenly distributed canvas objects

// function drawCircle(num){
// num = Math.floor((Math.random()*10)+1);
// const canvas = document.getElementById(`canvas`+num);
// let a = canvas.getContext('2d');
// a.beginPath(); 
// a.arc(canvas.width/2, canvas.height/2, 40, 0, 2 * Math.PI);  //center x, center y, start angle, end angle - 2*math.pi
// a.stroke();
// }
// // drawCircle(num); // will draw a  // will create a random circle in one of the 10 boxes;

// function draw() {
//     const canvas = document.getElementById('canvas1');
//       var ctx = canvas.getContext('2d');
//       ctx.fillRect(35, 30, 100, 100); // first two - top left corner - second two the height and width.
//       ctx.clearRect(60, 60, 120, 120);
//       ctx.strokeRect(70, 70, 20, 20);
//   }
// draw(); // 

// function draw1() {
//     const canvas = document.getElementById('canvas2');
//       var ctx = canvas.getContext('2d');
//       ctx.fillRect(35, 30, 100, 100); // first two - top left corner - second two the height and width.
//       ctx.clearRect(60, 60, 120, 120);
//       ctx.strokeRect(70, 70, 20, 20);
//   }
// draw1(); // 






// for (let r=1; r<=50; r++){ 
//   const row = $(`<div class=row row_${r}></div>`);
//    for(let c=1; c<=50; c++){
//         counter++
//         const cell = $(`<div class=cell></div>`);
//         cell.attr('id',`cell_${r}_${c}`); 
//             cell.attr('y', r);
//             // cell.css("height","1vh");
//             cell.attr('x', c);
//             // cell.css("width","1vw");

//             if(counter%2===1){
//                 cell.addClass("odd")
//             } else if (counter%2===0){
//                 cell.addClass("even")
//             } else if (counter%3===0){
//                 cell.addClass("quad")
//             } else{}
//             row.append(cell);
//     }
//     $("#grid").append(row);

// }
// const oddValues = $(`.odd`);
// const evenValues = $(`.even`);

// for(let n=0;i<100;n++){
//     evenValues.remove("style");
//     setTimeout( function(){
        
//         if (i%3===1){
//             s.css('background-color','red');    
//         } else{evenValue}
        

//     },200);
// }
    

// setTimeout(function(){
//     for(let i=0; i<100;i++){
//         oddValues.remove("style",""); 
//     if (i%3===0){
//         oddValues.css('background-color','blue');
        
//     } }
// },20);




//"input[value='Hot Fuzz']" 