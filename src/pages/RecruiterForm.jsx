// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function RecruiterForm() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     candidateName: "",
//     candidateLocation: "",
//     workSite: "",
//     interviewDate: "",
//     interviewTime: "",
//     interviewLevel: "",
//     role: "",
//     totalExp: "",
//     relevantExp: "",
//     interviewerName: "",
//   });


//   const [generatedLink, setGeneratedLink] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // const handleGenerateLink = () => {
//   //   const id = Date.now().toString();
//   //   localStorage.setItem(id, JSON.stringify(formData));
//   //   navigate(`/interview/${id}`);
//   // };

//   const handleGenerateLink = () => {
//     const id = Date.now().toString();
//     localStorage.setItem(id, JSON.stringify(formData));
//     const link = `${window.location.origin}/interview/${id}`;
//     setGeneratedLink(link); // 👈 set link but don’t navigate
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(generatedLink);
//     alert("Link copied to clipboard!");
//   };
  
//   return (
//     <div className="container">
//       <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
//         Recruiter Form
//       </h2>

//       <div className="grid">
//         <div>
//           <label className="block text-gray-700 font-semibold mb-1">
//             Candidate Name
//           </label>
//           <input
//             name="candidateName"
//             value={formData.candidateName}
//             onChange={handleChange}
//             className="border w-full p-2 rounded"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 font-semibold mb-1">
//             Candidate Location
//           </label>
//           <input
//             name="candidateLocation"
//             value={formData.candidateLocation}
//             onChange={handleChange}
//             className="border w-full p-2 rounded"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 font-semibold mb-1">
//             Work Site
//           </label>
//           <input
//             name="workSite"
//             value={formData.workSite}
//             onChange={handleChange}
//             className="border w-full p-2 rounded"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 font-semibold mb-1">
//             Interview Date
//           </label>
//           <input
//             type="date"
//             name="interviewDate"
//             value={formData.interviewDate}
//             onChange={handleChange}
//             className="border w-full p-2 rounded"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 font-semibold mb-1">
//             Interview Time
//           </label>
//           <input
//             type="time"
//             name="interviewTime"
//             value={formData.interviewTime}
//             onChange={handleChange}
//             className="border w-full p-2 rounded"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 font-semibold mb-1">
//             Interview Level
//           </label>
//           <select
//             name="interviewLevel"
//             value={formData.interviewLevel}
//             onChange={handleChange}
//             className="border w-full p-2 rounded"
//           >
//             <option value="">Select</option>
//             <option>Junior</option>
//             <option>Mid</option>
//             <option>Senior</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-gray-700 font-semibold mb-1">
//             Role to be Interviewed For
//           </label>
//           <input
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             className="border w-full p-2 rounded"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 font-semibold mb-1">
//             Total Experience
//           </label>
//           <input
//             name="totalExp"
//             value={formData.totalExp}
//             onChange={handleChange}
//             className="border w-full p-2 rounded"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 font-semibold mb-1">
//             Relevant Experience
//           </label>
//           <input
//             name="relevantExp"
//             value={formData.relevantExp}
//             onChange={handleChange}
//             className="border w-full p-2 rounded"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 font-semibold mb-1">
//             Interviewer Name
//           </label>
//           <input
//             name="interviewerName"
//             value={formData.interviewerName}
//             onChange={handleChange}
//             className="border w-full p-2 rounded"
//           />
//         </div>
//       </div>
// <div style={{ marginTop: "30px", textAlign: "center" }}>
//         <button
//           onClick={handleGenerateLink}
//           className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700"
//         >
//           Generate Link
//         </button>
//       </div>

//       {generatedLink && (
//         <div
//           style={{
//             marginTop: "30px",
//             textAlign: "center",
//             background: "#f1f5f9",
//             padding: "15px",
//             borderRadius: "8px",
//           }}
//         >
//           <p style={{ fontWeight: "600", color: "#1e3a8a" }}>Interview Link:</p>
//           <a
//             href={generatedLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{
//               display: "block",
//               color: "#2563eb",
//               wordBreak: "break-all",
//               textDecoration: "underline",
//               marginBottom: "10px",
//             }}
//           >
//             {generatedLink}
//           </a>
//           <button onClick={copyToClipboard}>Copy Link</button>
//         </div>
//       )}
//     </div>
//   );
// }

// import { useState } from "react";

// export default function RecruiterForm() {
//   const [formData, setFormData] = useState({
//     candidateName: "",
//     candidateLocation: "",
//     workSite: "",
//     interviewDate: "",
//     interviewTime: "",
//     interviewLevel: "",
//     role: "",
//     totalExp: "",
//     relevantExp: "",
//     interviewerName: "",
//   });

