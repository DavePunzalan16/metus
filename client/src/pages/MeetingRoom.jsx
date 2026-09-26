import { useParams } from 'react-router-dom'

const MeetingRoom = () => {
  const { roomId } = useParams()
  return (
    <div>MeetingRoom: {roomId}</div>
  )
}

export default MeetingRoom