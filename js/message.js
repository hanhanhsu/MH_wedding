//获取元素

var btn = document.querySelector('button');

var text = document.querySelector('textarea');

var ul = document.querySelector('ul');

//注册时间

btn.onclick = function(){
if(text.value == ''){
alert("您没有输入内容。")

return false;

}else{
var li = document.createElement('li');

li.innerHTML = text.value;

//ul.appendChild(li);

ul.insertBefore(li,ul.children[0])

}

text.value='';

}
