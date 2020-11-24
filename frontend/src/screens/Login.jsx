import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import Message from '../components/Message'
import Loader from '../components/Loader'
import ProfileSteps from '../components/ProfileSteps'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'

const Login = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const dispatch = useDispatch()

  useEffect(() => {
    if (userInfo) {
      history.push('/')
    }
  }, [history, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <>
      <Container className="py-5">
        <FormContainer>
          <ProfileSteps step1 />
          <h3 className="login-h3">SIGN IN</h3>
          {error && <Message variant="danger">{error}</Message>}
          {loading && <Loader />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button
              style={{ backgroundColor: '#00B4A2', border: 'none' }}
              type="submit"
              variant="primary"
            >
              Sign In
            </Button>
          </Form>

          <Row className="py-3">
            <Col>
              New To Digital Estate? <Link to="/register">Register</Link>
            </Col>
          </Row>
        </FormContainer>
      </Container>
    </>
  )
}

export default Login
