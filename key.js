$(function(){
    let text = $('.text')[0],
        boxs = $('.into')[0],
        span1 = $('.yi')[0],
        span2 = $('er')[0];
    text.onkeyup = function(){
        span1.innerText = this.value.length;
        span2.innerText = 100 - this.value.length;
        return this.value;
    }
    text.onkeydown = function(e){
        if(e.keyCode == 13){
            event.preventDefault();
            let t = $('<div>');

            t.className = 'bottom';
            t.innerText = text.onkeyup();

            prepend(bottom,t);

            this.value = null;
        }
    }

})