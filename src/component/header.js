import React from 'react'
import { Col, Row, Divider, Typography } from 'antd';
const { Title } = Typography;


const Header = () => {

    return (
        <div>
            <Row id='header' >
                <Col>
                    <Title style={{ color: "#fff", fontWeight: "400", al: 'center' }} level={3}>
                        TO-DO APP
                    </Title>
                </Col>
            </Row>
            <Divider />
        </div>
    )
};

export default Header