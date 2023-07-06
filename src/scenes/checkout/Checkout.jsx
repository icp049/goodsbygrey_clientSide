import { UseSelector } from "react-redux";
import {Box, Button, Stepper, Step, StepLabel} from "@mui/material";
import {Formik} from "formik";
import {useState} from "react";
import * as yup from "yup";
import Shipping from "./Shipping";
import Payment from "./Payment";





const initialValues = {
    billingAddress:{
        firstName: "",
        lastName: "",
        country: "",
        street1: "",
        street2: "",
        city: "",
        state: "",
        zipCode: "",
    },
    shippingAddress:{
        isSameAddress: true,
        firstName: "",
        lastName: "",
        country: "",
        street1: "",
        street2: "",
        city: "",
        state: "",
        zipCode: "",
    },

    email: "",
    phoneNumber: ""
}

const checkoutSchema = [
    yup.object().shape({
        billingAddress: yup.object().shape({
            firstName: yup.string().required("required"),
            lastName: yup.string().required("required"),
            country: yup.string().required("required"),
            street1: yup.string().required("required"),
            street2: yup.string(),
            city: yup.string().required("required"),
            state: yup.string().required("required"),
            zipCode: yup.string().required("required"),
        }),
        shipppingAddress: yup.object().shape({
            isSameAddress: yup.boolean(),
            firstName: yup.string().when("isSameAddress",{
                is:false,
                then: yup.string().required("required")
            }),
            lastName: yup.string().when("isSameAddress",{
                is:false,
                then: yup.string().required("required")
            }),
            country: yup.string().when("isSameAddress",{
                is:false,
                then: yup.string().required("required")
            }),
            street1: yup.string().when("isSameAddress",{
                is:false,
                then: yup.string().required("required")
            }),
            street2: yup.string(),
            city: yup.string().when("isSameAddress",{
                is:false,
                then: yup.string().required("required")
            }),
            state: yup.string().when("isSameAddress",{
                is:false,
                then: yup.string().required("required")
            }),
            zipCode: yup.string().when("isSameAddress",{
                is:false,
                then: yup.string().required("required")
            }),
    }),
}),
yup.object().shape({
    email:yup.string().required("required")
    phoneNumber: yup.string().required("required")
})
]



const Checkout = () => {
    const [activeStep, setActiveStep] = useState(0);
    const cart = useSelector((state) => state.cart.cart);
    const isFirstStep = activeStep === 0;
    const isSecondStep = activeStep === 1;

    const handleFormSubmit = async (value, actions) => {
        setActiveStep(activeStep + 1);

     if(isFirstStep && values.shippingAddress.isSameAddress) {
        actions.setFieldValue("shippingAddress", {
            ...values.billingAddress, isSameAddress: true,
        })
     }

     if (isSecondStep) {
        makePayment(values);
     }

     actionsLsetTouched({});


    };

    async function makePayment(values){

    }
    
    return <Box width = "80%" m = "100px auto" >
        <Stepper activeStep = {activeStep} sx = {{m: "20px 0"}}>
            <Step>
                <StepLabel>Billing</StepLabel>
            </Step>
            <Step>
                <StepLabel>Payment</StepLabel>
            </Step>
            
        </Stepper>

        <Box>
                <Formik
                onSubmit = {handleFormSubmit}
                initialValues = {initialValues}
                validationSchema = {checkoutSchema[activeStep]}
                >
                    {({
                        values,
                        error,
                        touched,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        setFieldValue
                    }) => (
                        <form onSubmit = {handleSubmit}>
                          {isFirstStep && (
                            <shipping 
                            values = {values}
                            errors = {errors}
                            touched = {touched}
                            handleBlur = {handleBlur}
                            handleChange = {handleChange}
                            setFieldValue = {setFieldValue}
                            />
                          )}
                          {isSecondStep && (
                            <Payment
                            values = {values}
                            errors = {errors}
                            touched = {touched}
                            handleBlur = {handleBlur}
                            handleChange = {handleChange}
                            setFieldValue = {setFieldValue}
                            />
                          )}

                          <Box
                          display = "flex"
                          justifyContent = "space-between"
                          gap = "50px">

                            {isSecondStep && (
                                <Button
                                fullWidth
                                color = "black"
                                variant = "contained"
                                sx = {{
                                    backgroundColor: "pink",
                                    boxShadow: "none",
                                    color: "white",
                                    borderRadius: 0,
                                    padding: "15px 40x"
                                }}
                                onClick = {()=> setActiveStep(activeStep-1)}>
                                    Back

                                </Button>
                            )}
                            <Box
                          display = "flex"
                          justifyContent = "space-between"
                          gap = "50px">

                            {isSecondStep && (
                                <Button
                                fullWidth
                                type = "submit"
                                color = "black"
                                variant = "contained"
                                sx = {{
                                    backgroundColor: "pink",
                                    boxShadow: "none",
                                    color: "white",
                                    borderRadius: 0,
                                    padding: "15px 40x"
                                }}
                                onClick = {()=> setActiveStep(activeStep-1)}>
                                   {isFirstStep ? "Next" : "Place Order"}

                                </Button>

                          </Box>




                        </form>
                    )}
                </Formik>
            </Box>

    </Box>
};

export default Checkout;