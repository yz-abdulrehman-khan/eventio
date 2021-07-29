import styled, {css} from 'styled-components'
import EventItemRow from './EventItemRow'
// import { useSelector } from 'react-redux'
// import { RootState } from '../store/rootReducer'
import EventItemCard from './EventItemCard'
// import EventListViewMode from '../types/EventListViewMode'
// import filterEventsByCategory from '../utils/filterEventsByCategory'
import {BP} from '../../styles/constants'
import {EventListViewMode} from '../../utils/helper-functions'

const EventList = ({events, loading, viewMode, action, setActionTriggered}): JSX.Element => {
  // const {itemsLoading, items, category, viewMode} = useSelector((state: RootState) => state.events)
  // const viewMode = 'grid'
  return (
    <Container
      // viewMode={viewMode}
      viewMode={viewMode}
    >
      {loading ? (
        <img src="/icons/spinner-dark.svg" alt="Loading ..." />
      ) : (
        events.map(eventItem =>
          viewMode === 'grid' ? (
            <EventItemCard
              key={eventItem.id}
              eventItem={eventItem}
              action={action}
              setActionTriggered={setActionTriggered}
            />
          ) : (
            <EventItemRow
              key={eventItem.id}
              eventItem={eventItem}
              action={action}
              setActionTriggered={setActionTriggered}
            />
          ),
        )
      )}
    </Container>
  )
}

const Container = styled.div<{
  viewMode: EventListViewMode
}>`
  margin-top: 4rem;

  /* Spinner */
  > img {
    height: 6rem;
    display: block;
    margin: 10rem auto;
  }

  /* Grid view */
  ${props =>
    props.viewMode === 'grid' &&
    css`
      display: flex;
      flex-wrap: wrap;
      margin-right: -2rem;

      @media (max-width: ${BP.MOBILE}) {
        margin-right: 0;
      }
    `}
`

export default EventList
