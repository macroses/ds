// мультиселект
var element = document.querySelector('#defaultSelect')
if(element != null) {
    var choices = new Choices(element, {
        itemSelectText: '',
        removeItems: true,
        removeItemButton: true,
        silent: true
    });
}

// инициализация бутстраповских тултипов
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl, {
        delay: { "show": 500, "hide": 100 },
        trigger: "hover"
    })
});

// popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl, {
        trigger: 'manual',
        html: true,
        
    })
})

// смена цветовой схемы
var colorSchemeBtn = document.getElementById('change_scheme');
var colorScheme = document.getElementById('color_scheme');


colorSchemeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    var currentScheme = colorScheme.getAttribute('href')
    if(currentScheme === 'css/light-theme.css') {
        colorScheme.setAttribute('href', 'css/dark-theme.css');
    } else {
        colorScheme.setAttribute('href', 'css/light-theme.css');
    }
})

// открыть меню уведомлений
var noticeBtn = document.getElementById('notice_item');
var popupNotice = document.getElementById('notice_popup');
popupNotice.style.display = 'none';

noticeBtn.addEventListener('click', function() {
    popupNotice.style.display === 'none' ?
        popupNotice.style.display = 'block' :
        popupNotice.style.display = 'none';
});

// текстовый редактор
tinymce.init({
    selector: '#mailing_area'
    // skin: "oxide-dark",
    // content_css: "dark" // темную тему можно подключить
});

// drag
dragula([document.querySelector('.pm_sort_list')]);

// календарь
flatpickr.localize(flatpickr.l10ns.ru);
flatpickr("#mailingsDate", {
// static: true только с этим работает в модальных окнах в ie
    static: true
});