//   const [generatedLink, setGeneratedLink] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((s) => ({ ...s, [name]: value }));
//   };

//   const handleGenerateLink = () => {
//     const id = Date.now().toString();
//     localStorage.setItem(id, JSON.stringify(formData));
//     const link = `${window.location.origin}/interview/${id}`;
//     setGeneratedLink(link);
//   };

//   const copyToClipboard = async () => {
//     try {
//       await navigator.clipboard.writeText(generatedLink);
//       alert("Link copied to clipboard!");
//     } catch {
//       const ta = document.createElement("textarea");
//       ta.value = generatedLink;
//       document.body.appendChild(ta);
//       ta.select();
//       document.execCommand("copy");
//       document.body.removeChild(ta);
//       alert("Link copied to clipboard!");
//     }
//   };

//   // small helper to render inputs with consistent style
//   const inputStyle = { background: "#0b1220", color: "#fff", border: "1px solid #374151", padding: "8px", borderRadius: 6, width: "100%" };

//   return (
//     <div className="container max-w-6xl mx-auto p-6">
//       <h2 className="text-2xl font-bold text-blue-700 mb-4">Recruiter Form</h2>

//       <div style={{ background: "#d97706", color: "#fff", padding: 10, fontWeight: 700, borderRadius: 6, marginBottom: 12 }}>
//         Recruiters to fill
//       </div>

//       <div className="overflow-x-auto">
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <tbody>
//             <tr>
//               {/* Column 1 */}
//               <td style={{ verticalAlign: "top", padding: 6, width: "33%" }}>
//                 <div style={{ background: "#0b1220", padding: 12, borderRadius: 6 }}>
//                   <div style={{ color: "#fff", fontWeight: 700, marginBottom: 6 }}>Candidate</div>

//                   <label style={{ color: "#cbd5e1", fontSize: 13 }}>Candidate Name</label>
//                   <input name="candidateName" value={formData.candidateName} onChange={handleChange} placeholder="Candidate name" style={inputStyle} />

//                   <div style={{ height: 8 }} />

//                   <label style={{ color: "#cbd5e1", fontSize: 13 }}>Candidate Location</label>
//                   <input name="candidateLocation" value={formData.candidateLocation} onChange={handleChange} placeholder="Location" style={inputStyle} />

//                   <div style={{ height: 8 }} />

//                   <label style={{ color: "#cbd5e1", fontSize: 13 }}>Work Site</label>
//                   <input name="workSite" value={formData.workSite} onChange={handleChange} placeholder="Onsite / Remote" style={inputStyle} />
//                 </div>
//               </td>

//               {/* Column 2 */}
//               <td style={{ verticalAlign: "top", padding: 6, width: "33%" }}>
//                 <div style={{ background: "#0b1220", padding: 12, borderRadius: 6 }}>
//                   <div style={{ color: "#fff", fontWeight: 700, marginBottom: 6 }}>Schedule & Role</div>

//                   <label style={{ color: "#cbd5e1", fontSize: 13 }}>Interview Date</label>
//                   <input type="date" name="interviewDate" value={formData.interviewDate} onChange={handleChange} style={inputStyle} />

//                   <div style={{ height: 8 }} />

//                   <label style={{ color: "#cbd5e1", fontSize: 13 }}>Interview Time</label>
//                   <input type="time" name="interviewTime" value={formData.interviewTime} onChange={handleChange} style={inputStyle} />

//                   <div style={{ height: 8 }} />

//                   <label style={{ color: "#cbd5e1", fontSize: 13 }}>Interview Level</label>
//                   <select name="interviewLevel" value={formData.interviewLevel} onChange={handleChange} style={inputStyle}>
//                     <option value="">Choose an item.</option>
//                     <option value="Junior">Junior</option>
//                     <option value="Mid">Mid</option>
//                     <option value="Senior">Senior</option>
//                   </select>

//                   <div style={{ height: 8 }} />

//                   <label style={{ color: "#cbd5e1", fontSize: 13 }}>Role to be interviewed for</label>
//                   <input name="role" value={formData.role} onChange={handleChange} placeholder="Role" style={inputStyle} />
//                 </div>
//               </td>

//               {/* Column 3 */}
//               <td style={{ verticalAlign: "top", padding: 6, width: "34%" }}>
//                 <div style={{ background: "#0b1220", padding: 12, borderRadius: 6 }}>
//                   <div style={{ color: "#fff", fontWeight: 700, marginBottom: 6 }}>Experience & Interviewer</div>

