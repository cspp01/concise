$(function(){
    var $archivePage=$getEClass('archive-page');
    var num=0;
    if($archivePage&&$archivePage.length!=0){
        var time=setInterval(function(){
            $archivePage[num].setAttribute('class',$archivePage[num].getAttribute('class')+' transition');
            num++;
            if(num==$archivePage.length){
                num=0;
                clearInterval(time);
            }
        },150);
    }
    var $a=document.getElementById('my-search-a');
    document.onkeydown=function(ev){
        var ev=ev||event;
        if(ev.altKey&&ev.ctrlKey){
            $a.click();
        }
    };
});
addevent(window,'load',function(){
    var $imgs=document.getElementById('page-post-content').getElementsByTagName('img');
    console.log($imgs);
    var $aside=document.createElement('aside');
    $aside.setAttribute('id','popup');
    var htm=[
        '<div class="popup-content">',
            '<img src="">',
            '<span class="popup-left"></span>',
            '<span class="popup-right"></span>',
        '</div>'
    ].join('');
    $aside.innerHTML=htm;
    for(var i=0;i<$imgs.length;i++){
        $imgs[i].onclick=function(){
            document.body.appendChild($aside);
            document.body.style.overflow='hidden';
        }
    }
});
function addevent($ele,ev,fun,tab){
    $ele.addEventListener ? $ele.addEventListener(ev,fun,tab||false)
        : $ele.attachEvent('on'+ev,fun);
}
function $(fun){
    window.onload=fun;
}
function $getEId(id){
    return document.getElementById(id);
}
function $getETag(tag){
    return document.getElementsByTagName(tag);
}
function $getEClass(clas){
    return document.getElementsByClassName(clas);
}