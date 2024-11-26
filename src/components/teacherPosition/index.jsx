import { useEffect, useState } from 'react'

import CreateTeacherPositionPage from '../createTeacherPosition'

import PlusIcon from '../../icons/plusIcon'
import ReloadIcon from '../../icons/reloadIcon'
import SettingIcon from '../../icons/settingIcon'

import './style.css'

const TeacherPositionPage = () => {
    const [createTeacherPositionPage, setCreateTeacherPositionPage] = useState(false)
    const [litsPosition, setListPosition] = useState([])
    const queryTeacherPosition = async () => {
        const response = await fetch('https://be-finaltestweb84.onrender.com/api/v1/teacher-positions')
        const data = await response.json()
        setListPosition(data)
        console.log(data)
    }
    useEffect(() => {
        queryTeacherPosition()
    }, [])
    let viewCreateTeacherPositionPage = null
    if (createTeacherPositionPage) {
        viewCreateTeacherPositionPage = <CreateTeacherPositionPage setCreateTeacherPositionPage={setCreateTeacherPositionPage}/>
    }
    return (
        <div className='teacherPositionPage'>
            <div className='top'>
                <div className='act created' onClick={() => setCreateTeacherPositionPage(true)}>
                    <PlusIcon/>
                    <h5>Tạo</h5>
                </div>
                <div className='act reload' onClick={() => window.location.reload()}>
                    <ReloadIcon/>
                    <h5>Tải lại</h5>
                </div>
            </div>
            <div className='content'>
                <div className='title'>
                    <p className='titleSTT'>STT</p>
                    <p className='titleCode'>Mã</p>
                    <p className='titleName'>Tên</p>
                    <p className='titleIsActive'>Trạng thái</p>
                    <p className='titleDes'>Mô tả</p>
                    <p className='titleSetting'></p>
                </div>
                <div className='listPosition'>
                    {(litsPosition.data ?? []).map((position, index) => {
                        return <div className='position'>
                            <p className='STT'>{index+1}</p>
                            <p className='code'>{position.code}</p>
                            <p className='name'>{position.name}</p>
                            {position.isActive 
                            ? <p className='isActive true'>Hoạt động</p>
                            : <p className='isActive false'>Ngừng</p>}
                            <p className='des'>{position.des}</p>
                            <p className='setting'><SettingIcon/></p>
                        </div>
                    })}
                </div>
            </div>
            {viewCreateTeacherPositionPage}
        </div>
    )
}

export default TeacherPositionPage