import styled from 'styled-components'
import {Link} from 'react-router-dom'

const GoBackLink = (): JSX.Element => (
  <Link to="/events">
    <a>
      <Container>
        <img src="/icons/arrow-left.svg" alt="Back" />
        <p>Back to events</p>
      </Container>
    </a>
  </Link>
)

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;

  /* Arrow image */
  > img {
    position: relative;
    top: -0.1rem;
    margin-right: 0.8rem;
    height: 1.4rem;
  }

  /* 'Go back' text */
  > p {
    font-weight: 500;
  }
`

export default GoBackLink