//                   <label style={{ color: "#cbd5e1", fontSize: 13 }}>Total Experience</label>
//                   <input name="totalExp" value={formData.totalExp} onChange={handleChange} placeholder="e.g., 5y" style={inputStyle} />

//                   <div style={{ height: 8 }} />

//                   <label style={{ color: "#cbd5e1", fontSize: 13 }}>Relevant Experience</label>
//                   <input name="relevantExp" value={formData.relevantExp} onChange={handleChange} placeholder="e.g., 3y" style={inputStyle} />

//                   <div style={{ height: 8 }} />

//                   <label style={{ color: "#cbd5e1", fontSize: 13 }}>Interviewer Name</label>
//                   <input name="interviewerName" value={formData.interviewerName} onChange={handleChange} placeholder="Interviewer" style={inputStyle} />

//                   <div style={{ height: 12 }} />

//                   <div style={{ textAlign: "center" }}>
//                     <button onClick={handleGenerateLink} style={{ background: "#2563eb", color: "#fff", padding: "8px 14px", borderRadius: 6, border: "none", cursor: "pointer" }}>
//                       Generate Link
//                     </button>
//                   </div>
//                 </div>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       {/* Generated link block */}
//       {generatedLink && (
//         <div style={{ marginTop: 16, textAlign: "center", background: "#f1f5f9", padding: 12, borderRadius: 8 }}>
//           <p style={{ fontWeight: 600, color: "#0f172a" }}>Interview Link:</p>
//           <a href={generatedLink} target="_blank" rel="noopener noreferrer" style={{ display: "block", color: "#2563eb", wordBreak: "break-all", textDecoration: "underline", marginBottom: 8 }}>
//             {generatedLink}
//           </a>
//           <button onClick={copyToClipboard} style={{ background: "#111827", color: "#fff", padding: "8px 12px", borderRadius: 6, border: "none" }}>
//             Copy Link
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// import { useState } from "react";

// export default function RecruiterForm() {
//   const [formData, setFormData] = useState({
//     candidateName: "",
//     candidateLocation: "",
//     workSite: "",
//     interviewDate: "",
//     interviewTime: "",
//     interviewLevel: "",
//     role: "",
//     totalExp: "",
//     relevantExp: "",
//     interviewerName: "",
//   });

//   const [generatedLink, setGeneratedLink] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((s) => ({ ...s, [name]: value }));
//   };

//   const handleGenerateLink = () => {
//     const id = Date.now().toString();
//     localStorage.setItem(id, JSON.stringify(formData));
//     const link = `${window.location.origin}/interview/${id}`;
//     setGeneratedLink(link);
//   };

//   const copyToClipboard = async () => {
//     try {
//       await navigator.clipboard.writeText(generatedLink);
//       alert("Link copied to clipboard!");
//     } catch {
//       const ta = document.createElement("textarea");
//       ta.value = generatedLink;
//       document.body.appendChild(ta);
//       ta.select();
//       document.execCommand("copy");
//       document.body.removeChild(ta);
//       alert("Link copied to clipboard!");
//     }
//   };

//   // Styles tuned to fit three columns comfortably
//   const headerStyle = {
//     background: "#d97706",
//     color: "#fff",
//     padding: "12px 18px",
//     fontWeight: 700,
//     borderRadius: 6,
//     textAlign: "center",
//     marginBottom: 16,
//   };

//   const cardBg = "#0b1220";
//   const labelStyle = { color: "#cbd5e1", width: 100, fontSize: 14, fontWeight: 600, marginRight: 12 };
//   const inputStyle = { background: "#0f1724", color: "#fff", border: "1px solid #374151", padding: "8px 10px", borderRadius: 6, flex: 1, minWidth: 220 };
//   const rowStyle = { display: "flex", alignItems: "center", gap: 12, marginBottom: 12 };

//   return (
//     <div style={{ width: "100%", display: "flex", justifyContent: "center", padding: "28px 20px" }}>
//       <div style={{ width: "100%", maxWidth: 1200 }}>
//         <h2 className="text-2xl font-bold text-blue-700 mb-4">Recruiter Form</h2>

//         <div style={headerStyle}>Recruiters to fill</div>

//         {/* Responsive three-column grid */}
//         <style>{`
//   .three-col { display: grid; gap: 16px; grid-template-columns: 1fr; }
//   @media (min-width: 720px) {
//     .three-col { grid-template-columns: repeat(3, minmax(0, 1fr)); }
//   }
// `}</style>

