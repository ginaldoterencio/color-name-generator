#!/usr/bin/env node

var tinycolor = require('tinycolor2'),
	chalk = require('chalk'),
	program = require('commander');

program
    .version('0.0.1')
    // .usage('<keywords>')
    .option('-c, --color [name]', 'Color')
    .option('-b, --baseColor [name]', 'Base color')
    .option('-g, --groupColorName [name]', 'Group color name color')
    .parse(process.argv);

var baseColor = tinycolor(program.baseColor).toHsl();
var color = tinycolor(program.color).toHsl();
var lig = (color.l > baseColor.l) ? 'lighter' : 'darker';
var intense = (color.l > baseColor.l) ? ((100 * color.l) / (1 - baseColor.l)) : ((100 * color.l) / (baseColor.l));
var diff = {
	h: (color.h - baseColor.h).toFixed(2),
	s: ((color.s - baseColor.s) * 100).toFixed(2),
	l: ((color.l - baseColor.l) * 100).toFixed(2)
};

console.log(chalk.green('$%s-group-%s-%s-color: ' + 
			chalk.blue('hsl-diff($%s-color, %s, %s, %s);'+ 
			chalk.gray(' //%s'))),
			program.group,
			lig,
			parseInt(intense, 10),
			program.group,
			diff.h,
			diff.s,
			diff.l,
			program.color);