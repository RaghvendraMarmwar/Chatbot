import React, {Component} from 'react';

class Api extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://api.npoint.io/5fae8d1cc090bb233c07')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json
                })
            });

    }

    render() {

        const {items, isLoaded} = this.state;


        if (!isLoaded) {
            return <div>Loading</div>
        }

        else {
            return (

                <div>

                        {items.map(item => (


                               <div>
                                <br />
                                Question: {item.q}
                                <br />

                                Answer:{item.ans}
                                <br />
                                </div>

                        ))}

                </div>

            );


        }
    }
}

export default Api;
