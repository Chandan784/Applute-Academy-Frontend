import React, { useEffect, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import workerSrc from "pdfjs-dist/build/pdf.worker.mjs?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;

export default function DocumentViewer({ fileUrl }) {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);

  const downloadFile = () => {
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = fileUrl.split("/").pop();
    a.click();
  };

  useEffect(() => {
    const loadPDF = async () => {
      try {
        const pdf = await pdfjsLib.getDocument(fileUrl).promise;
        const renderedPages = [];

        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: 1.2 });

          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");

          canvas.width = viewport.width;
          canvas.height = viewport.height;

          await page.render({
            canvasContext: context,
            viewport,
          }).promise;

          renderedPages.push(canvas.toDataURL());
        }

        setPages(renderedPages);
        setLoading(false);
      } catch (error) {
        console.error("PDF loading error:", error);
        setLoading(false);
      }
    };

    loadPDF();
  }, [fileUrl]);

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Document Viewer</h2>
        <button
          onClick={downloadFile}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Download PDF
        </button>
      </div>

      {/* Horizontal Scroll */}
      {loading ? (
        <p className="text-center py-10">Loading PDF...</p>
      ) : (
        <div
          className="flex gap-6 overflow-x-auto overflow-y-hidden py-4 px-2"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {pages.map((img, index) => (
            <div
              key={index}
              className="min-w-[80%] md:min-w-[60%] lg:min-w-[50%] flex justify-center scroll-snap-align-center"
              style={{
                scrollSnapAlign: "center",
              }}
            >
              <img
                src={img}
                alt={`Page ${index + 1}`}
                className="rounded-xl shadow-lg border max-h-[85vh] object-contain"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
