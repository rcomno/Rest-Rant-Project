const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <head>
                <link rel="stylesheet" href="./style.css" />
            </head>
            <main>
                <h1>Error 404: PAGE NOT FOUND</h1>
                <p>Oops, sorry we can't find this page!</p>
                <div>
                    <img src="https://placekitten.com/250/250" alt="cat Picture" />
                    <div>
                        Image from <a href="https://placekitten.com">Place Kitten.com</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404