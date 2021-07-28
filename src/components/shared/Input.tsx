import styled from 'styled-components'
import {COLOR} from '../../styles/constants'
import {FC, InputHTMLAttributes} from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  submitFailed?: boolean
  validationMessage?: string
}

const Input: FC<Props> = ({name, label, submitFailed, validationMessage, ...inputProps}) => (
  <Container redBorder={submitFailed || !!validationMessage}>
    <input
      id={name}
      name={name}
      placeholder={label}
      {...inputProps}
      type={inputProps.type || 'text'}
    />
    <label htmlFor={name} data-content={label}>
      <span>{label}</span>
    </label>
  </Container>
)

const Container = styled.div<{redBorder?: boolean}>`
  margin-bottom: 2rem;
  position: relative;

  > input {
    border: 0;
    border-bottom: 0.1rem solid #ddd;
    transition: 150ms;
    width: 100%;
    padding-top: 2rem;
    padding-bottom: 1rem;
    border-color: ${props => props.redBorder && COLOR.RED};
    font-size: 1.6rem;
  }

  > input:focus {
    border-color: ${COLOR.GREY_TEXT_DARK};
    &-visible {
      outline: none;
    }
  }

  > input::placeholder {
    font-size: 1.4rem;
    color: ${COLOR.GREY_TEXT_LIGHT};
  }

  > label {
    position: absolute;
    left: 0;
    bottom: 1rem;
    opacity: 0;
    transition: 150ms;
    font-size: 1.4rem;
    color: ${COLOR.GREY_TEXT_LIGHT};
  }

  > input:not(:placeholder-shown) + label {
    transform: translateY(-2.5rem);
    opacity: 0.7;
  }
`

export default Input
