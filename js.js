// var Problem={
//     methods:{
//         createH1: function(){
//             return this.text = "Зачем";
//         },
//         delete: function(){
//             let s = this.parentElement;
//             document.removeChild(this);
//             document.removeChild(s);
//         }
//     }
// }
// Vue.createApp(Problem).mount('#problem')
let text = document.getElementById('text');
let enter = document.getElementById('enter');
let cont = document.getElementById('container');
enter.addEventListener("click",function(){
    let a = document.createElement("div");
    let b = document.createElement("h1");
    b.textContent = text.value;
    let q = document.createElement("button");
    q.textContent = "Delet";
    q.addEventListener("click", function(){
        let s = this.parentElement;
        s.removeChild(s.firstChild);
        s.removeChild(s.firstChild);
        document.removeChild(s);
    });
    a.appendChild(b);
    a.appendChild(q);
    cont.appendChild(a);
});