
//ex2
window.addEventListener('DOMContentLoaded',function(){

    var ex3 = document.querySelector('.ex3');
    var txtInput = ex3.querySelector('.txt-input');
    var btnInput = ex3.querySelector('.btn-input');
    var txtList = ex3.querySelector('.txt-list');
    var delInput = ex3.querySelector('.del-input');
    var target = null;
    
    delInput.addEventListener('click',function(){
        target.remove();
        //선택한(p).remove();
    });
    
    txtList.addEventListener('click',function(e){
        target = e.target; //p
        target.style.border = "2px solid #f00";
    });
     
    btnInput.addEventListener('click',function(){
        var txtValue = txtInput.value;
        txtList.innerHTML += "<p>"+ txtValue +"</p>";
    });
    
   
    
    
    
    /*
    var p = ex3.querySelector('.txt-list p');
    p.addEventListener('click',function(e){
        p.style.border = "2px solid #f00";
    });
    */
    
    
});










//ex2
window.addEventListener('DOMContentLoaded',function(){
        
    var ex2 = document.querySelector('.ex2');
    var txtInput = ex2.querySelector('.txt-input'); //텍스트필드
    var btnInput = ex2.querySelector('.btn-input'); //추가버튼
    var txtList = ex2.querySelector('.txt-list'); //텍스트추가 공간
    
    btnInput.addEventListener('click',function(){

        //텍스트추가 공간에 필드값을 추가함
        //txtList.textContent += txtInput.value;


        //텍스트필드에 값을 가져옴
        /*var txtValue = txtInput.value;
        var txtNode = document.createTextNode(txtValue);
        txtList.append(txtNode);*/


        var txtValue = txtInput.value;
        txtList.innerHTML += "<p>"+ txtValue +"</p>";


    });

    
});


//ex1
window.addEventListener('DOMContentLoaded',function(){
    var ex1 = document.querySelector('.ex1');
    var txt = ex1.querySelector('.txt');

    txt.textContent  += "안녕!!!!";
    txt.style.color = "red";
    txt.style.fontSize = "5em";
});






