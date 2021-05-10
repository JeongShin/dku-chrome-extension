import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import moment from 'moment';

const initialSubject = {
  id: Date.now(),
  title: '',
  children: [],
};

const SubjectForm = ({ addSubjectHanlder }) => {
  const subjectForm = useFormik({
    initialValues: { ...initialSubject },
    onSubmit: () => {},
    onReset: () => {},
  });

  const handleTitleChange = ({ target: { value: title } }) =>
    subjectForm.setValues(prev => ({ ...prev, title }));

  const submitHandler = () => {
    addSubjectHanlder({ subject: subjectForm.values });
    subjectForm.setValues({ ...initialSubject, id: Date.now() });
  };

  return (
    <Form>
      <SubjectTitleInput
        placeholder="과목명을 입력 해주세요"
        value={subjectForm.values.title}
        onChange={handleTitleChange}
      />
      <SubjectSubmitButton onClick={submitHandler}>추가</SubjectSubmitButton>
    </Form>
  );
};

const Form = styled.form`
  padding: 16px;
  display: flex;
  width: 100%;
`;

const SubjectSubmitButton = styled.div`
  width: 50px;
  text-align: center;
  line-height: 32px;
  margin-left: 8px;
  border-radius: 6px;
  height: 32px;
  background-color: ${({ theme }) => theme.primaryColor};
  border: none;
`;

const SubjectTitleInput = styled.input`
  width: 80%;
  height: 32px;
  border-radius: 16px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.inputBgColor};
  color: ${({ theme }) => theme.textColor};
  border: none;
  font-size: 16px;
  font-weight: bold;
`;

export default SubjectForm;
