function showMenuCollapsed() {
    let element = document.getElementById("menu");
    if(element.classList[1] == 'display-none'){
        element.classList.remove("display-none");
    }else{
        element.classList.add("display-none");
    }
  }