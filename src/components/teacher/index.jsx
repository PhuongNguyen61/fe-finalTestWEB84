import { useEffect, useState } from 'react'

import CreateTeacherPage from '../createTeacher'

import ZoomIcon from '../../icons/zoomIcon'
import ReloadIcon from '../../icons/reloadIcon'
import PersonIcon from '../../icons/personIcon'
import PersonCircleIcon from '../../icons/personCircleIcon'
import EyeIcon from '../../icons/eyeIcon'

import './style.css'

const TeacherPage = () => {
    const [createTeacherPage, setCreateTeacherPage] = useState(false)
    const [litsTeacher, setListTeacher] = useState([])
    const queryTeacher = async () => {
        const response = await fetch(`https://be-finaltestweb84.onrender.com/api/v1/teachers`)
        const data = await response.json()
        setListTeacher(data)
        console.log(data);
    }
    useEffect(() => {
        queryTeacher()
    }, []);
    let viewCreateTeacherPage = null
    if (createTeacherPage) {
        viewCreateTeacherPage = <CreateTeacherPage setCreateTeacherPage={setCreateTeacherPage}/>
    }
    return (
        <div className='teacherPage'>
            <div className='top'>
                <div className='filter'>
                    <ZoomIcon/>
                    <input type="text" placeholder='Tìm kiếm thông tin'/>
                </div>
                <div className='act reload' onClick={() => window.location.reload()}>
                    <ReloadIcon/>
                    <h5>Tải lại</h5>
                </div>
                <div className='act created' onClick={() => setCreateTeacherPage(true)}>
                    <PersonIcon/>
                    <h5>Tạo mới</h5>
                </div>
            </div>
            <div className='content'>
                <div className='title'>
                    <p className='titleCode'>Mã</p>
                    <p className='titleTeacherInfo'>Giáo viên</p>
                    <p className='titleDegree'>Trình độ (cao nhất)</p>
                    <p className='titleSubject'>Bộ môn</p>
                    <p className='titlePositions'>TT công tác</p>
                    <p className='titleAddress'>Địa chỉ</p>
                    <p className='titleIsActive'>Trạng thái</p>
                    <p className='titleAct'>Hành động</p>
                </div>
                <div className='listTeacher'>
                    {(litsTeacher.data ?? [])
                    .map((teacher) => {
                        return <div className='teacher'>
                            <p className='code'>{teacher.code}</p>
                            <div className='teacherInfo'>
                                <div className='img'><PersonCircleIcon/></div>
                                <div className='info'>
                                    <h5>{teacher.name}</h5>
                                    <i style={{fontSize:'14px'}}>{teacher.email}</i>
                                    <p>{teacher.phoneNumber}</p>
                                </div>
                            </div>
                            <div className='degree'>
                                <p>Bậc: {teacher.degrees[0].type}</p>
                                <p>Chuyên ngành: {teacher.degrees[0].major}</p>
                            </div>
                            <i style={{fontSize:'14px', color:'#AAAAAA80'}} className='subject'>N/A</i>
                            <div className='positions'>
                                {teacher.positions.map((item) => {
                                    return <p>{item}</p>
                                })}
                            </div>
                            <p className='address'>{teacher.address}</p>
                            {teacher.isActive 
                            ? <p className='isActive true'>Đang hoạt động</p>
                            : <p className='isActive false'>Ngừng hoạt động</p>}
                            <div className='act'>
                                <div>
                                    <EyeIcon/>
                                    <p>Chi tiết</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <div className='bottom'>
                {/* <p className='total'>Tổng: {litsTeacher.data.length}</p> */}
                <div className='pagination'></div>
            </div>
            {viewCreateTeacherPage}
        </div>
    )
}

export default TeacherPage