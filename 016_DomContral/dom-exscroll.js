


window.addEventListener('DOMContentLoaded',function(){
    
    var ex1 = document.querySelector('#ex1');
    var ex2 = document.querySelector('#ex2');
    var ex3 = document.querySelector('#ex3');
    
    
    ex2.scrollIntoView();
    
    
    window.addEventListener('mousewheel',function(e){
        if(e.defaultPrevented){
            return;
        }
        if(e.wheelDeltaY > 0){
            ex2.scrollIntoView();
            
        }else{
            ex1.scrollIntoView();
        }
        
    });
    
});
    







    
    