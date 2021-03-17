import React from "react";
import { Card, Row, Col } from "antd";
import WordInputForm from "../components/WordInputForm.js";

const FormContainer = () => {
  return (
    <div>
      <Row style={{ marginTop: "10rem" }}>
        <Col span={8} offset={8}>
          <Card>
            <WordInputForm />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default FormContainer;
