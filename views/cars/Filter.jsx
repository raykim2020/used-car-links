const React = require('react');
const DefaultLayout = require('../Default.jsx')
class Filter extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <form action="/cars" method="GET">
                    <fieldset>
                        <legend>Add a New Listing</legend>
                        <label>
                            MAKE:<input type="text" name="make" placeholder="filter by make" />
                        </label>
                        <label>
                            MODEL:<input type="text" name="model" placeholder="filter by model" />
                        </label>
                        <label>
                            YEAR:<input type="text" name="year" placeholder="filter by year" />
                        </label>
                        <label>
                            PRICE:<input type="text" name="price" placeholder="filter by price" />
                        </label>
                    </fieldset>
                    <input type="submit" value="filters" />
                </form>
            </DefaultLayout>
        )
    }
}