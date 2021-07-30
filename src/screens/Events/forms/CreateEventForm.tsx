import {useState} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import Input from '../../../components/shared/Input'
import Button from '../../../components/shared/Button'
import {useFormik} from 'formik'
import Api from '../../../api'
import {CARD_SHADOW, BP} from '../../../styles/constants'
import {createDate} from '../../../utils/helper-functions'
import {getAuthToken} from '../../../context/local-storage'
import validate from './validate'

export type FormValues = typeof initialValues

const initialValues = {
  title: '',
  description: '',
  date: '',
  time: '',
  capacity: '',
}

const CreateEventForm = (): JSX.Element => {
  const [submitting, setSubmitting] = useState(false)
  const history = useHistory()

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: async ({date, time, capacity, ...values}) => {
      setSubmitting(true)
      const startsAt = createDate(date, time).toISOString()
      await Api.events.create({...values, startsAt, capacity: Number(capacity)}, getAuthToken())

      history.push('/events')
    },
  })

  const {values, touched, errors, handleChange, handleBlur, handleSubmit} = formik

  return (
    <Container>
      <h1>Create new event</h1>
      <h2>Enter details below.</h2>

      <form onSubmit={handleSubmit} noValidate>
        <Input
          name="title"
          label="Title"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          validationMessage={touched.title ? errors.title : undefined}
        />
        <Input
          name="description"
          label="Description"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          validationMessage={touched.description ? errors.description : undefined}
        />
        <Input
          name="date"
          type="date"
          label="Date"
          value={values.date}
          onChange={handleChange}
          onBlur={handleBlur}
          validationMessage={touched.date ? errors.date : undefined}
        />
        <Input
          name="time"
          type="time"
          label="Time"
          value={values.time}
          onChange={handleChange}
          onBlur={handleBlur}
          validationMessage={touched.time ? errors.time : undefined}
        />
        <Input
          name="capacity"
          type="number"
          step="5"
          label="Capacity"
          value={values.capacity}
          onChange={handleChange}
          onBlur={handleBlur}
          validationMessage={touched.capacity ? errors.capacity : undefined}
        />

        <SubmitButton
          size="big"
          color="green"
          type="submit"
          loading={submitting}
          disabled={!!Object.keys(errors).length}
        >
          CREATE NEW EVENT
        </SubmitButton>
      </form>
    </Container>
  )
}

const Container = styled.div`
  background: #fff;
  width: 50rem;
  padding: 4rem;
  box-shadow: ${CARD_SHADOW};
  text-align: center;
  position: relative;
  top: -4rem;

  @media (max-width: ${BP.MOBILE}) {
    width: 100%;
  }

  > form {
    margin-top: 3rem;
  }
`
const SubmitButton = styled(Button)`
  margin: 5rem auto 0;
`

export default CreateEventForm
