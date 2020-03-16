//ex1
window.addEventListener('DOMContentLoaded',function(){
    
    var ex1 = document.querySelector('#ex1');
    var txtInput = ex1.querySelectorAll('.txt-input');
    var addButton = ex1.querySelector('.add-button');
    var delButton = ex1.querySelector('.del-button');
    var menuList = ex1.querySelector('.menu-list');
    
    addButton.addEventListener('click',function(){
        var sum = parseInt(txtInput[0].value) + parseInt(txtInput[1].value);
        
        menuList.children[0].textContent = sum;
        menuList.children[1].textContent = sum/2;
        
    });
    
    delButton.addEventListener('click',function(){
        /*
            txtInput[0].value = '';
            txtInput[1].value = null;
        */
        for(var i=0;i<txtInput.length;i++){
            txtInput[i].value = '';
            //sum += txtInput[i].value;
        }
    });
        
});



window.addEventListener('DOMContentLoaded',function(){
    
    var ex2 = document.querySelector('.ex2');
    var classList = ex2.querySelector('.class-list');
    
    classList.addEventListener('click',function(e){
        //classList.className = 'red';
        this.className = 'red';        
        console.log(e);
        
    });
    
    
});


window.addEventListener('DOMContentLoaded',function(){
    
    var ex3 = document.querySelector('.ex3');
    var classList = ex3.querySelector('.class-list');
    
    classList.addEventListener('click',function(e){
        this.classList.add('active');  
    });
    
});





window.addEventListener('DOMContentLoaded',function(){
    
    var ex4 = document.querySelector('.ex4');
    var toggleClass = document.querySelector('.toggle');
    
    ex4.addEventListener('click',function(e){
        toggleClass.classList.toggle('on');
        
        toggleClass.textContent = toggleClass.className;
        //toggleClass.className = 'active'
        
        
        console.log(  toggleClass.classList.contains('on')  );
        
        //console.log(  toggleClass.className == 'toggle on'  );
        
    });
    
});







window.addEventListener('DOMContentLoaded',function(){
    
    var ex5 = document.querySelector('.ex5');
    var li = ex5.querySelectorAll('.ex5 li');
    var div = ex5.querySelectorAll('.ex5 li div');
    var faq = ex5.querySelector('.faq');

    /* 
    faq.addEventListener('click',function(e){
        //e.target.nodeName == 'LI'
        
        var liDiv = e.target.querySelector('div');
        liDiv.classList.toggle('on');
        
        for(var i=0; i<div.length; i++){
            div[i].classList.remove('on');
        }        
    });
    */
    
    //복수개의 div
    //복수개의 li

    for(var i=0; i<li.length; i++){
        li[i].addEventListener('click',function(e){
            
            for(var i=0; i<div.length; i++){
                div[i].classList.remove('on');
            }
            
            var liDiv = this.querySelector('div');
            liDiv.classList.toggle('on');
            
        });
    }
    
    
   
    
    
    
});









