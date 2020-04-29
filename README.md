# oxid-frontend-building
OXID eShop frontend asset building process based on nodejs

- boilerplate template for building process

# usage
- install node js and npm
- go to source/build/ the main building frontend directory
- install project dependencies
~~~
npm install
~~~

- build styles and scripts
~~~
npm run build
~~~

- to build only specific assets
~~~
#sass
npm run build:styles

#js
npm run build:scripts

#fonts
npm run build:fonts

#images
npm run build:images

#svg sprite
npm run build:sprites

#all
npm run build:all

~~~
- new js and scss files can be added in config/myproject.js

# TODO
- improve subshop handling for js
- update gulp task implementation
- update package.json for newer nodejs versions
- add project create script/cli
- change directory structure
- add bootstrap 4 starter package with custom breakpoints