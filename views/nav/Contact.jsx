const React = require('react')
const DefaultLayout = require('../Default.jsx')

class Contact extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <h2>Need Help? Contact Us!</h2>
                <div className='contact'>
                    <p>Call Us At: 1(800)- XXX - XXXX</p>
                    <p> 45 - 1003 General Assembly Street Madline Ave 11405</p>
                    <p>dontemailhere@email.com</p>
                    <p>Service hours: 24/7 </p>
                </div>
            </DefaultLayout>
        )
    }
}
module.exports = Contact;