//         <div className="three-col" style={{ marginTop: 8 }}>
//           {/* Column 1 */}
//           <div style={{ background: cardBg, padding: 18, borderRadius: 8 }}>
//             <div style={{ display: "flex", flexDirection: "column" }}>
//               <div style={rowStyle}>
//                 <label style={labelStyle}>Candidate Name</label>
//                 <input
//                   name="candidateName"
//                   value={formData.candidateName}
//                   onChange={handleChange}
//                   placeholder="Candidate name"
//                   style={inputStyle}
//                 />
//               </div>

//               <div style={rowStyle}>
//                 <label style={labelStyle}>Candidate Location</label>
//                 <input
//                   name="candidateLocation"
//                   value={formData.candidateLocation}
//                   onChange={handleChange}
//                   placeholder="Location"
//                   style={inputStyle}
//                 />
//               </div>

//               <div style={rowStyle}>
//                 <label style={labelStyle}>Work Site</label>
//                 <input
//                   name="workSite"
//                   value={formData.workSite}
//                   onChange={handleChange}
//                   placeholder="Onsite / Remote"
//                   style={inputStyle}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Column 2 */}
//           <div style={{ background: cardBg, padding: 18, borderRadius: 8 }}>
//             <div style={{ display: "flex", flexDirection: "column" }}>
//               <div style={rowStyle}>
//                 <label style={labelStyle}>Interview Date</label>
//                 <input
//                   type="date"
//                   name="interviewDate"
//                   value={formData.interviewDate}
//                   onChange={handleChange}
//                   style={inputStyle}
//                 />
//               </div>

//               <div style={rowStyle}>
//                 <label style={labelStyle}>Interview Time</label>
//                 <input
//                   type="time"
//                   name="interviewTime"
//                   value={formData.interviewTime}
//                   onChange={handleChange}
//                   style={inputStyle}
//                 />
//               </div>

//               <div style={rowStyle}>
//                 <label style={labelStyle}>Interview Level</label>
//                 <select
//                   name="interviewLevel"
//                   value={formData.interviewLevel}
//                   onChange={handleChange}
//                   style={inputStyle}
//                 >
//                   <option value="">Choose an item.</option>
//                   <option value="Junior">Junior</option>
//                   <option value="Mid">Mid</option>
//                   <option value="Senior">Senior</option>
//                 </select>
//               </div>

//               <div style={rowStyle}>
//                 <label style={labelStyle}>Role</label>
//                 <input
//                   name="role"
//                   value={formData.role}
//                   onChange={handleChange}
//                   placeholder="Role"
//                   style={inputStyle}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Column 3 (no button here now) */}
//           <div style={{ background: cardBg, padding: 18, borderRadius: 8 }}>
//             <div style={{ display: "flex", flexDirection: "column" }}>
//               <div style={rowStyle}>
//                 <label style={labelStyle}>Total Experience</label>
//                 <input
//                   name="totalExp"
//                   value={formData.totalExp}
//                   onChange={handleChange}
//                   placeholder="e.g., 5y"
//                   style={inputStyle}
//                 />
//               </div>

//               <div style={rowStyle}>
//                 <label style={labelStyle}>Relevant Experience</label>
//                 <input
//                   name="relevantExp"
//                   value={formData.relevantExp}
//                   onChange={handleChange}
//                   placeholder="e.g., 3y"
//                   style={inputStyle}
//                 />
//               </div>

//               <div style={rowStyle}>
//                 <label style={labelStyle}>Interviewer Name</label>
//                 <input
//                   name="interviewerName"
//                   value={formData.interviewerName}
//                   onChange={handleChange}
//                   placeholder="Interviewer"
//                   style={inputStyle}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Centered Generate Link button (moved outside columns) */}
//         <div style={{ display: "flex", justifyContent: "center", marginTop: 18 }}>
//           <button
//             onClick={handleGenerateLink}
//             style={{
//               background: "#2563eb",
//               color: "#fff",
//               padding: "10px 18px",
//               borderRadius: 8,
//               border: "none",
//               cursor: "pointer",
//               boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
//             }}
//           >
//             Generate Link
//           </button>
//         </div>

//         {/* Generated link */}
//         {generatedLink && (
//           <div style={{ marginTop: 18, textAlign: "center", background: "#f1f5f9", padding: 12, borderRadius: 8 }}>
//             <p style={{ fontWeight: 600, color: "#0f172a" }}>Interview Link:</p>
//             <a href={generatedLink} target="_blank" rel="noopener noreferrer" style={{ display: "block", color: "#2563eb", wordBreak: "break-all", textDecoration: "underline", marginBottom: 8 }}>
//               {generatedLink}
//             </a>
//             <button onClick={copyToClipboard} style={{ background: "#111827", color: "#fff", padding: "8px 12px", borderRadius: 6, border: "none" }}>
//               Copy Link
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


