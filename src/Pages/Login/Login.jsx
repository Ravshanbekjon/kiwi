import React from 'react'
import "./Login.scss"
import LoginImg from "../../Assets/Img/login-img.png"
import { Button, Form, InputGroup } from 'react-bootstrap'
import { useRef } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = JSON.stringify({
      email: emailRef.current.value,
      password: passwordRef.current.value
    })

    if (emailRef.current.value.length > 0 && passwordRef.current.value.length > 0) {
      fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: data
      })
        .then(res => res.json())
        .then(data => {
          if(data.token) {
            setToken(data);
            navigate('/')
          } else {
            alert(data.error)
          }
        })
        .catch(err => console.log(err))

        emailRef.current.value = "";
        passwordRef.current.value = "";
      return;
    }
    alert("Barcha fildlarni to'ldirish shart !!")

  }

  return (
    <div className="login container">
      <h3>Bu Login pagemizni APIsi <a href="https://reqres.in" target='blank'>reqres.in</a> saytidan olingan</h3>
      <div className="pages">
        <form onSubmit={handleSubmit}>
          <Form.Label htmlFor="basic-url1">Email <code> eve.holt@reqres.in</code></Form.Label>
          <InputGroup className="mb-3">
            <input ref={emailRef} type="email" className='form-control' id='basic-url1' placeholder='Emailingizni kiriting' />
          </InputGroup>

          <Form.Label htmlFor="basic-url2">Parol <code> cityslicka</code></Form.Label>
          <InputGroup className="mb-3">
            <input ref={passwordRef} placeholder='Parolingizni kiriting' type="password" className='form-control' id='basic-url2' />
          </InputGroup>

          <div className="d-grid gap-2">
            <button type='submit' className='btn btn-primary'>Log In</button>
          </div>
        </form>
      </div>
      <div className="pages">
        <img src={LoginImg} />
      </div>
    </div>
  )
}

export default Login