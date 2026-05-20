import React from 'react'
import LoginForms from '../Components/Forms/LoginForms'
import { Helmet } from 'react-helmet'

export default function Login() {
  return (
    <>
    <Helmet>
      <title>ShipifyNepal - Login</title>
      <meta
        name="description"
        content="Log in to your ShipifyNepal account to manage your orders, track shipments, and access exclusive features for international shopping and shipping to Nepal."
      />
    </Helmet>
      <div>
        <LoginForms/>
      </div>
    </>
  )
}
