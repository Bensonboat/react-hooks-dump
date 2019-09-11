import React, { useState, useEffect } from 'react'

import { ShowInfo, Test_1 } from '../ShowInfo/ShowInfo'



import { UserProvider } from '../UserContext/UserContext'


function InputBlock(props) {
    // action or funciton here
    let initData = ''
    if (sessionStorage.getItem('hooks_name_data') !== null) {
        initData = JSON.parse(sessionStorage.getItem('hooks_name_data'))
    } else {
        initData = [{ name: 'Tania', gender: 'Woman', id: 1, status: false }]
    }

    const [name, setName] = useState(initData);

    function StoreNames() {
        let now_name = document.getElementById('name_input').value
        let now_gender = document.getElementById('gender_input')
        let gender_value = now_gender.options[now_gender.selectedIndex].value;

        let status_input = document.getElementById('status_input');
        let status_value = status_input.options[status_input.selectedIndex].value

        if (now_name === '') {
            alert('complete the data');
            return
        }

        setName([...name, {
            name: now_name,
            gender: gender_value,
            id: name.length + 1,
            status: status_value
        }])
        document.getElementById('name_input').value = ''

    }

    useEffect(() => {
        let to_string = JSON.stringify(name)
        sessionStorage.setItem('hooks_name_data', to_string);
    })


    return (
        <div>
            <UserProvider value={name}>
                <input type="text" placeholder='put your name' id='name_input' />
                <select type="text" placeholder='put your gender' id='gender_input'>
                    <option>Man</option>
                    <option>Woman</option>
                </select>
                <select type="text" placeholder='put your gender' id='status_input'>
                    <option>true</option>
                    <option>false</option>
                </select>

                <br/>
                <button onClick={StoreNames}>Confirm</button>
                <button onClick={() => { alert('check console'); console.log(name) }}>Check</button>
                <button onClick={() => alert('still working on it')}>Change State</button>
                <button onClick={() => { sessionStorage.removeItem('hooks_name_data'); alert('All Clear Now'); let initData = [{ name: 'Tania', gender: 'Woman', id: 1, status: false }]; return setName(initData) }}>Clear All Data</button>
                <div>
                    {name.map(item => (
                        <div>{item.name}</div>
                            )
                        )
                    }
                </div>
                <ShowInfo />
                {props.children}
            </UserProvider>
        </div>
    )
}

export default InputBlock