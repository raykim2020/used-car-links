const React = require('react');
const Filter = require('./cars/Filter.jsx')
class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="/app.css" />

                </head>
                <body>
                    <header>
                        <h1>Used Car Links</h1>
                        <nav>
                            <ul>
                                <li><a href="">Home</a></li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                            <Filter />
                        </nav>
                    </header>
                    <div className="color">
                        {this.props.children}
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout;