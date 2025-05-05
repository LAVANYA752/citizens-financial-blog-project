// import '../node_modules/jquery/dist/jquery'
// import {$,jQuery} from 'jquery';
// window.$ = $;
// window.jQuery = jQuery;


let navList = document.getElementsByClassName('navLinkList')
for (let i = 0; i < navList.length; i++) {
    navList[i].addEventListener('click' , (event) =>{
        event.stopPropagation()
        event.target.closest('.navLinkListGroup').classList.toggle('active');
    }) 
}




document.getElementsByClassName('navbar-toggler')[0].addEventListener('click',()=>{
    let showclass = document.getElementsByClassName('navbar-collapse')[0];
    showclass.classList.toggle('show');
    
    showclass.classList.contains('show') ? document.getElementsByClassName('navbar-toggler')[0].classList.add('open') : document.getElementsByClassName('navbar-toggler')[0].classList.remove('open')
});

window.onclick = () =>{
    debugger
    let navGroupList = document.getElementsByClassName('navLinkListGroup')
    for (let i = 0; i < navGroupList.length; i++) {
        if (navGroupList[i].classList.contains('active')) {
            navGroupList[i].classList.remove('active');
        }
    }
}