// import { useState } from "react";

// /*
//   Small helper rendering an input with a visible white icon overlay on the right.
//   Clicking the overlay will focus and attempt to click the native input (opens pickers on many browsers).
// */
// function IconOverlayInput({ type = "text", name, value, onChange, placeholder, inputStyle, ariaLabel }) {
//   const handleIconClick = () => {
//     const el = document.getElementsByName(name)[0];
//     if (!el) return;
//     try {
//       el.focus();
//       el.click();
//     } catch {
//       el.focus();
//     }
//   };

//   const wrapper = {
//     position: "relative",
//     display: "flex",
//     alignItems: "center",
//     width: "100%",
//   };

//   const buttonStyle = {
//     position: "absolute",
//     right: 10,
//     top: "50%",
//     transform: "translateY(-50%)",
//     width: 28,
//     height: 28,
//     padding: 4,
//     borderRadius: 6,
//     border: "none",
//     background: "transparent",
//     color: "#fff",
//     cursor: "pointer",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   };

//   const mergedInputStyle = { ...inputStyle, paddingRight: inputStyle?.paddingRight ?? 44, boxSizing: "border-box" };

//   const svg =
//     type === "time" ? (
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//         <circle cx="12" cy="12" r="10"></circle>
//         <polyline points="12 6 12 12 16 14"></polyline>
//       </svg>
//     ) : (
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
//         <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
//         <line x1="16" y1="2" x2="16" y2="6"></line>
//         <line x1="8" y1="2" x2="8" y2="6"></line>
//         <line x1="3" y1="10" x2="21" y2="10"></line>
//       </svg>
//     );

//   return (
//     <div style={wrapper}>
//       <input
//         type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         aria-label={ariaLabel || name}
//         style={mergedInputStyle}
//       />
//       <button type="button" aria-label={`Open ${type} picker`} onClick={handleIconClick} style={buttonStyle}>
//         {svg}
//       </button>
//     </div>
//   );
// }

// export default function RecruiterForm() {
//   const [formData, setFormData] = useState({
//     candidateName: "",
//     candidateLocation: "",
//     workSite: "",
//     interviewDate: "",
//     interviewTime: "",
//     interviewLevel: "",
//     role: "",
//     totalExp: "",
//     relevantExp: "",
//     interviewerName: "",
//   });

//   const [generatedLink, setGeneratedLink] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((s) => ({ ...s, [name]: value }));
//   };

//   const handleGenerateLink = () => {
//     const id = Date.now().toString();
//     localStorage.setItem(id, JSON.stringify(formData));
//     const link = `${window.location.origin}/interview/${id}`;
//     setGeneratedLink(link);
//   };

//   const copyToClipboard = async () => {
//     try {
//       await navigator.clipboard.writeText(generatedLink);
//       alert("Link copied to clipboard!");
//     } catch {
//       const ta = document.createElement("textarea");
//       ta.value = generatedLink;
//       document.body.appendChild(ta);
//       ta.select();
//       document.execCommand("copy");
//       document.body.removeChild(ta);
//       alert("Link copied to clipboard!");
//     }
//   };

//   // Styles tuned to fit three columns comfortably
//   const headerStyle = {
//     background: "#d97706",
//     color: "#fff",
//     padding: "12px 18px",
//     fontWeight: 700,
//     borderRadius: 6,
//     textAlign: "center",
//     marginBottom: 16,
//   };

//   const cardBg = "#0b1220";
//   // label column width is now controlled by grid column; label text right-aligned for neat alignment
//   const labelStyle = { color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontSize: 14, fontWeight: 600 };
//   const inputStyle = {
//     background: "#0f1724",
//     color: "#fff",
//     border: "1px solid #374151",
//     padding: "8px 10px",
//     paddingRight: 44, // ensure room for icon overlay
//     borderRadius: 6,
//     width: "100%",
//     boxSizing: "border-box",
//   };

//   // Each card uses a 2-column grid: label (fixed) + control (flexible)
//   const cardContentGrid = {
//     display: "grid",
//     gridTemplateColumns: "160px 1fr", // tweak label column width here
//     rowGap: 12,
//     columnGap: 12,
//     alignItems: "center",
//   };

