# PDX Roasted
## All things coffee + Angular2 - Portland, OR
### Coming May, 2016
Stay tuned ;)

-PDXRoasted team

## Instructions to run
1. clone
2. `npm install` (see below for known bugs)
3. `gulp`

## Contributing
This project is currently closed for outside contributions until after the first iteration is released. We look forward to your contributions! Check back soon.
[Gitflow for contributing](https://docs.google.com/document/d/1K1Q47UQRYMcpXc6JAdgdq7FU1WwNfyKRNSlW_ptzxNA/edit?usp=sharing)

## Known Bugs
You might see this error when installing node packages: `npm ERR! cb() never called!`

The version of Node installed on your machine, or the npm version, may be out of date for current Angular2 dependencies (more than likely it's zone.js).

### Try these steps
#### Update Node (_run with sudo if needed_)
1. `npm cache clean -f`
2. `npm install -g n`
3. `n stable`

#### Update npm
`npm install npm@latest -g`

Try running `npm install` again!

If you have any problems please get hold of [Jason](http://www.jason-awbrey.com/contact), thanks.


