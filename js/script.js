//webP
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	}else{
		document.querySelector('body').classList.add('no-webp');
	}
});
//burger
$(document).ready(function() {
	$('.header__top_burger').click(function(event){
		$('.header__top_burger,.header__top_menu').toggleClass('active');
		$('body').toggleClass('lock');
		$(".header__top_menu").on("click","a",function(){
			$('.header__top_burger,.header__top_menu').removeClass('active');
			$('body').removeClass('lock');
		});
	});
});
//slider
$(document).ready(function(){
	$('.slider').slick({
		arrows:false,//наявність стілок
		dots:true,//наявніст кружечків знизу
		adaptiveHeight:false,//адаптивність висоти фото
		slidesToShow:1,//кількість слайдів до показу
		slidesToScroll:1,//кількість слайдів за одну прокрутку
		speed:1000,//швидкіть прокрутки в мс
		easing:'ease',//динаміка прокрутки(наявні приклади в шрарглці урок про анімацію)
		infinite:true,//віповідає за те чи буде слайдер безкінечний/.slick-disable-новий клас для стрілочки при значенні false
		initialSlide:0,//відповідає за номер стартового слайда
		autoplay: false,//авто прокрутка
		autoplaySpeed:5000,//швидкість автопрокрутки
		pauseOnFocus:true,//пауза при наведенні на фото/доти, відновлюється, коли прибрав
		pauseOnHover:true,//пауза при натисканні на фото, відновлюється при перезавантаженні
		pauseOnDotsHover:true,//пауза при натисканні на доти, відновлюється при перезавантаженні
		draggable:true,//відповідає за можливість прокрутки за допомогою протягування мишкою
		swipe:true,// відповідає за переключення протягуванням тачскріном
		touchTreshhold:5,//відповідає за відстань, яку треба протягнути,щоб слайд змінився/більше значення=менша відстань
		touchMove:true,//включає можливіть рухати слайдер, при значенні false буде перемикатись при протягуванні, але не рухатсь за стрілкою
		waitForAnimate:false,//при значенні false слайди перемикаються зі швидкістю клікання по стрілкам
		centerMode:false,//при включеній опції додається новий клас slick-center
		varibleWidth:false,//дає можливість самому контенту всередині слайда займати відповідну ширину, коли потрібний адаптивний слайдер
		rows:1,//кількіт рядів в вслайді
		slidesPerRow:1, //кількість слайдів в ряду
		vertical:false, //вертикальний сладер, треба в .slider.slick-track - display:block
		verticalSwiping:false,//включає вертикальну прокрутку
	});
});
//slider2
$(document).ready(function(){
	$('.slider__small').slick({
		arrows:true,//наявність стілок
		adaptiveHeight:true,//адаптивність висоти фото
		slidesToShow:3,//кількість слайдів до показу
		slidesToScroll:1,//кількість слайдів за одну прокрутку
		speed:1000,//швидкіть прокрутки в мс
		easing:'ease',//динаміка прокрутки(наявні приклади в шрарглці урок про анімацію)
		initialSlide:3,//відповідає за номер стартового слайда
		draggable:true,//відповідає за можливість прокрутки за допомогою протягування мишкою
		swipe:true,// відповідає за переключення протягуванням тачскріном
		touchTreshhold:5,//відповідає за відстань, яку треба протягнути,щоб слайд змінився/більше значення=менша відстань
		touchMove:true,//включає можливіть рухати слайдер, при значенні false буде перемикатись при протягуванні, але не рухатсь за стрілкою
		waitForAnimate:true,//при значенні false слайди перемикаються зі швидкістю клікання по стрілкам
		centerMode:true,//при включеній опції додається новий клас slick-center
		asNavFor:".slider__bottom",//вказуємо слайер з яким звязуємо
		varibleWidth:true,//дає можливість самому контенту всередині слайда займати відповідну ширину, коли потрібний адаптивний слайдер
		adaptiveHeight:true
	});
});
$(document).ready(function(){
	$('.slider__bottom').slick({
		arrows:false,
		initialSlide:3,
		fade:true,//слади не гортаються а замінюються
		asNavFor:".slider__small",//вказуємо слайер з яким звязуємо
	});
});
//scrollTo
$(document).ready(function(){
    $(".header__top_menu").on("click","a", function (event) {
        // виключаємо тандартну ракцію браузера
        event.preventDefault();
        // отримуємо ідентифікатор блока з атрибута href
        var id  = $(this).attr('href'),
        // знаходимо висоту на якій розташований блок віднімаємо висоту меню, щоб не перекрива
            top = $(id).offset().top 
        // анімація переходу блоку в мс
        $('body,html').animate({scrollTop: top},1000);
    });
});
//topBtn
function backToTop(){
	let
	button = $('.topBtn');
	$(window).on('scroll', () => {
		if ($(this).scrollTop() >= 50){
			button.fadeIn();
		} 
		else {
			button.fadeOut();
		}
	});
	button.on('click', (e) => {
		e.preventDefault();
		$('html').animate({scrollTop:0}, 1000);
	})
}
backToTop();