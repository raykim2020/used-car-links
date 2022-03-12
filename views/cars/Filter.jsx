const React = require('react');
const DefaultLayout = require('../Default.jsx')
class Filter extends React.Component {
    render() {
        return (
            <div>
                <form action="/cars/searchBy" method="POST">

                    {/* <legend>Add a New Listing</legend> */}
                    {/* <label> */}
                    <select id="cars" name="searchoptions">
                        <option value="make">Make</option>
                        <option value="model">Model</option>
                        <option value="year">Year</option>
                        <option value="price">Price</option>
                    </select>
                    <input type="text" name="filter" placeholder="Keywords" />
                    {/* </label> */}
                    {/* <label>
                            MODEL:<input type="text" name="model" placeholder="filter by model" />
                        </label>
                        <label>
                            YEAR:<input type="text" name="year" placeholder="filter by year" />
                        </label>
                        <label>
                            PRICE:<input type="text" name="price" placeholder="filter by price" />
                        </label> */}

                    <input type="submit" value="filters" />
                </form>
            </div>
        )
    }
}
module.exports = Filter;