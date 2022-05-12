import React, { useState } from 'react';
import Dropdown from "./Dropdown";

const DriverForm = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [checkbox, setCheckbox] = useState(false)
    const [emailStat, setEmailStat] = useState(false);
    const [phoneStat, setPhoneStat] = useState(false);
    const [checkboxStat, setCheckboxStat] = useState(false);
    const [emailError, setEmailError] = useState('Email is required');
    const [phoneError, setPhoneError] = useState('Phone is required');
    const [selectedCity, setSelectedCity] = useState('Tallinn');
    const [selectedCode, setSelectedCode] = useState('+372');

    const phoneCode: Array<string> = [
        '+372',
        '+373',
        '+374',
        '+375',
    ];

    const  cityItems: Array<string> = [
        'Kuressaare',
        'Narva',
        'Pärnu',
        'Põltsamaa',
        'Rakvere',
        'Sillamäe',
        'Tallinn',
    ];

    const emailOnChange = (e: any) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        setEmail(e.target.value);

        if (!regex.test(e.target.value)) {
            setEmailError('Incorrect email')
        } else {
            setEmailError('');
        }

        if (e.target.value === '') {
            setEmailError('');
        }
    }

    const phoneOnChange = (e: any) => {
        const regex = /^[0-9]+$/;

        setPhone(e.target.value);

        if (!regex.test(e.target.value)) {
            setPhoneError('Only numbers allowed');
        } else {
            setPhoneError('');
        }
    }
    
    const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case 'email':
              setEmailStat(true)
              break
            case 'phone':
              setPhoneStat(true)
              break
        }
    }

    const checkboxHandler = (e: boolean | ((prevState: boolean) => boolean)) => {
        setCheckbox(e);

        if (!checkbox && checkboxStat) {
            setCheckboxStat(false);
        }
    }

    const validForm = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (email === '') {
            setEmailStat(true);
        }

        if (phone === '') {
            setPhoneStat(true);
        }

        if (!checkbox) {
            setCheckboxStat(true);
        }
    }

    return (
        <div
            className='container-fluid bg-white p-4'
            style={{borderRadius: "20px"}}
        >
            <div className="row mb-4">
                <div className="col">
                    <h5 className='mb-0'><strong>Become a Bolt driver</strong></h5>
                    <small className='pb-4'>
                        <span className='text-muted'>If you have multiply cars or </span>
                        <a href='/' className='link'>drivers sign up as fleet owner.</a>
                    </small>
                </div>
            </div>
            <form onSubmit={validForm}>
                <div className='form-row mb-4'>
                    <div className='col'>
                        <label htmlFor="emailInput"><strong>Email</strong></label>
                        <input
                            type='text'
                            name='email'
                            className={`form-control ${(emailStat && emailError) ? 'error' : ''}`}
                            id='emailInput'
                            value={email}
                            placeholder='Email'
                            onChange={e => emailOnChange(e)}
                            onBlur={e => blurHandler(e)}
                        />
                        <small className={
                            (emailStat && emailError) ? 'form-text text-danger' : 'form-text text-muted'
                        }
                        >
                            {(emailStat && emailError) ?
                                emailError :
                                <span className='email-hint'>This will be your username</span>
                            }
                        </small>
                    </div>
                </div>
                <div className='form-row mb-4'>
                    <div className='col'>
                        <label htmlFor='phoneNumberInput'><strong>Phone number</strong></label>
                        <div className='row'>
                            <div className='col-4 pr-2'>
                                <Dropdown
                                    selected={selectedCode}
                                    setSelected={setSelectedCode}
                                    options={phoneCode}
                                    className={(phoneStat && phoneError) ? 'error' : ''}
                                />
                            </div>
                            <div className='col-8 pl-0'>
                                <input
                                    type='text'
                                    name='phone'
                                    className={`form-control ${(phoneStat && phoneError) ? 'error' : ''}`}
                                    id='phoneNumberInput'
                                    value={phone}
                                    placeholder='Phone'
                                    onChange={e => phoneOnChange(e)}
                                    onBlur={e => blurHandler(e)}
                                />
                            </div>
                            <small className={`col ${(phoneStat && phoneError) ? 'form-text text-danger' : ''}`}
                            >
                                {(phoneStat && phoneError)}
                            </small>
                        </div>
                    </div>
                </div>
                <div className='form-row mb-4'>
                    <div className='col'>
                        <label><strong>City</strong></label>
                        <Dropdown
                            selected={selectedCity}
                            setSelected={setSelectedCity}
                            options={cityItems}
                        />
                    </div>
                </div>
                <div className="form-group mb-4">
                    <div className={`form-check ${checkboxStat ? 'error' : ''}`}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="termsCheck"
                            onChange={e => checkboxHandler(e.target.checked)}
                        />
                            <label
                                className="form-check-label ml-2"
                                style={{fontSize: 0.8 + 'rem'}}
                                htmlFor="termsCheck"
                            >
                                I agree to Bolt's
                                <a href='/' className='link px-1'>Terms of Service</a>
                                and
                                <a href='/' className='link px-1'>Privacy Policy</a>
                            </label>
                    </div>
                </div>
                <button
                    className="btn text-uppercase rounded-pill text-white w-100"
                    type="submit"
                >
                    Sign up as a driver
                </button>
            </form>
        </div>
    );
};

export default DriverForm;