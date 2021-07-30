import Header from '../../components/shared/Header'
import {COLOR, BP, HEADER_HEIGHT} from '../../styles/constants'
import styled from 'styled-components'
import CreateEventForm from './forms/CreateEventForm'

const CreateEventPage = () => (
  <>
    <Header backgroundColor={COLOR.GREY_PAGE_BACKGROUND} logoColor="dark" rightSection="close" />

    <Container>
      <CreateEventForm />
    </Container>
  </>
)

const Container = styled.div`
  min-height: 100vh;
  background: ${COLOR.GREY_PAGE_BACKGROUND};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: calc(${HEADER_HEIGHT} + 5rem) 2rem 2rem;

  @media (max-width: ${BP.MOBILE}) {
    display: block;
    padding-top: calc(${HEADER_HEIGHT} + 5rem);
  }
`

export default (): JSX.Element => <CreateEventPage />
