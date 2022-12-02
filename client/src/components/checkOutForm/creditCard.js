import React, { Component } from "react";
import Script from "react-load-script";
import { Box, Button } from "@chakra-ui/react";
// import { useProduct } from "../../contexts/productContext";

// import { publicKey } from "../../../confidential/keys";

let OmiseCard;

export class CreditCard extends Component {
  handleScriptLoad = () => {
    OmiseCard = window.OmiseCard;
    OmiseCard.configure({
      publicKey: "pkey_test_5turkfvw55ji6lozzqq",
      frameLabel: "Watchodile Shop",
      submitLabel: "PAY NOW",
      currency: "thb",
    });
  };

  creditCardConfigure = () => {
    OmiseCard.configure({
      defaultPaymentMethod: "credit_card",
      otherPaymentMethods: [],
    });
    OmiseCard.configureButton("#credit-card");
    OmiseCard.attach();
  };

  omiseCardHandler = () => {
    const { value, createCreditCardCharge } = this.props;
    // const { getTotalPrice } = useProduct();
    OmiseCard.open({
      frameDescription: "Invoice #3847",
      // amount: { getTotalPrice },
      amount: 5000000,
      onCreateTokenSuccess: (token) => {
        createCreditCardCharge(value.email, value.name, value.amount, token);
      },
      onFormClosed: () => {},
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    this.creditCardConfigure();
    this.omiseCardHandler();
  };

  render() {
    const { cart } = this.props;

    return (
      <Box className="own-form">
        <Script
          url="https://cdn.omise.co/omise.js"
          onLoad={this.handleScriptLoad}
        />

        <form>
          <Button
            id="credit-card"
            className="btn"
            type="button"
            disabled={0}
            w="50%"
            h="80
            %"
            bg="ffffff"
            Text="4rem"
            // disabled={cart.amount === 0}
            onClick={this.handleClick}
          >
            Pay with Credit Card
          </Button>
        </form>
      </Box>
    );
  }
}

export default CreditCard;
