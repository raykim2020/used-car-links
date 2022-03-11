const React = require('react');

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
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
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