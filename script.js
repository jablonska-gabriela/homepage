const menu = document.QuerySelector('.menu--js');

menu.addEventListener('click', (e)=>{
    const navigation= document.QuerySelector('.navigation--js');
    navigation.classList.toggle('navigation--open');
})

