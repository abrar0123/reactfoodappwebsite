import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

export default function Home() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); // Start with first page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  // -------------view pdf ============

  return (
    <div className="container mx-auto bg-cyan-300">
      <h1 className="text-3xl font-bold underline">Hello, Tailwind CSS 1!</h1>
      <h1 className="text-2xl font-bold text-center text-blue-500">
        Hello, Tailwind CSS 1!
      </h1>
      <button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
        Click Me
      </button>
      <button class="dark:md:hover:bg-fuchsia-600 ...">Save changes</button>
      {/* <form>
        <label class="block">
          <span class="block text-sm font-medium text-slate-700">Username</span>
          <input
            type="text"
            value="tbone"
            // disabled
            required
            class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
          />
        </label>
      </form> */}
      {/* -------------------- */}

      <p>starts</p>

      <div>
        <Document
          file="path/to/your/document.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          options={{ workerSrc: "/pdf.worker.js" }}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    </div>
  );
}
