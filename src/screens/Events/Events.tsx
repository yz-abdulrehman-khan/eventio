import {useEffect, useState} from 'react'
import Header from '../../components/shared/Header'
import {COLOR, HEADER_HEIGHT, BP} from '../../styles/constants'
import styled from 'styled-components'
import EventListFilters from '../../components/shared/EventListFilters'
import EventList from '../../components/shared/EventList'
import CircleButton from '../../components/shared/CircleButton'
import {Link} from 'react-router-dom'
import Api from '../../api'
import {EventItem} from '../../api/Events/types'
import {
  EventCategory,
  EventListViewMode,
  filterEventsByCategory,
} from '../../utils/helper-functions'

const EventsPage = () => {
  /** There is a bit prop-drilling here, it should be solved via context API & a custom hook */
  /** Due to time constraints I am leaving it as is*/

  const [events, setEvents] = useState<EventItem[]>([])
  const [filteredEvents, setFilteredEvents] = useState<EventItem[]>([])
  const [viewMode, setModeView] = useState<EventListViewMode>('grid')
  const [loading, setLoading] = useState(false)
  const [currentCategory, setCategory] = useState<EventCategory>('all')
  const [action, setActionTriggered] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const events = await Api.events.getAll()
      setEvents(events)
      setFilteredEvents(events)
      setLoading(false)
    }
    fetchEvents()
  }, [action])

  const onFilterChange = (category: EventCategory) => {
    const filteredByDateEvents = filterEventsByCategory(events, category)
    setCategory(category)
    setFilteredEvents(filteredByDateEvents)
  }
  const viewModeClickHandler = (mode: EventListViewMode) => {
    setModeView(mode)
  }

  return (
    <>
      <Header
        backgroundColor={COLOR.GREY_PAGE_BACKGROUND}
        logoColor="dark"
        rightSection="signOut"
      />

      <Container>
        <ContentWrapper>
          <EventListFilters
            onFilterChange={onFilterChange}
            currentCategory={currentCategory}
            viewModeClickHandler={viewModeClickHandler}
            viewMode={viewMode}
          />
          <EventList
            events={filteredEvents}
            loading={loading}
            viewMode={viewMode}
            action={action}
            setActionTriggered={setActionTriggered}
          />
        </ContentWrapper>

        <Link to="/create/event">
          <a>
            <CreateEventButton iconSrc="/icons/plus.svg" backgroundColor={COLOR.GREY_TEXT_DARK} />
          </a>
        </Link>
      </Container>
    </>
  )
}

const Container = styled.div`
  min-height: 100vh;
  background: ${COLOR.GREY_PAGE_BACKGROUND};
  padding: calc(${HEADER_HEIGHT} + 5rem) 6rem 4rem;

  @media (max-width: ${BP.TABLET}) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media (max-width: ${BP.MOBILE}) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`
const ContentWrapper = styled.div`
  max-width: 139rem;
  margin: 0 auto;
`
const CreateEventButton = styled(CircleButton)`
  position: fixed;
  bottom: 6rem;
  right: 6rem;

  @media (max-width: ${BP.MOBILE}) {
    bottom: 3rem;
    right: 3rem;
  }
`

export default (): JSX.Element => <EventsPage />
