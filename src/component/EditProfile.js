import React from 'react'
import {Form,Button} from 'react-bootstrap'

function EditProfile({handleChange, handleSubmit, errors, touched, values}) {
  return (
    <>
    <Form onSubmit={handleSubmit}>
        <div className="d-inline-flex flex-column justify-content-center w-md-50 align-self-center py-5 gap-5 align-content-center">
        <Form.Group className='mb-3'>
        <Form.Control name='upload' type='file' onChange={handleChange}
            />
        </Form.Group>
        <Form.Group className='mb-3'>
        <Form.Control name='fullname' type='text' onChange={handleChange}
            placeholder='Input Name' 
            value = {values.fullname}
            isInvalid={errors.fullname}
            isValid={touched.fullname && !errors.fullname}
            />
            <Form.Control.Feedback type='invalid'>{errors.fullname}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3'>
        <Form.Control name='phonenumber' type='number' onChange={handleChange}
            placeholder='Phone Number'
            value={values.phonenumber}
            isInvalid={errors.phonenumber} 
            isValid={touched.phonenumber && !errors.phonenumber}
            />
            <Form.Control.Feedback type='invalid'>{errors.phonenumber}</Form.Control.Feedback>
        </Form.Group>
        <Button type='submit' className="reset-btn-chnge">Cornfirm</Button>
        </div>
    </Form>
    </>
  )
}

export default EditProfile