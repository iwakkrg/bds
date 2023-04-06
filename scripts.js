function reset(){
    for (var i=0 ; i<arguments.length ; i++){
        document.getElementById(arguments[i]).value = "";
    }
}
            
function copy(field){
    const text = document.getElementById(field).value;
    navigator.clipboard.writeText(text)
}

function escape(code){
    const input = code;
    const output = input
        .replace(/%{DOL}%/g,'%{DOL}%trimSpace[$\]')
        .replace(/\$/g,'%{DOL}%')
        .replace(/\]/g,'\\]')
        .replace(/\;/g,'\\;');
    return output
}