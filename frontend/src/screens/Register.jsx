import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Header from '../components/Header'
import { register } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

const Register = ({ history }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [type, setType] = useState('provider')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  useEffect(() => {
    if (userInfo) {
      history.push('/')
    }
  }, [history, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(name, email, password))
    }
  }

  return (
    <>
      <Header />
      <Container className="py-5">
        <FormContainer>
          <h3 className="login-h3">Register</h3>
          {message && <Message variant="danger">{message}</Message>}
          {error && <Message variant="danger">{error}</Message>}
          {loading && <Loader />}
          <Form onSubmit={submitHandler}>
            <Row className="p-3">
              <Form.Check
                className="p-2"
                style={{
                  backgroundColor: '#00B4A2',
                  color: 'white',
                }}
                type="radio"
                label="Provider"
                id="provider"
                name="type"
                value="provider"
                checked={type === 'provider'}
                onChange={(e) => setType(e.target.value)}
              ></Form.Check>
              <Form.Check
                className="p-2 mx-3"
                style={{
                  border: '1px solid #00B4A2',
                  color: '#00B4A2',
                  cursor: 'pointer',
                }}
                type="radio"
                label="Buyer"
                id="buyer"
                name="type"
                value="buyer"
                checked={type === 'buyer'}
                onChange={(e) => setType(e.target.value)}
              ></Form.Check>
            </Row>

            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>phone</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Enter phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></Form.Control>
            </Form.Group>

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

            <Form.Group controlId="password">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button
              style={{ backgroundColor: '#00B4A2', border: 'none' }}
              type="submit"
              variant="primary"
            >
              Register
            </Button>
          </Form>

          <Row className="py-3">
            <Col>
              Already Have an Account? <Link to="/login">Login</Link>
            </Col>
          </Row>
        </FormContainer>
      </Container>
    </>
  )
}
export default Register
