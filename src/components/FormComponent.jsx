import "./FormComponent.css"

const FormComponent = ()=> {
    return(
        <div className="container">
            <form className="form">
                <h2>แบบฟอร์มลงทะเบียน</h2>
                <div className="form-control">
                    <label>ชื่อผู้ใช้</label>
                    <input type="text"></input>
                    <small>error message</small>
                </div>
                <div className="form-control">
                    <label>อีเมล์</label>
                    <input type="text"></input>
                    <small>error message</small>
                </div>
                <div className="form-control">
                    <label>รหัสผ่าน</label>
                    <input type="text"></input>
                    <small>error message</small>
                </div>
                <div className="form-control">
                    <label>ยืนยันรหัสผ่าน</label>
                    <input type="text"></input>
                    <small>error message</small>
                </div>
                <button type="submit">ลงทะเบียน</button>
            </form>
        </div>
    )
}
export default FormComponent