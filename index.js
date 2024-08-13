y=setInterval(counter,1000)
let count =0;
function counter(){
    console.log(count++)
if(count>100){
    clearInterval(y)
}
}