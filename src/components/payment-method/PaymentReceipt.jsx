import React from 'react';
import { jsPDF } from 'jspdf';

const PaymentReceipt = () => {
    const generatePDF = () => {
        const doc = new jsPDF({
            orientation: 'p', // Portrait orientation
            unit: 'pt', // Points as units
            format: 'a4', // A4 size
        });

        doc.html(document.getElementById('receipt'), {
            callback: function (doc) {
                // Add watermark text
                doc.setFontSize(60);
                doc.setTextColor(150, 150, 150);
                doc.text('PAID', doc.internal.pageSize.getWidth() / 2, doc.internal.pageSize.getHeight() / 2, {
                    align: 'center',
                    angle: 45,
                    opacity: 0.3
                });

                // Save the PDF
                doc.save('receipt.pdf');
            },
            x: 10,
            y: 10,
            html2canvas: {
                scale: 1 // Adjusted scale for better fit
            }
        });
    };

    return (
        <div className="flex justify-center items-center md:min-h-screen bg-gray-100">
            <div className="max-w-full p-4 bg-white shadow-md rounded">
                <div className="receipt-container w-full p-6 bg-white shadow-md rounded" id="receipt" style={{ fontSize: '12px' }}>
                    <div className="receipt-header text-center mb-6">
                        <h1 className="text-3xl font-bold text-gray-600" style={{ fontSize: '24px' }}>Payment Receipt</h1>
                        <p style={{ fontSize: '14px', color: '#555' }}>This receipt has been generated electronically.</p>
                    </div>
                    <div className="receipt-section mb-6">
                        <h2 className="text-lg font-semibold text-gray-600" style={{ fontSize: '18px' }}>Bill Information</h2>
                        <div className="receipt-item flex justify-between mb-3 text-gray-600" style={{ fontSize: '12px' }}>
                            <span>Organization Name:</span>
                            <span>Palli Bidyut (Postpaid)</span>
                        </div>
                        <div className="receipt-item flex justify-between mb-3 text-gray-600" style={{ fontSize: '12px' }}>
                            <span>Bill Month:</span>
                            <span>November 2024</span>
                        </div>
                        <div className="receipt-item flex justify-between mb-3 text-gray-600" style={{ fontSize: '12px' }}>
                            <span>Bill Account Number:</span>
                            <span>1011011521090</span>
                        </div>
                        <div className="receipt-item flex justify-between mb-3 text-gray-600" style={{ fontSize: '12px' }}>
                            <span>Bill Amount:</span>
                            <span>BDT 696.0</span>
                        </div>
                    </div>
                    <div className="receipt-section mb-6">
                        <h2 className="text-lg font-semibold text-gray-600" style={{ fontSize: '18px' }}>Payment Information</h2>
                        <div className="receipt-item flex justify-between mb-3 text-gray-600" style={{ fontSize: '12px' }}>
                            <span>bKash Account:</span>
                            <span>01992724603</span>
                        </div>
                        <div className="receipt-item flex justify-between mb-3 text-gray-600" style={{ fontSize: '12px' }}>
                            <span>Payment Date:</span>
                            <span>01 December, 2024</span>
                        </div>
                        <div className="receipt-item flex justify-between mb-3 text-gray-600" style={{ fontSize: '12px' }}>
                            <span>Transaction ID:</span>
                            <span>BL110MX7JB</span>
                        </div>
                        <div className="receipt-item flex justify-between mb-3 text-gray-600" style={{ fontSize: '12px' }}>
                            <span>Paid to Organization:</span>
                            <span>BDT 696.0</span>
                        </div>
                        <div className="receipt-item flex justify-between mb-3 text-gray-600" style={{ fontSize: '12px' }}>
                            <span>bKash Fee:</span>
                            <span>0.0</span>
                        </div>
                        <div className="receipt-item flex justify-between mb-3 text-gray-600" style={{ fontSize: '12px' }}>
                            <span>Payment Received:</span>
                            <span>696.0</span>
                        </div>
                    </div>
                    <div className="receipt-total font-bold mt-6 text-gray-600" style={{ fontSize: '14px' }}>
                        Total: BDT 696.0
                    </div>
                </div>
                <button
                    onClick={generatePDF}
                    className="download-btn w-full mt-6 py-2 bg-blue-500 text-gray-100 font-semibold rounded"
                >
                    Download PDF
                </button>
            </div>
        </div>
    );
};

export default PaymentReceipt;
