import { SingleBook } from './SingleBook'
import { Col, Container, Row} from 'react-bootstrap'

export const BookList = ({ books}) => {
    return <Container>
        <Row>
            {
                books.map(b => (
                    <Col xs={3}>
                        <SingleBook book={b} />
                    </Col>
                ))
            }
        </Row>
    </Container>
}