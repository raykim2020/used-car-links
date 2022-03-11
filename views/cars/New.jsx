const React = require('react')
const DefaultLayout = require('../Default.jsx')

class New extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <form action="/cars" method="POST">
                    <fieldset>
                        <legend>Add a New Listing</legend>
                        <label>
                            NAME:<input type="text" name="name" placeholder="enter car name" />
                        </label>
                        <label>
                            MAKE:<input type="text" name="make" placeholder="enter car make" />
                        </label>
                        <label>
                            MODEL:<input type="text" name="model" placeholder="enter car model" />
                        </label>
                        <label>
                            YEAR:<input type="text" name="year" placeholder="enter car year" />
                        </label>
                        <label>
                            PRICE:<input type="text" name="price" placeholder="enter price of car" />
                        </label>
                        <label>
                            IMAGE URL :<input type="text" name="img" placeholder="enter img of car url" />
                        </label>
                    </fieldset>
                    <input type="submit" value="create New Listing" />
                </form>
            </DefaultLayout>
        )
    }
}
module.exports = New;