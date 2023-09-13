import {
    Input,
    Select,
} from '@chakra-ui/react';
import { useState } from 'react';

const UserForm = ({ value, onSubmit, onClose }) => {
    const [formValue, setFormValue] = useState({...value});

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formValue);
    }

    return (
        <>
        <div className='form_modal'>
            <div className="form_wrapper">
                <div className="form_header">
                    <h2>{'User form'}</h2>
                    <span onClick={() => onClose()}>X</span>
                </div>
                <form onSubmit={handleSubmit} className="form_option_container">
                    <div className="form_options">
                        <Input onChange={(e) => setFormValue({...formValue, name: e.target.value})} type="text" value={formValue?.name} placeholder='name' required />
                    </div>
                    <div className="form_options">
                        <Input onChange={(e) => setFormValue({...formValue, email:e.target.value})} type="email" value={formValue?.email} placeholder='email' required />
                    </div>
                    <div className="form_options">
                        <Select value={formValue?.role || 'Administrator'} onChange={(e) => setFormValue({...formValue, role: e.target.value})} name="" id="" required>
                            <option value="Administrator">Administrator</option>
                            <option value="Editor">Editor</option>
                            <option value="Viewer">Viewer</option>
                        </Select>
                    </div>
                    <div className="form_name">
                        <Input cursor={'pointer'} type={'submit'} value={'Save'} />
                    </div>
                </form>
            </div>
        </div>
        <style jsx>{`
            .form_modal{
                width: 100%;
                height: 100%;
                position: fixed;
                top: 0;
                background-color: rgba(0, 0, 0, .5);
                transition: opacity .2s ease;
                display: flex;
            }

            .form_wrapper{
                background: #fff;
                max-width: 400px;
                max-height: 400px;
                padding: 2rem;
                margin:auto;
            }

            .form_header{
                display: flex;
                justify-content:space-between;
                align-items: center;
                width: 25vw;
                padding-bottom: 2rem;
            }

            .form_header h2{
                margin: 0 auto;
            }

            .form_options{
                margin-bottom: 1rem;
            }

            .form_header span{
                font-weight: 700;
                cursor: pointer;
            }
        `}</style>
        </>
    );
};

export default UserForm;
