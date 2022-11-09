import { useSelector } from "react-redux";
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import { object, string, boolean, number } from "yup";
import { shades } from "../../theme";
import Shipping from "./Shipping";
import Payment from "./Payment";

const initialValues = {
  billingAddress: {
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  shippingAddress: {
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
  phoneNumber: "",
};

const checkoutSchema = [
  object().shape({
    billingAddress: object().shape({
      firstName: string().required("required"),
      lastName: string().required("required"),
      country: string().required("required"),
      street1: string().required("required"),
      street2: string(),
      city: string().required("required"),
      state: string().required("required"),
      zipCode: string().required("required"),
    }),
    shippingAddress: object().shape({
      isSameAddress: boolean(),
      firstName: string().when("isSameAddress", {
        is: false,
        then: string().required("required"),
      }),
      lastName: string().when("isSameAddress", {
        is: false,
        then: string().required("required"),
      }),
      country: string().when("isSameAddress", {
        is: false,
        then: string().required("required"),
      }),
      street1: string().when("isSameAddress", {
        is: false,
        then: string().required("required"),
      }),
      street2: string(),
      city: string().when("isSameAddress", {
        is: false,
        then: string().required("required"),
      }),
      state: string().when("isSameAddress", {
        is: false,
        then: string().required("required"),
      }),
      zipCode: string().when("isSameAddress", {
        is: false,
        then: string().required("required"),
      }),
    }),
  }),
  object().shape({
    email: string().email("Email is not valid.").required(),
    phoneNumber: number().required().positive().integer(),
  }),
];

function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const cart = useSelector((state) => state.cart.cart);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;

  const handleFormSubmit = async (values, actions) => {
    setActiveStep(activeStep + 1);

    // copies the billing address onto shipping address
    if (isFirstStep && values.shippingAddress.isSameAddress) {
      actions.setFieldValue("shippingAddress", {
        ...values.billingAddress,
        isSameAddress: true,
      });
    }

    if (isSecondStep) {
      makePayment(values);
    }

    actions.setTouched({});
  };

  async function makePayment(values) {}

  return (
    <Box width="80%" m="100px auto">
      <Stepper activeStep={activeStep} sx={{ m: "20px 0" }}>
        <Step>
          <StepLabel>Billing</StepLabel>
        </Step>
        <Step>
          <StepLabel>Payment</StepLabel>
        </Step>
      </Stepper>
      <Box>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema[activeStep]}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              {isFirstStep && (
                <Shipping
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              )}
              {isSecondStep && (
                <Payment
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              )}
              <Box display="flex" justifyContent="space-evenly" gap="50px">
                {isSecondStep && (
                  <Button
                    fullWidth
                    color="primary"
                    variant="contained"
                    sx={{
                      backgroundColor: shades.primary[200],
                      boxShadow: "none",
                      color: "#fff",
                      borderRadius: 0,
                      padding: "15px 40px",
                    }}
                    onClick={() => setActiveStep(activeStep - 1)}
                  >
                    Back
                  </Button>
                )}
                <Button
                  fullWidth
                  type="submit"
                  color="primary"
                  variant="contained"
                  sx={{
                    backgroundColor: shades.primary[400],
                    boxShadow: "none",
                    color: "#fff",
                    borderRadius: 0,
                    padding: "15px 40px",
                  }}
                  onClick={() => setActiveStep(activeStep - 1)}
                >
                  {isFirstStep ? "Next" : "Place Order"}
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}

export default Checkout;
