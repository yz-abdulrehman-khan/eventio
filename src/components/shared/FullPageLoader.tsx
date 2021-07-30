import Loader from './Loader'
import styled from 'styled-components'

const PageLoader = (): JSX.Element => {
  return (
    <Wrapper>
      <Loader />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default PageLoader