//   return (
//     <div style={{ width: "100%", display: "flex", justifyContent: "center", padding: "28px 20px" }}>
//       <div style={{ width: "100%", maxWidth: 1200 }}>
//         <h2 className="text-2xl font-bold text-blue-700 mb-4">Recruiter Form</h2>

//         <div style={headerStyle}>Recruiters to fill</div>

//         {/* Responsive three-column grid + minor native-picker neutralization */}
//         <style>{`
//           .three-col { display: grid; gap: 16px; grid-template-columns: 1fr; }
//           @media (min-width: 720px) {
//             .three-col { grid-template-columns: repeat(3, minmax(0, 1fr)); }
//           }

//           /* Neutralize webkit native indicator (we use overlay button) */
//           input[type="date"]::-webkit-calendar-picker-indicator,
//           input[type="time"]::-webkit-calendar-picker-indicator {
//             opacity: 0;
//             -webkit-appearance: none;
//             display: block;
//             width: 18px;
//             height: 18px;
//           }

//           /* hint for Firefox native controls */
//           input[type="date"],
//           input[type="time"],
//           select {
//             color-scheme: dark;
//           }

//           /* ensure caret and text remain visible */
//           input, select, textarea {
//             caret-color: #fff;
//           }

//           /* Slightly tighten the select control's caret so it visually lines up */
//           select { -moz-appearance: none; appearance: none; }
//         `}</style>

//         <div className="three-col" style={{ marginTop: 8 }}>
//           {/* Column 1 */}
//           <div style={{ background: cardBg, padding: 18, borderRadius: 8 }}>
//             <div style={cardContentGrid}>
//               <label style={labelStyle}>Candidate Name</label>
//               <input name="candidateName" value={formData.candidateName} onChange={handleChange} placeholder="Candidate name" style={inputStyle} />

//               <label style={labelStyle}>Candidate Location</label>
//               <input name="candidateLocation" value={formData.candidateLocation} onChange={handleChange} placeholder="Location" style={inputStyle} />

//               <label style={labelStyle}>Work Site</label>
//               <input name="workSite" value={formData.workSite} onChange={handleChange} placeholder="Onsite / Remote" style={inputStyle} />
//             </div>
//           </div>

//           {/* Column 2 */}
//           <div style={{ background: cardBg, padding: 18, borderRadius: 8 }}>
//             <div style={cardContentGrid}>
//               <label style={labelStyle}>Interview Date</label>
//               <IconOverlayInput type="date" name="interviewDate" value={formData.interviewDate} onChange={handleChange} placeholder="" inputStyle={inputStyle} ariaLabel="Interview date" />

//               <label style={labelStyle}>Interview Time</label>
//               <IconOverlayInput type="time" name="interviewTime" value={formData.interviewTime} onChange={handleChange} placeholder="" inputStyle={inputStyle} ariaLabel="Interview time" />

//               <label style={labelStyle}>Interview Level</label>
//               <select name="interviewLevel" value={formData.interviewLevel} onChange={handleChange} style={inputStyle}>
//                 <option value="">Choose an item.</option>
//                 <option value="Junior">Junior</option>
//                 <option value="Mid">Mid</option>
//                 <option value="Senior">Senior</option>
//               </select>

//               <label style={labelStyle}>Role</label>
//               <input name="role" value={formData.role} onChange={handleChange} placeholder="Role" style={inputStyle} />
//             </div>
//           </div>

//           {/* Column 3 */}
//           <div style={{ background: cardBg, padding: 18, borderRadius: 8 }}>
//             <div style={cardContentGrid}>
//               <label style={labelStyle}>Total Experience</label>
//               <input name="totalExp" value={formData.totalExp} onChange={handleChange} placeholder="e.g., 5y" style={inputStyle} />

//               <label style={labelStyle}>Relevant Experience</label>
//               <input name="relevantExp" value={formData.relevantExp} onChange={handleChange} placeholder="e.g., 3y" style={inputStyle} />

//               <label style={labelStyle}>Interviewer Name</label>
//               <input name="interviewerName" value={formData.interviewerName} onChange={handleChange} placeholder="Interviewer" style={inputStyle} />
//             </div>
//           </div>
//         </div>

//         {/* Centered Generate Link button (moved outside columns) */}
//         <div style={{ display: "flex", justifyContent: "center", marginTop: 18 }}>
//           <button
//             onClick={handleGenerateLink}
//             style={{
//               background: "#2563eb",
//               color: "#fff",
//               padding: "10px 18px",
//               borderRadius: 8,
//               border: "none",
//               cursor: "pointer",
//               boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
//             }}
//           >
//             Generate Link
//           </button>
//         </div>

