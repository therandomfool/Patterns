let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll= function(){
    let progessHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progessHeight + "%";
}



function toggleMenu(){
        let navigation = document.querySelector('.navigation');
        let toggle = document.querySelector('.toggle');
        navigation.classList.toggle('active');
        toggle.classList.toggle('active');
    }