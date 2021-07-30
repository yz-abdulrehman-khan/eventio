import {FC} from 'react'
import styled, {css} from 'styled-components'
import EventItemRow from './EventItemRow'
import EventItemCard from './EventItemCard'
import {BP} from '../../styles/constants'
import {EventListViewMode} from '../../utils/helper-functions'
import Loader from '../shared/Loader'
import {EventItem} from '../../api/Events/types'

interface Props {
  events: EventItem[]
  loading: boolean
  viewMode: EventListViewMode
  action?: boolean
  setActionTriggered?: React.Dispatch<React.SetStateAction<boolean>>
}

const EventList: FC<Props> = ({
  events,
  loading,
  viewMode,
  action,
  setActionTriggered,
}): JSX.Element => {
  return (
    <Container viewMode={viewMode}>
      {loading ? (
        <Loader />
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
