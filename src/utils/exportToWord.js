import { saveAs } from "file-saver";
import HtmlDocx from "html-docx-js-typescript";

/**
 * exportToWord
 * Build a full HTML document that mirrors the InterviewForm layout (dark card Recruiter Info + table for Interview Details),
 * then try to convert to .docx using html-docx-js-typescript (multiple module-shape support).
 * If conversion fails, fallback to a .doc (HTML inside).
 */
export function exportToWord(data) {
  const r = data?.recruiterData || {};
  const i = data?.interviewerData || {};

  // small helpers
  function escapeHtml(str = "") {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function nlToBrEscaped(str = "") {
    // escape then convert newlines to <br>
    return escapeHtml(String(str)).replace(/\r\n|\r|\n/g, "<br/>");
  }

  // Build recruiter info HTML as three small cards (keeps the same order as UI)
  const recruiterHtml = `
    <div class="recruiter-cards">
      <div class="card">
        <div class="card-row"><div class="label">Candidate Name</div><div class="value">${escapeHtml(r.candidateName ?? "")}</div></div>
        <div class="card-row"><div class="label">Candidate Location</div><div class="value">${escapeHtml(r.candidateLocation ?? "")}</div></div>
        <div class="card-row"><div class="label">Work Site</div><div class="value">${escapeHtml(r.workSite ?? "")}</div></div>
      </div>

      <div class="card">
        <div class="card-row"><div class="label">Interview Date</div><div class="value">${escapeHtml(r.interviewDate ?? "")}</div></div>
        <div class="card-row"><div class="label">Interview Time</div><div class="value">${escapeHtml(r.interviewTime ?? "")}</div></div>
        <div class="card-row"><div class="label">Interview Level</div><div class="value">${escapeHtml(r.interviewLevel ?? "")}</div></div>
        <div class="card-row"><div class="label">Role</div><div class="value">${escapeHtml(r.role ?? "")}</div></div>
      </div>

      <div class="card">
        <div class="card-row"><div class="label">Total Experience</div><div class="value">${escapeHtml(r.totalExp ?? "")}</div></div>
        <div class="card-row"><div class="label">Relevant Experience</div><div class="value">${escapeHtml(r.relevantExp ?? "")}</div></div>
        <div class="card-row"><div class="label">Interviewer Name</div><div class="value">${escapeHtml(r.interviewerName ?? "")}</div></div>
      </div>
    </div>
  `;

  // Helper to create a row for a skill
  function skillRowHtml(n) {
    const key = `skill${n}`;
    const rating = i[`${key}_rating`] ?? "";
    const pros = nlToBrEscaped(i[`${key}_pros`] ?? "");
    const cons = nlToBrEscaped(i[`${key}_cons`] ?? "");
    const skillLabel = escapeHtml(i[key] ?? `Skill ${n}`);
    return `
      <tr>
        <td class="left-col"><b>Skill ${n}:</b><div class="skill-label">${skillLabel}</div></td>
        <td class="rating">${escapeHtml(rating)}</td>
        <td class="pros">${pros}</td>
        <td class="cons">${cons}</td>
      </tr>
    `;
  }

  // Problem solving row
  const problemPros = nlToBrEscaped(i.problemSolving_pros ?? "");
  const problemCons = nlToBrEscaped(i.problemSolving_cons ?? "");
  const problemRating = escapeHtml(i.problemSolving_rating ?? "");

  // Live coding row
  const liveLink = escapeHtml(i.liveCodingLink ?? "");
  const liveObs = nlToBrEscaped(i.liveCodingObservation ?? "");

  // Communication, Adaptability, Culture Fit rows
  const communicationPros = nlToBrEscaped(i.communication_pros ?? "");
  const communicationCons = nlToBrEscaped(i.communication_cons ?? "");
  const communicationRating = escapeHtml(i.communication_rating ?? "");

  const adaptabilityPros = nlToBrEscaped(i.adaptability_pros ?? "");
  const adaptabilityCons = nlToBrEscaped(i.adaptability_cons ?? "");
  const adaptabilityRating = escapeHtml(i.adaptability_rating ?? "");

  const culturePros = nlToBrEscaped(i.cultureFit_pros ?? "");
  const cultureCons = nlToBrEscaped(i.cultureFit_cons ?? "");
  const cultureRating = escapeHtml(i.cultureFit_rating ?? "");

  // Qualification & suggestion rows
  const qualifiedRole = escapeHtml(i.qualifiedRole ?? "");
  const qualifiedRoleReason = nlToBrEscaped(i.qualifiedRoleReason ?? "");
  const qualifiedCompany = escapeHtml(i.qualifiedCompany ?? "");
  const qualifiedCompanyReason = nlToBrEscaped(i.qualifiedCompanyReason ?? "");
  const suggestedLevel = escapeHtml(i.suggestedLevel ?? "");
  const suggestedLevelReason = nlToBrEscaped(i.suggestedLevelReason ?? "");
  const bestRole = escapeHtml(i.bestRole ?? "");
  const bestRoleReason = nlToBrEscaped(i.bestRoleReason ?? "");
  const overallComments = nlToBrEscaped(i.comments ?? "");

  // Build interview table rows
  const skillsRows = [1,2,3,4,5].map(skillRowHtml).join("");

  const interviewTableHtml = `
    <div class="table-wrap">
      <table class="if-table">
        <thead>
          <tr>
            <th>Interview Details</th>
            <th class="rating-col">Ratings (1-5)</th>
            <th class="pros-col">Areas did Well (Pros)</th>
            <th class="cons-col">Areas of Improvement (Cons)</th>
          </tr>
        </thead>
        <tbody>
          ${skillsRows}
          <tr>
            <td class="left-col"><b>Problem Solving / Critical Thinking</b></td>
            <td class="rating">${problemRating}</td>
            <td class="pros">${problemPros}</td>
            <td class="cons">${problemCons}</td>
          </tr>

          <tr>
            <td class="left-col"><b>Live Coding Platform Link (if applicable)</b><div class="skill-label">${liveLink}</div></td>
            <td class="rating">—</td>
            <td class="pros" colspan="2">${liveObs}</td>
          </tr>

          <tr>
            <td class="left-col"><b>Communication</b></td>
            <td class="rating">${communicationRating}</td>
            <td class="pros">${communicationPros}</td>
            <td class="cons">${communicationCons}</td>
          </tr>

          <tr>
            <td class="left-col"><b>Adaptability</b></td>
            <td class="rating">${adaptabilityRating}</td>
            <td class="pros">${adaptabilityPros}</td>
            <td class="cons">${adaptabilityCons}</td>
          </tr>

          <tr>
            <td class="left-col"><b>WCT Culture Fit</b></td>
            <td class="rating">${cultureRating}</td>
            <td class="pros">${culturePros}</td>
            <td class="cons">${cultureCons}</td>
          </tr>

          <tr>
            <td class="left-col">Qualified for the role (Y/N)</td>
            <td class="rating">${qualifiedRole}</td>
            <td class="pros" colspan="2">${qualifiedRoleReason}</td>
          </tr>

          <tr>
            <td class="left-col">Suggested level of Candidate</td>
            <td class="rating">${suggestedLevel}</td>
            <td class="pros" colspan="2">${suggestedLevelReason}</td>
          </tr>

          <tr>
            <td class="left-col">Best suited Role (post Interview)</td>
            <td class="rating">${bestRole}</td>
            <td class="pros" colspan="2">${bestRoleReason}</td>
          </tr>

          <tr>
            <td class="left-col">Overall Interview Comments:</td>
            <td class="rating" colspan="3">${overallComments}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;

  // Complete HTML document with inline styles to resemble your page
  const fullHtml = `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Interview Feedback</title>
        <style>
          body { font-family: Arial, Helvetica, sans-serif; color: #e6eef6; background: #0b1220; padding: 18px; }
          h1 { color: #f59e0b; margin-bottom: 8px; }
          .recruiter-cards { display: flex; gap: 12px; margin-bottom: 18px; flex-wrap: wrap; }
          .card { background: #0b1220; border: 1px solid #1f2937; padding: 12px; border-radius: 6px; width: 32%; min-width: 200px; box-sizing: border-box; }
          .card-row { display: flex; gap: 8px; margin-bottom: 8px; }
          .card .label { width: 140px; color: #cbd5e1; font-weight: 700; }
          .card .value { color: #fff; flex: 1; }
          .table-wrap { overflow-x: auto; }
          .if-table { width: 100%; border-collapse: collapse; background: #0b1220; color: #fff; min-width: 700px; }
          .if-table th { background: #0284c7; color: #fff; padding: 10px; text-align: left; font-weight: 700; border: 1px solid rgba(255,255,255,0.06); }
          .if-table td { padding: 8px; vertical-align: top; border: 1px solid rgba(255,255,255,0.04); }
          .left-col { width: 30%; font-weight: 700; color: #e6eef6; }
          .rating-col, .rating { width: 12%; text-align: left; color: #cbd5e1; }
          .pros-col, .cons-col, .pros, .cons { width: 29%; color: #fff; }
          .skill-label { margin-top: 6px; color: #fff; font-weight: 400; }
          /* make lists look nice if bullets exist */
          .pros ul, .cons ul { margin: 0 0 0 16px; padding: 0; }
        </style>
      </head>
      <body>
        <h1>Interview Feedback</h1>

        <h2 style="color:#fff; margin-bottom:8px;">Recruiter Info</h2>
        ${recruiterHtml}

        <h2 style="color:#fff; margin-top:18px; margin-bottom:8px;">Interview Details</h2>
        ${interviewTableHtml}
      </body>
    </html>
  `;

  // Conversion attempts (trying different module shapes)
  try {
    // Case A: named export with asBlob
    if (HtmlDocx && typeof HtmlDocx.asBlob === "function") {
      const blob = HtmlDocx.asBlob(fullHtml);
      saveAs(blob, "InterviewFeedback.docx");
      console.log("exportToWord: saved .docx via HtmlDocx.asBlob");
      return;
    }

    // Case B: default export object with asBlob
    if (HtmlDocx && HtmlDocx.default && typeof HtmlDocx.default.asBlob === "function") {
      const blob = HtmlDocx.default.asBlob(fullHtml);
      saveAs(blob, "InterviewFeedback.docx");
      console.log("exportToWord: saved .docx via HtmlDocx.default.asBlob");
      return;
    }

    // Case C: module itself is a function (returns buffer/string)
    if (typeof HtmlDocx === "function") {
      const result = HtmlDocx(fullHtml);
      handlePotentialConverterResult(result, "InterviewFeedback.docx");
      return;
    }

    // Case D: default export is a function
    if (HtmlDocx && typeof HtmlDocx.default === "function") {
      const result = HtmlDocx.default(fullHtml);
      handlePotentialConverterResult(result, "InterviewFeedback.docx");
      return;
    }
  } catch (err) {
    console.warn("exportToWord: converter attempt failed, will fallback to .doc. Error:", err);
  }

  // Final fallback: create a .doc file with HTML content (Word opens it)
  try {
    const fallbackBlob = new Blob([fullHtml], { type: "application/msword;charset=utf-8" });
    saveAs(fallbackBlob, "InterviewFeedback.doc");
    console.log("exportToWord: saved fallback .doc (HTML inside)");
    return;
  } catch (err) {
    console.error("exportToWord: fallback .doc creation failed", err);
    alert("Failed to generate Word document. See console for details.");
  }
}

/** Helper to normalize various converter results */
function handlePotentialConverterResult(result, filename) {
  try {
    if (!result) throw new Error("converter returned empty result");

    // If it's already a Blob
    if (result instanceof Blob) {
      saveAs(result, filename);
      console.log("exportToWord: saved .docx from converter Blob");
      return;
    }

    // If it's an ArrayBuffer / Uint8Array
    if (result instanceof ArrayBuffer) {
      const blob = new Blob([result], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
      saveAs(blob, filename);
      console.log("exportToWord: saved .docx from ArrayBuffer result");
      return;
    }

    if (ArrayBuffer.isView(result)) {
      const blob = new Blob([result.buffer], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
      saveAs(blob, filename);
      console.log("exportToWord: saved .docx from typed array result");
      return;
    }

    // If it's a string (HTML or binary string), wrap it
    if (typeof result === "string") {
      const blob = new Blob([result], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
      saveAs(blob, filename);
      console.log("exportToWord: saved .docx from string result");
      return;
    }

    // Unknown shape — fallback
    throw new Error("Unknown converter result shape");
  } catch (err) {
    console.warn("exportToWord: converter result handling failed, will fallback to .doc", err);
    // fallback to a minimal doc
    try {
      const fallback = new Blob([typeof result === "string" ? result : "<html><body>Converted content unavailable</body></html>"], { type: "application/msword;charset=utf-8" });
      saveAs(fallback, filename.replace(/\.docx?$/, ".doc"));
    } catch (e) {
      console.error("exportToWord: secondary fallback also failed", e);
    }
  }
}
