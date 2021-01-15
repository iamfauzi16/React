import { Col, Card } from 'react-bootstrap';
import { numberWithCommas } from '../utils/utils';

const Menus = ({ menu }) => {
    return (
        <div>
            <Col>
                <Card className="shadow">
                    <Card mt={4} xs={6} classname="mb-4" style={{ width: '14rem ' }}>
                        <Card.Img variant="top" src={"assets/images/" + menu.category.nama.toLowerCase() + "/" + menu.gambar} />
                        <Card.Body>
                            <Card.Title>{menu.nama} <strong>({menu.kode})</strong></Card.Title>
                            <Card.Text>
                                Rp. {numberWithCommas(menu.harga)}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Card>
                <br />
            </Col>
        </div>
    )
}

export default Menus;