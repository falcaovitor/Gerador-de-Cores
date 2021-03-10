let success = document.querySelector("#success");

function ramdomColor(){
    const ramdomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = `#${ramdomColor}`;

    let view = document.querySelector("#hexa");
    let copy = document.querySelector("#copy");
    
    view.style.display = "block";
    view.innerText = `#${ramdomColor}`;
    copy.style.display = "block";
    success.innerText = '';
};

var clipboard = new ClipboardJS('#copy');
    clipboard.on('success', function(){
        success.innerText = 'copiado com sucesso!';
        console.log(success)
    });
    clipboard.on('error', function(e){
        alert(e);
    });