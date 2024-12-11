// import React from 'react';

// const ButtonPayment = ({ title }) => {
//     return (
//         <button
//             type="submit"
//             className="px-6 py-2 text-gray-100 bg-[#14649b] rounded-md shadow-sm"
//             style={{
//                 transition: 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
//             }}
//             onMouseEnter={(e) => {
//                 e.target.style.transform = 'translateY(-3px)';
//                 e.target.style.backgroundColor = '#0d4a70';
//                 e.target.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
//             }}
//             onMouseLeave={(e) => {
//                 e.target.style.transform = 'translateY(0)';
//                 e.target.style.backgroundColor = '#14649b';
//                 e.target.style.boxShadow = 'none';
//             }}
//         >
//             {title}
//         </button>
//     );
// };

// export default ButtonPayment;


const ButtonPayment = ({ title, disabled, className }) => {
    return (
        <button
            type="submit"
            disabled={disabled}
            className={`${className} ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'text-gray-100 bg-[#14649b]'} text-white font-semibold px-6 py-2 rounded-md shadow-sm transition-all duration-300`}
        >
            {title}
        </button>
    );
};


export default ButtonPayment;

