import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';



class SingleBook extends Component {

    constructor(props){
        super(props)

    }

    render(){
        
        return(

            <Card className={this.props.className} style={{ width: '18rem' }} onClick={this.props.onClick}>
                <Card.Img variant="top" src={this.props.img} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.price}</Card.Text>
                    <Card.Text>{this.props.category}</Card.Text>
                </Card.Body>
            </Card>

        )
    }
}

export default SingleBook;