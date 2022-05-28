import React,{useState} from 'react'

type Props = {}
// type steps = "Shipping" | "Details" | "Payment";
enum CheckoutSteps  {shipping ="Shipping" ,details= "Details" ,payment= "Payment"};
const Checkout = (props: Props) => {
  const [step, setStep] = useState<CheckoutSteps>(CheckoutSteps.details);
  return (
    <div><h1>Checkout</h1>
      {step === CheckoutSteps.details && <>
        <h2>details</h2>
      <button type="button" onClick={()=>setStep(CheckoutSteps.shipping)}>Next</button></>}
      {step === CheckoutSteps.shipping && <>
        <h2>details</h2>
      <button type="button" onClick={()=>setStep(CheckoutSteps.payment)}>Next</button></>}
      {step === CheckoutSteps.payment && <>
        <h2>details</h2>
      <button type="button" onClick={()=>setStep(CheckoutSteps.details)}>Next</button></>}
    </div>
  )
}

export default Checkout