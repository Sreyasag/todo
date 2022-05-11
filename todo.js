

function displayTodo(data) {
  let list= JSON.parse(data.responseText);
  for (let x of list){
    let state = "";
    if(x.completed){ state= "checked disabled"}  
    let listItem = document.createElement('div');
    listItem.className = "col-lg-4 col-md-6 card1";
    listItem.innerHTML = `<div class="card h-100">
                            <div class="card-body">
                              <div class="row " >
                                <div class="col-1"><input type="checkbox" ${state}></div>
                                <div class="col-11">${x.title}</div>
                              </div>
                            </div>
                          </div>`;
    document.getElementById("listspace").append(listItem);

  }
}



let p = new Promise(function(resolve,reject){
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos");
  xhttp.send();
  xhttp.onload = function() {
    displayTodo(xhttp);
    resolve(document.getElementsByTagName('input'))
  }
})


let count = 0; 

function done5(item){
  item.addEventListener('change', function(){
    if(this.checked == true){count++;}
    else{count--;}
    if(count==5){document.getElementById('alert').style.visibility = 'visible'}
  })
}


p.then(function(checkboxes){
   
  for( item of checkboxes){
    done5(item)
  }  
})

function add(){
    let listItem = document.createElement('div');
    listItem.className = "col-lg-4 col-md-6 card1";
    listItem.innerHTML = `<div class="card h-100">
                            <div class="card-body">
                              <div class="row " >
                                <div class="col-1"><input type="checkbox" id="list1"></div>
                                <div class="col-11">${document.getElementById("data").value}</div>
                              </div>
                            </div>
                          </div>`;
    document.getElementById("listspace").prepend(listItem);
    document.getElementById("data").value = "";

    done5(document.getElementById('list1'))
}




document.addEventListener("wheel", (event)=> {
  let y = event.deltaY ;
  if(y > 0) {document.getElementById('na').style.top="-50px"};
  if(y<0) {document.getElementById('na').style.top="0px"};
  });
document.getElementById('na').addEventListener("mouseover", ()=> {document.getElementById('na').style.top="0px";})
  





