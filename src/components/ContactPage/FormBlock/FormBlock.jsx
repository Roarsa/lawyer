import React from 'react';

import { Form, Field, ErrorMessage } from 'formik';

import '../ContactPage.module.scss';

const FormBlock = ({ handleSubmit }) => (
  <Form styleName="new-item" onSubmit={handleSubmit}>
    <label styleName="field">
      <Field
        required
        type="text"
        name="name"
        placeholder="Ваше имя*"
        className="name"
      />
      <ErrorMessage name="name" component="div" />
      <span styleName="label-wrap">
        <span>Ваше имя*</span>
      </span>
    </label>
    <label styleName="field">
      <Field
        required
        type="text"
        name="number"
        placeholder="Ваш номер*"
      />
      <ErrorMessage name="number" component="div" />
      <span styleName="label-wrap">
        <span>Контактный номер*</span>
      </span>
    </label>
    <label styleName="field">
      <Field
        type="text"
        name="question"
        placeholder="Ваш вопрос"
      />
      <span styleName="label-wrap">
        <span>Ваш вопрос</span>
      </span>
    </label>
    <button
      styleName="submit"
      type="submit"
    >
      Заказать звонок
    </button>
  </Form>
);

export default FormBlock;