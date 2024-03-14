window.onload = function(){
    $('.loading').fadeOut(500,function(){
        //GEvent('進入網站');
        $('.loading').remove();
        $('.logo,.top1,.top2,.top3,.top4,.content,.top .title').addClass('act');
    });
}

var link = {
        馬來西亞 = {
            '吉隆坡':'https://www.facebook.com/124566150889508/posts/2721949714484459/',
            '沙巴':''
        },
        菲律賓 = {
            '馬尼拉/克拉克':'',
            '宿霧':''
        },
        日本 = {
            '神戶/京都':'',
            '名古屋':''
        }
    }


$(document).ready(function(){
    var scrollTop = $('html').scrollTop();
    var winH = $(window).height();
    $('.side_tag').css('top',scrollTop+winH/2);

    $(document).scroll(function(){
        scrollTop = $('html').scrollTop();
        $('.side_tag').css('top',scrollTop+winH/2);
    })

    $('dt.title.open').click(function(){
        $('body,html').animate({
            scrollTop: $(this).offset().top-50
        },500,'swing');
        $(this).siblings('.slide').slideToggle(500);
        $(this).toggleClass('act');
    })

    $('.btn').click(function(){
        this_dl = $(this).parents('dl').attr('data');
        this_area = $(this).attr('data');
        //console.log(this_dl+"_"+this_area);
        GEvent(this_dl+"_"+this_area);
        if(link[this_dl][this_area] != ''){
            window.open(link[this_dl][this_area],'_blank');
        }
        
    })


    /*
    $('.content ul li .hover').click(function(){
        group = $(this).parents('ul').attr('class');
        index = $(this).parent().index();
        //console.log(link[group][index]);

        if(link[group][index].length>0){
            //GEvent('鏈結_'+group+'_'+(index+1)+'_'+link[group][index]);
            window.open(link[group][index],'_blank');
        }else{
            alert('沒有鏈結');
        }
    })    
    */
});

