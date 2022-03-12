const React = require('react')
const DefaultLayout = require('../Default.jsx')

class About extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <h2 className="abouttitle">This is the About Me Page</h2>
                <p>At Used Car Links we hope to build a community of car lovers that can help each other out with great deals and new listings.</p>
                <p> Due to the pandemic people have seen a sharp increase in car prices and used cars are no exception. With the chip shortages car manufacturers and dealers alike saw a decrease in car supplies while demands for them only kept rising.</p>
                <p>With Used Car Links wwe want to connect people and potentially create cool car meets and auctions in the future.</p>
            </DefaultLayout>
        )
    }
}
module.exports = About;