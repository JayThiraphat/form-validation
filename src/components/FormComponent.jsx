import "./FormComponent.css"
import { useState } from "react"

const FormComponent = ()=> {

    const [username,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [repassword,setRePassword] = useState('')

    const [errorUserName,setErrorUserName] = useState('')
    const [erroremail,setErrorEmail] = useState('')
    const [errorpassword,setErrorPassword] = useState('')
    const [errorrepassword,setErrorRePassword] = useState('')

    const [userNameColor,setUserNameColor] = useState('')
    const [emailColor,setEmailColor] = useState('')
    const [passwordColor,setPasswordColor] = useState('')
    const [repasswordColor,setRePasswordColor] = useState('')

    const validateForm = (e) => {
        e.preventDefault()

        if(username.length>8){
            setErrorUserName('')
            setUserNameColor('green')
        }else{
            setErrorUserName('กรุณาป้อนชื่อผู้ใช้จำนวน 8 ตัวอักษร')
            setUserNameColor('red')
        }

        if(email.includes("@")){
            setErrorEmail('')
            setEmailColor('green')
        }else{
            setErrorEmail("รูปแบบอีเมล์ไม่ถูกต้อง")
            setEmailColor('red')
        }

        if(password.length>8){
            setErrorPassword('')
            setPasswordColor('green')
        }else{
            setErrorPassword('รหัสผ่านต้องมีจำนวน 8 ตัวอักษร')
            setPasswordColor('red')
        }

        if(repassword != " " && repassword === password){
            setErrorRePassword('')
            setRePasswordColor('green')
        }else{
            setErrorRePassword('รหัสผ่านไม่ตรงกัน')
            setRePasswordColor('red')
        }


    }

    return(
        <div className="container">
            <form className="form" onSubmit={validateForm}>
                <h2>แบบฟอร์มลงทะเบียน</h2>
                <div className="form-control">
                    <label>ชื่อผู้ใช้</label>
                    <input type="text" value={username} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:userNameColor}}></input>
                    <small style={{color:userNameColor}}>{errorUserName}</small>
                </div>
                <div className="form-control">
                    <label>อีเมล์</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailColor}}></input>
                    <small style={{color:emailColor}}>{erroremail}</small>
                </div>
                <div className="form-control">
                    <label>รหัสผ่าน</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:passwordColor}}></input>
                    <small style={{color:passwordColor}}>{errorpassword}</small>
                </div>
                <div className="form-control">
                    <label>ยืนยันรหัสผ่าน</label>
                    <input type="password" value={repassword} onChange={(e)=>setRePassword(e.target.value)} style={{borderColor:repasswordColor}}></input>
                    <small style={{color:repasswordColor}}>{errorrepassword}</small>
                </div>
                <button type="submit">ลงทะเบียน</button>
            </form>
        </div>
    )
}
export default FormComponent