#!/usr/bin/env node
var argparse = require('argparse').ArgumentParser,
    stump    = require('stump-ipsum');

function main (args) {
    console.log(stump.generate(
        args.paragraphs || 2, 
        args.sentences  || 3, 
        args.html       || false
    ));
}

var parser = new argparse({
    version: '0.1',
    addHelp: true,
    description: 'Забавный lorem ipsum для разработчиков'
});

parser.addArgument(
    ['--paragraphs', '-p'], 
    {
        defaultValue: 2,
        type: 'int',
        help: 'Количество параграфов'
    }
);

parser.addArgument(
    ['--sentences', '-s'],
    {
        defaultValue: 5,
        type: 'int',
        help: 'Количество предложений в параграфе (не включая первый и последний)'
    }
);

parser.addArgument(
    ['--html'],
    {
        action: 'storeTrue',
        defaultValue: false,
        help: 'Добавить <p> тэги до и после каждого параграфа'
    }
);

var args = parser.parseArgs();

main(args);