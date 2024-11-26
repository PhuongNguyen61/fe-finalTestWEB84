import { useEffect, useState } from 'react'

import DegreePage from '../degree'

import Img from '/public/img.png'

import './style.css'

const CreateTeacherPage = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
    const [identity, setIdentity] = useState('')
    const [dob, setDob] = useState('')
    const [des, setDes] = useState('')
    const [type, setType] = useState('')
    const [school, setSchool] = useState('')
    const [major, setMajor] = useState('')
    const [year, setYear] = useState('')
    console.log(name, email, phoneNumber, address, identity, dob, des, type, school, major, year);
    

    const [listPosition, setListPosition] = useState([])
    const queryPosition = async () => {
        const response = await fetch(`https://be-finaltestweb84.onrender.com/api/v1/teacher-positions`)
        const data = await response.json()
        setListPosition(data)
        console.log(data);
    }
    useEffect(() => {
        queryPosition()
    }, []);

    const [degree, setDegree] = useState(false)
    let viewDegree = null
    if (degree) {
        viewDegree = <DegreePage setDegree={setDegree} setType={setType} setSchool={setSchool} setMajor={setMajor} setYear={setYear} type={type}/>
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!name || !email || !phoneNumber || !address || !identity || !dob || !des|| !type|| !school || !major || !year) {
            alert('Vui lòng điền đầy đủ thông tin!')
            return
        }
        fetch('https://be-finaltestweb84.onrender.com/api/v1/teachers', {
            body: JSON.stringify({
                name,
                email,
                phoneNumber,
                address,
                identity,
                dob,
                des,
                degrees: {
                    type,
                    school,
                    major,
                    year,
                    isGraduated: true
                }
            }),
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            }
        })
        alert('Lưu thành công!')
    }
    return (
        <div className='createTeacherPage'>
            <div className='content'>
                <div className='back'>
                    <h4 onClick={() => props.setCreateTeacherPage(false)}>X</h4>
                    <p>Tạo thông tin giáo viên</p>
                </div>
                <form className='formCreateTeacher' onSubmit={handleSubmit}>
                    <div className='grPersonalInfo'>
                        <img src={Img} alt="" />
                        <div className='personalInfo'>
                            <h5>Thông tin cá nhân</h5>
                            <div className='info'>
                                <div className='row'>
                                    <label htmlFor="">*Họ và tên</label>
                                    <input type="text" placeholder='VD: Nguyễn Văn A' onChange={(e) => setName(e.target.value)}/>
                                </div>
                                <div className='row'>
                                    <label htmlFor="">*Ngày sinh</label>
                                    <input type="date" onChange={(e) => setDob(e.target.value)}/>
                                </div>
                                <div className='row'>
                                    <label htmlFor="">*Số điện thoại</label>
                                    <input type="text" placeholder='Nhập số điện thoại' onChange={(e) => setPhoneNumber(e.target.value)}/>
                                </div>
                                <div className='row'>
                                    <label htmlFor="">*Email</label>
                                    <input type="text" placeholder='example@school.edu.nv' onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div className='row'>
                                    <label htmlFor="">*Số CCCD</label>
                                    <input type="text" placeholder='Nhập số CCCD' onChange={(e) => setIdentity(e.target.value)}/>
                                </div>
                                <div className='row'>
                                    <label htmlFor="">*Địa chỉ</label>
                                    <input type="text" placeholder='Địa chỉ thường trú' onChange={(e) => setAddress(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grWorkInfo'>
                        <h5>Thông tin công tác</h5>
                        <select name="" id="" value={des} onChange={(e) => setDes(e.target.value)}>
                            {(listPosition.data ?? []).map((position) => {
                                return <option value={position.des}>{position.code} - {position.name}</option>
                            })}
                        </select>
                    </div>
                    <div className='grDegree'>
                        <h5>Học vị</h5>
                        <button type='button' onClick={() => setDegree(true)}>Thêm</button>
                        <div className='title'>
                            <p className='titleType'>Bậc</p>
                            <p className='titleSchool'>Trường</p>
                            <p className='titleMajor'>Chuyên ngành</p>
                            <p className='titleIsGraduated'>Trạng thái</p>
                            <p className='titleYear'>Tốt nghiệp</p>
                            <p className='titleDelete'></p>
                        </div>
                        {viewDegree}
                    </div>
                    <div className='buttonSubmit'>
                        <button type='submit'>Lưu</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateTeacherPage