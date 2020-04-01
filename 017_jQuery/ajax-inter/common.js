$(function(){
    //start
$.ajax({
    url : 'data.xml',
    type : 'GET', //POST
    dataType : 'xml',
    timeout : 2000,
    beforeSend : function(){ 
        //console.log('로딩중');
        $('.loading').fadeIn();
    },
    complete :function(){ 
        setTimeout(function(){
            $('.loading').fadeOut();
        },1000);
    },
    success :function(data){

        var imgTag='';
        var itemRow=3,
            first=0,
            last=itemRow;        

            setTimeout(function(){
                function getItem(){
                    $(data).find('item').each(function(i){
                        
                        if(first <= i && i < last){
                            imgTag = "<img src="+$(this).text()+">";
                            $('section').append(imgTag);
                            
            $('section img').eq(i).hide().fadeIn();
                            
                            
                            
                        }
                    });
                }
                getItem()
                //$('section').html(imgTag);
                $('section').fadeIn();
                $('button').on('click',function(){
                        first += itemRow; 
                        last += itemRow;
                        getItem();
                });
            },2000);


    },
    error : function(){
        alert('FAIL');
    }
});

    //end
});