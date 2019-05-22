import React from 'react';
import PropTypes from 'prop-types';
import { Form, Label } from 'semantic-ui-react';

const TextInput = ({
  input,
  label,
  width,
  type,
  meta: { touched, error}}) => (
    <Form.Field error={touched && !!error} width={width}>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <Label basic color="red">{error}</Label>}
    </Form.Field>
);

TextInput.propTypes = {
}

export default TextInput;
