const React = require('react')
const Def = require('../default.jsx')

function comment_form (data) {
    return (
        <Def>
            <main>
                <h1>Comments for {data.place.name}</h1>
                <form method="POST" action={`/places/${data.place.id}/comment?_method=POST`}>
                    <div className="form-group">
                        <label htmlFor="c.author">Your Name</label>
                        <input className="form-control" id="c.author" name="c.author" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="c.content">Comments</label>
                        <input type="textarea" className="form-control" id="c.content" name="c.content"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="c.stars">Rating</label>
                        <input type="range"  id="c.stars" name="c.stars" min="0" max="5" step="0.5" value="3" required />
                    </div>
                    <div className="form-group">
                        <label for="c.rant">Rant or Rave?</label>
                        <input type="checkbox" id="c.rant" name="c.rant"/>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </form>
            </main>
        </Def>
    )
}

module.exports = comment_form

//mongodb://localhost:27017/rest-rant mongodb+srv://User700001:4CjGV8eXFmTm9hoZ@cluster0.3hjtm.mongodb.net/rest_rant