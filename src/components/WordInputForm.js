import React from "react";
import { message, Form, Input, Button } from "antd";

const WordInputForm = () => {
  const [form] = Form.useForm();

  const onFinish = (value) => {
    const reversedWord = value.word.split("").reverse().join("");
    if (reversedWord === value.word) {
      return message.success("It's a palindrome!");
    } else {
      return message.warning("Oops! It's not a palindrome.");
    }
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item name="word" label="Word">
        <Input placeholder="Please enter a word" />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};

export default WordInputForm;
