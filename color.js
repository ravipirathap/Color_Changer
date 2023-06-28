var colors=["red","blue","green","violet","black","grey","orange","pink","aqua","yellow","white"]
document.getElementById("button").addEventListener("click",change)
function change(i){
    var i=Math.floor(Math.random() * 10);
    var color=colors[i];
    document.body.style.backgroundColor = color;}
    
    
    


