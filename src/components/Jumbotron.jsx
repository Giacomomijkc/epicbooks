import React, {Component} from 'react';

class Jumbotron extends Component {
    render(){
        return(
            <div className="jumbotron jumbotron-flui my-5">
                <div className="container">
                    <h1 className="display-4">Benvenuto!</h1>
                    <p className="lead">Qui puoi trovare una vasta collezione di libri storici!</p>
                </div>
        </div>
        )
    }
}

export default Jumbotron;