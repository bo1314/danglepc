window.onload=function(){
    var todayLi = document.querySelectorAll('.today-li');

    for(var i = 0;i<todayLi.length;i++){
        todayLi[0].className = 'today-li-show'
        todayLi[i].addEventListener('mouseover',function(){
            for(var s = 0 ; s < todayLi.length;s++){
                todayLi[s].className = 'today-li'
            }
            this.className = 'today-li-show'
        })
    }

    var rankingli1 = document.querySelectorAll('.ranking-ul1 li')
    var rankingli2 = document.querySelectorAll('.ranking-ul2 li')
    var rankingli3 = document.querySelectorAll('.ranking-ul3 li')
    function show(item){
        for(var i = 0;i < item.length;i++){
            item[i].addEventListener('mouseover',function(){
                item[0].className = 'list-show'
                for(var s = 0 ; s < item.length;s++){
                    item[s].className = 'list-show-no'
                }
                this.className = 'list-show'
            })
       }
    }
    show(rankingli1);
    show(rankingli2);
    show(rankingli3);
   

    //头条热门左边的图片
    var infoImg = document.querySelector('.info-img-img img')
    var textBtn = document.querySelectorAll('.info-img-bottom a')
    console.log( infoImg.src);
    console.log( textBtn);

   
   
    for(var i = 0;i<textBtn.length;i++){
        textBtn[i].setAttribute('index',i);
        textBtn[0].style.color = '#ff7900';



        var index =  textBtn[i].getAttribute('index');

        textBtn[i].addEventListener('mouseover',function(){
            for(var i = 0;i<textBtn.length;i++){
                textBtn[i].style.color = '';
            }
           index = this.getAttribute('index');
            if(index == 0 ){
                infoImg.src = './image/mgrfkpgaux8n.jpg'
                this.style.color = '#ff7900'
               
            }else{
                infoImg.src = './image/ldr0kpf37som.jpg'
                this.style.color = '#ff7900'
            };
            
        });
        console.log(index);

        
    }


    //热门专题中的
    var specialDiv1 = document.querySelector('.special-l-l-div1');
    console.log(specialDiv1);

    function specialDivs(){
        specialDiv1.appendChild(specialDiv1.children[0])
    }

    var ss = setInterval(specialDivs,1500);

    specialDiv1.addEventListener('mouseover',function(){
        clearInterval(ss);
    })
    specialDiv1.addEventListener('mouseout',function(){
            ss = setInterval(specialDivs,1500);
    })

}


