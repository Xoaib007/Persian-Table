import React, { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";

// import "./styles.css";

import samplePDF from "../../assets/ALA-TURKISH-MENU.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const width = 300;
const height = 424;

const Page = React.forwardRef(({ pageNumber }, ref) => {
    return (
        <div ref={ref}>
            <ReactPdfPage pageNumber={pageNumber} width={width} />
        </div>
    );
});

function Menu() {
    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);

    // const onDocumentLoadSuccess = ({ numPages }) => {
    //     setNumPages(numPages);
    // };

    // const goToPrevPage = () =>
    //     setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

    // const goToNextPage = () =>
    //     setPageNumber(
    //         pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
    //     );

    return (
        <div classname='flex justify-center'>
            <Document file={samplePDF}>
                <HTMLFlipBook width={width} height={height}>
                    <Page pageNumber={1} />
                    <Page pageNumber={2} />
                    <Page pageNumber={3} />
                    <Page pageNumber={4} />
                    <Page pageNumber={5} />
                    <Page pageNumber={6} />
                    <Page pageNumber={7} />
                </HTMLFlipBook>
            </Document>

            {/* <nav className=''>
                <button onClick={goToPrevPage} className="previous">
                    Prev
                </button>
                <button onClick={goToNextPage} className="next">
                    Next
                </button>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
            </nav> */}
        </div>
    );
}

export default Menu;
