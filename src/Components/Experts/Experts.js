import React from 'react';
import { Row } from 'react-bootstrap';
import mechanic1 from './../../images/mechanic/mechanic-1.jpg';
import mechanic2 from './../../images/mechanic/mechanic-2.jpg';
import mechanic3 from './../../images/mechanic/mechanic-3.jpg';
import mechanic4 from './../../images/mechanic/mechanic-4.jpg';
import mechanic5 from './../../images/mechanic/mechanic-5.jpg';
import Expert from './Expert';

const experts = [
    {id: 1, name: "Will Smith", img: mechanic1},
    {id: 2, name: "Will Smith", img: mechanic2},
    {id: 3, name: "Will Smith", img: mechanic3},
    {id: 4, name: "Will Smith", img: mechanic4},
    {id: 5, name: "Will Smith", img: mechanic5},
]

const Experts = () => {
    

    return (
        <Row>
            <h1 className='text-center m-5 text-primary'>Our Experts</h1>
            
            {
                experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
            }
        </Row>
    );
};

export default Experts;