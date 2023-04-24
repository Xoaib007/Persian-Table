import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import pdf from '../../assets/ALA-TURKISH-MENU.pdf'

const Menu = () => {

    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className='bg-[#5B0017] min-h-screen'>
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                {
                    Array.from( new Array(numPages), (el, index) => (
                        <Page
                            key={`${index + 1}`}
                            pageNumber={index + 1}
                        />
                    )
                )}
            </Document>
        </div>
    );
};





export default Menu;