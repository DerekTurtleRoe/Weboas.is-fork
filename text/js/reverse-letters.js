var _$_1935=["\x23\x69\x6E\x70\x75\x74\x5F\x6F\x75\x74\x70\x75\x74","\x74\x61\x5F\x65\x78\x61\x6D\x70\x6C\x65\x73","\x67\x65\x74","\x23\x66\x69\x6C\x65\x5F\x75\x70\x6C\x6F\x61\x64","\x55\x54\x46\x2D\x38","\x4E\x6F\x20\x62\x6C\x6F\x62\x73\x20\x6F\x6E\x20\x49\x45\x20\x76\x65\x72\x3C\x31\x30","\x0D\x0A","\x69\x6E\x70\x75\x74\x5F\x6F\x75\x74\x70\x75\x74","\x74\x65\x78\x74\x2F\x70\x6C\x61\x69\x6E","\x6E\x75\x6C\x6C\x2E\x74\x78\x74","\x46\x69\x6C\x65\x20\x6E\x61\x6D\x65\x3A","\x4E\x65\x77\x20\x44\x6F\x63\x75\x6D\x65\x6E\x74","\x2E\x74\x78\x74","\x61","\x6E\x6F\x6E\x65","","\x63\x68\x69\x6C\x64\x57\x69\x6E\x64\x6F\x77","\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x3D\x79\x65\x73\x2C\x20\x6D\x65\x6E\x75\x62\x61\x72\x3D\x79\x65\x73\x2C\x20\x74\x6F\x6F\x6C\x62\x61\x72\x3D\x79\x65\x73","\x3C\x68\x74\x6D\x6C\x3E\x3C\x68\x65\x61\x64\x3E\x3C\x2F\x68\x65\x61\x64\x3E\x3C\x62\x6F\x64\x79\x3E","\x3C\x62\x72\x3E","\x3C\x2F\x62\x6F\x64\x79\x3E\x3C\x2F\x68\x74\x6D\x6C\x3E","\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4A\x4B\x4C\x4D\x4E\x4F\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5A\x0A\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6A\x6B\x6C\x6D\x6E\x6F\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7A","\x23\x73\x65\x74\x74\x69\x6E\x67\x73","\x52\x65\x76\x65\x72\x73\x65\x64","\x0A","\x46\x6C\x69\x70\x70\x65\x64","\x23\x72\x65\x76\x54\x65\x78\x74","\x2E\x63\x6C\x69\x70\x62\x6F\x61\x72\x64","\x23\x63\x6C\x65\x61\x72\x41\x6C\x6C\x2C\x20\x23\x65\x64\x69\x74\x5F\x64\x65\x6C\x65\x74\x65\x2C\x20\x23\x66\x69\x6C\x65\x5F\x6E\x65\x77","\x63\x68\x61\x6E\x67\x65","\x23\x66\x69\x6C\x65\x5F\x64\x6F\x77\x6E\x6C\x6F\x61\x64","\x23\x66\x69\x6C\x65\x5F\x70\x72\x69\x6E\x74","\x23\x65\x64\x69\x74\x5F\x75\x6E\x64\x6F","\x23\x65\x64\x69\x74\x5F\x72\x65\x64\x6F","\x23\x65\x64\x69\x74\x5F\x63\x6F\x70\x79","\x23\x65\x64\x69\x74\x5F\x73\x65\x6C\x65\x63\x74"];var area=$(_$_1935[0]),examples=JSON.parse(localStorage.getItem(_$_1935[1]));function loadText(){var a=$(_$_1935[3])[_$_1935[2]](0).files[0],b= new FileReader;b.onload= function(a){var b=a.target.result;area.val(b)},b.readAsText(a,_$_1935[4])}function saveText(a,b){var c=navigator.userAgent.match(/MSIE\s([\d.]+)/),f=navigator.userAgent.match(/Trident\/7.0/)&& navigator.userAgent.match(/rv:11/),h=navigator.userAgent.match(/Edge/g),d=c?c[1]:f?11:h?12:-1;if(c&& d< 10){console.log(_$_1935[5])}else {b= (b= document.getElementById(_$_1935[7]).value).replace(/\r?\n/g,_$_1935[6]);var j= new Blob([b],{type:_$_1935[8]});if(_$_1935[9]!= (a= prompt(_$_1935[10],_$_1935[11])+ _$_1935[12])){if(d>  -1){window.navigator.msSaveBlob(j,a)}else {var g=document.createElement(_$_1935[13]);g.download= a,g.href= window.URL.createObjectURL(j),g.onclick= function(a){document.body.removeChild(a.target)},g.style.display= _$_1935[14],document.body.appendChild(g),g.click()}}}}function printTextArea(){childWindow= window.open(_$_1935[15],_$_1935[16],_$_1935[17]),childWindow.document.open(),childWindow.document.write(_$_1935[18]),childWindow.document.write(document.getElementById(_$_1935[7]).value.replace(/\n/gi,_$_1935[19])),childWindow.document.write(_$_1935[20]),childWindow.print(),childWindow.document.close(),childWindow.close()}1== examples&& area.val(_$_1935[21]),$(_$_1935[26]).click(function(){Remember();var a=area.val(),b=$(_$_1935[22]).val();if(1== b){a= a.split(_$_1935[15]).reverse().join(_$_1935[15]),Toast(_$_1935[23])}else {if(2== b){var c=0;for(a= a.replace(/\r\n|\r|\n/gm,_$_1935[24]).split(_$_1935[24]),c= 0;c< a.length;c++){a[c]= a[c].split(_$_1935[15]).reverse().join(_$_1935[15])};a= a.join(_$_1935[24]),Toast(_$_1935[25])}};area.val(a),Remember()}),$(_$_1935[27]).click(function(){Clipboard(area)}),$(_$_1935[28]).click(function(){area.val(_$_1935[15]),Remember()}),$(_$_1935[3]).on(_$_1935[29],function(){loadText()}),$(_$_1935[30]).click(function(){saveText()}),$(_$_1935[31]).click(function(){printTextArea()}),$(_$_1935[32]).click(function(){var a=History.undo();void(0)!== a&& area.val(a)}),$(_$_1935[33]).click(function(){var a=History.redo();void(0)!== a&& area.val(a)}),$(_$_1935[34]).click(function(){Clipboard(area)}),$(_$_1935[35]).click(function(){area.select().focus()});var History=function(){var a=[],b=0;return {remember:function(c){a[b- 1]!== c&& (a.splice(b,10),a.push(c),a.splice(0,a.length- 10),b= a.length)},undo:function(){if(b> 1){return a[--b- 1]}},redo:function(){if(b< a.length){return a[b++]}}}}();function Remember(){var a=area.val();History.remember(a)}Remember()