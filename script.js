class Person{
  constructor(name, things){
  this.name = name;
  this.things = things;
}
bio(){alert("我是"+this.name+"!歡迎來到我的"+this.things+"!");}
}
let person1 = new Person("洪于婷","個人網頁報告");
person1.bio();




let i=0, imgArr=new Array(); 
imgArr[0] = "https://cw1.tw/CW/images/article/C1397621118926.jpg";
imgArr[1] = "https://img.pikbest.com/back_our/20211010/bg/a24aefb2996c7a41b4b1bc010c3638c6_114085.png!w700wp";
imgArr[2] = "https://www.newsnationnow.com/wp-content/uploads/sites/108/2022/07/Cat.jpg?w=2560&h=1440&crop=1";

function showImg(){
  document.getElementById('ico').src = imgArr[i]; 
  i = (i+1)% 3;   
}

function show(){
  setInterval(showImg, 3000); 
}

function answer(){
let a1 = document.getElementById("q");
a1.innerHTML = "兩個是一樣的喔！Σ( ° △ °)";
}

document.getElementById("btn").addEventListener("click", leehom);
function leehom(){
  document.getElementById("!!").innerHTML = "觀看圖片時，記得先鎖定圖中的其中一個圓，一段時間後，再隨機將視線移到其他地方，圓圈們會趁你不注意時..."
 document.getElementById("!!").style.color = "red";
document.getElementById("btn").innerHTML = "偷偷藏不住";
document.getElementById("btn").style.color = "blue";
}

let say = setTimeout(tell, 5000);
function tell(){
  let wait5s = document. getElementById("wait");
  wait5s.innerHTML = "想好了嗎?答案在底下"; 
}

function see(){
let a1 = document.getElementById("s");
a1.innerHTML = "1.老爺爺  2.年輕少女(乘2)";
} 

function what(){
let a1 = document.getElementById("f");
a1.innerHTML = "1.人臉  2.坐在椅子上的少女";
} 

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // 防止預設行為
    const targetId = this.getAttribute('href').substring(1); // 取得目標元素 ID
    const targetElement = document.getElementById(targetId); // 找到目標元素

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // 平滑滾動
        block: 'start' // 將目標元素滾動到視窗頂部
      });
    }
  });
});