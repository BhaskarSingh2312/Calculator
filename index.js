
function val(e){
    let result = document.querySelector("#result");
    result.innerHTML += e;
} 

function calculate(){
    let result = document.querySelector("#result");
    result.innerHTML  = eval(result.innerHTML);
}

function del(){
    let result = document.querySelector("#result");
    result.innerHTML = "";
}

function col(e){
  let result = document.querySelector("#result");
  result.innerHTML = this.result.innerHTML.toString().slice(0,-1);
}
