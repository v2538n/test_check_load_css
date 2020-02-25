// Функция загрузки CSS или JS, править не нужно.
function loadjscssfile(filename, filetype) {
    if (filetype=="js") { //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css") { //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
};

// Вот тут нужно править под конкретные нужды.
function appendAssets() {
    if (window.innerWidth <= 767) {
        loadjscssfile("small.css", "css"); // передаем в функцию путь до файла и расширение
    }
    else if (window.innerWidth <= 1299 && window.innerWidth >= 768) {
        loadjscssfile("medium.css", "css"); // передаем в функцию путь до файла и расширение
    }
    else if (window.innerWidth >= 1300) {
        loadjscssfile("big.css", "css"); // передаем в функцию путь до файла и расширение
    }
};

// Инициализация конечной функции 
appendAssets();