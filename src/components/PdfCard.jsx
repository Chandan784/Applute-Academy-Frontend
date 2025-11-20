import React, { useState } from "react";
import PDFViewerModal from "./PDFViewModal";

export default function PDFCard({ fileUrl }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Small Preview Card */}
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer bg-gray-100 p-4 rounded-xl shadow hover:shadow-lg transition"
      >
        <p className="text-center text-gray-600">📄 Tap to View PDF</p>
      </div>

      {/* Fullscreen Viewer */}
      {open && (
        <PDFViewerModal fileUrl={fileUrl} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
