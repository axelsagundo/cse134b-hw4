

export function center(){
    let cont = document.getElementsByClassName("container")[0];
    cont.style.display = "flex";
    cont.style.flexDirection = "column";
    cont.style.justifyContent = "center";
    cont.style.alignItems = "center";
    cont.style.border = "2px black solid";
    document.body.style.background = "white";
}

export function ul (){

    document.getElementById("blog-list").style.listStyle = "none";
    document.getElementById("blog-list").style.textDecoration = "none";
    document.getElementById("blog-list").style.margin = "0";
    document.getElementById("blog-list").style.padding = "0";

}

export function button(){
    // let editButtons = document.getElementsByClassName("edit")[0];
    // let deleteButtons = document.getElementsByClassName("delete")[0];

    var style = document.createElement('style');
    // style.innerHTML = '.removeBttnClass  { position: absolute; top:91%;'
    // +'left: 22.7%transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);'
    // +'background-color: white;cursor: pointer;border-radius: 5px;color: black;'
    // +'text-align: center;border-color: lightgray;height: 50px ! important;'
    // +'width: 53px;border-radius: 4px;padding: 10x 17px;border-width: thin}';

    style.innerHTML = 'button { padding-left: 20px; padding-right: 20px; background-color: transparent; margin-right: 5px;}' + 'li{ display: flex; flex-direction: column;  max-width: 800px; align-items: center; justify-content: center;}' + '#add{margin-top:35px; margin-bottom:35px}' + '.edit{ background:url(./266146.png);)}';
        
       
        
  
    document.head.appendChild(style);
    // document.button.style.paddingLeft = "20px";

}
