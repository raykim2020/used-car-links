const React = require('react')
const DefaultLayout = require('../Default.jsx')
class Index extends React.Component {
    render() {
        const { cars } = this.props
        return (
            <DefaultLayout title="Used Car Links">
                <div>
                    <img class="about" src="https://www.supercars.net/blog/wp-content/uploads/2020/09/wallpaperflare.com_wallpaper-1-1.jpg" alt="" />
                    <p className='aboutme'>At Used Car Links we want to connect people with a database of used cars they may want to purchase. Our services are open to any <br />
                        and everyone. We want people to feel that shopping for their next used car was easy. The best thing about it is that we open our site to all car enthusiasts <br />
                        and invite anyone to share their findings on awesome car deals.</p>
                </div>
                <a href="/cars/new">Input a New Car Listing</a>
                <div className="index">
                    {
                        cars.map((car) => (
                            <article>
                                <a href={`/cars/${car._id}`}>
                                    <img class="description" src={car.img + '.jpg'} alt="" />
                                    <h2>
                                        {car.name}
                                    </h2>
                                </a>
                            </article>
                        )
                        )
                    }
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index;