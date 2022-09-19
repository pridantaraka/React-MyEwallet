import { Button, Form } from "react-bootstrap"
import React from "react"
// import * as Yup from 'yup'

// const errorInput = Yup.object().shape({
//     errInput : Yup.number.min(10000, 'Minnimal input Rp.10000')
// })

export const TopUp = ({handleSubmit, handleChange}) => {
    return(
        <>
        <Form onSubmit={handleSubmit} onChange={handleChange}>
            <Form.Group>
                <div className="">
                <Form.Control 
                name = "input"
                type = "number"
                placeholder= "Rp. 0.0"
                />
                </div>
            </Form.Group>
            <div className="my-5">
                <Button type="submit">
                    Submit
                </Button>
            </div>
        </Form>
        </>
    )
}