import {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import Input from '../../components/shared/Input'
import Button from '../../components/shared/Button'
import {useFormik} from 'formik'
import {COLOR, BP} from '../../styles/constants'
import validate from './forms/validate'
import SignUpLink from '../../components/shared/Header/SignUpLink'
import {AuthContext} from '../../context/authContext'
import {ACTIONS} from '../../context/constants'
import Api from '../../api'

export type FormValues = typeof initialValues

const initialValues = {
  email: '',
  password: '',
}

const SignInForm = (): JSX.Element => {
  const history = useHistory()
  const {dispatch} = useContext(AuthContext)
  const [loginError, setLoginError] = useState(false)
  const [loading, setLoading] = useState(false)

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: async values => {
      const {email, password} = values
      try {
        setLoginError(false)
        setLoading(true)

        const loginResponse = await Api.auth.signIn(email, password)
        dispatch({type: ACTIONS.LOGIN, user: loginResponse})

        history.push('/events')
      } catch (err) {
        setLoginError(true)
        setLoading(false)
      }
    },
  })

  // const handleFocus = () => {}

  const {values, touched, errors, handleChange, handleBlur, handleSubmit} = formik
  return (
    <Container>
      <h1>Sign in to Eventio.</h1>

      {loginError ? (
        <h2 style={{color: COLOR.RED}}>Oops! That email and password combination is not valid.</h2>
      ) : (
        <h2>Enter your details below.</h2>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <Input
          name="email"
          value={values.email}
          onChange={handleChange}
          // onFocus={handleFocus}
          onBlur={handleBlur}
          label="Email"
          type="email"
          validationMessage={touched.email ? errors.email : undefined}
          submitFailed={loginError}
        />
        <Input
          name="password"
          value={values.password}
          onChange={handleChange}
          // onFocus={handleFocus}
          onBlur={handleBlur}
          label="Password"
          type="password"
          validationMessage={touched.password ? errors.password : undefined}
          submitFailed={loginError}
        />

        <StyledSignUpLink />

        <SubmitButton
          size="big"
          color="green"
          type="submit"
          // loading={loading || !!auth.user}
          loading={loading}
          disabled={!!Object.keys(errors).length}
        >
          SIGN IN
        </SubmitButton>
      </form>
    </Container>
  )
}

const Container = styled.div`
  width: 50rem;

  @media (max-width: ${BP.MOBILE}) {
    width: 100%;
  }

  > form {
    margin-top: 4rem;
  }
`
const SubmitButton = styled(Button)`
  margin: 4rem 0;

  @media (max-width: ${BP.MOBILE}) {
    margin-left: auto;
    margin-right: auto;
  }
`
const StyledSignUpLink = styled(SignUpLink)`
  display: none;

  @media (max-width: ${BP.MOBILE}) {
    display: flex;
    justify-content: center;
    margin-top: 4rem;
  }
`

export default SignInForm
