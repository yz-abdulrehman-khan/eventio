import {FormValues} from '../Login'

const validate = (values: FormValues): Record<string, string> => {
  const errors: Partial<FormValues> = {}

  if (!values.email) {
    errors.email = 'Email is required'
  }
  if (!/.+@.+\..+/.test(values.email)) {
    errors.email = 'Please provide a valid email'
  }
  if (!values.password) {
    errors.password = 'Password is required'
  }

  return errors
}

export default validate
