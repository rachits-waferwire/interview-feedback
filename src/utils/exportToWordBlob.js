// Minimal helper that returns a Blob for a Word document from HTML.
// This keeps things simple by producing an HTML document and marking it as 'application/msword'.
// Word will open this file. If you prefer real .docx, use a server-side generator or a lib like PizZip+docxtemplater.

export function exportToWordBlob({ recruiterData, interviewerData, htmlForDoc }) {
  // If caller supplies ready HTML (htmlForDoc) prefer that. Otherwise build a very small HTML wrapper.
  const html = htmlForDoc || `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Interview Feedback</title>
      </head>
      <body>
        <h2>Interview Feedback — ${escapeHtml(recruiterData?.candidateName || '')}</h2>
        <div>
          <pre>${escapeHtml(JSON.stringify({ recruiterData, interviewerData }, null, 2))}</pre>
        </div>
      </body>
    </html>
  `;

  // Use the older 'application/msword' MIME so many clients will open the file in Word.
  return new Blob([html], { type: "application/msword" });
}

// small escapeHtml used in this helper
function escapeHtml(str) {
  if (!str && str !== 0) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}