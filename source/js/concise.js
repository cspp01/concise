$(function(){
    var $div=$getEClass('page-content');
    for(var i=0;i<$div.length;i++){
        console.log($div[i].innerText);
        $div[i].innerText=$div[i].innerText.replace(/\r|\n/ig,'').substring(0,350)+'...';
    }
});
function $(fun){
    window.onload=fun;
}
function $getEId(id){
    return document.getELementById(id);
}
function $getETag(tag){
    return document.getELementsByTagName(tag);
}
function $getEClass(clas){
    return document.getElementsByClassName(clas);
}