import React from 'react'
import EditIcont from '../../assets/icons/edit-user.svg'
import DeleteIcon from '../../assets/icons/delete-user.svg'
import styles from './styles.module.css'


const SearchUserCard = ({ userName="Joseph Villalba",  charge="Lider de grupo" }) => {
    return (
        <>
            <div className='d-flex justify-content-between align-items-centers'>
                <div className='d-flex flex-column' style={{lineHeight:1.2}}>
                    <p className={`${styles.text_user_user} m-0`} style={{fontSize:"13px"}}>{ userName }</p>
                    <p className={`${styles.text_charge} m-0`}>{charge}</p>
                </div>
                <div className='d-flex justify-content-center align-items-center gap-2'>
                    <button className='btn d-flex p-0'>
                        <img src={EditIcont} alt="edit" />
                    </button>
                    <button className='btn d-flex p-0'>
                        <img src={DeleteIcon} alt="delete" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default SearchUserCard; 