import React, { useState } from 'react'

export default function DigitalNoticeBoard() {

  const [userName, setUserName] = useState("");

  const [passWord, setPassword] = useState({
    password:""
  })

  function passwordChange(e) {
    const {name, value} = e.target;
    setPassword(prev => ({
      ...prev,
      [name]:value
    }))
  }
  return (
    <>
    
      <div>This is digital notice board function</div>
      <h1>userName: {userName}</h1>
      <h1>password: {passWord.password}</h1>

    <label>UserName</label>
      <input type='text' onChange={(e) => setUserName(e.target.value)}/>
      <label>Password</label>
      <input type='text' name="password" onChange={passwordChange}/>
    </>
  )
}
