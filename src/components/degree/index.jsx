import TrashIcon from '../../icons/trashIcon'

import './style.css'

const DegreePage = (props) => {
    return (
        <div className='degreePage'>
            <select name="" id="" className='type' value={props.type} onChange={(e) => props.setType(e.target.value)}>
                <option value="Cao đẳng">Cao đẳng</option>
                <option value="Cử nhân">Cử nhân</option>
                <option value="Kỹ sư">Kỹ sư</option>
                <option value="Thạc sĩ<">Thạc sĩ</option>
                <option value="Tiến sĩ">Tiến sĩ</option>
                <option value="Hậu tiến sĩ">Hậu tiến sĩ</option>
                <option value="Giáo sư">Giáo sư</option>
            </select>
            <input className='school' type="text" placeholder='Trường theo học' onChange={(e) => props.setSchool(e.target.value)}/>
            <input className='major' type="text" placeholder='Chuyên ngành' onChange={(e) => props.setMajor(e.target.value)}/>
            <div className='isGraduated '>
                <input type="checkbox" />
                <label htmlFor="">Hoàn thành</label>
            </div>
            <input className='year' type="text" placeholder='Năm/Dự kiến' onChange={(e) => props.setYear(e.target.value)}/>
            <p className='delete' onClick={() => props.setDegree(false)}><TrashIcon/></p>
        </div>
    )
}

export default DegreePage