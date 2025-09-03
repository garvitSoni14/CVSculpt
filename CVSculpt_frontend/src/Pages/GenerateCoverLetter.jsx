import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaBrain, FaTrash, FaPaperPlane, FaDownload } from "react-icons/fa";
import { generateCover } from "../API/CoverLetterService";
import { BiFile } from "react-icons/bi";
import CoverLetter from "../Components/CoverLetter";
import { jsPDF } from "jspdf";

const GenerateCoverLetter = () => {
  const [coverLetterText, setCoverLetterText] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [showInput, setShowInput] = useState(true);
  const [showOutput, setShowOutput] = useState(false);

  const handleGenerate = async () => {
    console.log("Generating CV with description:", description);
    try {
      setLoading(true);
      const responseData = await generateCover(description);
      console.log("CV Response:", responseData);
      setCoverLetterText(responseData.coverLetter);
      toast.success("CV Generated Successfully!", { duration: 3000, position: "top-center" });
      setShowInput(false);
      setShowOutput(true);
    } catch (error) {
      console.error("Error Generating CV:", error);
      toast.error("Error Generating CV!");
    } finally {
      setLoading(false);
      setDescription("");
    }
  };

  const handleClear = () => {
    setDescription("");
  };

  const handleGenerateAnother = () => {
    setShowInput(true);
    setShowOutput(false);
    setCoverLetterText("");
    setDescription("");
  };

  const handleCoverLetterChange = (newText) => {
    setCoverLetterText(newText);
  };

  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 10;
    const lineHeight = 5; // Adjust for smaller line height with smaller font
    let yPosition = margin;
    const fontSize = 10; // Adjust this value to your desired font size

    doc.setFontSize(fontSize); // Set the font size

    const textLines = doc.splitTextToSize(coverLetterText, pageWidth - 2 * margin);

    textLines.forEach(line => {
      if (yPosition > doc.internal.pageSize.getHeight() - margin) {
        doc.addPage();
        yPosition = margin;
      }
      doc.text(line, margin, yPosition);
      yPosition += lineHeight;
    });

    doc.save("cover_letter.pdf");
  };

  return (
    <div className="mt-5 p-10 flex flex-col gap-3 items-center justify-center font-sans">
      {showInput && (
        <div className="bg-base-200 shadow-lg rounded-lg p-10 max-w-2xl w-full text-center">
          <h1 className="text-4xl font-bold mb-6 flex items-center justify-center gap-2">
            <FaBrain className="text-accent" /> AI Cover Letter Description Input
          </h1>
          <p className="mb-4 text-lg text-gray-600">
            Enter a detailed description about the type of Cover Letter you need.
          </p>
          <textarea
            disabled={loading}
            className="textarea textarea-bordered w-full h-48 mb-6 resize-none"
            placeholder="Describe the CV or cover letter you need..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <div className="flex justify-center gap-4">
            <button
              disabled={loading}
              onClick={handleGenerate}
              className="btn btn-primary flex items-center gap-2"
            >
              {loading && <span className="loading loading-spinner"></span>}
              <FaPaperPlane />
              Generate Cover Letter
            </button>
            <button onClick={handleClear} className="btn btn-secondary flex items-center gap-2">
              <FaTrash /> Clear
            </button>
          </div>
        </div>
      )}

      {showOutput && (
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2">
            <BiFile className="text-accent" /> Edit & Download Your Cover Letter
          </h2>
          <div className="bg-base-100 p-6 rounded-lg shadow-md w-full max-w-2xl text-base-content">
            <CoverLetter text={coverLetterText} onTextChange={handleCoverLetterChange} />
          </div>
          <div className="flex mt-5 justify-center gap-4">
            <button onClick={handleDownloadPdf} className="btn btn-success flex items-center gap-2">
              <FaDownload /> Download PDF
            </button>
            <button onClick={handleGenerateAnother} className="btn btn-accent">
              Generate Another
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GenerateCoverLetter;