# Neith - Javascript Zipper Library #

## About
Neith is a zipper library for Javascript. [Zippers][zippers] allow efficient
manipulation of immutable, hierarchical data structures through a formalized 
interface.

Neith supports zippers for variations of n-ary ordered trees with labeled edges.


## To Clone
    git clone https://github.com/mattbierner/neith neith
    cd neith
    git submodule update --init


# Using Neith

## With AMD ##
Include any AMD style module loader and load neith:

    <!DOCTYPE html>
    <html>
    <head></head>
    <body>
        <script type="application/javascript" src="require.js"></script>
        <script type="application/javascript">
            requirejs.config({
                paths: {
                    'neith': './neith',
                }
            });
            require(['neith/zipper'], function(zipper) {
                ...
            });
        </script>
    </body>


# Code
parse.js is written in Javascript / Khepri. [Khepri][khepri] is a ECMAScript subset
that, among other things, adds a shorted lambda function syntax. It is also
implemented using parse.js. Besides lambda functions, Khepri files (*.kep) are
pretty much plain old Javascript.

For now, both the .js and .kep versions of source code will be kept in 'lib/',
but only Khepri sources will be developed and Javascript files will be
generated from it.


[Zippers]: http://www.haskell.org/haskellwiki/Zipper
[khepri]: https://github.com/mattbierner/khepri
[nu]: https://github.com/mattbierner/nu
