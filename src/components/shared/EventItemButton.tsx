import {FC, useState, useContext} from 'react'
import Button from './Button'
import {getEventButtonConfig} from '../../utils/helper-functions'
import {EventItem} from '../../api/Events/types'
import Api from '../../api'
import {AuthContext} from '../../context/authContext'
// import {useContext, useState} from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { RootState } from '../store/rootReducer'
// import { leaveEvent, joinEvent } from '../store/events/actions'
// import EventItem from '../api/types/EventItem'
import {getAuthToken} from '../../context/local-storage'
import {useEffect} from 'react'
interface Props {
  eventItem: EventItem
  action?: any
  setActionTriggered?: any
}

const EventItemButton: FC<Props> = ({eventItem, action: actionTriggered, setActionTriggered}) => {
  // const dispatch = useDispatch()
  // const user = useSelector((state: RootState) => state.auth.user)
  const {
    state: {id: userID},
  } = useContext(AuthContext)
  const {id: eventID, attendees, capacity} = eventItem
  const {text, color, action} = getEventButtonConfig(eventItem, userID)
  const isPastEvent = new Date() > new Date(eventItem.startsAt)
  const maxAttendiesReached = attendees.length === capacity

  const [loading, setLoading] = useState(false)

  if (!userID) return null

  const handleButtonClick = async () => {
    if (loading) return

    setLoading(true)

    switch (action) {
      case 'leave':
        await Api.events.leave(eventID, getAuthToken())
        setActionTriggered(!actionTriggered)
        break

      case 'join':
        await Api.events.join(eventID, getAuthToken())
        setActionTriggered(!actionTriggered)
        break
    }

    setLoading(false)
  }

  return (
    <Button
      size="small"
      color={color}
      loading={loading}
      onClick={handleButtonClick}
      disabled={isPastEvent || maxAttendiesReached}
    >
      {text}
    </Button>
  )
}

export default EventItemButton
