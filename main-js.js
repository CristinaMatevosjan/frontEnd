const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay:true,
    // slidesPerView: 2,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
});

const form=document.getElementById('send');
form.onclick=function (event) {
    event.preventDefault();
    const name=document.getElementById('name');
    const phone=document.getElementById('tel');
    const agree=document.getElementById('agree');
    const errors=false;

    if(name.value.trim()=='') {
        name.className='is-invalid';
        errors=true;
    }else {
        name.className='';
    }
    if(phone.value.trim()=='') {
        phone.className='is-invalid';
        errors=true;

    }else {
        phone.className='';
    }
    if(!agree.checked) {
        agree.nextElementSibling.className='error';
        errors=true;

    }else {
        agree.nextElementSibling.className='';
    }
    if(errors){
        alert('Заполните все поля!')
    }else {
        alert("Ваша заявка успешно отправлена!")
    }
}