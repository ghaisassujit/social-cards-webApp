import React, { useImperativeHandle, useState } from "react";
import { AddNewProps } from "./AddNew.types";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";
import {StyledFormWrapper} from "./AddNew.styled";

export const AddNew = ({story, addStory}: AddNewProps) => {
    const history = useHistory();
    const [newStory, setStory] = useState(story);
    
    return(<StyledFormWrapper>
        <h1>Share Your Story</h1>
        <Formik
        initialValues={{...newStory}}
        validationSchema={Yup.object().shape({
            title: Yup.string()
                .required('Title is required'),
            author: Yup.string()
                .required('Your Name is required'),
            content: Yup.string()
                .required('Your Story is required')
        })}
        onSubmit={fields => {
            addStory(fields);
            // TODO: remove alert and show saved message in a label on the form.
            // TODO: provide a link back to the list.
            alert('Story saved!');
            history.push('/');
        }}
        render={({ errors, status, touched }) => (
            <Form>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <Field name="title" type="text" className={'form-control' + (errors.title && touched.title ? ' is-invalid' : '')} />
                    <ErrorMessage name="title" component="div" className="invalid-feedback" />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Your Name</label>
                    <Field name="author" type="text" className={'form-control' + (errors.author && touched.author ? ' is-invalid' : '')} />
                    <ErrorMessage name="author" component="div" className="invalid-feedback" />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Your Story</label>
                    <Field name="content" type="text" component="textarea" rows="10" className={'form-control' + (errors.content && touched.content ? ' is-invalid' : '')} />
                    <ErrorMessage name="content" component="div" className="invalid-feedback" />
                </div>
                
                <div className="form-group">
                    <button type="submit" className="btn btn-primary mr-2">Submit</button>
                    {/* <button type="reset" className="btn btn-secondary">Reset</button> */}
                </div>
            </Form>
        )}
    /></StyledFormWrapper>)
};