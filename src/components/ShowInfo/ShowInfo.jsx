import React from 'react'

import { UserConsumer } from '../UserContext/UserContext'
import { __values } from 'tslib'

const Test_1 = props => {
    return (
        <div>
        <UserConsumer>
            {props => {
                return (
                    <div>{props.map(value => (
                        <div>{value.name}</div>
                    ))}</div>
                )
            }}
        </UserConsumer>
        </div>
    )
}

const Test_2 = () => {
    return (
        <div>
            <div>test 1 in test_2</div>
            <Test_1></Test_1>
        </div>
    )
}

const Test_3 = props => {
    return (
        <div>
            <div>test 1 and 2 IN test_3</div>
            {/* <div>1111: {props.name}</div> */}
            <Test_1></Test_1>
            <Test_2></Test_2>
        </div>
    )
}


function ShowInfo() {
    return (
        <div>
            <div style={{ color: '#42b883', fontWeight: '700' }}>From Component</div>
            <UserConsumer>
                {props => {
                    return (
                        <div>
                            <div>{props.map(value => {
                                if(value.status === false){
                                    return <div style={{ border: 'solid 1px lightgray', width: '300px', margin: '20px auto', boxShadow: '1px 3px 5px rgba(0,0,0,.3)' }}>
                                    <div style={{ display: 'inline-block'}}>ID: {value.id}</div>
                                    <div style={{ display: 'inline-block', marginLeft: '30px'  }}>Name: {value.name}, </div>
                                    <div style={{ display: 'inline-block', marginLeft: '30px' }}>Gender: {value.gender}</div>
                                    <div style={{ display: 'inline-block', marginLeft: '30px' }}>Status: {value.status}</div>
                                    {/* <hr /> */}
                                    {/* <Test_3></Test_3> */}
                                </div>

                                } else {
                                    return <div style={{ border: 'solid 1px lightgray', width: '300px', margin: '20px auto', boxShadow: '1px 3px 5px rgba(0,0,0,.3)' }}>
                                    <div style={{ display: 'inline-block'}}>ID: {value.id}</div>
                                    <div style={{ display: 'inline-block', marginLeft: '30px'  }}>Name: {value.name}, </div>
                                    <div style={{ display: 'inline-block', marginLeft: '30px' }}>Gender: {value.gender}</div>
                                    <div style={{ display: 'inline-block', marginLeft: '30px' }}>Status: {value.status}</div>
                                    </div>
                                }
                                
                            })}</div>
                        </div>
                    )
                }}
            </UserConsumer>
        </div>
    )
}

export {ShowInfo, Test_1 }