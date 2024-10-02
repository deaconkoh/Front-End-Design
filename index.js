/*progress bar*/
const scrollProgressElement = document.querySelector('#progress-bar');

function scrollProgress(){
    const totalheightofweb = document.body.scrollHeight;
    const currentdistfromtop = document.documentElement.scrollTop;

    const windowheight = document.documentElement.clientHeight;

    const scrolledPercentage = (currentdistfromtop/(totalheightofweb - windowheight))*100;
    scrollProgressElement.style.width = Math.round(scrolledPercentage) + '%';
}

document.addEventListener('scroll', scrollProgress);
