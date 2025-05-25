import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Preloader from "../../components/Pre";
import pdfFile from "../../Assets/MyResume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ResumeNew = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);
  const [loading, setLoading] = useState(true);

  const onLoadSuccess = ({ numPages }) => setNumPages(numPages);

  window.onresize = () => setWidth(window.innerWidth);

  useEffect(() => setWidth(window.innerWidth), []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Preloader load={loading} />
      <Container fluid className="resume-section">
        <Particle />
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            paddingBottom: "20px",
          }}
        >
          <Button
            variant="primary"
            href={pdfFile}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <div className="d-flex justify-content-center">
          <Document file={pdfFile} onLoadSuccess={onLoadSuccess}>
            {Array.from({ length: numPages || 0 }, (_, index) => (
              <Page
                key={index}
                pageNumber={index + 1}
                scale={width > 786 ? 1.7 : 0.6}
              />
            ))}
          </Document>
        </div>

        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            paddingTop: "20px",
          }}
        >
          <Button
            variant="primary"
            href={pdfFile}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default ResumeNew;
