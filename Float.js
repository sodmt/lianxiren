/*
属性
谁
速度
最大偏移量
自身的尺寸
方法
start
*/
class Float{
		constructor(obj){
			this.obj = obj;
			this.speedy = 1;
			this.speedw = 1;
			this.maxH = window.innerHeight - this.obj.offsetHeight;
			this.maxW = window.innerWidth - this.obj.offsetWidth;

		}
		start(){
			this.move();
		}
		move(){
			let pp = this;
			pp.t = setInterval(function(){
				let tops = pp.obj.offsetTop + pp.speedy;
				let lefts = pp.obj.offsetLeft + pp.speedw;
				if(tops > pp.maxH){
					tops = pp.maxH;
					pp.speedy*=-1;
				}
				if(tops <= 0){
					tops = 0;
					pp.speedy*=-1;
				}
				if(lefts > pp.maxW){
					lefts = pp.maxW;
					pp.speedw*=-1;
				}
				if(lefts <= 0){
					lefts = 0;
					pp.speedw*=-1;
				}
				pp.obj.style.top = tops + 'px';
				pp.obj.style.left = lefts +'px';
			},1)
		}
		stop(){
			clearInterval(this.t);
		}
		resize(){
			this.maxH = innerHeight - this.obj.offsetHeight; //高度跟随浏览器的大小而改变
			this.maxW = innerWidth - this.obj.offsetWidth; //宽度跟随浏览器的大小而改变

		}
	}