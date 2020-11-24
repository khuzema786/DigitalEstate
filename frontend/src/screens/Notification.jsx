import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Container, ListGroup, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listSchedule } from '../actions/scheduleActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const Notification = () => {
  const dispatch = useDispatch()

  const scheduleDetails = useSelector((state) => state.scheduleList)
  const { loading, error, schedule } = scheduleDetails
  console.log(schedule)
  useEffect(() => {
    dispatch(listSchedule())
  }, [dispatch])

  function formatAMPM(date) {
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var ampm = hours >= 12 ? 'pm' : 'am'
    hours = hours % 12
    hours = hours ? hours : 12 // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes
    var strTime = hours + ':' + minutes + ' ' + ampm
    return strTime
  }

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Link to="/" className="btn btn-light">
            Go Back
          </Link>
          <Row className="justify-content-center">
            <Card style={{ marginTop: '20px' }}>
              {schedule?.map((sched) => (
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <strong>{sched.bookedBy.name}</strong> with Email-ID{' '}
                    <strong>{sched.bookedBy.email}</strong> Scheduled a tour at
                    property <strong>{sched.property.name}</strong> on{' '}
                    <strong>
                      {new Date(sched.date).getDate()}th{' '}
                      {new Date(sched.date).toLocaleString('default', {
                        month: 'long',
                      })}
                      , {new Date(sched.date).getFullYear()}
                    </strong>{' '}
                    at <strong>{formatAMPM(new Date(sched.date))}</strong>
                  </ListGroup.Item>
                </ListGroup>
              ))}
            </Card>
          </Row>
        </>
      )}
    </Container>
  )
}

export default Notification
