const accordion1 = document.getElementsByClassName('contentBox');
for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click',function() {
        this.classList.toggle('active')        
    })
}
// To change tabs 
const tabs= document.querySelectorAll('[data-tab-target]')
const tabContents=document.querySelectorAll('[data-tab-content]')

tabs.forEach( tab =>{
            tab.addEventListener('click', ()=>{
                const target= document.querySelector(tab.dataset.tabTarget)
                tabContents.forEach(tabContent =>{
                    tabContent.classList.remove('active')
                })
                tabs.forEach(tab => {
                    tab.classList.remove('active')
                })
                tab.classList.add('active')
                target.classList.add('active')
            })
        })
        // accordion 
        // const accordion = document.getElementsByClassName('contentBox');
        // for (let i = 0; i < accordion.length; i++) {
            //     accordion[i].addEventListener('click',function() {
//         this.classList.toggle('active');
//         this.nextElementSibling.classList.remove('active');
//     })
// }

// accodrion only one open

var accordion = document.getElementsByClassName("contentBox");
var panel = document.getElementsByClassName('content');

for (var i = 0; i < accordion.length; i++) {
    accordion[i].onclick = function() {
        var setClasses = !this.classList.contains('active');
        setClass(accordion, 'active', 'remove');
        // setClass(panel, 'show', 'remove');

        if (setClasses) {
            this.classList.toggle("active");
            // this.nextElementSibling.classList.toggle("show");
        }
    }
}
function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}