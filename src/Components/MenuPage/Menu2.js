import React, { useState } from 'react';
import { Document, pdfjs as ReactPdfPage} from 'react-pdf/dist/esm/entry.webpack';
import pdf from '../../assets/ALA-TURKISH-MENU.pdf';
import './Menu.css'
import HTMLFlipBook from 'react-pageflip';


const Menu = () => {


    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const goToPrevPage = () =>
        setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

    const goToNextPage = () =>
        setPageNumber(
            pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
        );

        const Page = React.forwardRef(({ pageNumber }, ref) => {
            return (
              <div ref={ref}>
                <ReactPdfPage pageNumber={pageNumber} width={width} />
              </div>
            );
          });
    return (
        <div className='bg-[#5B0017] min-h-screen'>
            <nav className=''>
                <button onClick={goToPrevPage} className="previous">
                    Prev
                </button>
                <button onClick={goToNextPage} className="next">
                    Next
                </button>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
            </nav>

            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                <HTMLFlipBook width={300} height={424}>
                    <Page pageNumber={pageNumber} />
                </HTMLFlipBook>
            </Document>
        </div>
    );
};


export default Menu;