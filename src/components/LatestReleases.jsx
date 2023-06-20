import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import historyBooks from '../data/history.json';
import SingleBook from './SingleBook';
import Form from 'react-bootstrap/Form';

class LatestReleases extends Component {
    constructor(props){
        super(props)

        this.state = {
            formData: {
              searchTerm: '',
            },
            isSelected: {} // Aggiunto un oggetto vuoto per tracciare lo stato di selezione di ogni carta
          };
    }

    handleInputChange = (event) => {
        const {name, value} = event.target
        this.setState((prevState) => ({
            formData: {
                ...prevState.formData,
                [name]: value,
            }
        }))

    }

    handleSelectedSubmit = (asin) => {
        this.setState((prevState) => {
          const { isSelected } = prevState;
          const updatedSelected = { ...isSelected };
          updatedSelected[asin] = !isSelected[asin] || false; // Inverti il valore booleano quando viene fatto clic sulla carta o imposta a false se non è ancora definito
          return {
            isSelected: updatedSelected
          };
        });
      };
    


    render(){
        const {searchTerm} = this.state.formData;

        return(

            <Container className='my-5'>
                <Row>

                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Filtra libri</Form.Label>
                        <Form.Control type="text" placeholder="digita una ricerca" value={searchTerm} name="searchTerm" onChange={this.handleInputChange} />
                    </Form.Group>
                </Form>

                    <Col className='d-flex flex-wrap gap-3'>
                        {searchTerm && historyBooks && 
                        historyBooks
                        .filter(historyBooks => historyBooks.title.toLowerCase().includes(searchTerm))
                        .map(historyBook =>{
                            const isSelected = this.state.isSelected[historyBook.asin] || false;
                            return (
                                <SingleBook 
                                    className={isSelected ? 'border border-danger shadow' : ''}
                                    isSelected={isSelected} // Passa lo stato di selezione come prop
                                    onClick={() => this.handleSelectedSubmit(historyBook.asin)} // Passa l'asin come parametro al metodo handleSelectedSubmit
                                    key={historyBook.asin}
                                    img={historyBook.img}
                                    title={historyBook.title}
                                    category={historyBook.category}
                                    price={historyBook.price}
                                />
                            )
                        })}

                        {!searchTerm && historyBooks && historyBooks.map(historyBook =>{
                            const isSelected = this.state.isSelected[historyBook.asin] || false;
                            return (
                                <SingleBook
                                    className={isSelected ? 'border border-danger shadow' : ''}
                                    isSelected={isSelected} // Passa lo stato di selezione come prop
                                    onClick={() => this.handleSelectedSubmit(historyBook.asin)} // Passa l'asin come parametro al metodo handleSelectedSubmit
                                    key={historyBook.asin}
                                    img={historyBook.img}
                                    title={historyBook.title}
                                    category={historyBook.category}
                                    price={historyBook.price}
                                />
                            )
                        }) }

                    </Col>
                </Row>
            </Container>
        )
    }
}

export default LatestReleases;