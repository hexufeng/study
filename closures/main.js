String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

window.onload = function(e) {
    readTextFile('./test.js', text => {
        text = text.replaceAll('\r\n', '<br/>');
        text = text.replaceAll('\n', '<br/>');
        text = text.replaceAll(' ', '&nbsp;');
        document.getElementById('test1js').innerHTML = text;
    });

    readTextFile('./test2.js', text => {
        text = text.replaceAll('\r\n', '<br/>');
        text = text.replaceAll('\n', '<br/>');
        text = text.replaceAll(' ', '&nbsp;');
        document.getElementById('test2js').innerHTML = text;
    });

    readTextFile('./test3.js', text => {
        text = text.replaceAll('\r\n', '<br/>');
        text = text.replaceAll('\n', '<br/>');
        text = text.replaceAll(' ', '&nbsp;');
        document.getElementById('test3js').innerHTML = text;
    });

    readTextFile('./test4.js', text => {
        text = text.replaceAll('\r\n', '<br/>');
        text = text.replaceAll('\n', '<br/>');
        text = text.replaceAll(' ', '&nbsp;');
        document.getElementById('test4js').innerHTML = text;
    });

    readTextFile('./test5.js', text => {
        text = text.replaceAll('\r\n', '<br/>');
        text = text.replaceAll('\n', '<br/>');
        text = text.replaceAll(' ', '&nbsp;');
        document.getElementById('test5js').innerHTML = text;
    });
}