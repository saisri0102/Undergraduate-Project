const navMobile= document.querySelector('.nav-mobile')
const btnMenu= document.querySelector('.btn-menu')

btnMenu.onclick= function(){
    navMobile.classlist.toggle('hide');
}
