import { Button, Form } from "react-bootstrap"
import React from "react"
import * as Yup from 'yup'

export const errorInput = Yup.object().shape({
    errInput : Yup.number.min(10000, 'Minnimal input Rp.10000')
})
// const loginSchema = Yup.object().shape({
//     email: Yup.string().email('Invalid email address format').required('Required'),
//     password: Yup.string().min(8).required('Required')
//   })

export const TopUp = ({errors, handleSubmit, handleChange}) => {
    return(
        <>
        <Form onSubmit={handleSubmit} onChange={handleChange}>
            <Form.Group>
                <div className="">
                <Form.Control 
                name = "input"
                type = "number"
                placeholder= "Rp. 0.0"
                isInvalid={!!errors.errInput}
                />
                <Form.Control.Feedback type="invalid">{errors.errInput}</Form.Control.Feedback>
                </div>
            </Form.Group>
            <span>
                Min Rp. 10.000
            </span>
            <div className="my-5">
                <Button type="submit">
                    Submit
                </Button>
            </div>
        </Form>
        </>
    )
}