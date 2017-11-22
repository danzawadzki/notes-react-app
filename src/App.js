import React, {Component} from 'react';
import './styles/styles.css';

/*
 *
 * Notes - React App
 *
 */

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }


    // Handler for a input change event
    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });

        this.fetchMoviesList(e.target.value);
    };

    render() {
        return (
            <h1>Notes - React App</h1>
        )
    }
}

export default App;
