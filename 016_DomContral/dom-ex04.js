//ex1
window.addEventListener('DOMContentLoaded',function(){
    
    var ex1 = document.querySelector('#ex1'),
        menuTrigger = ex1.querySelector('.menu-trigger'),
        nav = ex1.querySelector('.nav');
    
    menuTrigger.addEventListener('click',function(){
        
        this.classList.toggle('active-1'); // X모양
        nav.classList.toggle('active'); // block
        
       /* 
        this.classList.toggle('active-1');
        this.style = "display:block";
        
        if(this.classList.contains('active-1')){
            nav.classList.add('active');
        }else{
            nav.classList.remove('active');
        }
        */
    
    });
    
});
    
//ex2
window.addEventListener('DOMContentLoaded',function(){
    
    var ex2 = document.querySelector('#ex2'),
        tab = ex2.querySelector('.tab'),
        tabCon = ex2.querySelectorAll('.tab-con');
    
    /*tab.addEventListener('click',function(e){
        
        var target = e.target;  //li
        var data = e.target.dataset.id;
    
        for(var i=0;i<tabCon.length;i++){
            tab.children[i].className = '';
            tabCon[i].className = '';
        }
        
        target.className = 'active';
        tabCon[data].className = 'active';
        
    });*/
    
    var tabLi = ex2.querySelectorAll('.tab li');
    var j = 0;
    
    for(let i=0;i<tabCon.length;i++){

        tabLi[i].addEventListener('click',function(){

            tabLi[j].classList.remove('active');
            tabCon[j].classList.remove('active');

            this.classList.add('active');
            tabCon[i].classList.add('active');

            j = i;

        });

    }
    
});





window.addEventListener('DOMContentLoaded',function(){
    
    var ex3 = document.querySelector('#ex3');
    var detailImg = ex3.querySelector('.detail img');
    var thum = ex3.querySelector('.thum');
    
    
    
    thum.addEventListener('click',function(e){
        
        for(var i=0; i < thum.children.length; i++){
            thum.children[i].classList.remove('active');
        }

        detailImg.src = e.target.src;
        e.target.classList.add('active');
        
    });
    
});
    







    
    