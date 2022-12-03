import { React } from "react";
import './index.css';

const PDFview = ({ postUrl }) => {
    return (
        <iframe className="rightBar" title="cvPDFview" src={postUrl}></iframe>
    )
};

export default PDFview;