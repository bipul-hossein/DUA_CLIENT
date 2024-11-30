import React from 'react';

const ButtonPayment = ({ title }) => {
    return (
        <button
            type="submit"
            className="px-6 py-2 text-white bg-[#14649b] rounded-md shadow-sm"
            style={{
                transition: 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.backgroundColor = '#0d4a70';
                e.target.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.backgroundColor = '#14649b';
                e.target.style.boxShadow = 'none';
            }}
        >
            {title}
        </button>
    );
};

export default ButtonPayment;