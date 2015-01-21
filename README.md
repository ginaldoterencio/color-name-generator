color-name-generator
====================

Generate color name according with the base color name and group

# Color name generator


## Getting Started

- Install: `npm install -g color-name-generator`
- Run: `generate-color-name -c #ff0000 -b #cc0000 -g main`
- Will generate `$main-group-lighter-83-color: hsl-diff($main-color, 0.00, 0.00, 10.00); //#ff0000`


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

