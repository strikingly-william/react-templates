# Command line Interface

## Installation
```shell
npm install react-templates -g
```

## Usage
```shell
rt [file.rt|glob]* [options]
```

Such as:
```shell
rt dir/file.rt
```

Please note that when passing a glob as a parameter, it will be expanded by your shell. 
The results of the expansion can vary depending on your shell, and its configuration. 
If you want to use node glob syntax, you have to quote your parameter (using double quotes if you need it to run in Windows), as follows:


```shell
rt 'src/**/*.rt'
```

## Options

The command line utility has several options. You can view the options by running `rt -h`.
```
Usage:
$ rt <filename> [<filename> ...] [<args>]

Options:
  -h, --help                   Show help.
  -c, --color                  Use colors in output. - default: true
  -m, --modules String         Use output modules. (amd|commonjs|none|es6|typescript|jsrt) - either: amd, commonjs, none, es6, typescript, or jsrt
  -n, --name String            When using globals, the name for the variable. The default is the [file name]RT, when using amd, the name of the module
  -d, --dry-run                Run compilation without creating an output file, used to check if the file is valid - default: false
  -r, --force                  Force creation of output. skip file check. - default: false
  -f, --format String          Use a specific output format. (stylish|json) - default: stylish
  -t, --target-version String  'React version to generate code for (15.0.1, 15.0.0, 0.14.0, 0.13.1, 0.12.2, 0.12.1, 0.12.0, 0.11.2, 0.11.1, 0.11.0, 0.10.0, default)' - default: 0.14.0
  --list-target-version        Show list of target versions - default: false
  -v, --version                Outputs the version number.
  -k, --stack                  Show stack trace on errors.
  --react-import-path String   Dependency path for importing React.
  --lodash-import-path String  Dependency path for importing lodash. - default: lodash
  --native, --rn               Renders react native templates.
  --flow                       Add /* @flow */ to the top of the generated file
  --native-target-version, --rnv String  React native version to generate code for (0.9.0, 0.29.0, default) - either: 0.9.0, 0.29.0, or default - default: 0.9.0
  --normalize-html-whitespace  Remove repeating whitespace from HTML text. - default: false
```

### `-h`, `--help`

This option outputs the help menu, displaying all of the available options. All other flags are ignored when this is present.

### `-c`, `--color`

The option enable or disable color in the output.

### `-m`, `--modules`

Use output modules. Valid targets are: `amd`, `commonjs`, `none`, `es6`, `typescript`, or `jsrt`.

### `-n`, `--name`

When using globals, the name for the variable. The default is the [file name]RT, when using amd, the name of the module.

### `-d`, `--dry-run`

Run compilation without creating an output file, used to check if the file is valid - default: false

### `-r`, `--force`

This option allows to override the output file even if there are no changes.

### `-f`, `--format`

Use a specific output format (`stylish` or `json`).

### `-t`, `--target-version`

React version to generate code for (15.0.1, 15.0.0, 0.14.0, 0.13.1, 0.12.2, 0.12.1, 0.12.0, 0.11.2, 0.11.1, 0.11.0, 0.10.0, default). default: 0.14.0

### `--list-target-version`

Show list of target versions.

### `-v`, `--version`

Outputs the version number.

### `-k`, `--stack`

Show stack trace on errors.

### `--react-import-path`

Dependency path for importing React.

### `--lodash-import-path`

Dependency path for importing lodash.

### `--native`, `--rn`

Renders react native templates.

### `--native-target-version`, `--rnv`

React native version to generate code for (0.9.0, 0.29.0, default) - either: 0.9.0, 0.29.0, or default - default: 0.9.0

### `--flow`

Add /* @flow */ to the top of the generated file

### `--normalize-html-whitespace`

Remove repeating whitespace from HTML text.

Repeating whitespaces normally are not displayed and thus can be removed in order to reduce
the size of the generated JavaScript file.

Whitespace removal is not applied on `<pre>` and `<textarea>` tags, or when the special attribute `rt-pre` is specified on a tag.

 
