var xml = new XMLHttpRequest();

xml.open('GET', 'https://www.freegeoip.net/json/82.117.204.106');

xml.send();

xml.onload = function (response) {
    // var xmlR = xml.responseXML;
    if (xml.status >= 200 && xml.status < 400) {
        var from = JSON.parse(xml.responseText);
        console.log(from);
        
    } else {
        return 'greska neka';
    }

    xml.onerror = function () {
        return 'conection error 507'
    }
       var b=document.createElement('p');
       b.textContent= from;

       document.querySelector('body').appendChild(b);

}