//         {/* Generated link */}
//         {generatedLink && (
//           <div style={{ marginTop: 18, textAlign: "center", background: "#f1f5f9", padding: 12, borderRadius: 8 }}>
//             <p style={{ fontWeight: 600, color: "#0f172a" }}>Interview Link:</p>
//             <a href={generatedLink} target="_blank" rel="noopener noreferrer" style={{ display: "block", color: "#2563eb", wordBreak: "break-all", textDecoration: "underline", marginBottom: 8 }}>
//               {generatedLink}
//             </a>
//             <button onClick={copyToClipboard} style={{ background: "#111827", color: "#fff", padding: "8px 12px", borderRadius: 6, border: "none" }}>
//               Copy Link
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import { useState } from "react";

/*
  Small helper rendering an input with a visible white icon overlay on the right.
  Clicking the overlay will attempt to open the native picker:
   - uses el.showPicker() when supported
   - falls back to focusing and dispatching a mouse event & click
*/
function IconOverlayInput({ type = "text", name, value, onChange, placeholder, inputStyle, ariaLabel }) {
  const handleIconClick = () => {
    const el = document.getElementsByName(name)[0];
    if (!el) return;

    try {
      // Preferred: open native picker if supported
      if (typeof el.showPicker === "function") {
        // showPicker() can open the browser's date/time selector
        el.showPicker();
        el.focus();
        return;
      }

      // Fallbacks: focus + attempt to programmatically trigger a click/mousedown.
      // These may open the picker on some browsers; if not, the user can still click the input.
      el.focus();

      // Try dispatching a synthetic pointer/mouse event to coax the browser into opening the picker.
      const down = new MouseEvent("mousedown", { bubbles: true, cancelable: true, view: window });
      const up = new MouseEvent("mouseup", { bubbles: true, cancelable: true, view: window });
      el.dispatchEvent(down);
      el.dispatchEvent(up);

      // Finally, call click() as a last resort (some browsers ignore it for security reasons).
      try { el.click(); } catch (e) { /* ignore */ }
    } catch (err) {
      // If everything fails, at least focus the element so user can interact manually.
      try { el.focus(); } catch {}
      console.warn("IconOverlayInput: could not open native picker", err);
    }
  };

  const wrapper = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "100%",
  };

  const buttonStyle = {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: "translateY(-50%)",
    width: 28,
    height: 28,
    padding: 4,
    borderRadius: 6,
    border: "none",
    background: "transparent",
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const mergedInputStyle = { ...inputStyle, paddingRight: inputStyle?.paddingRight ?? 44, boxSizing: "border-box" };

  const svg =
    type === "time" ? (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ) : (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    );

  return (
    <div style={wrapper}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-label={ariaLabel || name}
        style={mergedInputStyle}
      />
      <button type="button" aria-label={`Open ${type} picker`} onClick={handleIconClick} style={buttonStyle}>
        {svg}
      </button>
    </div>
  );
}

