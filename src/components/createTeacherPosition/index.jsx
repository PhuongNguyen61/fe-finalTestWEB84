import { useState } from 'react';

import './style.css'

const CreateTeacherPositionPage = (props) => {
    const [isActive, setIsActive] = useState()
    const [code, setCode] = useState('')
    const [name, setName] = useState('')
    const [des, setDes] = useState('')
    
    const [isSelected1, setIsSelected1] = useState(false);
    const [isSelected2, setIsSelected2] = useState(false);
    const handleClick = (index) => {
        if (index === 1) {
            setIsSelected1(!isSelected1)
            setIsSelected2(false)
        } else {
            setIsSelected2(!isSelected2)
            setIsSelected1(false)
        }
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!code || !name || !des) {
            alert('Vui lòng điền đầy đủ thông tin!')
            return
        }
        fetch('https://be-finaltestweb84.onrender.com/api/v1/teacher-positions', {
            body: JSON.stringify({isActive, code, name, des}),
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            }
        })
        alert('Lưu thành công!')
    }
    return (
        <div className="creadeTeacherPositionPage">
            <div className='content'>
                <div className='back'>
                    <h4 onClick={() => props.setCreateTeacherPositionPage(false)}>X</h4>
                    <p>Vị trí công tác</p>
                </div>
                <form className='formCreateTeacherPosition' onSubmit={handleSubmit}>
                    <div className='row'>
                        <label htmlFor="">*Mã</label>
                        <input name="code" type="text" onChange={(e) => setCode(e.target.value)}/>
                    </div>
                    <div className='row'>
                        <label htmlFor="">*Tên</label>
                        <input name="name" type="text" onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className='row'>
                        <label htmlFor="">*Mô tả</label>
                        <input name="des" type="text" onChange={(e) => setDes(e.target.value)}/>
                    </div>
                    <div className='row'>
                        <p>*Trạng thái</p>
                        <div className='listIsActive'>
                            <button name="isActive" type='button' onClick={() => {
                                setIsActive(true)
                                handleClick(1)}} style={{ backgroundColor: isSelected1 ? '#4f46e6' : '', color: isSelected1 ? '#fff' : ''}}>Hoạt động</button>
                            <button name="isActive" type='button' onClick={() => {
                                setIsActive(false)
                                handleClick(2)}} style={{ backgroundColor: isSelected2 ? '#4f46e6' : '', color: isSelected2 ? '#fff' : ''}}>Ngừng</button>
                        </div>
                    </div>
                    <div className='rowButton'>
                        <button type='submit'>Lưu</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateTeacherPositionPage