const React = require('react');
const DefaultLayout = require('../Default.jsx')

class Show extends React.Component {
    render() {
        const { car } = this.props
        return (
            <DefaultLayout>
                <div>
                    <article>
                        <h2>
                            {car.name}
                        </h2>
                        <img class="description" src={car.img + '.jpg'} alt="" />
                        <h3>Make:{car.make}</h3>
                        <h3>Model:{car.model}</h3>
                        <h3>Year:{car.year}</h3>
                        <h3>Price:{car.price}</h3>
                        <a href={`/cars/${car._id}/Edit`}><button>Edit</button></a>
                        <form action={`/cars/${car._id}?_method=DELETE`} method="POST">
                            <input type="submit" value="Delete" />
                        </form>
                        <a href="/cars/"><button>Back to Main</button></a>
                    </article>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show;