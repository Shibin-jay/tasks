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

        // Accordion 
var accordion = document.getElementsByClassName("contentBox");
var panel = document.getElementsByClassName('content');

for (var i = 0; i < accordion.length; i++) {
    accordion[i].onclick = function() {
        var setClasses = !this.classList.contains('active');
        setClass(accordion, 'active', 'remove');

        if (setClasses) {
            this.classList.toggle("active");
        }
    }
}
function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}