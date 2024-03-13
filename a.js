var MainImg1 = document.getElementById("MainImg") ;
var pro = document.getElementsByClassName("pro")

console.log("aaaaaa")
console.log(pro[0].children[0].src)

for(let i = 0 ; i <50 ; ++i) {
    pro[i].onclick = function (){
        window.location.href ="sproduct.html" ;
        MainImg1.src = pro[i].children[0].src
    }

    }