import {FC, useState, useContext} from 'react'
import Button from './Button'
import {getEventButtonConfig} from '../../utils/helper-functions'
import {EventItem} from '../../api/Events/types'
import Api from '../../api'
import {AuthContext} from '../../context/authContext'
import {getAuthToken} from '../../context/local-storage'

interface Props {
  eventItem: EventItem
  action?: boolean
  setActionTriggered?: React.Dispatch<React.SetStateAction<boolean>>
}

const EventItemButton: FC<Props> = ({eventItem, action: actionTriggered, setActionTriggered}) => {
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
