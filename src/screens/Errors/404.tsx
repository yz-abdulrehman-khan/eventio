import Button from '../../components/shared/Button'
import styled from 'styled-components'
import {BP} from '../../styles/constants'

export default (): JSX.Element => (
  <Container>
    <h1>404 Error - page not found</h1>
    <h2>
      Seems like Darth Vader just hits our website and drops it down.
      <br />
      Please press the refresh button and everything should be fine again.
    </h2>

    <Button size="big" color="grey" onClick={() => window.location.reload()}>
      REFRESH
    </Button>
  </Container>
)

const Container = styled.div`
  > button {
    margin-top: 4rem;
  }

  @media (max-width: ${BP.MOBILE}) {
    text-align: left;
  }
`
