!function(){"use strict";function e(){for(var e=new Date,n=e.getSeconds(),r=e.getMinutes(),o=e.getHours(),l=[{hand:"hours",angle:30*o+r/2},{hand:"minutes",angle:6*r},{hand:"seconds",angle:6*n}],g=0;g<l.length;g++)for(var s=document.querySelectorAll("."+l[g].hand),d=0;d<s.length;d++)s[d].style.webkitTransform="rotateZ("+l[g].angle+"deg)",s[d].style.transform="rotateZ("+l[g].angle+"deg)","minutes"===l[g].hand&&s[d].parentNode.setAttribute("data-second-angle",l[g+1].angle);t(),a()}function t(){var e=document.querySelectorAll(".minutes-container"),t=e[0].getAttribute("data-second-angle");if(t>0){var a=1e3*((360-t)/6+.1);setTimeout(function(){n(e)},a)}}function n(e){for(var t=0;t<e.length;t++)e[t].style.webkitTransform="rotateZ(6deg)",e[t].style.transform="rotateZ(6deg)";setInterval(function(){for(var t=0;t<e.length;t++)void 0===e[t].angle?e[t].angle=12:e[t].angle+=6,e[t].style.webkitTransform="rotateZ("+e[t].angle+"deg)",e[t].style.transform="rotateZ("+e[t].angle+"deg)"},6e4)}function a(){var e=document.querySelectorAll(".seconds-container");setInterval(function(){for(var t=0;t<e.length;t++)void 0===e[t].angle?e[t].angle=6:e[t].angle+=6,e[t].style.webkitTransform="rotateZ("+e[t].angle+"deg)",e[t].style.transform="rotateZ("+e[t].angle+"deg)"},1e3)}e()}();