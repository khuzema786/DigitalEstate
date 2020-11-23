import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Container, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listSchedule } from '../actions/scheduleActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const Notification = () => {
  const dispatch = useDispatch()

  const scheduleDetails = useSelector((state) => state.scheduleList)
  const { loading, error, schedule } = scheduleDetails

  useEffect(() => {
    dispatch(listSchedule())
    console.log(schedule)
  }, [dispatch])

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
            <ListGroup variant="flush">
              <ListGroup.Item>
                Mark Vasilyev booked a visit "2306 Bagley Ave" on December 21,
                2018 from 10:00 am to 12:00 pm
              </ListGroup.Item>
              <ListGroup.Item>
                Mark Vasilyev booked a visit "2306 Bagley Ave" on December 21,
                2018 from 10:00 am to 12:00 pm
              </ListGroup.Item>
              <ListGroup.Item>
                Mark Vasilyev booked a visit "2306 Bagley Ave" on December 21,
                2018 from 10:00 am to 12:00 pm
              </ListGroup.Item>
              <ListGroup.Item>
                Mark Vasilyev booked a visit "2306 Bagley Ave" on December 21,
                2018 from 10:00 am to 12:00 pm
              </ListGroup.Item>
            </ListGroup>
          </Row>
        </>
      )}
    </Container>
  )
}

export default Notification
