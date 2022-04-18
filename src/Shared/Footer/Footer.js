import React from 'react';

const Footer = () => {
    const date = new Date();
    return (
        <footer className='mt-5 bg-dark p-4'>
            <h3 className='text-center text-white'>Copyright &copy; {date.getFullYear()}, Batch-5. All Rights Reserved.</h3>
        </footer>
    );
};

export default Footer;