var xml = new XMLHttpRequest();

xml.open('GET', 'https://www.freegeoip.net/xml/82.117.204.106');

xml.send();

xml.onload = function (response) {
    var xmlR = xml.responseXML;

    var from = xmlR.querySelector('CountryName').textContent;
    console.log(from);

   var b=document.createElement('p');
   b.textContent= from;

   document.querySelector('body').appendChild(b);

}