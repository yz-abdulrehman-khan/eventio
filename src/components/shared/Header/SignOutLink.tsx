import {useContext, useState} from 'react'
import styled from 'styled-components'
import {AuthContext} from '../../../context/authContext'
import {getUserInitials} from '../../../utils/helper-functions'
import {ACTIONS} from '../../../context/constants'
import {BP, COLOR} from '../../../styles/constants'

const SignOutLink = (): JSX.Element => {
  const {state, dispatch} = useContext(AuthContext)
  const {firstName, lastName} = state
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }
  const handleLogout = () => dispatch({type: ACTIONS.LOGOUT})
  const Avatar = () => (
    <AvatarWrapper onClick={handleShowMenu}>{getUserInitials(firstName, lastName)}</AvatarWrapper>
  )
  return (
    <Container>
      <Avatar />
      <Menu>
        <LinkButton onClick={handleShowMenu}>
          <Name>{`${firstName} ${lastName}`}</Name>
          <Icon src="/icons/dropdown.svg" />
        </LinkButton>
        {showMenu && (
          <Dropdown>
            <MenuButton onClick={handleLogout}>Log out</MenuButton>
          </Dropdown>
        )}
      </Menu>
    </Container>
  )
}

const Container = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const AvatarWrapper = styled.div`
  display: flex;
  border-radius: 50%;
  background-color: ${COLOR.GREY_BUTTON};
  width: 5rem;
  height: 5rem;
  justify-content: center;
  align-items: center;
  @media (max-width: ${BP.TABLET}) {
    margin-right: 0.8rem;
  }
  @media (max-width: ${BP.MOBILE}) {
    margin-right: 1rem;
  }
`

export const Menu = styled.div`
  position: relative;
  color: ${COLOR.GREY_TEXT_LIGHT};
  @media (min-width: ${BP.TABLET}) {
    margin-left: 1rem;
  }
`

const LinkButton = styled.div`
  background-color: unset;
  letter-spacing: 1px;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    color: ${COLOR.GREY_TEXT_DARK};
  }

  &:focus {
    outline: 0;
  }
`

const Dropdown = styled.div`
  position: absolute;
  right: 0;
  top: 4rem;
  z-index: 10;
  width: 16rem;
  height: 5rem;
  background: #fff;
  box-shadow: 0 0.3125rem 0.9375rem 0 rgb(0 0 0 / 20%);
  border-radius: 0.875rem;
  @media (max-width: ${BP.TABLET}) {
    top: 3rem;
  }
  @media (max-width: ${BP.MOBILE}) {
    top: 3rem;
    width: 10rem;
    height: 4rem;
  }
`

const MenuButton = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  padding-left: 0.8rem;
  &:hover {
    cursor: pointer;
    color: ${COLOR.GREY_TEXT_DARK};
  }
`

const Name = styled.span`
  display: none;
  @media (min-width: ${BP.TABLET}) {
    display: inline-block;
  }
`

const Icon = styled.img`
  display: none;
  vertical-align: middle;
  @media (min-width: ${BP.TABLET}) {
    display: inline-block;
    margin-left: 0.5rem;
  }
`

export default SignOutLink
