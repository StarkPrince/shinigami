import React from 'react'
import axios from 'axios'

function index()
{
    for (let i = 1; i < 15; i++) {
        axios.request({
            method: 'POST',
            url: 'https://pincode.p.rapidapi.com/',
            headers: {
                'content-type': 'application/json',
                'x-rapidapi-key': '4d2ae4724bmsh8e03e66f7e38f7cp10959bjsnc6c887719d79',
                'x-rapidapi-host': 'pincode.p.rapidapi.com'
            },
            data: { searchBy: 'address', state_id: i, value: 'Road' }
        }).then(function (response)
        {
            const res = response.data[0];
            console.log(res.office, res.circle, res.pin, res.state);
        }).catch(function (error)
        {
            console.error(error);
        });
    }

    return (
        <div>
            Testing
        </div>
    )
}

export default index
