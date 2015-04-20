var dictionary = require('./dictionary.json');

var first = shuffle(dictionary.first.slice()),
    last  = shuffle(dictionary.last.slice());

/**
 * From SO
 * 
 * @link http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
 * @param {Array} o
 * @return {Array}
 */
function shuffle (o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    
    return o;
};

/**
 * Generate lorem ipsum
 * 
 * @param {Number} paragraphs
 * @param {Number} sentences
 * @param {Boolean} html
 * @return {String}
 */
function generate (paragraphs, sentences, html) {
    var text = '';
    
    for (var i = 0; i < paragraphs; i ++) {
        text += generateParagraph(sentences, html) + '\n\n';
    }
    
    return text.trim();
}

/**
 * Generate lorem ipsum paragraph
 * 
 * @param {Number} sentences
 * @param {Boolean} html
 * @return {String}
 */
function generateParagraph (sentences, html) {
    var content = shuffle(dictionary.sentences.slice()),
        paragraph = randomFirst() + ' ';
    
    if (sentences > content.length) {
        sentences = content.length;
    }
    
    for (var i = 0; i < sentences; i ++) {
        paragraph += content.pop() + ' ';
    }
    
    paragraph += randomLast();
    
    return html ? '<p>' + paragraph + '</p>' : paragraph;
}

/**
 * Get first random sentence
 * 
 * @return {String}
 */
function randomFirst () {
    if (!first.length) {
        first = shuffle(dictionary.last.slice());
    }
    
    return first.pop();
}

/**
 * Get last random sentence
 * 
 * @return {String}
 */
function randomLast () {
    if (!last.length) {
        last = shuffle(dictionary.last.slice());
    }
    
    return last.pop();
}

module.exports = {
    generate: generate
};