export default function RecruiterForm() {
  const [formData, setFormData] = useState({
    candidateName: "",
    candidateLocation: "",
    workSite: "",
    interviewDate: "",
    interviewTime: "",
    interviewLevel: "",
    role: "",
    totalExp: "",
    relevantExp: "",
    interviewerName: "",
  });

  const [generatedLink, setGeneratedLink] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleGenerateLink = () => {
    const id = Date.now().toString();
    localStorage.setItem(id, JSON.stringify(formData));
    const link = `${window.location.origin}/interview/${id}`;
    setGeneratedLink(link);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedLink);
      alert("Link copied to clipboard!");
    } catch {
      const ta = document.createElement("textarea");
      ta.value = generatedLink;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      alert("Link copied to clipboard!");
    }
  };

  // Styles tuned to fit three columns comfortably
  const headerStyle = {
    background: "#d97706",
    color: "#fff",
    padding: "12px 18px",
    fontWeight: 700,
    borderRadius: 6,
    textAlign: "center",
    marginBottom: 16,
  };

  const cardBg = "#0b1220";
  const labelStyle = { color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontSize: 14, fontWeight: 600 };
  const inputStyle = {
    background: "#0f1724",
    color: "#fff",
    border: "1px solid #374151",
    padding: "8px 10px",
    paddingRight: 44, // ensure room for icon overlay
    borderRadius: 6,
    width: "100%",
    boxSizing: "border-box",
  };

  const cardContentGrid = {
    display: "grid",
    gridTemplateColumns: "160px 1fr",
    rowGap: 12,
    columnGap: 12,
    alignItems: "center",
  };

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center", padding: "28px 20px" }}>
      <div style={{ width: "100%", maxWidth: 1200 }}>
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Recruiter Form</h2>

        <div style={headerStyle}>Recruiters to fill</div>

        <style>{`
          .three-col { display: grid; gap: 16px; grid-template-columns: 1fr; }
          @media (min-width: 720px) {
            .three-col { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          }

          /* Neutralize webkit native indicator (we use overlay button) */
          input[type="date"]::-webkit-calendar-picker-indicator,
          input[type="time"]::-webkit-calendar-picker-indicator {
            opacity: 0;
            -webkit-appearance: none;
            display: block;
            width: 18px;
            height: 18px;
          }

          /* hint for Firefox native controls */
          input[type="date"],
          input[type="time"],
          select {
            color-scheme: dark;
          }

          input, select, textarea {
            caret-color: #fff;
          }

          select { -moz-appearance: none; appearance: none; }
        `}</style>

        <div className="three-col" style={{ marginTop: 8 }}>
          <div style={{ background: cardBg, padding: 18, borderRadius: 8 }}>
            <div style={cardContentGrid}>
              <label style={labelStyle}>Candidate Name</label>
              <input name="candidateName" value={formData.candidateName} onChange={handleChange} placeholder="Candidate name" style={inputStyle} />

              <label style={labelStyle}>Candidate Location</label>
              <input name="candidateLocation" value={formData.candidateLocation} onChange={handleChange} placeholder="Location" style={inputStyle} />

              <label style={labelStyle}>Work Site</label>
              <input name="workSite" value={formData.workSite} onChange={handleChange} placeholder="Onsite / Remote" style={inputStyle} />
            </div>
          </div>

          <div style={{ background: cardBg, padding: 18, borderRadius: 8 }}>
            <div style={cardContentGrid}>
              <label style={labelStyle}>Interview Date</label>
              <IconOverlayInput type="date" name="interviewDate" value={formData.interviewDate} onChange={handleChange} placeholder="" inputStyle={inputStyle} ariaLabel="Interview date" />

              <label style={labelStyle}>Interview Time</label>
              <IconOverlayInput type="time" name="interviewTime" value={formData.interviewTime} onChange={handleChange} placeholder="" inputStyle={inputStyle} ariaLabel="Interview time" />

              <label style={labelStyle}>Interview Level</label>
              <select name="interviewLevel" value={formData.interviewLevel} onChange={handleChange} style={inputStyle}>
                <option value="">Choose an item.</option>
                <option value="Junior">Junior</option>
                <option value="Mid">Mid</option>
                <option value="Senior">Senior</option>
              </select>

              <label style={labelStyle}>Role</label>
              <input name="role" value={formData.role} onChange={handleChange} placeholder="Role" style={inputStyle} />
            </div>
          </div>

          <div style={{ background: cardBg, padding: 18, borderRadius: 8 }}>
            <div style={cardContentGrid}>
              <label style={labelStyle}>Total Experience</label>
              <input name="totalExp" value={formData.totalExp} onChange={handleChange} placeholder="e.g., 5y" style={inputStyle} />

              <label style={labelStyle}>Relevant Experience</label>
              <input name="relevantExp" value={formData.relevantExp} onChange={handleChange} placeholder="e.g., 3y" style={inputStyle} />

              <label style={labelStyle}>Interviewer Name</label>
              <input name="interviewerName" value={formData.interviewerName} onChange={handleChange} placeholder="Interviewer" style={inputStyle} />
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: 18 }}>
          <button
            onClick={handleGenerateLink}
            style={{
              background: "#2563eb",
              color: "#fff",
              padding: "10px 18px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
            }}
          >
            Generate Link
          </button>
        </div>

        {generatedLink && (
          <div style={{ marginTop: 18, textAlign: "center", background: "#f1f5f9", padding: 12, borderRadius: 8 }}>
            <p style={{ fontWeight: 600, color: "#0f172a" }}>Interview Link:</p>
            <a href={generatedLink} target="_blank" rel="noopener noreferrer" style={{ display: "block", color: "#2563eb", wordBreak: "break-all", textDecoration: "underline", marginBottom: 8 }}>
              {generatedLink}
            </a>
            <button onClick={copyToClipboard} style={{ background: "#111827", color: "#fff", padding: "8px 12px", borderRadius: 6, border: "none" }}>
              Copy Link
            </button>
          </div>
        )}
      </div>
    </div>
  );
}