const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Edit extends React.Component {
    render() {
        const { car } = this.props
        return (
            <DefaultLayout>
                <form action={`/cars/${car._id}?_method=PUT`} method="post">
                    <fieldset>
                        <legend>Edit {car.name}</legend>
                        <label>
                            NAME:<input
                                type="text"
                                name="name"
                                placeholder="enter fruit name"
                                defaultValue={car.name}
                            />
                        </label>
                        <label>
                            MAKE:<input
                                type="text"
                                name="make"
                                placeholder="enter car make"
                                defaultValue={car.make}
                            />
                        </label>
                        <label>
                            MODEL:<input
                                type="text"
                                name="model"
                                placeholder="enter car model"
                                defaultValue={car.model}
                            />
                        </label>
                        <label>
                            YEAR:<input
                                type="text"
                                name="year"
                                placeholder="enter car year"
                                defaultValue={car.year}
                            />
                        </label>
                        <label>
                            PRICE:<input
                                type="text"
                                name="price"
                                placeholder="enter price of car"
                                defaultValue={car.price}
                            />
                        </label>
                        <label>
                            IMAGE URL :<input
                                type="text"
                                name="img"
                                placeholder="enter img of car url"
                                defaultValue={car.img}
                            />
                        </label>
                    </fieldset>
                    <input type="submit" value={`Edit ${car.name}`} />
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Edit;