import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, Container, Image } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'
import { upload } from '../actions/uploadActions'
import { UPLOAD_RESET } from '../constants/uploadConstants'
import ProfileSteps from '../components/ProfileSteps'

const Profile = ({ history }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [profilePic, setProfilePic] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [message, setMessage] = useState(null)
  const [updateSuccess, setUpdateSuccess] = useState(false)

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const uploadState = useSelector((state) => state.upload)
  const { uploading, uploadSuccess, path, message: uploadMessage } = uploadState

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success, error: updateError } = userUpdateProfile

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      if (success) {
        setUpdateSuccess(true)
      }
      if (!user || !user.name || success) {
        dispatch({ type: UPLOAD_RESET })
        dispatch({ type: USER_UPDATE_PROFILE_RESET })
        dispatch(getUserDetails('profile'))
      } else {
        setName(user.name)
        setEmail(user.email)
        setPhone(user.phone)
        setProfilePic(user.profilePic)
      }
      if (uploadSuccess) {
        setProfilePic(path)
      }
    }
  }, [
    dispatch,
    history,
    userInfo,
    user,
    success,
    uploadSuccess,
    path,
    uploadMessage,
  ])

  const uploadFileHandler = async (e) => {
    const files = e.target.files
    const formData = new FormData()

    dispatch(upload(files, formData))
  }

  const submitHandler = (e) => {
    e.preventDefault()

    if (password !== confirmPassword && newPassword !== confirmNewPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(
        updateUserProfile({
          name,
          email,
          phone,
          profilePic: profilePic.toString(),
          password: newPassword,
          oldPassword: password,
        }),
      )
    }
  }

  return (
    <>
      {message && <Message>{message}</Message>}
      {uploadMessage && <Message>{uploadMessage}</Message>}
      {updateError && <Message variant="danger">{updateError}</Message>}
      {updateSuccess && <Message variant="success">Profile Updated</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Container className="py-5">
            <ProfileSteps step3 />
            <Row className="justify-content-center">
              <Col md={4}>
                <Image src={profilePic} className="my-5" fluid thumbnail />
                <Form.Group controlId="image">
                  <Form.Label>
                    {message !== '' ? (
                      <strong>{message}</strong>
                    ) : (
                      'Image (supports jpg/jpeg/png file formats)'
                    )}
                  </Form.Label>
                  <Form.File
                    id="image-file"
                    label="Choose File"
                    custom
                    onChange={uploadFileHandler}
                    multiple
                  ></Form.File>
                  {uploading && <Loader />}
                </Form.Group>
              </Col>
              <Col md={8}>
                <FormContainer>
                  <h3 className="login-h3">My Profile</h3>
                  {message && <Message variant="danger">{message}</Message>}
                  {error && <Message variant="danger">{error}</Message>}
                  {loading && <Loader />}
                  <Form onSubmit={submitHandler}>
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
                      <Form.Label>Old password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="confirmPassword">
                      <Form.Label>Confirm old Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="newPassword">
                      <Form.Label>New password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="confirmNewPassword">
                      <Form.Label>Confirm new Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter confirm password"
                        value={confirmNewPassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                      ></Form.Control>
                    </Form.Group>

                    <Button
                      style={{ backgroundColor: '#00B4A2', border: 'none' }}
                      type="submit"
                      variant="primary"
                    >
                      Update Profile
                    </Button>
                  </Form>
                </FormContainer>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  )
}

export default Profile
