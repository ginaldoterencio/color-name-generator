#!/usr/bin/env node

var tinycolor = require('tinycolor2'),
	chalk = require('chalk'),
	program = require('commander');

program
    .version('0.1.2')
    .usage('[options] <file ...>')
    .option('-c, --color [hexadecimal]', 'Color')
    .option('-b, --baseColor [hexadecimal]', 'Base color')
    .option('-g, --groupColorName [string]', 'Group color name')
    .parse(process.argv);

var hexPattern = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i,
    isParamsValid = true;

if((typeof program.color !== 'string') || !(hexPattern.test(program.color))) {
  console.log(chalk.red('Please, type a valid color.'));
  isParamsValid = false;
}

if((typeof program.baseColor !== 'string') || !(hexPattern.test(program.baseColor))) {
  console.log(chalk.red('Please, type a valid base color.'));
  isParamsValid = false;
}

if((typeof program.groupColorName !== 'string') || (program.groupColorName.trim() === '')) {
  console.log(chalk.red('Type a group color name'));
  isParamsValid = false;
}

if(!isParamsValid) {
  return;
}

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
			program.groupColorName,
			lig,
			parseInt(intense, 10),
			program.groupColorName,
			diff.h,
			diff.s,
			diff.l,
			program.color);