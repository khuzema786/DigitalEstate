import React, { useEffect } from 'react'
// import ChatBot from 'react-simple-chatbot'

// // all available config props
// const config = {
//   width: '400px',
//   height: '500px',
//   floating: true,
// }

const Bott = () => {
  const tawkTo = require('tawkto-react')

  const tawkToPropertyId = '5fbb9a37920fc91564c9b757'

  useEffect(() => {
    tawkTo(tawkToPropertyId)
  }, [tawkTo])

  return (
    <></>
    //     <div>
    //       {/* <ChatBot
    //         steps={[
    //           {
    //             id: 'intro',
    //             message: 'Do you agree to the Terms and Conditions?',
    //             trigger: 'intro-user',
    //           },
    //           {
    //             id: 'intro-user',
    //             options: [
    //               { value: 'y', label: 'Yes', trigger: 'yes-response' },
    //               { value: 'n', label: 'No', trigger: 'no-response' },
    //             ],
    //           },
    //           {
    //             id: 'yes-response',
    //             message: 'Great!',
    //             end: true,
    //           },
    //           {
    //             id: 'no-response',
    //             message: 'Sorry to hear that.',
    //             end: true,
    //           },
    //         ]}

    //       /> */}
    //       <ChatBot
    //         steps={[
    //           {
    //             id: 'intro',
    //             message: 'Do you agree to the Terms and Conditions?',
    //             trigger: 'intro-user',
    //           },
    //           {
    //             id: 'q-phone',
    //             message: 'Hello. What is your phone number?',
    //             trigger: 'phone',
    //           },
    //           {
    //             id: 'intro-user',
    //             options: [
    //               { value: 'y', label: 'Yes', trigger: 'yes-response' },
    //               { value: 'n', label: 'No', trigger: 'no-response' },
    //             ],
    //           },
    //           {
    //             id: 'phone',
    //             user: true,
    //             validator: (value) => {
    //               if (
    //                 /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value)
    //               ) {
    //                 return true
    //               } else {
    //                 return 'Please enter a valid phone number.'
    //               }
    //             },
    //             end: true,
    //           },
    //           {
    //             id: 'yes-response',
    //             message: 'Great!',
    //             end: true,
    //           },
    //           {
    //             id: 'no-response',
    //             message: 'Sorry to hear that.',
    //             end: true,
    //           },
    //         ]}
    //         {...config}
    //       />
    //     </div>
  )
}

export default Bott
