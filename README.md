Color name generator
====================

Generate color name according with the base color name and group

## Getting Started

- Install: `npm install -g color-name-generator`
- Run: `generate-color-name -c '#ff0000' -b '#cc0000' -g 'main'`
- Will generate `$theme[main-lighter-50] = hsl-diff($theme.main, 0.00deg, 0.00%, 10.00%); //#ff0000`


## Options

* `-h, --help`

  Output usage information

* `-V, --version`

  Output the version number

* `-c, --color`

  Hexadecimal color

* `-b, --baseColor`

  Hexadecimal base color

* `-g, --groupColorName`

  Group color name


## License

[BSD license](http://opensource.org/licenses/bsd-license.php)

