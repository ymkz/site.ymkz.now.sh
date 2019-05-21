import React from 'react'
import * as yup from 'yup'
import { FormikProvider, useFormik, FormikHelpers } from 'formik'
// @ts-ignore : remove this line if types fields fixed
import { createSnackbar } from '@egoist/snackbar'
import SectionContainer from '~/components/abstracts/section-container'
import SectionTitle from '~/components/elements/section-title'
import ContactField from '~/components/elements/contact-field'
import ContactSubmit from '~/components/elements/contact-submit'

type ContactValues = {
  name: string
  email: string
  message: string
}

function Contact() {
  const formikbag = useFormik<ContactValues>({
    initialValues: { name: '', email: '', message: '' },
    validationSchema: yup.object().shape({
      name: yup.string().required('Please enter a input'),
      email: yup
        .string()
        .email('Please enter a valid email address')
        .required('Please enter a input'),
      message: yup.string().required('Please enter a input')
    }),
    onSubmit: async (values: ContactValues, helpers: FormikHelpers<ContactValues>) => {
      const endpoint = 'https://usebasin.com/f/81603850904d.json'
      const request = {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      }
      try {
        await fetch(endpoint, request)
        createSnackbar('Thank you for contact!', { position: 'right', timeout: 4000 })
      } catch (error) {
        createSnackbar('An error occurred when sending.', { position: 'right' })
      }
      helpers.setSubmitting(false)
      helpers.resetForm()
    }
  })

  return (
    <SectionContainer id="contact">
      <SectionTitle>Contact</SectionTitle>
      <FormikProvider value={formikbag}>
        <form onSubmit={formikbag.handleSubmit}>
          <ContactField name="name" type="text" placeholder="John Doe" />
          <ContactField name="email" type="email" placeholder="john.doe@example.com" />
          <ContactField name="message" type="textarea" placeholder="Your message here" />
          <ContactSubmit disabled={formikbag.isSubmitting || !formikbag.isValid} />
        </form>
      </FormikProvider>
    </SectionContainer>
  )
}

export default Contact
