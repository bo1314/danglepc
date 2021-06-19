window.onload=function(){

    //轮播
    
    function lunbo(obj,position,buchang,funs,time){

        clearInterval(obj.timer)
        
        obj.timer = setInterval(function(){
    
            var step = (position - obj.offsetLeft) / buchang;
            step =  step > 0 ? Math.ceil(step) : Math.floor(step)
            if(obj.offsetLeft == position){
                clearInterval(obj.timer)
                if(funs){
                    funs()
                }
            }
            obj.style.left = obj.offsetLeft + step + 'px';
        },time)
    }
	//获取轮播 的宽度
	var bannerContent = document.querySelector('.banner-content')
	var bannerBtn = document.querySelector('.banner-btn')
	var yulw = bannerContent.offsetWidth;
	var bannerUl = document.querySelector('.banner-ul')
	
	bannerContent.addEventListener('mouseover',function(){
		bannerBtn.style.display = 'block'
		clearInterval(zidong)
	})
	bannerContent.addEventListener('mouseout',function(){
		bannerBtn.style.display = 'none'
		zidong = setInterval(function(){
			btnr.click();
		},1800)
		
	})
	
    var btnl = document.querySelector('#btn-l');
	var btnr = document.querySelector('#btn-r');
	var num = 0
	
	 var jlf = true
	
    btnr.addEventListener('click',function(){
		if(jlf){
			jlf = false
			if(num == bannerUl.children.length-1 ){
				num = 0;
				bannerUl.style.left = "0px"
			}
			num++;
			//console.log(num)
			lunbo(bannerUl,-num*yulw,50,function(){
				jlf = true
			},15)
		}

		
	})
	btnl.addEventListener('click',function(){
		if(jlf){
			jlf = false
			if(num == 0 ){
				num = bannerUl.children.length-1;
				bannerUl.style.left = -(bannerUl.children.length-1)*yulw+'px'
			}
			num--;
			lunbo(bannerUl,-num*yulw,50,function(){
				jlf=true
			},15)
		}
		
	})
	var zidong = setInterval(function(){
		btnr.click();
	},1800)



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


