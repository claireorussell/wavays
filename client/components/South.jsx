import React from 'react'

import { Link } from 'react-router-dom'

import { getSouthBeaches } from '../api/index'

class South extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            beachData: [],
            beachImg: true
        }
        this.handleChange = this.handleChange.bind(this);
    }


    componentDidMount() {
        console.log('hi')
        getSouthBeaches()
            .then(beaches => {
                console.log(beaches)
                this.setState({ beachData: beaches })
            }) // assigning data to a variable to use in render 
    }


    handleChange(e) {
        e.preventDefault()
        if (this.state.beachImg == true) {
            this.setState({
                beachImg: false,
            })
        } else {
            this.setState({
                beachImg: true,
            })
        }
    }


    render() {
        return (
            <div className='compBody'>
                <div>
                    <h1 className='pageTitle'>South island</h1>
                    <Link to={'/'}><button className='btn btn-warning'>Wave home</button></Link>
                </div>



                {this.state.beachData.map(beach => {
                    console.log(beach)
                    return (
                        <section className='section' onClick={this.handleChange}>
                            <h3 className='waveTitle'>{beach.name}</h3>
                            {this.state.beachImg == true ? <img className='beachImage' src={beach.image} /> : <div className='info'>
                                <p>Find me in {beach.region} region</p>
                                <p>My average swell size is {beach.swell}</p>
                                <p>The level of difficulty is {beach.difficulty}</p>
                            </div>}
                        </section>
                    )
                })}

            </div>
        )
    }


}

export default South