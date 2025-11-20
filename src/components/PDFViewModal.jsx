import React, { useEffect, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import workerSrc from "pdfjs-dist/build/pdf.worker.mjs?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PDFViewerModal({ fileUrl, onClose }) {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const loadPDF = async () => {
      const pdf = await pdfjsLib.getDocument(fileUrl).promise;
      const allPages = [];

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 1.2 });

        const canvas = document.createElement("canvas");
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({
          canvasContext: canvas.getContext("2d"),
          viewport,
        }).promise;

        allPages.push(canvas.toDataURL());
      }

      setPages(allPages);
    };

    loadPDF();
  }, [fileUrl]);

  const downloadFile = () => {
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = fileUrl.split("/").pop();
    a.click();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex flex-col">
      {/* Top Bar */}
      <div className="flex justify-between items-center p-4 bg-black text-white">
        <h2 className="text-lg">PDF Viewer</h2>

        <div className="flex gap-4">
          <button
            onClick={downloadFile}
            className="bg-white text-black px-4 py-1 rounded"
          >
            Download
          </button>

          <button onClick={onClose} className="text-xl">
            ✕
          </button>
        </div>
      </div>

      {/* Scrollable PDF Pages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        {pages.length === 0 ? (
          <p className="text-white text-center mt-20">Loading PDF...</p>
        ) : (
          pages.map((src, i) => (
            <img
              key={i}
              src={src}
              className="w-full mb-6 rounded-lg shadow-xl"
              alt=""
            />
          ))
        )}
      </div>
    </div>
  );
}
