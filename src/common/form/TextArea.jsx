import React from 'react';
import { Form, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const TextArea = ({ input, width, label, rows, meta: { error, touched } }) => (
  <Form.Field error={touched && !!error} width={width}>
    <textarea {...input} placeholder={label} rows={rows} />
    {touched && error && <Label basic color="red">{ error }</Label>}
  </Form.Field>
);

TextArea.propTypes = {
};

export default TextArea;
