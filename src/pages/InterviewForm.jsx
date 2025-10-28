// import { useParams } from "react-router-dom";
// import { useState } from "react";
// import { exportToWord } from "../utils/exportToWord";

// export default function InterviewForm() {
//   const { id } = useParams();
//   const recruiterData = JSON.parse(localStorage.getItem(id));

//   const [formData, setFormData] = useState({
//     skill1: "",
//     skill2: "",
//     skill3: "",
//     problemSolving: "",
//     communication: "",
//     adaptability: "",
//     cultureFit: "",
//     qualifiedRole: "",
//     qualifiedCompany: "",
//     comments: "",
//   });

//   if (!recruiterData) {
//     return (
//       <div className="p-10 text-center text-red-600 text-lg font-semibold">
//         ⚠️ Invalid or missing recruiter link data.
//       </div>
//     );
//   }

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleDownload = () => {
//     const fullData = { recruiterData, interviewerData: formData };
//     exportToWord(fullData);
//   };

//   return (
//     <div className="container">
//       <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
//         Interview Feedback Form
//       </h2>

//       {/* 🧩 Recruiter Info */}
//       <section className="mb-10">
//         <h3 className="text-xl font-semibold border-b pb-2 mb-4">
//           Recruiter Info
//         </h3>

//         <div className="grid">
//           {Object.entries(recruiterData).map(([key, value]) => (
//             <div key={key}>
//               <label className="block text-gray-700 font-semibold mb-1 capitalize">
//                 {key.replace(/([A-Z])/g, " $1")}
//               </label>
//               <input
//                 readOnly
//                 value={value}
//                 className="border w-full p-2 rounded bg-gray-100"
//               />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 🧠 Interview Details */}
//       <section className="mb-10">
//         <h3 className="text-xl font-semibold border-b pb-2 mb-4">
//           Interview Details
//         </h3>
//         <div className="grid">
//           {["skill1", "skill2", "skill3", "problemSolving"].map((field) => (
//             <div key={field}>
//               <label className="block text-gray-700 font-semibold mb-1 capitalize">
//                 {field.replace(/([A-Z])/g, " $1")}
//               </label>
//               <textarea
//                 name={field}
//                 value={formData[field]}
//                 onChange={handleChange}
//                 className="border w-full p-2 rounded min-h-[80px]"
//               />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 💬 Communication & Soft Skills */}
//       <section className="mb-10">
//         <h3 className="text-xl font-semibold border-b pb-2 mb-4">
//           Communication & Soft Skills
//         </h3>
//         <div className="grid">
//           {["communication", "adaptability", "cultureFit"].map((field) => (
//             <div key={field}>
//               <label className="block text-gray-700 font-semibold mb-1 capitalize">
//                 {field.replace(/([A-Z])/g, " $1")}
//               </label>
//               <textarea
//                 name={field}
//                 value={formData[field]}
//                 onChange={handleChange}
//                 className="border w-full p-2 rounded min-h-[80px]"
//               />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ✅ Qualification */}
//       <section className="mb-10">
//         <h3 className="text-xl font-semibold border-b pb-2 mb-4">
//           Qualification
//         </h3>
//         <div className="grid">
//           <div>
//             <label className="block text-gray-700 font-semibold mb-1">
//               Qualified for Role (Y/N)
//             </label>
//             <select
//               name="qualifiedRole"
//               value={formData.qualifiedRole}
//               onChange={handleChange}
//               className="border w-full p-2 rounded"
//             >
//               <option value="">Select</option>
//               <option>Yes</option>
//               <option>No</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-gray-700 font-semibold mb-1">
//               Qualified for Company (Y/N)
//             </label>
//             <select
//               name="qualifiedCompany"
//               value={formData.qualifiedCompany}
//               onChange={handleChange}
//               className="border w-full p-2 rounded"
//             >
//               <option value="">Select</option>
//               <option>Yes</option>
//               <option>No</option>
//             </select>
//           </div>
//         </div>
//       </section>

//       {/* 📝 Comments */}
//       <section className="mb-10">
//         <h3 className="text-xl font-semibold border-b pb-2 mb-4">
//           Overall Interview Comments
//         </h3>
//         <textarea
//           name="comments"
//           value={formData.comments}
//           onChange={handleChange}
//           className="border w-full p-3 rounded min-h-[120px]"
//           placeholder="Add your final observations and feedback..."
//         />
//       </section>

//       <div className="text-center">
//         <button
//           onClick={handleDownload}
//           className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700"
//         >
//           Download as Word
//         </button>
//       </div>
//     </div>
//   );
// }

// //Working version below:
// import { useParams } from "react-router-dom";
// import { useState } from "react";
// import { exportToWord } from "../utils/exportToWord";

// export default function InterviewForm() {
//   const { id } = useParams();
//   const recruiterData = JSON.parse(localStorage.getItem(id));

//   const [formData, setFormData] = useState({
//     // skill labels
//     skill1: "",
//     skill2: "",
//     skill3: "",
//     skill4: "",
//     skill5: "",
//     problemSolving: "",

//     // ratings + pros/cons
//     skill1_rating: "",
//     skill1_pros: "",
//     skill1_cons: "",
//     skill2_rating: "",
//     skill2_pros: "",
//     skill2_cons: "",
//     skill3_rating: "",
//     skill3_pros: "",
//     skill3_cons: "",
//     skill4_rating: "",
//     skill4_pros: "",
//     skill4_cons: "",
//     skill5_rating: "",
//     skill5_pros: "",
//     skill5_cons: "",

//     problemSolving_rating: "",
//     problemSolving_pros: "",
//     problemSolving_cons: "",

//     communication_rating: "",
//     communication_pros: "",
//     communication_cons: "",

//     adaptability_rating: "",
//     adaptability_pros: "",
//     adaptability_cons: "",

//     cultureFit_rating: "",
//     cultureFit_pros: "",
//     cultureFit_cons: "",

//     // qualification / suggestions
//     qualifiedRole: "",
//     qualifiedRoleReason: "",
//     qualifiedCompany: "",
//     qualifiedCompanyReason: "",
//     suggestedLevel: "",
//     suggestedLevelReason: "",
//     bestRole: "",
//     bestRoleReason: "",

//     // overall comments
//     comments: "",
//   });

//   if (!recruiterData) {
//     return (
//       <div className="p-10 text-center text-red-600 text-lg font-semibold">
//         ⚠️ Invalid or missing recruiter link data.
//       </div>
//     );
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((s) => ({ ...s, [name]: value }));
//   };

//   const handleDownload = () => {
//     const fullData = { recruiterData, interviewerData: formData };
//     exportToWord(fullData);
//   };

//   const ratingOptions = (
//     <>
//       <option value="">Choose an item.</option>
//       <option value="1">1 — Needs Significant Improvement</option>
//       <option value="2">2</option>
//       <option value="3">3 — Meets Expectations</option>
//       <option value="4">4</option>
//       <option value="5">5 — Exceptional</option>
//     </>
//   );

//   // Styling that matches RecruiterForm
//   const pageWrapper = { width: "100%", display: "flex", justifyContent: "center", padding: "28px 20px" };
//   const innerMax = { width: "100%", maxWidth: 1200 };
//   const cardBg = "#0b1220";
//   const labelLight = { color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontSize: 14, fontWeight: 600 };
//   const inputDark = {
//     background: "#0f1724",
//     color: "#fff",
//     border: "1px solid #374151",
//     padding: "8px 10px",
//     paddingRight: 36,
//     borderRadius: 6,
//     width: "100%",
//     boxSizing: "border-box",
//     minWidth: 0,
//   };
//   const cardGrid = { display: "grid", gridTemplateColumns: "140px 1fr", rowGap: 12, columnGap: 12, alignItems: "center" };

//   return (
//     <div style={pageWrapper}>
//       <div style={innerMax}>
//         <h2 className="text-3xl font-bold text-blue-700 mb-6">Interview Feedback Form</h2>

//         {/* Recruiter Info: three dark cards (matches RecruiterForm) */}
//         <section style={{ marginBottom: 18 }}>
//           <h3 className="text-xl font-semibold mb-3">Recruiter Info</h3>

//           <style>{`
//             .three-col { display: grid; gap: 16px; grid-template-columns: 1fr; }
//             @media (min-width: 720px) {
//               .three-col { grid-template-columns: repeat(3, minmax(0, 1fr)); }
//             }
//             /* prevent overflow */
//             .three-col > * { min-width: 0; }
//           `}</style>

//           <div className="three-col" style={{ marginTop: 8 }}>
//             <div style={{ background: cardBg, padding: 18, borderRadius: 8 }}>
//               <div style={cardGrid}>
//                 <label style={labelLight}>Candidate Name</label>
//                 <input readOnly value={recruiterData.candidateName || ""} style={inputDark} />

//                 <label style={labelLight}>Candidate Location</label>
//                 <input readOnly value={recruiterData.candidateLocation || ""} style={inputDark} />

//                 <label style={labelLight}>Work Site</label>
//                 <input readOnly value={recruiterData.workSite || ""} style={inputDark} />
//               </div>
//             </div>

//             <div style={{ background: cardBg, padding: 18, borderRadius: 8 }}>
//               <div style={cardGrid}>
//                 <label style={labelLight}>Interview Date</label>
//                 <input readOnly value={recruiterData.interviewDate || ""} style={inputDark} />

//                 <label style={labelLight}>Interview Time</label>
//                 <input readOnly value={recruiterData.interviewTime || ""} style={inputDark} />

//                 <label style={labelLight}>Interview Level</label>
//                 <input readOnly value={recruiterData.interviewLevel || ""} style={inputDark} />

//                 <label style={labelLight}>Role</label>
//                 <input readOnly value={recruiterData.role || ""} style={inputDark} />
//               </div>
//             </div>

//             <div style={{ background: cardBg, padding: 18, borderRadius: 8 }}>
//               <div style={cardGrid}>
//                 <label style={labelLight}>Total Experience</label>
//                 <input readOnly value={recruiterData.totalExp || ""} style={inputDark} />

//                 <label style={labelLight}>Relevant Experience</label>
//                 <input readOnly value={recruiterData.relevantExp || ""} style={inputDark} />

//                 <label style={labelLight}>Interviewer Name</label>
//                 <input readOnly value={recruiterData.interviewerName || ""} style={inputDark} />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Interview details: convert each block to same dark card style */}
//         <section style={{ marginBottom: 18 }}>
//           <h3 className="text-xl font-semibold mb-3">Interview Details</h3>

//           <div style={{ display: "grid", gap: 16 }}>
//             {[1, 2, 3, 4, 5].map((n) => {
//               const key = `skill${n}`;
//               return (
//                 <div key={key} style={{ background: cardBg, padding: 18, borderRadius: 8 }}>
//                   <div style={{ display: "grid", gridTemplateColumns: "1fr", rowGap: 10 }}>
//                     <label style={{ color: "#cbd5e1", fontWeight: 700 }}>Skill {n} (label)</label>
//                     <input
//                       name={key}
//                       value={formData[key]}
//                       onChange={handleChange}
//                       placeholder={`Skill ${n} (e.g. Data Structures)`}
//                       style={inputDark}
//                     />

//                     <label style={{ color: "#cbd5e1", fontWeight: 700 }}>Rating</label>
//                     <select name={`${key}_rating`} value={formData[`${key}_rating`]} onChange={handleChange} style={inputDark}>
//                       {ratingOptions}
//                     </select>

//                     <label style={{ color: "#cbd5e1", fontWeight: 700 }}>Areas did well (Pros)</label>
//                     <textarea name={`${key}_pros`} value={formData[`${key}_pros`]} onChange={handleChange} rows={3} style={{ ...inputDark, minHeight: 72 }} />

//                     <label style={{ color: "#cbd5e1", fontWeight: 700 }}>Areas for improvement (Cons)</label>
//                     <textarea name={`${key}_cons`} value={formData[`${key}_cons`]} onChange={handleChange} rows={3} style={{ ...inputDark, minHeight: 72 }} />
//                   </div>
//                 </div>
//               );
//             })}

//             {/* Problem solving block */}
//             <div style={{ background: cardBg, padding: 18, borderRadius: 8 }}>
//               <div style={{ display: "grid", rowGap: 10 }}>
//                 <label style={{ color: "#cbd5e1", fontWeight: 700 }}>Problem Solving / Critical Thinking</label>
//                 <textarea name="problemSolving" value={formData.problemSolving} onChange={handleChange} rows={3} style={{ ...inputDark, minHeight: 72 }} />

//                 <label style={{ color: "#cbd5e1", fontWeight: 700 }}>Rating</label>
//                 <select name="problemSolving_rating" value={formData.problemSolving_rating} onChange={handleChange} style={inputDark}>
//                   {ratingOptions}
//                 </select>

//                 <label style={{ color: "#cbd5e1", fontWeight: 700 }}>Pros</label>
//                 <textarea name="problemSolving_pros" value={formData.problemSolving_pros} onChange={handleChange} rows={3} style={{ ...inputDark, minHeight: 72 }} />

//                 <label style={{ color: "#cbd5e1", fontWeight: 700 }}>Cons</label>
//                 <textarea name="problemSolving_cons" value={formData.problemSolving_cons} onChange={handleChange} rows={3} style={{ ...inputDark, minHeight: 72 }} />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Communication & soft skills */}
//         <section style={{ marginBottom: 18 }}>
//           <h3 className="text-xl font-semibold mb-3">Communication & Soft Skills</h3>

//           <div style={{ display: "grid", gap: 16 }}>
//             {[
//               { key: "communication", label: "Communication" },
//               { key: "adaptability", label: "Adaptability" },
//               { key: "cultureFit", label: "Culture Fit" },
//             ].map(({ key, label }) => (
//               <div key={key} style={{ background: cardBg, padding: 18, borderRadius: 8 }}>
//                 <div style={{ display: "grid", rowGap: 10 }}>
//                   <label style={{ color: "#cbd5e1", fontWeight: 700 }}>{label}</label>

//                   <label style={{ color: "#cbd5e1", fontWeight: 600 }}>Rating</label>
//                   <select name={`${key}_rating`} value={formData[`${key}_rating`]} onChange={handleChange} style={inputDark}>
//                     {ratingOptions}
//                   </select>

//                   <label style={{ color: "#cbd5e1", fontWeight: 600 }}>Pros</label>
//                   <textarea name={`${key}_pros`} value={formData[`${key}_pros`]} onChange={handleChange} rows={3} style={{ ...inputDark, minHeight: 72 }} />

//                   <label style={{ color: "#cbd5e1", fontWeight: 600 }}>Cons</label>
//                   <textarea name={`${key}_cons`} value={formData[`${key}_cons`]} onChange={handleChange} rows={3} style={{ ...inputDark, minHeight: 72 }} />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Qualification & suggestions */}
//         <section style={{ marginBottom: 18 }}>
//           <h3 className="text-xl font-semibold mb-3">Qualification & Suggestions</h3>

//           <div style={{ display: "grid", gap: 16 }}>
//             <div style={{ background: cardBg, padding: 18, borderRadius: 8 }}>
//               <label style={{ color: "#cbd5e1", fontWeight: 700 }}>Qualified for Role (Y/N)</label>
//               <select name="qualifiedRole" value={formData.qualifiedRole} onChange={handleChange} style={{ ...inputDark, marginTop: 8 }}>
//                 <option value="">Select</option>
//                 <option value="Yes">Yes</option>
//                 <option value="No">No</option>
//               </select>
//               <label style={{ color: "#cbd5e1", fontWeight: 700, marginTop: 12 }}>Provide Reasoning (Must)</label>
//               <textarea name="qualifiedRoleReason" value={formData.qualifiedRoleReason} onChange={handleChange} rows={3} style={{ ...inputDark, minHeight: 72, marginTop: 8 }} />
//             </div>

//             <div style={{ background: cardBg, padding: 18, borderRadius: 8 }}>
//               <label style={{ color: "#cbd5e1", fontWeight: 700 }}>Qualified for Company — Other Teams (Y/N)</label>
//               <select name="qualifiedCompany" value={formData.qualifiedCompany} onChange={handleChange} style={{ ...inputDark, marginTop: 8 }}>
//                 <option value="">Select</option>
//                 <option value="Yes">Yes</option>
//                 <option value="No">No</option>
//               </select>
//               <label style={{ color: "#cbd5e1", fontWeight: 700, marginTop: 12 }}>Provide Reasoning (Must)</label>
//               <textarea name="qualifiedCompanyReason" value={formData.qualifiedCompanyReason} onChange={handleChange} rows={3} style={{ ...inputDark, minHeight: 72, marginTop: 8 }} />
//             </div>

//             <div style={{ background: cardBg, padding: 18, borderRadius: 8 }}>
//               <label style={{ color: "#cbd5e1", fontWeight: 700 }}>Suggested level of Candidate</label>
//               <select name="suggestedLevel" value={formData.suggestedLevel} onChange={handleChange} style={{ ...inputDark, marginTop: 8 }}>
//                 <option value="">Select</option>
//                 <option value="Junior">Junior</option>
//                 <option value="Mid">Mid</option>
//                 <option value="Senior">Senior</option>
//               </select>
//               <label style={{ color: "#cbd5e1", fontWeight: 700, marginTop: 12 }}>Provide Reasoning (Must)</label>
//               <textarea name="suggestedLevelReason" value={formData.suggestedLevelReason} onChange={handleChange} rows={3} style={{ ...inputDark, minHeight: 72, marginTop: 8 }} />
//             </div>

//             <div style={{ background: cardBg, padding: 18, borderRadius: 8 }}>
//               <label style={{ color: "#cbd5e1", fontWeight: 700 }}>Best suited Role (Post Interview)</label>
//               <input name="bestRole" value={formData.bestRole} onChange={handleChange} placeholder="Suggested role" style={{ ...inputDark, marginTop: 8 }} />
//               <label style={{ color: "#cbd5e1", fontWeight: 700, marginTop: 12 }}>Provide Reasoning (Must)</label>
//               <textarea name="bestRoleReason" value={formData.bestRoleReason} onChange={handleChange} rows={3} style={{ ...inputDark, minHeight: 72, marginTop: 8 }} />
//             </div>
//           </div>
//         </section>

//         {/* Overall comments & download */}
//         <section style={{ marginBottom: 18 }}>
//           <h3 className="text-xl font-semibold mb-3">Overall Interview Comments</h3>
//           <textarea name="comments" value={formData.comments} onChange={handleChange} placeholder="Add your final observations and feedback..." rows={6} style={{ ...inputDark, minHeight: 120 }} />
//         </section>

//         <div style={{ display: "flex", justifyContent: "center" }}>
//           <button onClick={handleDownload} style={{ background: "#16a34a", color: "#fff", padding: "10px 18px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 700 }}>
//             Download as Word
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useParams } from "react-router-dom";
// import { useState } from "react";
// import { exportToWord } from "../utils/exportToWord";

// export default function InterviewForm() {
//   const { id } = useParams();
//   const recruiterData = JSON.parse(localStorage.getItem(id));

//   const [formData, setFormData] = useState({
//     // skills
//     skill1: "",
//     skill2: "",
//     skill3: "",
//     skill4: "",
//     skill5: "",
//     problemSolving: "",

//     // ratings + pros/cons for skills
//     skill1_rating: "",
//     skill1_pros: "",
//     skill1_cons: "",
//     skill2_rating: "",
//     skill2_pros: "",
//     skill2_cons: "",
//     skill3_rating: "",
//     skill3_pros: "",
//     skill3_cons: "",
//     skill4_rating: "",
//     skill4_pros: "",
//     skill4_cons: "",
//     skill5_rating: "",
//     skill5_pros: "",
//     skill5_cons: "",

//     problemSolving_rating: "",
//     problemSolving_pros: "",
//     problemSolving_cons: "",

//     // communication (editable example content)
//     communication_rating: "",
//     communication_pros:
// `• Clearly explained technical concepts to the panel and asked clarifying questions.
// • Listened actively and responded thoughtfully to follow-up questions.
// • Articulated ideas in a structured and concise manner.
// • Demonstrated confidence and professionalism in verbal and written communication.
// • Adapted communication style for different audiences (technical/non-technical).`,
//     communication_cons:
// `• Answers were sometimes vague or lacked detail.
// • Struggled to communicate ideas clearly under pressure.
// • Did not ask clarifying questions when unsure.
// • Had difficulty tailoring responses to the audience.
// • Occasionally interrupted others or did not allow for dialogue.`,

//     // adaptability / culture fit
//     adaptability_rating: "",
//     adaptability_pros:
// `• Quickly adjusted to new questions and changing interview topics.
// • Demonstrated openness to feedback and willingness to learn.
// • Provided examples of successfully navigating change in previous roles.
// • Remained calm and resourceful when faced with unexpected challenges.`,
//     adaptability_cons:
// `• Hesitated when asked to switch topics or adapt to new scenarios.
// • Needed more time to process changes or unfamiliar situations.
// • Was resistant to feedback or alternative approaches.
// • Struggled to provide examples of adapting to change in past roles.`,

//     cultureFit_rating: "",
//     cultureFit_pros:
// `• Showed strong alignment with company values of collaboration, innovation, and integrity.
// • Demonstrated a growth mindset and eagerness to contribute to a positive workplace culture.
// • Provided examples of fostering inclusion and teamwork in previous environments.`,
//     cultureFit_cons:
// `• Seemed uncomfortable with the fast-paced, dynamic environment.
// • Showed limited interest in team collaboration or cross-functional work.
// • Responses suggested a preference for working independently rather than as part of a team.`,

//     // live coding
//     liveCodingLink: "",
//     liveCodingObservation: "",

//     // qualification & suggestions
//     qualifiedRole: "",
//     qualifiedRoleReason: "",
//     qualifiedCompany: "",
//     qualifiedCompanyReason: "",
//     suggestedLevel: "",
//     suggestedLevelReason: "",
//     bestRole: "",
//     bestRoleReason: "",

//     // overall comments
//     comments: "",
//   });

//   if (!recruiterData) {
//     return (
//       <div className="p-10 text-center text-red-600 text-lg font-semibold">
//         ⚠️ Invalid or missing recruiter link data.
//       </div>
//     );
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((s) => ({ ...s, [name]: value }));
//   };

//   const handleDownload = () => {
//     const fullData = { recruiterData, interviewerData: formData };
//     exportToWord(fullData);
//   };

//   const ratingOptions = (
//     <>
//       <option value="">Choose an item.</option>
//       <option value="1">1 — Needs Significant Improvement</option>
//       <option value="2">2</option>
//       <option value="3">3 — Meets Expectations</option>
//       <option value="4">4</option>
//       <option value="5">5 — Exceptional</option>
//     </>
//   );

//   const bestRoleOptions = [
//     "Choose an item.",
//     "SDE-Backend",
//     "SDE-Fullstack",
//     "SDE-FrontEnd",
//     "Data Engineer",
//     "Data Analyst",
//     "AI Engineer",
//     "SDET",
//     "Manual Test Engineer",
//     "DevOps Engineer",
//     "SRE",
//     "Technical PM",
//     "Non-Tech PM",
//     "D365-App Developer",
//     "D365 - Technical - Support",
//     "D365 - Functional - Support",
//     "D365 - Platform Developer",
//     "Inside-Sales",
//     "Marketing",
//     "L2/L3 - Technical Support",
//     "L1 Technical Support",
//     "Graphics Designer",
//     "UX/UI Designer",
//     "Audit & Compliance",
//     "Biz Dev / Sales",
//     "Talent Acquisition",
//     "Other"
//   ];

//   // Shared styles
//   const pageWrapper = { width: "100%", display: "flex", justifyContent: "center", padding: "28px 20px" };
//   const innerMax = { width: "100%", maxWidth: 1200 };
//   const cardBg = "#0b1220";
//   const inputDark = {
//     background: "#0f1724",
//     color: "#fff",
//     border: "1px solid #374151",
//     padding: "8px 10px",
//     borderRadius: 6,
//     width: "100%",
//     boxSizing: "border-box",
//     minWidth: 0,
//   };

//   // Header style copied from Recruiter form's orange bar so titles match
//   const headerStyle = {
//     background: "#d97706",
//     color: "#fff",
//     padding: "12px 18px",
//     fontWeight: 700,
//     borderRadius: 6,
//     textAlign: "center",
//     marginBottom: 12,
//   };

//   return (
//     <div style={pageWrapper}>
//       <div style={innerMax}>
//         <h2 className="text-3xl font-bold text-blue-700 mb-6">Interview Feedback Form</h2>

//         {/* Recruiter Info - now using the orange header bar style */}
//         <section style={{ marginBottom: 18 }}>
//           <div style={headerStyle}>Recruiter Info</div>

//           <style>{`
//             .three-col { display: grid; gap: 16px; grid-template-columns: 1fr; }
//             @media (min-width: 720px) {
//               .three-col { grid-template-columns: repeat(3, minmax(0, 1fr)); }
//             }
//             .three-col > * { min-width: 0; }
//           `}</style>

//           <div className="three-col" style={{ marginTop: 8 }}>
//             <div style={{ background: cardBg, padding: 18, borderRadius: 8 }}>
//               <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", rowGap: 12, columnGap: 12, alignItems: "center" }}>
//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Candidate Name</label>
//                 <input readOnly value={recruiterData.candidateName || ""} style={inputDark} />

//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Candidate Location</label>
//                 <input readOnly value={recruiterData.candidateLocation || ""} style={inputDark} />

//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Work Site</label>
//                 <input readOnly value={recruiterData.workSite || ""} style={inputDark} />
//               </div>
//             </div>

//             <div style={{ background: cardBg, padding: 18, borderRadius: 8 }}>
//               <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", rowGap: 12, columnGap: 12, alignItems: "center" }}>
//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Interview Date</label>
//                 <input readOnly value={recruiterData.interviewDate || ""} style={inputDark} />

//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Interview Time</label>
//                 <input readOnly value={recruiterData.interviewTime || ""} style={inputDark} />

//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Interview Level</label>
//                 <input readOnly value={recruiterData.interviewLevel || ""} style={inputDark} />

//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Role</label>
//                 <input readOnly value={recruiterData.role || ""} style={inputDark} />
//               </div>
//             </div>

//             <div style={{ background: cardBg, padding: 18, borderRadius: 8 }}>
//               <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", rowGap: 12, columnGap: 12, alignItems: "center" }}>
//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Total Experience</label>
//                 <input readOnly value={recruiterData.totalExp || ""} style={inputDark} />

//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Relevant Experience</label>
//                 <input readOnly value={recruiterData.relevantExp || ""} style={inputDark} />

//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Interviewer Name</label>
//                 <input readOnly value={recruiterData.interviewerName || ""} style={inputDark} />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Interview details table - heading uses same orange bar style now */}
//         <section style={{ marginBottom: 18 }}>
//           <div style={headerStyle}>Interview Details</div>

//           <style>{`
//             .if-table-wrap { overflow-x: auto; border-radius: 8px; }
//             .if-table { width: 100%; border-collapse: collapse; min-width: 900px; background: ${cardBg}; color: #fff; }
//             .if-table th { background: #0284c7; color: #fff; padding: 12px; text-align: left; border-bottom: 2px solid rgba(255,255,255,0.06); font-weight: 700; }
//             .if-table td { padding: 8px; vertical-align: top; border-bottom: 1px solid rgba(255,255,255,0.04); }
//             .if-left-col { width: 30%; max-width: 360px; padding-left: 12px; font-weight: 700; color: #e6eef6; }
//             .if-input, .if-select, .if-textarea { background: #0f1724; color: #fff; border: 1px solid #374151; padding: 8px; border-radius: 6px; width: 100%; box-sizing: border-box; min-width: 0; }
//             .if-textarea { min-height: 64px; resize: vertical; padding: 10px; }
//             .if-rating-cell { width: 12%; max-width: 140px; }
//             .if-pros-cons { width: 29%; }
//             .if-table td .if-input, .if-table td .if-textarea, .if-table td .if-select { min-width: 0; }
//           `}</style>

//           <div className="if-table-wrap" style={{ marginTop: 8 }}>
//             <table className="if-table" role="table" aria-label="Interview details table">
//               <thead>
//                 <tr>
//                   <th>Interview Details (Mention the skills interviewed and add more than 5 if required)</th>
//                   <th className="if-rating-cell">Ratings (1 to 5)<br/><small style={{ fontWeight: 400 }}>1 = Needs Significant improvement, 3 = meets expectations, 5 = Exceptional</small></th>
//                   <th className="if-pros-cons">Areas did Well (Pros)</th>
//                   <th className="if-pros-cons">Areas of Improvement (Cons)</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {[1,2,3,4,5].map((n) => {
//                   const key = `skill${n}`;
//                   return (
//                     <tr key={key}>
//                       <td className="if-left-col">
//                         <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
//                           <div style={{ minWidth: 72, color: "#cbd5e1", fontWeight: 700 }}>Skill {n}:</div>
//                           <input
//                             name={key}
//                             value={formData[key]}
//                             onChange={handleChange}
//                             placeholder={`e.g. Skill ${n}`}
//                             className="if-input"
//                           />
//                         </div>
//                       </td>

//                       <td>
//                         <select name={`${key}_rating`} value={formData[`${key}_rating`]} onChange={handleChange} className="if-select">
//                           {ratingOptions}
//                         </select>
//                       </td>

//                       <td>
//                         <textarea name={`${key}_pros`} value={formData[`${key}_pros`]} onChange={handleChange} className="if-textarea" placeholder="Details Must" />
//                       </td>

//                       <td>
//                         <textarea name={`${key}_cons`} value={formData[`${key}_cons`]} onChange={handleChange} className="if-textarea" placeholder="Details Must" />
//                       </td>
//                     </tr>
//                   );
//                 })}

//                 {/* Problem Solving */}
//                 <tr>
//                   <td className="if-left-col">
//                     <div style={{ minWidth: 72, color: "#cbd5e1", fontWeight: 700 }}>Problem Solving / Critical Thinking</div>
//                   </td>

//                   <td>
//                     <select name="problemSolving_rating" value={formData.problemSolving_rating} onChange={handleChange} className="if-select">
//                       {ratingOptions}
//                     </select>
//                   </td>

//                   <td>
//                     <textarea name="problemSolving_pros" value={formData.problemSolving_pros} onChange={handleChange} className="if-textarea" placeholder="Pros" />
//                   </td>

//                   <td>
//                     <textarea name="problemSolving_cons" value={formData.problemSolving_cons} onChange={handleChange} className="if-textarea" placeholder="Cons" />
//                   </td>
//                 </tr>

//                 {/* Live coding / platform link */}
//                 <tr>
//                   <td className="if-left-col">
//                     <div style={{ minWidth: 72, color: "#cbd5e1", fontWeight: 700 }}>Live Coding Platform Link (if applicable)</div>
//                     <input name="liveCodingLink" value={formData.liveCodingLink} onChange={handleChange} className="if-input" style={{ marginTop: 8 }} placeholder="https://..." />
//                   </td>

//                   <td>
//                     <div style={{ color: "#cbd5e1", fontWeight: 600 }}>—</div>
//                   </td>

//                   <td colSpan={2}>
//                     <textarea name="liveCodingObservation" value={formData.liveCodingObservation} onChange={handleChange} className="if-textarea" placeholder="Observation during live coding interview (if applicable)" />
//                   </td>
//                 </tr>

//                 {/* Communication (editable examples) */}
//                 <tr>
//                   <td className="if-left-col">
//                     <div style={{ minWidth: 72, color: "#cbd5e1", fontWeight: 700 }}>Communication:</div>
//                   </td>

//                   <td>
//                     <select name="communication_rating" value={formData.communication_rating} onChange={handleChange} className="if-select">
//                       {ratingOptions}
//                     </select>
//                   </td>

//                   <td>
//                     <textarea
//                       name="communication_pros"
//                       value={formData.communication_pros}
//                       onChange={handleChange}
//                       className="if-textarea"
//                       rows={6}
//                     />
//                   </td>

//                   <td>
//                     <textarea
//                       name="communication_cons"
//                       value={formData.communication_cons}
//                       onChange={handleChange}
//                       className="if-textarea"
//                       rows={6}
//                     />
//                   </td>
//                 </tr>

//                 {/* Adaptability */}
//                 <tr>
//                   <td className="if-left-col">
//                     <div style={{ minWidth: 72, color: "#cbd5e1", fontWeight: 700 }}>Adaptability:</div>
//                   </td>

//                   <td>
//                     <select name="adaptability_rating" value={formData.adaptability_rating} onChange={handleChange} className="if-select">
//                       {ratingOptions}
//                     </select>
//                   </td>

//                   <td>
//                     <textarea
//                       name="adaptability_pros"
//                       value={formData.adaptability_pros}
//                       onChange={handleChange}
//                       className="if-textarea"
//                       rows={6}
//                     />
//                   </td>

//                   <td>
//                     <textarea
//                       name="adaptability_cons"
//                       value={formData.adaptability_cons}
//                       onChange={handleChange}
//                       className="if-textarea"
//                       rows={6}
//                     />
//                   </td>
//                 </tr>

//                 {/* WCT Culture Fit */}
//                 <tr>
//                   <td className="if-left-col">
//                     <div style={{ minWidth: 72, color: "#cbd5e1", fontWeight: 700 }}>WCT Culture Fit</div>
//                   </td>

//                   <td>
//                     <select name="cultureFit_rating" value={formData.cultureFit_rating} onChange={handleChange} className="if-select">
//                       {ratingOptions}
//                     </select>
//                   </td>

//                   <td>
//                     <textarea
//                       name="cultureFit_pros"
//                       value={formData.cultureFit_pros}
//                       onChange={handleChange}
//                       className="if-textarea"
//                       rows={6}
//                     />
//                   </td>

//                   <td>
//                     <textarea
//                       name="cultureFit_cons"
//                       value={formData.cultureFit_cons}
//                       onChange={handleChange}
//                       className="if-textarea"
//                       rows={6}
//                     />
//                   </td>
//                 </tr>

//                 {/* Qualification / Suggestions rows */}
//                 <tr>
//                   <td className="if-left-col">Qualified for the role (Y/N)</td>
//                   <td>
//                     <select name="qualifiedRole" value={formData.qualifiedRole} onChange={handleChange} className="if-select">
//                       <option value="">Choose an item.</option>
//                       <option value="Yes">Yes</option>
//                       <option value="No">No</option>
//                     </select>
//                   </td>
//                   <td colSpan={2}>
//                     <textarea name="qualifiedRoleReason" value={formData.qualifiedRoleReason} onChange={handleChange} className="if-textarea" placeholder="Provide Reasoning (Must)" />
//                   </td>
//                 </tr>

//                 <tr>
//                   <td className="if-left-col">Qualified for Company — Other Teams (Y/N)</td>
//                   <td>
//                     <select name="qualifiedCompany" value={formData.qualifiedCompany} onChange={handleChange} className="if-select">
//                       <option value="">Choose an item.</option>
//                       <option value="Yes">Yes</option>
//                       <option value="No">No</option>
//                     </select>
//                   </td>
//                   <td colSpan={2}>
//                     <textarea name="qualifiedCompanyReason" value={formData.qualifiedCompanyReason} onChange={handleChange} className="if-textarea" placeholder="Provide Reasoning (Must)" />
//                   </td>
//                 </tr>

//                 <tr>
//                   <td className="if-left-col">Suggested level of Candidate</td>
//                   <td>
//                     <select name="suggestedLevel" value={formData.suggestedLevel} onChange={handleChange} className="if-select">
//                       <option value="">Choose an item.</option>
//                       <option value="Junior">Junior</option>
//                       <option value="Mid">Mid</option>
//                       <option value="Senior">Senior</option>
//                     </select>
//                   </td>
//                   <td colSpan={2}>
//                     <textarea name="suggestedLevelReason" value={formData.suggestedLevelReason} onChange={handleChange} className="if-textarea" placeholder="Provide Reasoning (Must)" />
//                   </td>
//                 </tr>

//                 <tr>
//                   <td className="if-left-col">Best suited Role (post Interview)</td>
//                   <td>
//                     <select
//                       name="bestRole"
//                       value={formData.bestRole}
//                       onChange={handleChange}
//                       className="if-select"
//                       style={{ width: '100%' }}
//                     >
//                       {bestRoleOptions.map((opt, i) => (
//                         <option key={i} value={opt === "Choose an item." ? "" : opt}>
//                           {opt}
//                         </option>
//                       ))}
//                     </select>
//                   </td>
//                   <td colSpan={2}>
//                     <textarea name="bestRoleReason" value={formData.bestRoleReason} onChange={handleChange} className="if-textarea" placeholder="Provide Suggested Role (if different) and Reasoning (Must)" />
//                   </td>
//                 </tr>

//                 {/* Overall Interview Comments row */}
//                 <tr>
//                   <td className="if-left-col">Overall Interview Comments:</td>
//                   <td colSpan={3}>
//                     <textarea name="comments" value={formData.comments} onChange={handleChange} className="if-textarea" placeholder="Add your final observations and feedback..." rows={6} />
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </section>

//         {/* Download */}
//         <div style={{ display: "flex", justifyContent: "center" }}>
//           <button onClick={handleDownload} style={{ background: "#16a34a", color: "#fff", padding: "10px 18px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 700 }}>
//             Download as Word
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



// import { useParams } from "react-router-dom";
// import { useState } from "react";
// import { exportToWord } from "../utils/exportToWord";
// import emailjs from "@emailjs/browser";

// export default function InterviewForm() {
//   const { id } = useParams();
//   const recruiterData = JSON.parse(localStorage.getItem(id));

//   const [formData, setFormData] = useState({
//     // skills
//     skill1: "",
//     skill2: "",
//     skill3: "",
//     skill4: "",
//     skill5: "",
//     problemSolving: "",

//     // ratings + pros/cons for skills
//     skill1_rating: "",
//     skill1_pros: "",
//     skill1_cons: "",
//     skill2_rating: "",
//     skill2_pros: "",
//     skill2_cons: "",
//     skill3_rating: "",
//     skill3_pros: "",
//     skill3_cons: "",
//     skill4_rating: "",
//     skill4_pros: "",
//     skill4_cons: "",
//     skill5_rating: "",
//     skill5_pros: "",
//     skill5_cons: "",

//     problemSolving_rating: "",
//     problemSolving_pros: "",
//     problemSolving_cons: "",

//     // communication (editable example content)
//     communication_rating: "",
//     communication_pros:
// `• Clearly explained technical concepts to the panel and asked clarifying questions.
// • Listened actively and responded thoughtfully to follow-up questions.
// • Articulated ideas in a structured and concise manner.
// • Demonstrated confidence and professionalism in verbal and written communication.
// • Adapted communication style for different audiences (technical/non-technical).`,
//     communication_cons:
// `• Answers were sometimes vague or lacked detail.
// • Struggled to communicate ideas clearly under pressure.
// • Did not ask clarifying questions when unsure.
// • Had difficulty tailoring responses to the audience.
// • Occasionally interrupted others or did not allow for dialogue.`,

//     // adaptability / culture fit
//     adaptability_rating: "",
//     adaptability_pros:
// `• Quickly adjusted to new questions and changing interview topics.
// • Demonstrated openness to feedback and willingness to learn.
// • Provided examples of successfully navigating change in previous roles.
// • Remained calm and resourceful when faced with unexpected challenges.`,
//     adaptability_cons:
// `• Hesitated when asked to switch topics or adapt to new scenarios.
// • Needed more time to process changes or unfamiliar situations.
// • Was resistant to feedback or alternative approaches.
// • Struggled to provide examples of adapting to change in past roles.`,

//     cultureFit_rating: "",
//     cultureFit_pros:
// `• Showed strong alignment with company values of collaboration, innovation, and integrity.
// • Demonstrated a growth mindset and eagerness to contribute to a positive workplace culture.
// • Provided examples of fostering inclusion and teamwork in previous environments.`,
//     cultureFit_cons:
// `• Seemed uncomfortable with the fast-paced, dynamic environment.
// • Showed limited interest in team collaboration or cross-functional work.
// • Responses suggested a preference for working independently rather than as part of a team.`,

//     // live coding
//     liveCodingLink: "",
//     liveCodingObservation: "",

//     // qualification & suggestions
//     qualifiedRole: "",
//     qualifiedRoleReason: "",
//     qualifiedCompany: "",
//     qualifiedCompanyReason: "",
//     suggestedLevel: "",
//     suggestedLevelReason: "",
//     bestRole: "",
//     bestRoleReason: "",

//     // overall comments
//     comments: "",
//   });

//   // EmailJS-related state
//   const [recipientEmail, setRecipientEmail] = useState(recruiterData?.recruiterEmail || "");
//   const [sending, setSending] = useState(false);
//   const [sendStatus, setSendStatus] = useState(""); // success / error message

//   if (!recruiterData) {
//     return (
//       <div className="p-10 text-center text-red-600 text-lg font-semibold">
//         ⚠️ Invalid or missing recruiter link data.
//       </div>
//     );
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((s) => ({ ...s, [name]: value }));
//   };

//   const handleDownload = () => {
//     const fullData = { recruiterData, interviewerData: formData };
//     exportToWord(fullData);
//   };

//   const ratingOptions = (
//     <>
//       <option value="">Choose an item.</option>
//       <option value="1">1 — Needs Significant Improvement</option>
//       <option value="2">2</option>
//       <option value="3">3 — Meets Expectations</option>
//       <option value="4">4</option>
//       <option value="5">5 — Exceptional</option>
//     </>
//   );

//   const bestRoleOptions = [
//     "Choose an item.",
//     "SDE-Backend",
//     "SDE-Fullstack",
//     "SDE-FrontEnd",
//     "Data Engineer",
//     "Data Analyst",
//     "AI Engineer",
//     "SDET",
//     "Manual Test Engineer",
//     "DevOps Engineer",
//     "SRE",
//     "Technical PM",
//     "Non-Tech PM",
//     "D365-App Developer",
//     "D365 - Technical - Support",
//     "D365 - Functional - Support",
//     "D365 - Platform Developer",
//     "Inside-Sales",
//     "Marketing",
//     "L2/L3 - Technical Support",
//     "L1 Technical Support",
//     "Graphics Designer",
//     "UX/UI Designer",
//     "Audit & Compliance",
//     "Biz Dev / Sales",
//     "Talent Acquisition",
//     "Other"
//   ];

//   // Shared styles
//   const pageWrapper = { width: "100%", display: "flex", justifyContent: "center", padding: "28px 20px" };
//   const innerMax = { width: "100%", maxWidth: 1200 };
//   const cardBg = "#0b1220";
//   const inputDark = {
//     background: "#0f1724",
//     color: "#fff",
//     border: "1px solid #374151",
//     padding: "8px 10px",
//     borderRadius: 6,
//     width: "100%",
//     boxSizing: "border-box",
//     minWidth: 0,
//   };

//   // Header style copied from Recruiter form's orange bar so titles match
//   const headerStyle = {
//     background: "#d97706",
//     color: "#fff",
//     padding: "12px 18px",
//     fontWeight: 700,
//     borderRadius: 6,
//     textAlign: "center",
//     marginBottom: 12,
//   };

//   // --- Email helpers ---
//   function escapeHtml(str) {
//     if (!str && str !== 0) return "";
//     return String(str)
//       .replace(/&/g, "&amp;")
//       .replace(/</g, "&lt;")
//       .replace(/>/g, "&gt;")
//       .replace(/"/g, "&quot;")
//       .replace(/'/g, "&#039;");
//   }

//   function nl2br(str) {
//     if (!str && str !== 0) return "";
//     return String(str).replace(/\n/g, "<br/>");
//   }

//   // Build a simple HTML report string for the email/template.
//   // Keep it compact and mostly inline styles so EmailJS/clients will show it.
//   function buildHtmlReport(recruiter, interviewer) {
//     const maxLen = 20000; // protect EmailJS/template size / accidental giant input
//     const parts = [];

//     parts.push(`<div style="font-family: Arial, Helvetica, sans-serif; color:#111; line-height:1.4;">`);
//     parts.push(`<h2 style="background:#0284c7;color:#fff;padding:8px 12px;border-radius:4px;">Interview Feedback — ${escapeHtml(recruiter.candidateName || "Candidate")}</h2>`);

//     // Recruiter metadata
//     parts.push(`<section style="margin-bottom:8px;"><h3 style="margin:6px 0 4px 0;">Recruiter Info</h3>`);
//     parts.push(`<table style="width:100%;border-collapse:collapse;font-size:13px;">`);
//     const rfields = [
//       ["Candidate", recruiter.candidateName],
//       ["Location", recruiter.candidateLocation],
//       ["Work site", recruiter.workSite],
//       ["Interview date", recruiter.interviewDate],
//       ["Interview time", recruiter.interviewTime],
//       ["Interview level", recruiter.interviewLevel],
//       ["Role", recruiter.role],
//       ["Total exp", recruiter.totalExp],
//       ["Relevant exp", recruiter.relevantExp],
//       ["Interviewer name", recruiter.interviewerName],
//     ];
//     rfields.forEach(([label, val]) => {
//       parts.push(`<tr><td style="padding:4px 6px;width:180px;font-weight:600;color:#0b1220;">${escapeHtml(label)}</td><td style="padding:4px 6px;">${escapeHtml(val || "")}</td></tr>`);
//     });
//     parts.push(`</table></section>`);

//     // Skills table
//     parts.push(`<section style="margin-top:8px;"><h3 style="margin:6px 0 4px 0;">Skills & Ratings</h3>`);
//     parts.push(`<table style="width:100%;border-collapse:collapse;font-size:13px;">`);
//     parts.push(`<thead><tr><th style="text-align:left;padding:6px;border-bottom:1px solid #ddd;">Skill</th><th style="text-align:left;padding:6px;border-bottom:1px solid #ddd;">Rating</th><th style="text-align:left;padding:6px;border-bottom:1px solid #ddd;">Pros</th><th style="text-align:left;padding:6px;border-bottom:1px solid #ddd;">Cons</th></tr></thead>`);
//     parts.push(`<tbody>`);
//     for (let n = 1; n <= 5; n++) {
//       const k = `skill${n}`;
//       const rating = interviewer[`${k}_rating`];
//       const pros = interviewer[`${k}_pros`];
//       const cons = interviewer[`${k}_cons`];
//       const label = interviewer[k] || `Skill ${n}`;
//       parts.push(`<tr><td style="padding:6px;vertical-align:top;"><strong>${escapeHtml(label)}</strong></td><td style="padding:6px;vertical-align:top;">${escapeHtml(rating)}</td><td style="padding:6px;vertical-align:top;">${nl2br(escapeHtml(pros))}</td><td style="padding:6px;vertical-align:top;">${nl2br(escapeHtml(cons))}</td></tr>`);
//     }
//     // Problem solving row
//     parts.push(`<tr><td style="padding:6px;vertical-align:top;"><strong>Problem Solving / Critical Thinking</strong></td><td style="padding:6px;vertical-align:top;">${escapeHtml(interviewer.problemSolving_rating)}</td><td style="padding:6px;vertical-align:top;">${nl2br(escapeHtml(interviewer.problemSolving_pros))}</td><td style="padding:6px;vertical-align:top;">${nl2br(escapeHtml(interviewer.problemSolving_cons))}</td></tr>`);

//     parts.push(`</tbody></table></section>`);

//     // Communication / Adaptability / Culture Fit
//     parts.push(`<section style="margin-top:8px;"><h3 style="margin:6px 0 4px 0;">Soft Skills</h3>`);
//     const soft = ["communication", "adaptability", "cultureFit"];
//     soft.forEach((s) => {
//       parts.push(`<div style="margin-bottom:6px;"><strong>${escapeHtml(s.charAt(0).toUpperCase() + s.slice(1))} (Rating: ${escapeHtml(interviewer[`${s}_rating`])})</strong><div style="margin-top:4px;">Pros:<div style="margin-left:8px;">${nl2br(escapeHtml(interviewer[`${s}_pros`]))}</div></div><div style="margin-top:4px;">Cons:<div style="margin-left:8px;">${nl2br(escapeHtml(interviewer[`${s}_cons`]))}</div></div></div>`);
//     });
//     parts.push(`</section>`);

//     // Live coding & qualifications
//     parts.push(`<section style="margin-top:8px;"><h3 style="margin:6px 0 4px 0;">Live Coding & Qualification</h3>`);
//     parts.push(`<div><strong>Live coding link:</strong> ${escapeHtml(interviewer.liveCodingLink || "")}</div>`);
//     parts.push(`<div style="margin-top:6px;"><strong>Live coding observations:</strong><div style="margin-left:8px;">${nl2br(escapeHtml(interviewer.liveCodingObservation))}</div></div>`);
//     parts.push(`<div style="margin-top:6px;"><strong>Qualified for role:</strong> ${escapeHtml(interviewer.qualifiedRole)}<div style="margin-left:8px;">${nl2br(escapeHtml(interviewer.qualifiedRoleReason))}</div></div>`);
//     parts.push(`<div style="margin-top:6px;"><strong>Qualified for company:</strong> ${escapeHtml(interviewer.qualifiedCompany)}<div style="margin-left:8px;">${nl2br(escapeHtml(interviewer.qualifiedCompanyReason))}</div></div>`);
//     parts.push(`<div style="margin-top:6px;"><strong>Suggested level:</strong> ${escapeHtml(interviewer.suggestedLevel)}<div style="margin-left:8px;">${nl2br(escapeHtml(interviewer.suggestedLevelReason))}</div></div>`);
//     parts.push(`<div style="margin-top:6px;"><strong>Best role:</strong> ${escapeHtml(interviewer.bestRole)}<div style="margin-left:8px;">${nl2br(escapeHtml(interviewer.bestRoleReason))}</div></div>`);
//     parts.push(`</section>`);

//     // Overall comments
//     parts.push(`<section style="margin-top:8px;"><h3 style="margin:6px 0 4px 0;">Overall Comments</h3>`);
//     parts.push(`<div style="margin-left:8px;">${nl2br(escapeHtml(interviewer.comments))}</div>`);
//     parts.push(`</section>`);

//     parts.push(`<footer style="margin-top:12px;font-size:12px;color:#666;">Generated by Interview Feedback App</footer>`);
//     parts.push(`</div>`);

//     const html = parts.join("");
//     return html.length > maxLen ? html.slice(0, maxLen) + "<p>...truncated...</p>" : html;
//   }

//   // Send email via EmailJS
//   async function handleSendEmailJS() {
//     setSendStatus("");
//     const to = (recipientEmail || "").trim();
//     if (!to || !/^[\w.+-]+@[\w-]+\.[\w.-]+$/.test(to)) {
//       setSendStatus("Please enter a valid recipient email address.");
//       return;
//     }

//     // Read EmailJS params from Vite env variables
//     const serviceId = import.meta.env.VITE_EMAILJS_SERVICE;
//     const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE;
//     const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC;

//     if (!serviceId || !templateId || !publicKey) {
//       setSendStatus("Email service not configured. Please set VITE_EMAILJS_SERVICE, VITE_EMAILJS_TEMPLATE and VITE_EMAILJS_PUBLIC in your .env.");
//       return;
//     }

//     setSending(true);
//     setSendStatus("Sending...");

//     try {
//       const html = buildHtmlReport(recruiterData, formData);

//       const templateParams = {
//         to_email: to,
//         subject: `Interview Feedback — ${recruiterData?.candidateName || "Candidate"}`,
//         message_html: html,
//       };

//       // EmailJS browser send
//       await emailjs.send(serviceId, templateId, templateParams, publicKey);

//       setSendStatus(`Email sent to ${to}. Check inbox/spam.`);
//     } catch (err) {
//       console.error("EmailJS send error:", err);
//       setSendStatus("Failed to send email — check console and EmailJS dashboard for details.");
//     } finally {
//       setSending(false);
//     }
//   }

//   return (
//     <div style={pageWrapper}>
//       <div style={innerMax}>
//         <h2 className="text-3xl font-bold text-blue-700 mb-6">Interview Feedback Form</h2>

//         {/* Recruiter Info - now using the orange header bar style */}
//         <section style={{ marginBottom: 18 }}>
//           <div style={headerStyle}>Recruiter Info</div>

//           <style>{`
//             .three-col { display: grid; gap: 16px; grid-template-columns: 1fr; }
//             @media (min-width: 720px) {
//               .three-col { grid-template-columns: repeat(3, minmax(0, 1fr)); }
//             }
//             .three-col > * { min-width: 0; }
//           `}</style>

//           <div className="three-col" style={{ marginTop: 8 }}>
//             <div style={{ background: cardBg, padding: 18, borderRadius: 8 }}>
//               <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", rowGap: 12, columnGap: 12, alignItems: "center" }}>
//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Candidate Name</label>
//                 <input readOnly value={recruiterData.candidateName || ""} style={inputDark} />

//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Candidate Location</label>
//                 <input readOnly value={recruiterData.candidateLocation || ""} style={inputDark} />

//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Work Site</label>
//                 <input readOnly value={recruiterData.workSite || ""} style={inputDark} />
//               </div>
//             </div>

//             <div style={{ background: cardBg, padding: 18, borderRadius: 8 }}>
//               <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", rowGap: 12, columnGap: 12, alignItems: "center" }}>
//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Interview Date</label>
//                 <input readOnly value={recruiterData.interviewDate || ""} style={inputDark} />

//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Interview Time</label>
//                 <input readOnly value={recruiterData.interviewTime || ""} style={inputDark} />

//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Interview Level</label>
//                 <input readOnly value={recruiterData.interviewLevel || ""} style={inputDark} />

//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Role</label>
//                 <input readOnly value={recruiterData.role || ""} style={inputDark} />
//               </div>
//             </div>

//             <div style={{ background: cardBg, padding: 18, borderRadius: 8 }}>
//               <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", rowGap: 12, columnGap: 12, alignItems: "center" }}>
//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Total Experience</label>
//                 <input readOnly value={recruiterData.totalExp || ""} style={inputDark} />

//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Relevant Experience</label>
//                 <input readOnly value={recruiterData.relevantExp || ""} style={inputDark} />

//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Interviewer Name</label>
//                 <input readOnly value={recruiterData.interviewerName || ""} style={inputDark} />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Interview details table - heading uses same orange bar style now */}
//         <section style={{ marginBottom: 18 }}>
//           <div style={headerStyle}>Interview Details</div>

//           <style>{`
//             .if-table-wrap { overflow-x: auto; border-radius: 8px; }
//             .if-table { width: 100%; border-collapse: collapse; min-width: 900px; background: ${cardBg}; color: #fff; }
//             .if-table th { background: #0284c7; color: #fff; padding: 12px; text-align: left; border-bottom: 2px solid rgba(255,255,255,0.06); font-weight: 700; }
//             .if-table td { padding: 8px; vertical-align: top; border-bottom: 1px solid rgba(255,255,255,0.04); }
//             .if-left-col { width: 30%; max-width: 360px; padding-left: 12px; font-weight: 700; color: #e6eef6; }
//             .if-input, .if-select, .if-textarea { background: #0f1724; color: #fff; border: 1px solid #374151; padding: 8px; border-radius: 6px; width: 100%; box-sizing: border-box; min-width: 0; }
//             .if-textarea { min-height: 64px; resize: vertical; padding: 10px; }
//             .if-rating-cell { width: 12%; max-width: 140px; }
//             .if-pros-cons { width: 29%; }
//             .if-table td .if-input, .if-table td .if-textarea, .if-table td .if-select { min-width: 0; }
//           `}</style>

//           <div className="if-table-wrap" style={{ marginTop: 8 }}>
//             <table className="if-table" role="table" aria-label="Interview details table">
//               <thead>
//                 <tr>
//                   <th>Interview Details (Mention the skills interviewed and add more than 5 if required)</th>
//                   <th className="if-rating-cell">Ratings (1 to 5)<br/><small style={{ fontWeight: 400 }}>1 = Needs Significant improvement, 3 = meets expectations, 5 = Exceptional</small></th>
//                   <th className="if-pros-cons">Areas did Well (Pros)</th>
//                   <th className="if-pros-cons">Areas of Improvement (Cons)</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {[1,2,3,4,5].map((n) => {
//                   const key = `skill${n}`;
//                   return (
//                     <tr key={key}>
//                       <td className="if-left-col">
//                         <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
//                           <div style={{ minWidth: 72, color: "#cbd5e1", fontWeight: 700 }}>Skill {n}:</div>
//                           <input
//                             name={key}
//                             value={formData[key]}
//                             onChange={handleChange}
//                             placeholder={`e.g. Skill ${n}`}
//                             className="if-input"
//                           />
//                         </div>
//                       </td>

//                       <td>
//                         <select name={`${key}_rating`} value={formData[`${key}_rating`]} onChange={handleChange} className="if-select">
//                           {ratingOptions}
//                         </select>
//                       </td>

//                       <td>
//                         <textarea name={`${key}_pros`} value={formData[`${key}_pros`]} onChange={handleChange} className="if-textarea" placeholder="Details Must" />
//                       </td>

//                       <td>
//                         <textarea name={`${key}_cons`} value={formData[`${key}_cons`]} onChange={handleChange} className="if-textarea" placeholder="Details Must" />
//                       </td>
//                     </tr>
//                   );
//                 })}

//                 {/* Problem Solving */}
//                 <tr>
//                   <td className="if-left-col">
//                     <div style={{ minWidth: 72, color: "#cbd5e1", fontWeight: 700 }}>Problem Solving / Critical Thinking</div>
//                   </td>

//                   <td>
//                     <select name="problemSolving_rating" value={formData.problemSolving_rating} onChange={handleChange} className="if-select">
//                       {ratingOptions}
//                     </select>
//                   </td>

//                   <td>
//                     <textarea name="problemSolving_pros" value={formData.problemSolving_pros} onChange={handleChange} className="if-textarea" placeholder="Pros" />
//                   </td>

//                   <td>
//                     <textarea name="problemSolving_cons" value={formData.problemSolving_cons} onChange={handleChange} className="if-textarea" placeholder="Cons" />
//                   </td>
//                 </tr>

//                 {/* Live coding / platform link */}
//                 <tr>
//                   <td className="if-left-col">
//                     <div style={{ minWidth: 72, color: "#cbd5e1", fontWeight: 700 }}>Live Coding Platform Link (if applicable)</div>
//                     <input name="liveCodingLink" value={formData.liveCodingLink} onChange={handleChange} className="if-input" style={{ marginTop: 8 }} placeholder="https://..." />
//                   </td>

//                   <td>
//                     <div style={{ color: "#cbd5e1", fontWeight: 600 }}>—</div>
//                   </td>

//                   <td colSpan={2}>
//                     <textarea name="liveCodingObservation" value={formData.liveCodingObservation} onChange={handleChange} className="if-textarea" placeholder="Observation during live coding interview (if applicable)" />
//                   </td>
//                 </tr>

//                 {/* Communication (editable examples) */}
//                 <tr>
//                   <td className="if-left-col">
//                     <div style={{ minWidth: 72, color: "#cbd5e1", fontWeight: 700 }}>Communication:</div>
//                   </td>

//                   <td>
//                     <select name="communication_rating" value={formData.communication_rating} onChange={handleChange} className="if-select">
//                       {ratingOptions}
//                     </select>
//                   </td>

//                   <td>
//                     <textarea
//                       name="communication_pros"
//                       value={formData.communication_pros}
//                       onChange={handleChange}
//                       className="if-textarea"
//                       rows={6}
//                     />
//                   </td>

//                   <td>
//                     <textarea
//                       name="communication_cons"
//                       value={formData.communication_cons}
//                       onChange={handleChange}
//                       className="if-textarea"
//                       rows={6}
//                     />
//                   </td>
//                 </tr>

//                 {/* Adaptability */}
//                 <tr>
//                   <td className="if-left-col">
//                     <div style={{ minWidth: 72, color: "#cbd5e1", fontWeight: 700 }}>Adaptability:</div>
//                   </td>

//                   <td>
//                     <select name="adaptability_rating" value={formData.adaptability_rating} onChange={handleChange} className="if-select">
//                       {ratingOptions}
//                     </select>
//                   </td>

//                   <td>
//                     <textarea
//                       name="adaptability_pros"
//                       value={formData.adaptability_pros}
//                       onChange={handleChange}
//                       className="if-textarea"
//                       rows={6}
//                     />
//                   </td>

//                   <td>
//                     <textarea
//                       name="adaptability_cons"
//                       value={formData.adaptability_cons}
//                       onChange={handleChange}
//                       className="if-textarea"
//                       rows={6}
//                     />
//                   </td>
//                 </tr>

//                 {/* WCT Culture Fit */}
//                 <tr>
//                   <td className="if-left-col">
//                     <div style={{ minWidth: 72, color: "#cbd5e1", fontWeight: 700 }}>WCT Culture Fit</div>
//                   </td>

//                   <td>
//                     <select name="cultureFit_rating" value={formData.cultureFit_rating} onChange={handleChange} className="if-select">
//                       {ratingOptions}
//                     </select>
//                   </td>

//                   <td>
//                     <textarea
//                       name="cultureFit_pros"
//                       value={formData.cultureFit_pros}
//                       onChange={handleChange}
//                       className="if-textarea"
//                       rows={6}
//                     />
//                   </td>

//                   <td>
//                     <textarea
//                       name="cultureFit_cons"
//                       value={formData.cultureFit_cons}
//                       onChange={handleChange}
//                       className="if-textarea"
//                       rows={6}
//                     />
//                   </td>
//                 </tr>

//                 {/* Qualification / Suggestions rows */}
//                 <tr>
//                   <td className="if-left-col">Qualified for the role (Y/N)</td>
//                   <td>
//                     <select name="qualifiedRole" value={formData.qualifiedRole} onChange={handleChange} className="if-select">
//                       <option value="">Choose an item.</option>
//                       <option value="Yes">Yes</option>
//                       <option value="No">No</option>
//                     </select>
//                   </td>
//                   <td colSpan={2}>
//                     <textarea name="qualifiedRoleReason" value={formData.qualifiedRoleReason} onChange={handleChange} className="if-textarea" placeholder="Provide Reasoning (Must)" />
//                   </td>
//                 </tr>

//                 <tr>
//                   <td className="if-left-col">Qualified for Company — Other Teams (Y/N)</td>
//                   <td>
//                     <select name="qualifiedCompany" value={formData.qualifiedCompany} onChange={handleChange} className="if-select">
//                       <option value="">Choose an item.</option>
//                       <option value="Yes">Yes</option>
//                       <option value="No">No</option>
//                     </select>
//                   </td>
//                   <td colSpan={2}>
//                     <textarea name="qualifiedCompanyReason" value={formData.qualifiedCompanyReason} onChange={handleChange} className="if-textarea" placeholder="Provide Reasoning (Must)" />
//                   </td>
//                 </tr>

//                 <tr>
//                   <td className="if-left-col">Suggested level of Candidate</td>
//                   <td>
//                     <select name="suggestedLevel" value={formData.suggestedLevel} onChange={handleChange} className="if-select">
//                       <option value="">Choose an item.</option>
//                       <option value="Junior">Junior</option>
//                       <option value="Mid">Mid</option>
//                       <option value="Senior">Senior</option>
//                     </select>
//                   </td>
//                   <td colSpan={2}>
//                     <textarea name="suggestedLevelReason" value={formData.suggestedLevelReason} onChange={handleChange} className="if-textarea" placeholder="Provide Reasoning (Must)" />
//                   </td>
//                 </tr>

//                 <tr>
//                   <td className="if-left-col">Best suited Role (post Interview)</td>
//                   <td>
//                     <select
//                       name="bestRole"
//                       value={formData.bestRole}
//                       onChange={handleChange}
//                       className="if-select"
//                       style={{ width: '100%' }}
//                     >
//                       {bestRoleOptions.map((opt, i) => (
//                         <option key={i} value={opt === "Choose an item." ? "" : opt}>
//                           {opt}
//                         </option>
//                       ))}
//                     </select>
//                   </td>
//                   <td colSpan={2}>
//                     <textarea name="bestRoleReason" value={formData.bestRoleReason} onChange={handleChange} className="if-textarea" placeholder="Provide Suggested Role (if different) and Reasoning (Must)" />
//                   </td>
//                 </tr>

//                 {/* Overall Interview Comments row */}
//                 <tr>
//                   <td className="if-left-col">Overall Interview Comments:</td>
//                   <td colSpan={3}>
//                     <textarea name="comments" value={formData.comments} onChange={handleChange} className="if-textarea" placeholder="Add your final observations and feedback..." rows={6} />
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </section>

//         {/* Email + Download actions */}
//         <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 12, flexWrap: "wrap" }}>
//           <div style={{ width: 420, maxWidth: "100%" }}>
//             <label style={{ display: "block", marginBottom: 6, color: "#374151", fontWeight: 600 }}>Send report to (email)</label>
//             <input
//               value={recipientEmail}
//               onChange={(e) => setRecipientEmail(e.target.value)}
//               placeholder="recipient@example.com"
//               style={{ padding: "10px 12px", borderRadius: 8, border: "1px solid #cbd5e1", width: "100%", boxSizing: "border-box" }}
//             />
//             <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
//               <button
//                 onClick={handleSendEmailJS}
//                 disabled={sending}
//                 style={{ background: "#2563eb", color: "#fff", padding: "10px 14px", borderRadius: 8, border: "none", cursor: sending ? "not-allowed" : "pointer", fontWeight: 700 }}
//               >
//                 {sending ? "Sending..." : "Send Email"}
//               </button>

//               <button
//                 onClick={handleDownload}
//                 style={{ background: "#16a34a", color: "#fff", padding: "10px 14px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 700 }}
//               >
//                 Download as Word
//               </button>
//             </div>

//             {sendStatus && (
//               <div style={{ marginTop: 8, color: sendStatus.startsWith("Email sent") ? "#065f46" : "#b91c1c", fontWeight: 600 }}>
//                 {sendStatus}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useParams } from "react-router-dom";
// import { useState } from "react";
// import { exportToWord } from "../utils/exportToWord";
// import emailjs from "@emailjs/browser";

// export default function InterviewForm() {
//   const { id } = useParams();
//   const recruiterData = JSON.parse(localStorage.getItem(id));

//   const [formData, setFormData] = useState({
//     // skills
//     skill1: "",
//     skill2: "",
//     skill3: "",
//     skill4: "",
//     skill5: "",
//     problemSolving: "",

//     // ratings + pros/cons for skills
//     skill1_rating: "",
//     skill1_pros: "",
//     skill1_cons: "",
//     skill2_rating: "",
//     skill2_pros: "",
//     skill2_cons: "",
//     skill3_rating: "",
//     skill3_pros: "",
//     skill3_cons: "",
//     skill4_rating: "",
//     skill4_pros: "",
//     skill4_cons: "",
//     skill5_rating: "",
//     skill5_pros: "",
//     skill5_cons: "",

//     problemSolving_rating: "",
//     problemSolving_pros: "",
//     problemSolving_cons: "",

//     // communication example content
//     communication_rating: "",
//     communication_pros:
// `• Clearly explained technical concepts to the panel and asked clarifying questions.
// • Listened actively and responded thoughtfully to follow-up questions.
// • Articulated ideas in a structured and concise manner.
// • Demonstrated confidence and professionalism in verbal and written communication.
// • Adapted communication style for different audiences (technical/non-technical).`,
//     communication_cons:
// `• Answers were sometimes vague or lacked detail.
// • Struggled to communicate ideas clearly under pressure.
// • Did not ask clarifying questions when unsure.
// • Had difficulty tailoring responses to the audience.
// • Occasionally interrupted others or did not allow for dialogue.`,

//     adaptability_rating: "",
//     adaptability_pros:
// `• Quickly adjusted to new questions and changing interview topics.
// • Demonstrated openness to feedback and willingness to learn.
// • Provided examples of successfully navigating change in previous roles.
// • Remained calm and resourceful when faced with unexpected challenges.`,
//     adaptability_cons:
// `• Hesitated when asked to switch topics or adapt to new scenarios.
// • Needed more time to process changes or unfamiliar situations.
// • Was resistant to feedback or alternative approaches.
// • Struggled to provide examples of adapting to change in past roles.`,

//     cultureFit_rating: "",
//     cultureFit_pros:
// `• Showed strong alignment with company values of collaboration, innovation, and integrity.
// • Demonstrated a growth mindset and eagerness to contribute to a positive workplace culture.
// • Provided examples of fostering inclusion and teamwork in previous environments.`,
//     cultureFit_cons:
// `• Seemed uncomfortable with the fast-paced, dynamic environment.
// • Showed limited interest in team collaboration or cross-functional work.
// • Responses suggested a preference for working independently rather than as part of a team.`,

//     // live coding
//     liveCodingLink: "",
//     liveCodingObservation: "",

//     // qualification & suggestions
//     qualifiedRole: "",
//     qualifiedRoleReason: "",
//     qualifiedCompany: "",
//     qualifiedCompanyReason: "",
//     suggestedLevel: "",
//     suggestedLevelReason: "",
//     bestRole: "",
//     bestRoleReason: "",

//     // overall comments
//     comments: "",
//   });

//   // EmailJS-related state
//   const [recipientEmail, setRecipientEmail] = useState(recruiterData?.recruiterEmail || "");
//   const [sending, setSending] = useState(false);
//   const [sendStatus, setSendStatus] = useState(""); // success / error message

//   if (!recruiterData) {
//     return (
//       <div className="p-10 text-center text-red-600 text-lg font-semibold">
//         ⚠️ Invalid or missing recruiter link data.
//       </div>
//     );
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((s) => ({ ...s, [name]: value }));
//   };

//   const handleDownload = () => {
//     const fullData = { recruiterData, interviewerData: formData };
//     exportToWord(fullData);
//   };

//   const ratingOptions = (
//     <>
//       <option value="">Choose an item.</option>
//       <option value="1">1 — Needs Significant Improvement</option>
//       <option value="2">2</option>
//       <option value="3">3 — Meets Expectations</option>
//       <option value="4">4</option>
//       <option value="5">5 — Exceptional</option>
//     </>
//   );

//   const bestRoleOptions = [
//     "Choose an item.",
//     "SDE-Backend",
//     "SDE-Fullstack",
//     "SDE-FrontEnd",
//     "Data Engineer",
//     "Data Analyst",
//     "AI Engineer",
//     "SDET",
//     "Manual Test Engineer",
//     "DevOps Engineer",
//     "SRE",
//     "Technical PM",
//     "Non-Tech PM",
//     "D365-App Developer",
//     "D365 - Technical - Support",
//     "D365 - Functional - Support",
//     "D365 - Platform Developer",
//     "Inside-Sales",
//     "Marketing",
//     "L2/L3 - Technical Support",
//     "L1 Technical Support",
//     "Graphics Designer",
//     "UX/UI Designer",
//     "Audit & Compliance",
//     "Biz Dev / Sales",
//     "Talent Acquisition",
//     "Other"
//   ];

//   // Shared styles
//   const pageWrapper = { width: "100%", display: "flex", justifyContent: "center", padding: "28px 20px" };
//   const innerMax = { width: "100%", maxWidth: 1200 };
//   const cardBg = "#0b1220";
//   const inputDark = {
//     background: "#0f1724",
//     color: "#fff",
//     border: "1px solid #374151",
//     padding: "8px 10px",
//     borderRadius: 6,
//     width: "100%",
//     boxSizing: "border-box",
//     minWidth: 0,
//   };

//   // Header style copied from Recruiter form's orange bar so titles match
//   const headerStyle = {
//     background: "#d97706",
//     color: "#fff",
//     padding: "12px 18px",
//     fontWeight: 700,
//     borderRadius: 6,
//     textAlign: "center",
//     marginBottom: 12,
//   };

//   // --- Helpers used previously ---
//   function escapeHtml(str) {
//     if (!str && str !== 0) return "";
//     return String(str)
//       .replace(/&/g, "&amp;")
//       .replace(/</g, "&lt;")
//       .replace(/>/g, "&gt;")
//       .replace(/"/g, "&quot;")
//       .replace(/'/g, "&#039;");
//   }

//   function nl2br(str) {
//     if (!str && str !== 0) return "";
//     return String(str).replace(/\n/g, "<br/>");
//   }

//   function buildHtmlReport(recruiter, interviewer) {
//     // existing HTML builder (keeps inline styles)
//     const maxLen = 20000;
//     const parts = [];
//     parts.push(`<div style="font-family: Arial, Helvetica, sans-serif; color:#111; line-height:1.4;">`);
//     parts.push(`<h2 style="background:#0284c7;color:#fff;padding:8px 12px;border-radius:4px;">Interview Feedback — ${escapeHtml(recruiter.candidateName || "Candidate")}</h2>`);

//     parts.push(`<section style="margin-bottom:8px;"><h3 style="margin:6px 0 4px 0;">Recruiter Info</h3>`);
//     parts.push(`<table style="width:100%;border-collapse:collapse;font-size:13px;">`);
//     const rfields = [
//       ["Candidate", recruiter.candidateName],
//       ["Location", recruiter.candidateLocation],
//       ["Work site", recruiter.workSite],
//       ["Interview date", recruiter.interviewDate],
//       ["Interview time", recruiter.interviewTime],
//       ["Interview level", recruiter.interviewLevel],
//       ["Role", recruiter.role],
//       ["Total exp", recruiter.totalExp],
//       ["Relevant exp", recruiter.relevantExp],
//       ["Interviewer name", recruiter.interviewerName],
//     ];
//     rfields.forEach(([label, val]) => {
//       parts.push(`<tr><td style="padding:4px 6px;width:180px;font-weight:600;color:#0b1220;">${escapeHtml(label)}</td><td style="padding:4px 6px;">${escapeHtml(val || "")}</td></tr>`);
//     });
//     parts.push(`</table></section>`);

//     parts.push(`<section style="margin-top:8px;"><h3 style="margin:6px 0 4px 0;">Skills & Ratings</h3>`);
//     parts.push(`<table style="width:100%;border-collapse:collapse;font-size:13px;"><thead><tr><th style="text-align:left;padding:6px;border-bottom:1px solid #ddd;">Skill</th><th style="text-align:left;padding:6px;border-bottom:1px solid #ddd;">Rating</th><th style="text-align:left;padding:6px;border-bottom:1px solid #ddd;">Pros</th><th style="text-align:left;padding:6px;border-bottom:1px solid #ddd;">Cons</th></tr></thead><tbody>`);
//     for (let n = 1; n <= 5; n++) {
//       const k = `skill${n}`;
//       const rating = interviewer[`${k}_rating`];
//       const pros = interviewer[`${k}_pros`];
//       const cons = interviewer[`${k}_cons`];
//       const label = interviewer[k] || `Skill ${n}`;
//       parts.push(`<tr><td style="padding:6px;vertical-align:top;"><strong>${escapeHtml(label)}</strong></td><td style="padding:6px;vertical-align:top;">${escapeHtml(rating)}</td><td style="padding:6px;vertical-align:top;">${nl2br(escapeHtml(pros))}</td><td style="padding:6px;vertical-align:top;">${nl2br(escapeHtml(cons))}</td></tr>`);
//     }
//     parts.push(`<tr><td style="padding:6px;vertical-align:top;"><strong>Problem Solving / Critical Thinking</strong></td><td style="padding:6px;vertical-align:top;">${escapeHtml(interviewer.problemSolving_rating)}</td><td style="padding:6px;vertical-align:top;">${nl2br(escapeHtml(interviewer.problemSolving_pros))}</td><td style="padding:6px;vertical-align:top;">${nl2br(escapeHtml(interviewer.problemSolving_cons))}</td></tr>`);
//     parts.push(`</tbody></table></section>`);

//     parts.push(`<section style="margin-top:8px;"><h3 style="margin:6px 0 4px 0;">Soft Skills</h3>`);
//     const soft = ["communication", "adaptability", "cultureFit"];
//     soft.forEach((s) => {
//       parts.push(`<div style="margin-bottom:6px;"><strong>${escapeHtml(s.charAt(0).toUpperCase() + s.slice(1))} (Rating: ${escapeHtml(interviewer[`${s}_rating`])})</strong><div style="margin-top:4px;">Pros:<div style="margin-left:8px;">${nl2br(escapeHtml(interviewer[`${s}_pros`]))}</div></div><div style="margin-top:4px;">Cons:<div style="margin-left:8px;">${nl2br(escapeHtml(interviewer[`${s}_cons`]))}</div></div></div>`);
//     });
//     parts.push(`</section>`);

//     parts.push(`<section style="margin-top:8px;"><h3 style="margin:6px 0 4px 0;">Live Coding & Qualification</h3>`);
//     parts.push(`<div><strong>Live coding link:</strong> ${escapeHtml(interviewer.liveCodingLink || "")}</div>`);
//     parts.push(`<div style="margin-top:6px;"><strong>Live coding observations:</strong><div style="margin-left:8px;">${nl2br(escapeHtml(interviewer.liveCodingObservation))}</div></div>`);
//     parts.push(`<div style="margin-top:6px;"><strong>Qualified for role:</strong> ${escapeHtml(interviewer.qualifiedRole)}<div style="margin-left:8px;">${nl2br(escapeHtml(interviewer.qualifiedRoleReason))}</div></div>`);
//     parts.push(`<div style="margin-top:6px;"><strong>Qualified for company:</strong> ${escapeHtml(interviewer.qualifiedCompany)}<div style="margin-left:8px;">${nl2br(escapeHtml(interviewer.qualifiedCompanyReason))}</div></div>`);
//     parts.push(`<div style="margin-top:6px;"><strong>Suggested level:</strong> ${escapeHtml(interviewer.suggestedLevel)}<div style="margin-left:8px;">${nl2br(escapeHtml(interviewer.suggestedLevelReason))}</div></div>`);
//     parts.push(`<div style="margin-top:6px;"><strong>Best role:</strong> ${escapeHtml(interviewer.bestRole)}<div style="margin-left:8px;">${nl2br(escapeHtml(interviewer.bestRoleReason))}</div></div>`);
//     parts.push(`</section>`);

//     parts.push(`<section style="margin-top:8px;"><h3 style="margin:6px 0 4px 0;">Overall Comments</h3>`);
//     parts.push(`<div style="margin-left:8px;">${nl2br(escapeHtml(interviewer.comments))}</div>`);
//     parts.push(`</section>`);

//     parts.push(`<footer style="margin-top:12px;font-size:12px;color:#666;">Generated by Interview Feedback App</footer>`);
//     parts.push(`</div>`);

//     const html = parts.join("");
//     return html.length > maxLen ? html.slice(0, maxLen) + "<p>...truncated...</p>" : html;
//   }

//   // --- New: capture current page DOM & local style blocks ---
//   // Returns a self-contained HTML string (uses style blocks found inside the component and in head that reference known classes).
//   function capturePageHtml() {
//   try {
//     if (typeof document === "undefined") return null;
//     const root = document.getElementById("interview-root");
//     if (!root) return null;

//     // Deep clone the visible component so we can modify it safely
//     const clone = root.cloneNode(true);

//     // Replace form controls with plain, non-editable text nodes
//     const controls = clone.querySelectorAll("input, textarea, select, [contenteditable]");
//     controls.forEach((el) => {
//       try {
//         const tag = el.tagName.toLowerCase();
//         let text = "";

//         if (tag === "select") {
//           // For selects, use the selected option's label (textContent)
//           const selected = el.querySelector("option:checked");
//           text = selected ? (selected.textContent || "") : "";
//         } else if (tag === "textarea") {
//           text = el.value ?? el.textContent ?? "";
//         } else if (tag === "input") {
//           const type = (el.getAttribute("type") || "").toLowerCase();
//           if (type === "checkbox" || type === "radio") {
//             text = el.checked ? (el.value || "Yes") : "No";
//           } else {
//             text = el.value ?? el.getAttribute("value") ?? "";
//           }
//         } else {
//           // contenteditable or unknown - read textContent
//           text = el.textContent ?? "";
//         }

//         // Create a wrapper DIV to preserve newlines and spacing
//         const wrapper = document.createElement("div");
//         wrapper.style.whiteSpace = "pre-wrap";
//         // keep a minimal, readable style so the exported HTML is legible in email clients
//         wrapper.style.fontFamily = "Arial, Helvetica, sans-serif";
//         wrapper.style.fontSize = "13px";
//         wrapper.textContent = text;

//         // Replace the control with the wrapper
//         el.replaceWith(wrapper);
//       } catch (innerErr) {
//         // best-effort: if replacement fails for one element, ignore and continue
//         // console errors are useful during dev only
//         // eslint-disable-next-line no-console
//         console.error("capturePageHtml control replace error", innerErr);
//       }
//     });

//     // Remove any leftover interactive attributes
//     clone.querySelectorAll("[contenteditable]").forEach((n) => n.removeAttribute("contenteditable"));

//     // Collect <style> blocks defined inside the component root (component-level <style> tags)
//     let collectedStyles = "";
//     clone.querySelectorAll("style").forEach((s) => {
//       collectedStyles += s.innerHTML + "\n";
//     });

//     // Also pick up head <style> blocks that reference our component classes (best-effort)
//     const classHints = ["if-table", "three-col", ".if-table", ".three-col", "if-textarea", "if-input"];
//     document.querySelectorAll("style").forEach((s) => {
//       try {
//         const text = s.innerHTML || "";
//         for (const hint of classHints) {
//           if (text.indexOf(hint) !== -1) {
//             collectedStyles += text + "\n";
//             break;
//           }
//         }
//       } catch (e) {
//         // ignore
//       }
//     });

//     // Wrap with light container and inserted styles
//     const wrapperStart = `<div style="font-family: Arial, Helvetica, sans-serif; color:#111; line-height:1.4;">`;
//     const styleTag = collectedStyles ? `<style>${collectedStyles}</style>` : "";
//     const content = clone.innerHTML;

//     const final = `${wrapperStart}${styleTag}${content}</div>`;

//     // Safety size guard
//     const max = 150000;
//     return final.length > max ? final.slice(0, max) + "<p>...truncated...</p>" : final;
//   } catch (err) {
//     // eslint-disable-next-line no-console
//     console.error("capturePageHtml error", err);
//     return null;
//   }
// }

//   // Send email via EmailJS. This now tries to send the captured page HTML first.
//   async function handleSendEmailJS() {
//     setSendStatus("");
//     const to = (recipientEmail || "").trim();
//     if (!to || !/^[\w.+-]+@[\w-]+\.[\w.-]+$/.test(to)) {
//       setSendStatus("Please enter a valid recipient email address.");
//       return;
//     }

//     const serviceId = import.meta.env.VITE_EMAILJS_SERVICE;
//     const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE;
//     const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC;

//     if (!serviceId || !templateId || !publicKey) {
//       setSendStatus("Email service not configured. Please set VITE_EMAILJS_SERVICE, VITE_EMAILJS_TEMPLATE and VITE_EMAILJS_PUBLIC in your .env.");
//       return;
//     }

//     setSending(true);
//     setSendStatus("Sending...");

//     try {
//       // Try to capture the page DOM + style blocks. If failed, fallback to our HTML generator.
//       const pageHtml = capturePageHtml();
//       const htmlToSend = pageHtml || buildHtmlReport(recruiterData, formData);

//       const templateParams = {
//         to_email: to,
//         subject: `Interview Feedback — ${recruiterData?.candidateName || "Candidate"}`,
//         message_html: htmlToSend,
//         show_to_email: false,
//       };

//       await emailjs.send(serviceId, templateId, templateParams, publicKey);

//       setSendStatus(`Email sent to ${to}. Check inbox/spam.`);
//     } catch (err) {
//       console.error("EmailJS send error:", err);
//       setSendStatus("Failed to send email — check console and EmailJS dashboard for details.");
//     } finally {
//       setSending(false);
//     }
//   }

//   return (
//     <div style={pageWrapper}>
//       <div style={innerMax} id="interview-root">
//         <h2 className="text-3xl font-bold text-blue-700 mb-6">Interview Feedback Form</h2>

//         {/* Recruiter Info - now using the orange header bar style */}
//         <section style={{ marginBottom: 18 }}>
//           <div style={headerStyle}>Recruiter Info</div>

//           <style>{`
//             .three-col { display: grid; gap: 16px; grid-template-columns: 1fr; }
//             @media (min-width: 720px) {
//               .three-col { grid-template-columns: repeat(3, minmax(0, 1fr)); }
//             }
//             .three-col > * { min-width: 0; }
//           `}</style>

//           <div className="three-col" style={{ marginTop: 8 }}>
//             <div style={{ background: cardBg, padding: 18, borderRadius: 8 }}>
//               <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", rowGap: 12, columnGap: 12, alignItems: "center" }}>
//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Candidate Name</label>
//                 <input readOnly value={recruiterData.candidateName || ""} style={inputDark} />

//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Candidate Location</label>
//                 <input readOnly value={recruiterData.candidateLocation || ""} style={inputDark} />

//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Work Site</label>
//                 <input readOnly value={recruiterData.workSite || ""} style={inputDark} />
//               </div>
//             </div>

//             <div style={{ background: cardBg, padding: 18, borderRadius: 8 }}>
//               <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", rowGap: 12, columnGap: 12, alignItems: "center" }}>
//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Interview Date</label>
//                 <input readOnly value={recruiterData.interviewDate || ""} style={inputDark} />

//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Interview Time</label>
//                 <input readOnly value={recruiterData.interviewTime || ""} style={inputDark} />

//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Interview Level</label>
//                 <input readOnly value={recruiterData.interviewLevel || ""} style={inputDark} />

//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Role</label>
//                 <input readOnly value={recruiterData.role || ""} style={inputDark} />
//               </div>
//             </div>

//             <div style={{ background: cardBg, padding: 18, borderRadius: 8 }}>
//               <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", rowGap: 12, columnGap: 12, alignItems: "center" }}>
//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Total Experience</label>
//                 <input readOnly value={recruiterData.totalExp || ""} style={inputDark} />

//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Relevant Experience</label>
//                 <input readOnly value={recruiterData.relevantExp || ""} style={inputDark} />

//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Interviewer Name</label>
//                 <input readOnly value={recruiterData.interviewerName || ""} style={inputDark} />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Interview details table - heading uses same orange bar style now */}
//         <section style={{ marginBottom: 18 }}>
//           <div style={headerStyle}>Interview Details</div>

//           <style>{`
//             .if-table-wrap { overflow-x: auto; border-radius: 8px; }
//             .if-table { width: 100%; border-collapse: collapse; min-width: 900px; background: ${cardBg}; color: #fff; }
//             .if-table th { background: #0284c7; color: #fff; padding: 12px; text-align: left; border-bottom: 2px solid rgba(255,255,255,0.06); font-weight: 700; }
//             .if-table td { padding: 8px; vertical-align: top; border-bottom: 1px solid rgba(255,255,255,0.04); }
//             .if-left-col { width: 30%; max-width: 360px; padding-left: 12px; font-weight: 700; color: #e6eef6; }
//             .if-input, .if-select, .if-textarea { background: #0f1724; color: #fff; border: 1px solid #374151; padding: 8px; border-radius: 6px; width: 100%; box-sizing: border-box; min-width: 0; }
//             .if-textarea { min-height: 64px; resize: vertical; padding: 10px; }
//             .if-rating-cell { width: 12%; max-width: 140px; }
//             .if-pros-cons { width: 29%; }
//             .if-table td .if-input, .if-table td .if-textarea, .if-table td .if-select { min-width: 0; }
//           `}</style>

//           <div className="if-table-wrap" style={{ marginTop: 8 }}>
//             <table className="if-table" role="table" aria-label="Interview details table">
//               <thead>
//                 <tr>
//                   <th>Interview Details (Mention the skills interviewed and add more than 5 if required)</th>
//                   <th className="if-rating-cell">Ratings (1 to 5)<br/><small style={{ fontWeight: 400 }}>1 = Needs Significant improvement, 3 = meets expectations, 5 = Exceptional</small></th>
//                   <th className="if-pros-cons">Areas did Well (Pros)</th>
//                   <th className="if-pros-cons">Areas of Improvement (Cons)</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {[1,2,3,4,5].map((n) => {
//                   const key = `skill${n}`;
//                   return (
//                     <tr key={key}>
//                       <td className="if-left-col">
//                         <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
//                           <div style={{ minWidth: 72, color: "#cbd5e1", fontWeight: 700 }}>Skill {n}:</div>
//                           <input
//                             name={key}
//                             value={formData[key]}
//                             onChange={handleChange}
//                             placeholder={`e.g. Skill ${n}`}
//                             className="if-input"
//                           />
//                         </div>
//                       </td>

//                       <td>
//                         <select name={`${key}_rating`} value={formData[`${key}_rating`]} onChange={handleChange} className="if-select">
//                           {ratingOptions}
//                         </select>
//                       </td>

//                       <td>
//                         <textarea name={`${key}_pros`} value={formData[`${key}_pros`]} onChange={handleChange} className="if-textarea" placeholder="Details Must" />
//                       </td>

//                       <td>
//                         <textarea name={`${key}_cons`} value={formData[`${key}_cons`]} onChange={handleChange} className="if-textarea" placeholder="Details Must" />
//                       </td>
//                     </tr>
//                   );
//                 })}

//                 {/* Problem Solving */}
//                 <tr>
//                   <td className="if-left-col">
//                     <div style={{ minWidth: 72, color: "#cbd5e1", fontWeight: 700 }}>Problem Solving / Critical Thinking</div>
//                   </td>

//                   <td>
//                     <select name="problemSolving_rating" value={formData.problemSolving_rating} onChange={handleChange} className="if-select">
//                       {ratingOptions}
//                     </select>
//                   </td>

//                   <td>
//                     <textarea name="problemSolving_pros" value={formData.problemSolving_pros} onChange={handleChange} className="if-textarea" placeholder="Pros" />
//                   </td>

//                   <td>
//                     <textarea name="problemSolving_cons" value={formData.problemSolving_cons} onChange={handleChange} className="if-textarea" placeholder="Cons" />
//                   </td>
//                 </tr>

//                 {/* Live coding / platform link */}
//                 <tr>
//                   <td className="if-left-col">
//                     <div style={{ minWidth: 72, color: "#cbd5e1", fontWeight: 700 }}>Live Coding Platform Link (if applicable)</div>
//                     <input name="liveCodingLink" value={formData.liveCodingLink} onChange={handleChange} className="if-input" style={{ marginTop: 8 }} placeholder="https://..." />
//                   </td>

//                   <td>
//                     <div style={{ color: "#cbd5e1", fontWeight: 600 }}>—</div>
//                   </td>

//                   <td colSpan={2}>
//                     <textarea name="liveCodingObservation" value={formData.liveCodingObservation} onChange={handleChange} className="if-textarea" placeholder="Observation during live coding interview (if applicable)" />
//                   </td>
//                 </tr>

//                 {/* Communication (editable examples) */}
//                 <tr>
//                   <td className="if-left-col">
//                     <div style={{ minWidth: 72, color: "#cbd5e1", fontWeight: 700 }}>Communication:</div>
//                   </td>

//                   <td>
//                     <select name="communication_rating" value={formData.communication_rating} onChange={handleChange} className="if-select">
//                       {ratingOptions}
//                     </select>
//                   </td>

//                   <td>
//                     <textarea
//                       name="communication_pros"
//                       value={formData.communication_pros}
//                       onChange={handleChange}
//                       className="if-textarea"
//                       rows={6}
//                     />
//                   </td>

//                   <td>
//                     <textarea
//                       name="communication_cons"
//                       value={formData.communication_cons}
//                       onChange={handleChange}
//                       className="if-textarea"
//                       rows={6}
//                     />
//                   </td>
//                 </tr>

//                 {/* Adaptability */}
//                 <tr>
//                   <td className="if-left-col">
//                     <div style={{ minWidth: 72, color: "#cbd5e1", fontWeight: 700 }}>Adaptability:</div>
//                   </td>

//                   <td>
//                     <select name="adaptability_rating" value={formData.adaptability_rating} onChange={handleChange} className="if-select">
//                       {ratingOptions}
//                     </select>
//                   </td>

//                   <td>
//                     <textarea
//                       name="adaptability_pros"
//                       value={formData.adaptability_pros}
//                       onChange={handleChange}
//                       className="if-textarea"
//                       rows={6}
//                     />
//                   </td>

//                   <td>
//                     <textarea
//                       name="adaptability_cons"
//                       value={formData.adaptability_cons}
//                       onChange={handleChange}
//                       className="if-textarea"
//                       rows={6}
//                     />
//                   </td>
//                 </tr>

//                 {/* WCT Culture Fit */}
//                 <tr>
//                   <td className="if-left-col">
//                     <div style={{ minWidth: 72, color: "#cbd5e1", fontWeight: 700 }}>WCT Culture Fit</div>
//                   </td>

//                   <td>
//                     <select name="cultureFit_rating" value={formData.cultureFit_rating} onChange={handleChange} className="if-select">
//                       {ratingOptions}
//                     </select>
//                   </td>

//                   <td>
//                     <textarea
//                       name="cultureFit_pros"
//                       value={formData.cultureFit_pros}
//                       onChange={handleChange}
//                       className="if-textarea"
//                       rows={6}
//                     />
//                   </td>

//                   <td>
//                     <textarea
//                       name="cultureFit_cons"
//                       value={formData.cultureFit_cons}
//                       onChange={handleChange}
//                       className="if-textarea"
//                       rows={6}
//                     />
//                   </td>
//                 </tr>

//                 {/* Qualification / Suggestions rows */}
//                 <tr>
//                   <td className="if-left-col">Qualified for the role (Y/N)</td>
//                   <td>
//                     <select name="qualifiedRole" value={formData.qualifiedRole} onChange={handleChange} className="if-select">
//                       <option value="">Choose an item.</option>
//                       <option value="Yes">Yes</option>
//                       <option value="No">No</option>
//                     </select>
//                   </td>
//                   <td colSpan={2}>
//                     <textarea name="qualifiedRoleReason" value={formData.qualifiedRoleReason} onChange={handleChange} className="if-textarea" placeholder="Provide Reasoning (Must)" />
//                   </td>
//                 </tr>

//                 <tr>
//                   <td className="if-left-col">Qualified for Company — Other Teams (Y/N)</td>
//                   <td>
//                     <select name="qualifiedCompany" value={formData.qualifiedCompany} onChange={handleChange} className="if-select">
//                       <option value="">Choose an item.</option>
//                       <option value="Yes">Yes</option>
//                       <option value="No">No</option>
//                     </select>
//                   </td>
//                   <td colSpan={2}>
//                     <textarea name="qualifiedCompanyReason" value={formData.qualifiedCompanyReason} onChange={handleChange} className="if-textarea" placeholder="Provide Reasoning (Must)" />
//                   </td>
//                 </tr>

//                 <tr>
//                   <td className="if-left-col">Suggested level of Candidate</td>
//                   <td>
//                     <select name="suggestedLevel" value={formData.suggestedLevel} onChange={handleChange} className="if-select">
//                       <option value="">Choose an item.</option>
//                       <option value="Junior">Junior</option>
//                       <option value="Mid">Mid</option>
//                       <option value="Senior">Senior</option>
//                     </select>
//                   </td>
//                   <td colSpan={2}>
//                     <textarea name="suggestedLevelReason" value={formData.suggestedLevelReason} onChange={handleChange} className="if-textarea" placeholder="Provide Reasoning (Must)" />
//                   </td>
//                 </tr>

//                 <tr>
//                   <td className="if-left-col">Best suited Role (post Interview)</td>
//                   <td>
//                     <select
//                       name="bestRole"
//                       value={formData.bestRole}
//                       onChange={handleChange}
//                       className="if-select"
//                       style={{ width: '100%' }}
//                     >
//                       {bestRoleOptions.map((opt, i) => (
//                         <option key={i} value={opt === "Choose an item." ? "" : opt}>
//                           {opt}
//                         </option>
//                       ))}
//                     </select>
//                   </td>
//                   <td colSpan={2}>
//                     <textarea name="bestRoleReason" value={formData.bestRoleReason} onChange={handleChange} className="if-textarea" placeholder="Provide Suggested Role (if different) and Reasoning (Must)" />
//                   </td>
//                 </tr>

//                 {/* Overall Interview Comments row */}
//                 <tr>
//                   <td className="if-left-col">Overall Interview Comments:</td>
//                   <td colSpan={3}>
//                     <textarea name="comments" value={formData.comments} onChange={handleChange} className="if-textarea" placeholder="Add your final observations and feedback..." rows={6} />
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </section>

//         {/* Email + Download actions */}
//         <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 12, flexWrap: "wrap" }}>
//           <div style={{ width: 420, maxWidth: "100%" }}>
//             <label style={{ display: "block", marginBottom: 6, color: "#374151", fontWeight: 600 }}>Send report to (email)</label>
//             <input
//               value={recipientEmail}
//               onChange={(e) => setRecipientEmail(e.target.value)}
//               placeholder="recipient@example.com"
//               style={{ padding: "10px 12px", borderRadius: 8, border: "1px solid #cbd5e1", width: "100%", boxSizing: "border-box" }}
//             />
//             <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
//               <button
//                 onClick={handleSendEmailJS}
//                 disabled={sending}
//                 style={{ background: "#2563eb", color: "#fff", padding: "10px 14px", borderRadius: 8, border: "none", cursor: sending ? "not-allowed" : "pointer", fontWeight: 700 }}
//               >
//                 {sending ? "Sending..." : "Send Email"}
//               </button>

//               <button
//                 onClick={handleDownload}
//                 style={{ background: "#16a34a", color: "#fff", padding: "10px 14px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 700 }}
//               >
//                 Download as Word
//               </button>
//             </div>

//             {sendStatus && (
//               <div style={{ marginTop: 8, color: sendStatus.startsWith("Email sent") ? "#065f46" : "#b91c1c", fontWeight: 600 }}>
//                 {sendStatus}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// // }
// import { useParams } from "react-router-dom";
// import { useState } from "react";
// import { exportToWord } from "../utils/exportToWord";
// import emailjs from "@emailjs/browser";

// /**
//  * InterviewForm
//  *
//  * - Root wrapper has id="interview-root" so capturePageHtml can clone it.
//  * - The on-page "Send report to (email)" footer is marked with id="send-report-footer" and data-no-email.
//  * - The "Download as Word" button is marked with data-no-email so it will not be captured into the email body.
//  */
// export default function InterviewForm() {
//   const { id } = useParams();
//   const recruiterData = JSON.parse(localStorage.getItem(id));

//   const [formData, setFormData] = useState({
//     // skills
//     skill1: "",
//     skill2: "",
//     skill3: "",
//     skill4: "",
//     skill5: "",
//     problemSolving: "",

//     // ratings + pros/cons for skills
//     skill1_rating: "",
//     skill1_pros: "",
//     skill1_cons: "",
//     skill2_rating: "",
//     skill2_pros: "",
//     skill2_cons: "",
//     skill3_rating: "",
//     skill3_pros: "",
//     skill3_cons: "",
//     skill4_rating: "",
//     skill4_pros: "",
//     skill4_cons: "",
//     skill5_rating: "",
//     skill5_pros: "",
//     skill5_cons: "",

//     problemSolving_rating: "",
//     problemSolving_pros: "",
//     problemSolving_cons: "",

//     // communication / adaptability / culture fit (sample content restored)
//     communication_rating: "",
//     communication_pros: `• Clearly explained technical concepts to the panel and asked clarifying questions.
// • Listened actively and responded thoughtfully to follow-up questions.
// • Articulated ideas in a structured and concise manner.
// • Demonstrated confidence and professionalism in verbal and written communication.
// • Adapted communication style for different audiences (technical/non-technical).`,
//     communication_cons: `• Answers were sometimes vague or lacked detail.
// • Struggled to communicate ideas clearly under pressure.
// • Did not always ask clarifying questions when unsure.
// • Occasionally interrupted others or didn't allow for dialogue.`,

//     adaptability_rating: "",
//     adaptability_pros: `• Quickly adjusted to new questions and changing interview topics.
// • Demonstrated openness to feedback and willingness to learn.
// • Provided examples of successfully navigating change in previous roles.
// • Remained calm and resourceful when faced with unexpected challenges.`,
//     adaptability_cons: `• Hesitated when asked to switch topics or adapt to new scenarios.
// • Needed more time to process unfamiliar situations.
// • Showed resistance to feedback or alternative approaches.`,

//     cultureFit_rating: "",
//     cultureFit_pros: `• Strong alignment with company values such as collaboration and integrity.
// • Demonstrated collaborative examples and interest in team growth.
// • Showed enthusiasm for the company's mission.`,
//     cultureFit_cons: `• Seemed less comfortable in a fast-paced environment.
// • Limited examples of cross-functional collaboration.`,

//     // live coding
//     liveCodingLink: "",
//     liveCodingObservation: "",

//     // qualification & suggestions
//     qualifiedRole: "",
//     qualifiedRoleReason: "",
//     qualifiedCompany: "",
//     qualifiedCompanyReason: "",
//     suggestedLevel: "",
//     suggestedLevelReason: "",
//     bestRole: "",
//     bestRoleReason: "",

//     // overall comments
//     comments: "",
//   });

//   // EmailJS-related state
//   const [recipientEmail, setRecipientEmail] = useState((recruiterData && recruiterData.recruiterEmail) || "");
//   const [sending, setSending] = useState(false);
//   const [sendStatus, setSendStatus] = useState(""); // success / error message

//   if (!recruiterData) {
//     return (
//       <div className="p-10 text-center text-red-600 text-lg font-semibold">
//         ⚠️ Invalid or missing recruiter link data.
//       </div>
//     );
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((s) => ({ ...s, [name]: value }));
//   };

//   const handleDownload = () => {
//     const fullData = { recruiterData, interviewerData: formData };
//     exportToWord(fullData);
//   };

//   const ratingOptions = (
//     <>
//       <option value="">Choose an item.</option>
//       <option value="1">1 — Needs Significant Improvement</option>
//       <option value="2">2</option>
//       <option value="3">3 — Meets Expectations</option>
//       <option value="4">4</option>
//       <option value="5">5 — Exceptional</option>
//     </>
//   );

//   // --- Email helpers (for buildHtmlReport) ---
//   function escapeHtml(str) {
//     if (!str && str !== 0) return "";
//     return String(str)
//       .replace(/&/g, "&amp;")
//       .replace(/</g, "&lt;")
//       .replace(/>/g, "&gt;")
//       .replace(/"/g, "&quot;")
//       .replace(/'/g, "&#039;");
//   }

//   function nl2br(str) {
//     if (!str && str !== 0) return "";
//     return String(str).replace(/\n/g, "<br/>");
//   }

//   // Build a compact HTML report fallback
//   function buildHtmlReport(recruiter, interviewer) {
//     const maxLen = 20000;
//     const parts = [];

//     parts.push(`<div style="font-family: Arial, Helvetica, sans-serif; color:#111; line-height:1.4;">`);
//     parts.push(`<h2 style="background:#0284c7;color:#fff;padding:8px 12px;border-radius:4px;">Interview Feedback — ${escapeHtml(recruiter.candidateName || "Candidate")}</h2>`);

//     parts.push(`<section style="margin-bottom:8px;"><h3 style="margin:6px 0 4px 0;">Recruiter Info</h3>`);
//     parts.push(`<table style="width:100%;border-collapse:collapse;font-size:13px;">`);
//     const rfields = [
//       ["Candidate", recruiter.candidateName],
//       ["Location", recruiter.candidateLocation],
//       ["Work site", recruiter.workSite],
//       ["Interview date", recruiter.interviewDate],
//       ["Interview time", recruiter.interviewTime],
//       ["Interview level", recruiter.interviewLevel],
//       ["Role", recruiter.role],
//       ["Total exp", recruiter.totalExp],
//       ["Relevant exp", recruiter.relevantExp],
//       ["Interviewer name", recruiter.interviewerName],
//     ];
//     rfields.forEach(([label, val]) => {
//       parts.push(`<tr><td style="padding:4px 6px;width:180px;font-weight:600;color:#0b1220;">${escapeHtml(label)}</td><td style="padding:4px 6px;">${escapeHtml(val || "")}</td></tr>`);
//     });
//     parts.push(`</table></section>`);

//     parts.push(`<section style="margin-top:8px;"><h3 style="margin:6px 0 4px 0;">Skills & Ratings</h3>`);
//     parts.push(`<table style="width:100%;border-collapse:collapse;font-size:13px;">`);
//     parts.push(`<thead><tr><th style="text-align:left;padding:6px;border-bottom:1px solid #ddd;">Skill</th><th style="text-align:left;padding:6px;border-bottom:1px solid #ddd;">Rating</th><th style="text-align:left;padding:6px;border-bottom:1px solid #ddd;">Pros</th><th style="text-align:left;padding:6px;border-bottom:1px solid #ddd;">Cons</th></tr></thead>`);
//     parts.push(`<tbody>`);
//     for (let n = 1; n <= 5; n++) {
//       const k = `skill${n}`;
//       const rating = interviewer[`${k}_rating`];
//       const pros = interviewer[`${k}_pros`];
//       const cons = interviewer[`${k}_cons`];
//       const label = interviewer[k] || `Skill ${n}`;
//       parts.push(`<tr><td style="padding:6px;vertical-align:top;"><strong>${escapeHtml(label)}</strong></td><td style="padding:6px;vertical-align:top;">${escapeHtml(rating)}</td><td style="padding:6px;vertical-align:top;">${nl2br(escapeHtml(pros))}</td><td style="padding:6px;vertical-align:top;">${nl2br(escapeHtml(cons))}</td></tr>`);
//     }
//     parts.push(`<tr><td style="padding:6px;vertical-align:top;"><strong>Problem Solving / Critical Thinking</strong></td><td style="padding:6px;vertical-align:top;">${escapeHtml(interviewer.problemSolving_rating)}</td><td style="padding:6px;vertical-align:top;">${nl2br(escapeHtml(interviewer.problemSolving_pros))}</td><td style="padding:6px;vertical-align:top;">${nl2br(escapeHtml(interviewer.problemSolving_cons))}</td></tr>`);
//     parts.push(`</tbody></table></section>`);

//     parts.push(`<section style="margin-top:8px;"><h3 style="margin:6px 0 4px 0;">Soft Skills</h3>`);
//     const soft = ["communication", "adaptability", "cultureFit"];
//     soft.forEach((s) => {
//       parts.push(`<div style="margin-bottom:6px;"><strong>${escapeHtml(s.charAt(0).toUpperCase() + s.slice(1))} (Rating: ${escapeHtml(interviewer[`${s}_rating`])})</strong><div style="margin-top:4px;">Pros:<div style="margin-left:8px;">${nl2br(escapeHtml(interviewer[`${s}_pros`]))}</div></div><div style="margin-top:4px;">Cons:<div style="margin-left:8px;">${nl2br(escapeHtml(interviewer[`${s}_cons`]))}</div></div></div>`);
//     });
//     parts.push(`</section>`);

//     parts.push(`<section style="margin-top:8px;"><h3 style="margin:6px 0 4px 0;">Live Coding & Qualification</h3>`);
//     parts.push(`<div><strong>Live coding link:</strong> ${escapeHtml(interviewer.liveCodingLink || "")}</div>`);
//     parts.push(`<div style="margin-top:6px;"><strong>Live coding observations:</strong><div style="margin-left:8px;">${nl2br(escapeHtml(interviewer.liveCodingObservation))}</div></div>`);
//     parts.push(`<div style="margin-top:6px;"><strong>Qualified for role:</strong> ${escapeHtml(interviewer.qualifiedRole)}<div style="margin-left:8px;">${nl2br(escapeHtml(interviewer.qualifiedRoleReason))}</div></div>`);
//     parts.push(`<div style="margin-top:6px;"><strong>Qualified for company:</strong> ${escapeHtml(interviewer.qualifiedCompany)}<div style="margin-left:8px;">${nl2br(escapeHtml(interviewer.qualifiedCompanyReason))}</div></div>`);
//     parts.push(`<div style="margin-top:6px;"><strong>Suggested level:</strong> ${escapeHtml(interviewer.suggestedLevel)}<div style="margin-left:8px;">${nl2br(escapeHtml(interviewer.suggestedLevelReason))}</div></div>`);
//     parts.push(`<div style="margin-top:6px;"><strong>Best role:</strong> ${escapeHtml(interviewer.bestRole)}<div style="margin-left:8px;">${nl2br(escapeHtml(interviewer.bestRoleReason))}</div></div>`);
//     parts.push(`</section>`);

//     parts.push(`<section style="margin-top:8px;"><h3 style="margin:6px 0 4px 0;">Overall Comments</h3>`);
//     parts.push(`<div style="margin-left:8px;">${nl2br(escapeHtml(interviewer.comments))}</div>`);
//     parts.push(`</section>`);

//     parts.push(`<footer style="margin-top:12px;font-size:12px;color:#666;">Generated by Interview Feedback App</footer>`);
//     parts.push(`</div>`);

//     const html = parts.join("");
//     return html.length > maxLen ? html.slice(0, maxLen) + "<p>...truncated...</p>" : html;
//   }

//   /**
//    * capturePageHtml(rootSelector)
//    *
//    * - Clones the page root, removes nodes marked with [data-no-email] or #send-report-footer,
//    * - Replaces inputs/selects/textareas/contenteditable with static text preserving whitespace,
//    * - Copies all <style> elements from the document into the returned HTML <head>.
//    *
//    * Returns a string of complete HTML suitable for sending as the email body (use triple-brace {{{message_html}}} in EmailJS).
//    */
//   function capturePageHtml(rootSelector = "#interview-root") {
//     try {
//       const root = document.querySelector(rootSelector);
//       if (!root) {
//         // Fallback to simple programmatic report if root missing
//         return buildHtmlReport(recruiterData, formData);
//       }

//       // Deep clone
//       const clone = root.cloneNode(true);

//       // Remove UI elements that should not be emailed
//       const selectorsToRemove = ["#send-report-footer", "[data-no-email]"];
//       selectorsToRemove.forEach((sel) => {
//         clone.querySelectorAll(sel).forEach((n) => n.remove());
//       });

//       // Replace interactive controls with static text nodes
//       const replaceInteractive = (node) => {
//         const inputs = node.querySelectorAll("input, textarea, select, [contenteditable=true], [contenteditable='true']");
//         inputs.forEach((el) => {
//           try {
//             const tag = el.tagName.toLowerCase();
//             let text = "";
//             if (tag === "select") {
//               const sel = el;
//               if (sel.selectedOptions && sel.selectedOptions.length > 0) {
//                 text = Array.from(sel.selectedOptions).map((o) => o.textContent).join(", ");
//               } else {
//                 text = el.value || "";
//               }
//             } else if (tag === "input") {
//               const type = el.getAttribute("type");
//               if (type === "checkbox" || type === "radio") {
//                 text = el.checked ? (el.value || "Checked") : (el.checked === false ? "Unchecked" : "");
//               } else {
//                 text = el.value || "";
//               }
//             } else if (tag === "textarea") {
//               text = el.value || el.textContent || "";
//             } else {
//               text = el.textContent || el.innerText || "";
//             }

//             const wrapper = document.createElement("div");
//             wrapper.textContent = text;
//             wrapper.style.whiteSpace = "pre-wrap";
//             wrapper.style.wordBreak = "break-word";
//             wrapper.style.color = window.getComputedStyle(el).color || null;
//             wrapper.style.fontFamily = window.getComputedStyle(el).fontFamily || null;
//             wrapper.style.fontSize = window.getComputedStyle(el).fontSize || null;

//             el.parentNode && el.parentNode.replaceChild(wrapper, el);
//           } catch (e) {
//             console.warn("replaceInteractive error:", e);
//           }
//         });
//       };

//       replaceInteractive(clone);

//       // Collect inline styles from the document (include <style> contents)
//       let collectedStyles = "";
//       document.querySelectorAll("style").forEach((s) => {
//         if (s.innerHTML && s.innerHTML.trim().length > 0) {
//           collectedStyles += s.outerHTML;
//         }
//       });

//       // Build final HTML
//       const head = `
//         <meta charset="utf-8">
//         <meta name="viewport" content="width=device-width,initial-scale=1">
//         ${collectedStyles}
//         <style>
//           /* Ensure the captured content looks OK in email clients */
//           body { margin: 0; padding: 12px; background: #fff; color: #111; font-family: Arial, Helvetica, sans-serif; }
//           .capture-root { max-width: 900px; margin: 0 auto; }
//         </style>
//       `;

//       const bodyHtml = `<div class="capture-root">${clone.innerHTML}</div>`;

//       const final = `<!doctype html><html><head>${head}</head><body>${bodyHtml}</body></html>`;
//       return final;
//     } catch (err) {
//       console.error("capturePageHtml error:", err);
//       return buildHtmlReport(recruiterData, formData);
//     }
//   }

//   /**
//    * handleSendEmailJS
//    *
//    * - Validates recipient
//    * - Builds the captured HTML (without footer or interactive controls)
//    * - Sends via EmailJS with message_html set to captured HTML
//    * - Sets template param `show_to_email:false` defensively so the portal template conditional remains falsy
//    */
//   async function handleSendEmailJS() {
//     setSendStatus("");
//     const to = (recipientEmail || "").trim();
//     if (!to || !/^[\w.+-]+@[\w-]+\.[\w.-]+$/.test(to)) {
//       setSendStatus("Please enter a valid recipient email address.");
//       return;
//     }

//     // Read EmailJS params from Vite env variables
//     const serviceId = import.meta.env.VITE_EMAILJS_SERVICE;
//     const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE;
//     const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC;

//     if (!serviceId || !templateId || !publicKey) {
//       setSendStatus("Email service not configured. Please set VITE_EMAILJS_SERVICE, VITE_EMAILJS_TEMPLATE and VITE_EMAILJS_PUBLIC in your .env.");
//       return;
//     }

//     setSending(true);
//     setSendStatus("Sending...");

//     try {
//       // Use the DOM-capture method to preserve page structure while stripping the footer + controls
//       const capturedHtml = capturePageHtml("#interview-root");

//       const templateParams = {
//         to_email: to,
//         subject: `Interview Feedback — ${recruiterData?.candidateName || "Candidate"}`,
//         message_html: capturedHtml,
//         // defensive flag for the EmailJS template conditional:
//         show_to_email: false,
//       };

//       // EmailJS browser send
//       await emailjs.send(serviceId, templateId, templateParams, publicKey);

//       setSendStatus(`Email sent to ${to}. Check inbox/spam.`);
//     } catch (err) {
//       console.error("EmailJS send error:", err);
//       setSendStatus("Failed to send email — check console and EmailJS dashboard for details.");
//     } finally {
//       setSending(false);
//     }
//   }

//   // --- Render ---
//   return (
//     <div id="interview-root" style={{ width: "100%", display: "flex", justifyContent: "center", padding: "28px 20px" }}>
//       <div style={{ width: "100%", maxWidth: 1200 }}>
//         <h2 className="text-3xl font-bold text-blue-700 mb-6">Interview Feedback Form</h2>

//         {/* Recruiter Info */}
//         <section style={{ marginBottom: 18 }}>
//           <div style={{ background: "#d97706", color: "#fff", padding: "12px 18px", fontWeight: 700, borderRadius: 6, textAlign: "center", marginBottom: 12 }}>Recruiter Info</div>

//           <style>{`
//             .three-col { display: grid; gap: 16px; grid-template-columns: 1fr; }
//             @media (min-width: 720px) { .three-col { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
//             .three-col > * { min-width: 0; }
//           `}</style>

//           <div className="three-col" style={{ marginTop: 8 }}>
//             <div style={{ background: "#0b1220", padding: 18, borderRadius: 8 }}>
//               <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", rowGap: 12, columnGap: 12, alignItems: "center" }}>
//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Candidate Name</label>
//                 <input readOnly value={recruiterData.candidateName || ""} style={{ background: "#0f1724", color: "#fff", border: "1px solid #374151", padding: "8px 10px", borderRadius: 6, width: "100%", boxSizing: "border-box" }} />

//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Candidate Location</label>
//                 <input readOnly value={recruiterData.candidateLocation || ""} style={{ background: "#0f1724", color: "#fff", border: "1px solid #374151", padding: "8px 10px", borderRadius: 6, width: "100%", boxSizing: "border-box" }} />

//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Work Site</label>
//                 <input readOnly value={recruiterData.workSite || ""} style={{ background: "#0f1724", color: "#fff", border: "1px solid #374151", padding: "8px 10px", borderRadius: 6, width: "100%", boxSizing: "border-box" }} />
//               </div>
//             </div>

//             <div style={{ background: "#0b1220", padding: 18, borderRadius: 8 }}>
//               <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", rowGap: 12, columnGap: 12, alignItems: "center" }}>
//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Interview Date</label>
//                 <input readOnly value={recruiterData.interviewDate || ""} style={{ background: "#0f1724", color: "#fff", border: "1px solid #374151", padding: "8px 10px", borderRadius: 6, width: "100%", boxSizing: "border-box" }} />

//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Interview Time</label>
//                 <input readOnly value={recruiterData.interviewTime || ""} style={{ background: "#0f1724", color: "#fff", border: "1px solid #374151", padding: "8px 10px", borderRadius: 6, width: "100%", boxSizing: "border-box" }} />

//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Interview Level</label>
//                 <input readOnly value={recruiterData.interviewLevel || ""} style={{ background: "#0f1724", color: "#fff", border: "1px solid #374151", padding: "8px 10px", borderRadius: 6, width: "100%", boxSizing: "border-box" }} />

//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Role</label>
//                 <input readOnly value={recruiterData.role || ""} style={{ background: "#0f1724", color: "#fff", border: "1px solid #374151", padding: "8px 10px", borderRadius: 6, width: "100%", boxSizing: "border-box" }} />
//               </div>
//             </div>

//             <div style={{ background: "#0b1220", padding: 18, borderRadius: 8 }}>
//               <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", rowGap: 12, columnGap: 12, alignItems: "center" }}>
//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Total Experience</label>
//                 <input readOnly value={recruiterData.totalExp || ""} style={{ background: "#0f1724", color: "#fff", border: "1px solid #374151", padding: "8px 10px", borderRadius: 6, width: "100%", boxSizing: "border-box" }} />

//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Relevant Experience</label>
//                 <input readOnly value={recruiterData.relevantExp || ""} style={{ background: "#0f1724", color: "#fff", border: "1px solid #374151", padding: "8px 10px", borderRadius: 6, width: "100%", boxSizing: "border-box" }} />

//                 <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Interviewer Name</label>
//                 <input readOnly value={recruiterData.interviewerName || ""} style={{ background: "#0f1724", color: "#fff", border: "1px solid #374151", padding: "8px 10px", borderRadius: 6, width: "100%", boxSizing: "border-box" }} />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Interview details table */}
//         <section style={{ marginBottom: 18 }}>
//           <div style={{ background: "#d97706", color: "#fff", padding: "12px 18px", fontWeight: 700, borderRadius: 6, textAlign: "center", marginBottom: 12 }}>Interview Details</div>

//           <style>{`
//             .if-table-wrap { overflow-x: auto; border-radius: 8px; }
//             .if-table { width: 100%; border-collapse: collapse; min-width: 900px; background: #0b1220; color: #fff; }
//             .if-table th { background: #0284c7; color: #fff; padding: 12px; text-align: left; border-bottom: 2px solid rgba(255,255,255,0.06); font-weight: 700; }
//             .if-table td { padding: 8px; vertical-align: top; border-bottom: 1px solid rgba(255,255,255,0.04); }
//             .if-left-col { width: 30%; max-width: 360px; padding-left: 12px; font-weight: 700; color: #e6eef6; }
//             .if-input, .if-select, .if-textarea { background: #0f1724; color: #fff; border: 1px solid #374151; padding: 8px; border-radius: 6px; width: 100%; box-sizing: border-box; min-width: 0; }
//             .if-textarea { min-height: 64px; resize: vertical; padding: 10px; }
//             .if-rating-cell { width: 12%; max-width: 140px; }
//             .if-pros-cons { width: 29%; }
//             .if-table td .if-input, .if-table td .if-textarea, .if-table td .if-select { min-width: 0; }
//           `}</style>

//           <div className="if-table-wrap" style={{ marginTop: 8 }}>
//             <table className="if-table" role="table" aria-label="Interview details table">
//               <thead>
//                 <tr>
//                   <th>Interview Details (Mention the skills interviewed and add more than 5 if required)</th>
//                   <th className="if-rating-cell">Ratings (1 to 5)<br/><small style={{ fontWeight: 400 }}>1 = Needs Significant improvement, 3 = meets expectations, 5 = Exceptional</small></th>
//                   <th className="if-pros-cons">Areas did Well (Pros)</th>
//                   <th className="if-pros-cons">Areas of Improvement (Cons)</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {[1,2,3,4,5].map((n) => {
//                   const key = `skill${n}`;
//                   return (
//                     <tr key={key}>
//                       <td className="if-left-col">
//                         <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
//                           <div style={{ minWidth: 72, color: "#cbd5e1", fontWeight: 700 }}>Skill {n}:</div>
//                           <input
//                             name={key}
//                             value={formData[key]}
//                             onChange={handleChange}
//                             placeholder={`e.g. Skill ${n}`}
//                             className="if-input"
//                           />
//                         </div>
//                       </td>

//                       <td>
//                         <select name={`${key}_rating`} value={formData[`${key}_rating`]} onChange={handleChange} className="if-select">
//                           {ratingOptions}
//                         </select>
//                       </td>

//                       <td>
//                         <textarea name={`${key}_pros`} value={formData[`${key}_pros`]} onChange={handleChange} className="if-textarea" placeholder="Details Must" />
//                       </td>

//                       <td>
//                         <textarea name={`${key}_cons`} value={formData[`${key}_cons`]} onChange={handleChange} className="if-textarea" placeholder="Details Must" />
//                       </td>
//                     </tr>
//                   );
//                 })}

//                 {/* Problem Solving */}
//                 <tr>
//                   <td className="if-left-col">
//                     <div style={{ minWidth: 72, color: "#cbd5e1", fontWeight: 700 }}>Problem Solving / Critical Thinking</div>
//                   </td>

//                   <td>
//                     <select name="problemSolving_rating" value={formData.problemSolving_rating} onChange={handleChange} className="if-select">
//                       {ratingOptions}
//                     </select>
//                   </td>

//                   <td>
//                     <textarea name="problemSolving_pros" value={formData.problemSolving_pros} onChange={handleChange} className="if-textarea" placeholder="Pros" />
//                   </td>

//                   <td>
//                     <textarea name="problemSolving_cons" value={formData.problemSolving_cons} onChange={handleChange} className="if-textarea" placeholder="Cons" />
//                   </td>
//                 </tr>

//                 {/* Live coding / platform link */}
//                 <tr>
//                   <td className="if-left-col">
//                     <div style={{ minWidth: 72, color: "#cbd5e1", fontWeight: 700 }}>Live Coding Platform Link (if applicable)</div>
//                     <input name="liveCodingLink" value={formData.liveCodingLink} onChange={handleChange} className="if-input" style={{ marginTop: 8 }} placeholder="https://..." />
//                   </td>

//                   <td>
//                     <div style={{ color: "#cbd5e1", fontWeight: 600 }}>—</div>
//                   </td>

//                   <td colSpan={2}>
//                     <textarea name="liveCodingObservation" value={formData.liveCodingObservation} onChange={handleChange} className="if-textarea" placeholder="Observation during live coding interview (if applicable)" />
//                   </td>
//                 </tr>

//                 {/* Communication */}
//                 <tr>
//                   <td className="if-left-col">
//                     <div style={{ minWidth: 72, color: "#cbd5e1", fontWeight: 700 }}>Communication:</div>
//                   </td>

//                   <td>
//                     <select name="communication_rating" value={formData.communication_rating} onChange={handleChange} className="if-select">
//                       {ratingOptions}
//                     </select>
//                   </td>

//                   <td>
//                     <textarea name="communication_pros" value={formData.communication_pros} onChange={handleChange} className="if-textarea" rows={6} />
//                   </td>

//                   <td>
//                     <textarea name="communication_cons" value={formData.communication_cons} onChange={handleChange} className="if-textarea" rows={6} />
//                   </td>
//                 </tr>

//                 {/* Adaptability */}
//                 <tr>
//                   <td className="if-left-col">
//                     <div style={{ minWidth: 72, color: "#cbd5e1", fontWeight: 700 }}>Adaptability:</div>
//                   </td>

//                   <td>
//                     <select name="adaptability_rating" value={formData.adaptability_rating} onChange={handleChange} className="if-select">
//                       {ratingOptions}
//                     </select>
//                   </td>

//                   <td>
//                     <textarea name="adaptability_pros" value={formData.adaptability_pros} onChange={handleChange} className="if-textarea" rows={6} />
//                   </td>

//                   <td>
//                     <textarea name="adaptability_cons" value={formData.adaptability_cons} onChange={handleChange} className="if-textarea" rows={6} />
//                   </td>
//                 </tr>

//                 {/* Culture Fit */}
//                 <tr>
//                   <td className="if-left-col">
//                     <div style={{ minWidth: 72, color: "#cbd5e1", fontWeight: 700 }}>WCT Culture Fit</div>
//                   </td>

//                   <td>
//                     <select name="cultureFit_rating" value={formData.cultureFit_rating} onChange={handleChange} className="if-select">
//                       {ratingOptions}
//                     </select>
//                   </td>

//                   <td>
//                     <textarea name="cultureFit_pros" value={formData.cultureFit_pros} onChange={handleChange} className="if-textarea" rows={6} />
//                   </td>

//                   <td>
//                     <textarea name="cultureFit_cons" value={formData.cultureFit_cons} onChange={handleChange} className="if-textarea" rows={6} />
//                   </td>
//                 </tr>

//                 {/* Qualification / Suggestions */}
//                 <tr>
//                   <td className="if-left-col">Qualified for the role (Y/N)</td>
//                   <td>
//                     <select name="qualifiedRole" value={formData.qualifiedRole} onChange={handleChange} className="if-select">
//                       <option value="">Choose an item.</option>
//                       <option value="Yes">Yes</option>
//                       <option value="No">No</option>
//                     </select>
//                   </td>
//                   <td colSpan={2}>
//                     <textarea name="qualifiedRoleReason" value={formData.qualifiedRoleReason} onChange={handleChange} className="if-textarea" placeholder="Provide Reasoning (Must)" />
//                   </td>
//                 </tr>

//                 <tr>
//                   <td className="if-left-col">Suggested level of Candidate</td>
//                   <td>
//                     <select name="suggestedLevel" value={formData.suggestedLevel} onChange={handleChange} className="if-select">
//                       <option value="">Choose an item.</option>
//                       <option value="Junior">Junior</option>
//                       <option value="Mid">Mid</option>
//                       <option value="Senior">Senior</option>
//                     </select>
//                   </td>
//                   <td colSpan={2}>
//                     <textarea name="suggestedLevelReason" value={formData.suggestedLevelReason} onChange={handleChange} className="if-textarea" placeholder="Provide Reasoning (Must)" />
//                   </td>
//                 </tr>

//                 <tr>
//                   <td className="if-left-col">Best suited Role (post Interview)</td>
//                   <td>
//                     <select
//                       name="bestRole"
//                       value={formData.bestRole}
//                       onChange={handleChange}
//                       className="if-select"
//                       style={{ width: '100%' }}
//                     >
//                       <option value="">Choose an item.</option>
//                       <option value="SDE-Backend">SDE-Backend</option>
//                       <option value="SDE-Fullstack">SDE-Fullstack</option>
//                       <option value="Data Engineer">Data Engineer</option>
//                       <option value="Other">Other</option>
//                     </select>
//                   </td>
//                   <td colSpan={2}>
//                     <textarea name="bestRoleReason" value={formData.bestRoleReason} onChange={handleChange} className="if-textarea" placeholder="Provide Suggested Role (if different) and Reasoning (Must)" />
//                   </td>
//                 </tr>

//                 {/* Overall Interview Comments */}
//                 <tr>
//                   <td className="if-left-col">Overall Interview Comments:</td>
//                   <td colSpan={3}>
//                     <textarea name="comments" value={formData.comments} onChange={handleChange} className="if-textarea" placeholder="Add your final observations and feedback..." rows={6} />
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </section>

//         {/* Download and Send UI: Download button marked with data-no-email so it will be removed from captured HTML */}
//         <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 14 }}>
//           <button
//             onClick={handleDownload}
//             data-no-email
//             style={{ background: "#16a34a", color: "#fff", padding: "10px 18px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 700 }}
//           >
//             Download as Word
//           </button>

//           <div id="send-report-footer" style={{ display: "flex", gap: 8, alignItems: "center", padding: "6px 10px", borderRadius: 8, background: "#f3f4f6" }} data-no-email>
//             <label style={{ fontSize: 13, color: "#111", fontWeight: 600 }}>Send report to</label>
//             <input
//               value={recipientEmail}
//               onChange={(e) => setRecipientEmail(e.target.value)}
//               style={{ padding: "8px 10px", borderRadius: 6, border: "1px solid #cbd5e1" }}
//               placeholder="recipient@example.com"
//             />
//             <button
//               onClick={handleSendEmailJS}
//               disabled={sending}
//               style={{ background: "#0284c7", color: "#fff", padding: "8px 12px", borderRadius: 6, border: "none", cursor: "pointer", fontWeight: 700 }}
//             >
//               {sending ? "Sending..." : "Send Email"}
//             </button>
//           </div>
//         </div>

//         {/* Send status message */}
//         {sendStatus && (
//           <div style={{ marginTop: 10, textAlign: "center", color: sendStatus.startsWith("Email sent") ? "green" : "crimson" }}>
//             {sendStatus}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import { useParams } from "react-router-dom";
import { useState } from "react";
import { exportToWord } from "../utils/exportToWord";
import emailjs from "@emailjs/browser";
import { exportToWordBlob } from "../utils/exportToWordBlob";

export default function InterviewForm() {
  const { id } = useParams();
  const recruiterData = JSON.parse(localStorage.getItem(id)) || {};

  const [formData, setFormData] = useState({
    // skills
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    problemSolving: "",

    // ratings + pros/cons for skills
    skill1_rating: "",
    skill1_pros: "",
    skill1_cons: "",
    skill2_rating: "",
    skill2_pros: "",
    skill2_cons: "",
    skill3_rating: "",
    skill3_pros: "",
    skill3_cons: "",
    skill4_rating: "",
    skill4_pros: "",
    skill4_cons: "",
    skill5_rating: "",
    skill5_pros: "",
    skill5_cons: "",

    problemSolving_rating: "",
    problemSolving_pros: "",
    problemSolving_cons: "",

    // communication (editable example content)
    communication_rating: "",
    communication_pros:
      `• Clearly explained technical concepts to the panel and asked clarifying questions.
• Listened actively and responded thoughtfully to follow-up questions.
• Articulated ideas in a structured and concise manner.
• Demonstrated confidence and professionalism in verbal and written communication.
• Adapted communication style for different audiences (technical/non-technical).`,
    communication_cons:
      `• Answers were sometimes vague or lacked detail.
• Struggled to communicate ideas clearly under pressure.
• Did not ask clarifying questions when unsure.
• Had difficulty tailoring responses to the audience.
• Occasionally interrupted others or did not allow for dialogue.`,

    // adaptability / culture fit
    adaptability_rating: "",
    adaptability_pros:
      `• Quickly adjusted to new questions and changing interview topics.
• Demonstrated openness to feedback and willingness to learn.
• Provided examples of successfully navigating change in previous roles.
• Remained calm and resourceful when faced with unexpected challenges.`,
    adaptability_cons:
      `• Hesitated when asked to switch topics or adapt to new scenarios.
• Needed more time to process changes or unfamiliar situations.
• Was resistant to feedback or alternative approaches.
• Struggled to provide examples of adapting to change in past roles.`,

    cultureFit_rating: "",
    cultureFit_pros:
      `• Showed strong alignment with company values of collaboration, innovation, and integrity.
• Demonstrated a growth mindset and eagerness to contribute to a positive workplace culture.
• Provided examples of fostering inclusion and teamwork in previous environments.`,
    cultureFit_cons:
      `• Seemed uncomfortable with the fast-paced, dynamic environment.
• Showed limited interest in team collaboration or cross-functional work.
• Responses suggested a preference for working independently rather than as part of a team.`,

    // live coding
    liveCodingLink: "",
    liveCodingObservation: "",

    // qualification & suggestions
    qualifiedRole: "",
    qualifiedRoleReason: "",
    qualifiedCompany: "",
    qualifiedCompanyReason: "",
    suggestedLevel: "",
    suggestedLevelReason: "",
    bestRole: "",
    bestRoleReason: "",

    // overall comments
    comments: "",
  });

  // EmailJS-related state
  const [recipientEmail, setRecipientEmail] = useState(recruiterData?.recruiterEmail || "");
  const [sending, setSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(""); // success / error message

  // small helpers
  function escapeHtml(str) {
    if (!str && str !== 0) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
  function nl2br(str) {
    if (!str && str !== 0) return "";
    return String(str).replace(/\n/g, "<br/>");
  }

  function ratingLabel(val) {
    if (val === null || val === undefined || val === "") return "";
    const map = {
      "1": "1 — Needs Significant Improvement",
      "2": "2",
      "3": "3 — Meets Expectations",
      "4": "4",
      "5": "5 — Exceptional",
    };
    return map[String(val)] ?? String(val);
  }

  // Programmatic builder fallback (keeps readable labels for ratings)
  function buildHtmlReport(recruiter, interviewer) {
    const maxLen = 20000;
    const parts = [];
    parts.push(`<div style="font-family: Arial, Helvetica, sans-serif; color:#111; line-height:1.4;">`);
    parts.push(`<h2 style="background:#0284c7;color:#fff;padding:8px 12px;border-radius:4px;">Interview Feedback — ${escapeHtml(recruiter.candidateName || "Candidate")}</h2>`);

    // Recruiter metadata
    // parts.push(`<section style="margin-bottom:8px;"><h3 style="margin:6px 0 4px 0;">Recruiter Info</h3>`);
    // parts.push(`<table style="width:100%;border-collapse:collapse;font-size:13px;">`);
    // const rfields = [
    //   ["Candidate", recruiter.candidateName],
    //   ["Location", recruiter.candidateLocation],
    //   ["Work site", recruiter.workSite],
    //   ["Interview date", recruiter.interviewDate],
    //   ["Interview time", recruiter.interviewTime],
    //   ["Interview level", recruiter.interviewLevel],
    //   ["Role", recruiter.role],
    //   ["Total exp", recruiter.totalExp],
    //   ["Relevant exp", recruiter.relevantExp],
    //   ["Interviewer name", recruiter.interviewerName],
    // ];
    // rfields.forEach(([label, val]) => {
    //   parts.push(`<tr><td style="padding:4px 6px;width:180px;font-weight:600;color:#0b1220;display:flex;justify-content:space-between;">${escapeHtml(label)}</td><td style="padding:4px 6px;">${escapeHtml(val || "")}</td></tr>`);
    // });
    // parts.push(`</table></section>`);

   parts.push(`
  <section style="margin-bottom:8px;">
    <h3 style="margin:6px 0 4px 0;">Recruiter Info</h3>

    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
      <tr>
        <!-- Card 1 -->
        <td width="33.33%" valign="top" style="padding:6px;">
          <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;background:#0b1220;border-radius:6px;">
            <tr><td style="font-weight:bold;color:#cbd5e1;padding:6px;">Candidate Name:</td><td style="color:#fff;padding:6px;">${escapeHtml(recruiter.candidateName || "")}</td></tr>
            <tr><td style="font-weight:bold;color:#cbd5e1;padding:6px;">Candidate Location:</td><td style="color:#fff;padding:6px;">${escapeHtml(recruiter.candidateLocation || "")}</td></tr>
            <tr><td style="font-weight:bold;color:#cbd5e1;padding:6px;">Work Site:</td><td style="color:#fff;padding:6px;">${escapeHtml(recruiter.workSite || "")}</td></tr>
          </table>
        </td>

        <!-- Card 2 -->
        <td width="33.33%" valign="top" style="padding:6px;">
          <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;background:#0b1220;border-radius:6px;">
            <tr><td style="font-weight:bold;color:#cbd5e1;padding:6px;">Interview Date:</td><td style="color:#fff;padding:6px;">${escapeHtml(recruiter.interviewDate || "")}</td></tr>
            <tr><td style="font-weight:bold;color:#cbd5e1;padding:6px;">Interview Time:</td><td style="color:#fff;padding:6px;">${escapeHtml(recruiter.interviewTime || "")}</td></tr>
            <tr><td style="font-weight:bold;color:#cbd5e1;padding:6px;">Interview Level:</td><td style="color:#fff;padding:6px;">${escapeHtml(recruiter.interviewLevel || "")}</td></tr>
            <tr><td style="font-weight:bold;color:#cbd5e1;padding:6px;">Role:</td><td style="color:#fff;padding:6px;">${escapeHtml(recruiter.role || "")}</td></tr>
          </table>
        </td>

        <!-- Card 3 -->
        <td width="33.33%" valign="top" style="padding:6px;">
          <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;background:#0b1220;border-radius:6px;">
            <tr><td style="font-weight:bold;color:#cbd5e1;padding:6px;">Total Experience:</td><td style="color:#fff;padding:6px;">${escapeHtml(recruiter.totalExp || "")}</td></tr>
            <tr><td style="font-weight:bold;color:#cbd5e1;padding:6px;">Relevant Experience:</td><td style="color:#fff;padding:6px;">${escapeHtml(recruiter.relevantExp || "")}</td></tr>
            <tr><td style="font-weight:bold;color:#cbd5e1;padding:6px;">Interviewer Name:</td><td style="color:#fff;padding:6px;">${escapeHtml(recruiter.interviewerName || "")}</td></tr>
          </table>
        </td>
      </tr>
    </table>
  </section>
`);




    // parts.push(`<section style="margin-bottom:8px;"><h3 style="margin:6px 0 4px 0;">Recruiter Info</h3>
    //   <table style="width:100%;border-collapse:collapse;font-size:13px;">
    //     <tr>
    //       <!-- Card 1 -->
    //       <td style="vertical-align:top;padding:10px 8px;background:#f3f4f6;border-radius:8px;width:33%;border:1px solid #e5e7eb;">
    //         <table style="width:100%;border-collapse:collapse;">
    //           <tr>
    //             <td style="font-weight:600;color:#0b1220;padding:4px 1px;">Candidate Name</td>
    //             <td style="padding:4px 6px;">${escapeHtml(recruiter.candidateName || "")}</td>
    //           </tr>
    //           <tr>
    //             <td style="font-weight:600;color:#0b1220;padding:4px 1px;">Candidate Location</td>
    //             <td style="padding:4px 6px;">${escapeHtml(recruiter.candidateLocation || "")}</td>
    //           </tr>
    //           <tr>
    //             <td style="font-weight:600;color:#0b1220;padding:4px 1px;">Work Site</td>
    //             <td style="padding:4px 6px;">${escapeHtml(recruiter.workSite || "")}</td>
    //           </tr>
    //         </table>
    //       </td>
    //       <!-- Card 2 -->
    //       <td style="vertical-align:top;padding:10px 8px;background:#f3f4f6;border-radius:8px;width:33%;border:1px solid #e5e7eb;">
    //         <table style="width:100%;border-collapse:collapse;">
    //           <tr>
    //             <td style="font-weight:600;color:#0b1220;padding:4px 1px;">Interview Date</td>
    //             <td style="padding:4px 6px;">${escapeHtml(recruiter.interviewDate || "")}</td>
    //           </tr>
    //           <tr>
    //             <td style="font-weight:600;color:#0b1220;padding:4px 1px;">Interview Time</td>
    //             <td style="padding:4px 6px;">${escapeHtml(recruiter.interviewTime || "")}</td>
    //           </tr>
    //           <tr>
    //             <td style="font-weight:600;color:#0b1220;padding:4px 1px;">Interview Level</td>
    //             <td style="padding:4px 6px;">${escapeHtml(recruiter.interviewLevel || "")}</td>
    //           </tr>
    //           <tr>
    //             <td style="font-weight:600;color:#0b1220;padding:4px 1px;">Role</td>
    //             <td style="padding:4px 6px;">${escapeHtml(recruiter.role || "")}</td>
    //           </tr>
    //         </table>
    //       </td>
    //       <!-- Card 3 -->
    //       <td style="vertical-align:top;padding:10px 8px;background:#f3f4f6;border-radius:8px;width:34%;border:1px solid #e5e7eb;">
    //         <table style="width:100%;border-collapse:collapse;">
    //           <tr>
    //             <td style="font-weight:600;color:#0b1220;padding:4px 6px;">Total Experience</td>
    //             <td style="padding:4px 6px;">${escapeHtml(recruiter.totalExp || "")}</td>
    //           </tr>
    //           <tr>
    //             <td style="font-weight:600;color:#0b1220;padding:4px 6px;">Relevant Experience</td>
    //             <td style="padding:4px 6px;">${escapeHtml(recruiter.relevantExp || "")}</td>
    //           </tr>
    //           <tr>
    //             <td style="font-weight:600;color:#0b1220;padding:4px 6px;">Interviewer Name</td>
    //             <td style="padding:4px 6px;">${escapeHtml(recruiter.interviewerName || "")}</td>
    //           </tr>
    //         </table>
    //       </td>
    //     </tr>
    //   </table>
    //   </section>`);

    // Skills table
    parts.push(`<section style="margin-top:8px;"><h3 style="margin:6px 0 4px 0;">Skills & Ratings</h3>`);
    parts.push(`<table style="width:100%;border-collapse:collapse;font-size:13px;">`);
    parts.push(`<thead><tr><th style="text-align:left;padding:6px;border-bottom:1px solid #ddd;">Skill</th><th style="text-align:left;padding:6px;border-bottom:1px solid #ddd;">Rating</th><th style="text-align:left;padding:6px;border-bottom:1px solid #ddd;">Pros</th><th style="text-align:left;padding:6px;border-bottom:1px solid #ddd;">Cons</th></tr></thead>`);
    parts.push(`<tbody>`);
    for (let n = 1; n <= 5; n++) {
      const k = `skill${n}`;
      const rating = ratingLabel(interviewer[`${k}_rating`]);
      const pros = interviewer[`${k}_pros`];
      const cons = interviewer[`${k}_cons`];
      const label = interviewer[k] || `Skill ${n}`;
      parts.push(`<tr><td style="padding:6px;vertical-align:top;"><strong>${escapeHtml(label)}</strong></td><td style="padding:6px;vertical-align:top;">${escapeHtml(rating)}</td><td style="padding:6px;vertical-align:top;">${nl2br(escapeHtml(pros))}</td><td style="padding:6px;vertical-align:top;">${nl2br(escapeHtml(cons))}</td></tr>`);
    }
    // Problem solving row
    parts.push(`<tr><td style="padding:6px;vertical-align:top;"><strong>Problem Solving / Critical Thinking</strong></td><td style="padding:6px;vertical-align:top;">${escapeHtml(ratingLabel(interviewer.problemSolving_rating))}</td><td style="padding:6px;vertical-align:top;">${nl2br(escapeHtml(interviewer.problemSolving_pros))}</td><td style="padding:6px;vertical-align:top;">${nl2br(escapeHtml(interviewer.problemSolving_cons))}</td></tr>`);
    parts.push(`</tbody></table></section>`);

    // Soft skills
    parts.push(`<section style="margin-top:8px;"><h3 style="margin:6px 0 4px 0;">Soft Skills</h3>`);
    const soft = ["communication", "adaptability", "cultureFit"];
    soft.forEach((s) => {
      parts.push(`<div style="margin-bottom:6px;"><strong>${escapeHtml(s.charAt(0).toUpperCase() + s.slice(1))} (Rating: ${escapeHtml(ratingLabel(interviewer[`${s}_rating`]))})</strong><div style="margin-top:4px;">Pros:<div style="margin-left:8px;">${nl2br(escapeHtml(interviewer[`${s}_pros`]))}</div></div><div style="margin-top:4px;">Cons:<div style="margin-left:8px;">${nl2br(escapeHtml(interviewer[`${s}_cons`]))}</div></div></div>`);
    });
    parts.push(`</section>`);

    // Live coding & qualifications
    parts.push(`<section style="margin-top:8px;"><h3 style="margin:6px 0 4px 0;">Live Coding & Qualification</h3>`);
    parts.push(`<div><strong>Live coding link:</strong> ${escapeHtml(interviewer.liveCodingLink || "")}</div>`);
    parts.push(`<div style="margin-top:6px;"><strong>Live coding observations:</strong><div style="margin-left:8px;">${nl2br(escapeHtml(interviewer.liveCodingObservation))}</div></div>`);
    parts.push(`<div style="margin-top:6px;"><strong>Qualified for role:</strong> ${escapeHtml(interviewer.qualifiedRole)}<div style="margin-left:8px;">${nl2br(escapeHtml(interviewer.qualifiedRoleReason))}</div></div>`);
    parts.push(`<div style="margin-top:6px;"><strong>Qualified for company:</strong> ${escapeHtml(interviewer.qualifiedCompany)}<div style="margin-left:8px;">${nl2br(escapeHtml(interviewer.qualifiedCompanyReason))}</div></div>`);
    parts.push(`<div style="margin-top:6px;"><strong>Suggested level:</strong> ${escapeHtml(interviewer.suggestedLevel)}<div style="margin-left:8px;">${nl2br(escapeHtml(interviewer.suggestedLevelReason))}</div></div>`);
    parts.push(`<div style="margin-top:6px;"><strong>Best role:</strong> ${escapeHtml(interviewer.bestRole)}<div style="margin-left:8px;">${nl2br(escapeHtml(interviewer.bestRoleReason))}</div></div>`);
    parts.push(`</section>`);

    // Overall comments
    parts.push(`<section style="margin-top:8px;"><h3 style="margin:6px 0 4px 0;">Overall Comments</h3>`);
    parts.push(`<div style="margin-left:8px;">${nl2br(escapeHtml(interviewer.comments))}</div>`);
    parts.push(`</section>`);

    parts.push(`<footer style="margin-top:12px;font-size:12px;color:#666;">Generated by Interview Feedback App</footer>`);
    parts.push(`</div>`);

    const html = parts.join("");
    return html.length > maxLen ? html.slice(0, maxLen) + "<p>...truncated...</p>" : html;
  }

  // Capture the rendered page and return a self-contained HTML string.
  // This implementation reads values from the live DOM (original), then replaces the corresponding nodes in the clone.
  function capturePageHtml(rootSelector = "#interview-root") {
    const root = document.querySelector(rootSelector);
    if (!root) return "<div>No content to capture</div>";

    // deep-clone the root node
    const clone = root.cloneNode(true);

    // Remove UI elements that should not be in the email
    clone.querySelectorAll('[data-no-email]').forEach((n) => n.remove());
    const footer = clone.querySelector("#send-report-footer");
    if (footer) footer.remove();

    // Gather original interactive elements and clone interactive elements in parallel
    const origInteractive = Array.from(root.querySelectorAll("input, textarea, select, [contenteditable='true']"));
    const cloneInteractive = Array.from(clone.querySelectorAll("input, textarea, select, [contenteditable='true']"));

    // Use index mapping (order is preserved by cloneNode) to read real values from live DOM
    origInteractive.forEach((origEl, i) => {
      const cloneEl = cloneInteractive[i];
      const replacement = document.createElement("div");
      replacement.style.whiteSpace = "pre-wrap";

      try {
        const tag = origEl.tagName && origEl.tagName.toLowerCase();

        if (tag === "input") {
          const type = (origEl.getAttribute("type") || "text").toLowerCase();
          if (type === "checkbox" || type === "radio") {
            replacement.textContent = origEl.checked ? (origEl.getAttribute("data-label") || "Selected") : (origEl.getAttribute("data-label-off") || "Not selected");
          } else {
            // Prefer the live .value
            replacement.textContent = origEl.value ?? "";
          }
        } else if (tag === "textarea") {
          replacement.textContent = origEl.value ?? origEl.textContent ?? "";
        } else if (tag === "select") {
          // Read selected options from the ORIGINAL element (live DOM) — this fixes "Choose an item."
          const options = Array.from(origEl.options || []);
          const picked = options.filter((o) => o.selected).map((o) => (o.textContent || o.label || o.value || "").trim());
          replacement.textContent = picked.join(", ");
        } else if (origEl.isContentEditable) {
          replacement.textContent = origEl.textContent ?? "";
        } else {
          replacement.textContent = origEl.textContent ?? "";
        }
      } catch (err) {
        // defensive fallback — try clone element if original read fails
        try {
          const fallbackText = (cloneEl && (cloneEl.value ?? cloneEl.textContent)) || "";
          replacement.textContent = fallbackText;
        } catch (e) {
          replacement.textContent = "";
        }
      }

      // Replace the clone's element (if it exists) otherwise try to find by name
      if (cloneEl && cloneEl.parentNode) {
        cloneEl.parentNode.replaceChild(replacement, cloneEl);
      } else {
        const name = origEl.getAttribute && origEl.getAttribute("name");
        if (name) {
          // CSS.escape polyfill fallback safe-guard
          const escaped = typeof CSS !== "undefined" && CSS.escape ? CSS.escape(name) : name.replace(/"/g, '\\"');
          const byName = clone.querySelector(`[name="${escaped}"]`);
          if (byName && byName.parentNode) {
            byName.parentNode.replaceChild(replacement, byName);
          }
        }
      }
    });

    // Collect inline <style> blocks from document head so styled capture keeps basic styling
    let styleHtml = "";
    Array.from(document.querySelectorAll("style")).forEach((s) => {
      styleHtml += s.outerHTML;
    });

    // Wrap into a minimal HTML document
    const html = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    ${styleHtml}
    <style>body{font-family:Arial,Helvetica,sans-serif;color:#111;padding:12px} .if-input, .if-select, .if-textarea{background:transparent;border:none;padding:0;margin:0}</style>
  </head>
  <body>${clone.innerHTML}</body>
</html>`;

    return html;
  }

  // Submit captured HTML via EmailJS
  // async function handleSendEmailJS() {
  //   setSendStatus("");
  //   const to = (recipientEmail || "").trim();
  //   if (!to || !/^[\w.+-]+@[\w-]+\.[\w.-]+$/.test(to)) {
  //     setSendStatus("Please enter a valid recipient email address.");
  //     return;
  //   }

  //   const serviceId = import.meta.env.VITE_EMAILJS_SERVICE;
  //   const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE;
  //   const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC;

  //   if (!serviceId || !templateId || !publicKey) {
  //     setSendStatus("Email service not configured. Set VITE_EMAILJS_SERVICE, VITE_EMAILJS_TEMPLATE, and VITE_EMAILJS_PUBLIC.");
  //     return;
  //   }

  //   setSending(true);
  //   setSendStatus("Sending...");

  //   try {
  //     // Prefer visual DOM capture for fidelity; fall back to programmatic builder if capture fails
  //     let capturedHtml = "";
  //     try {
  //       capturedHtml = capturePageHtml("#interview-root");
  //       // if capture returns a small "no content" message or empty, use the programmatic builder
  //       if (!capturedHtml || capturedHtml.includes("No content to capture") || capturedHtml.length < 50) {
  //         capturedHtml = buildHtmlReport(recruiterData, formData);
  //       }
  //     } catch (captureErr) {
  //       console.warn("DOM capture failed, falling back to buildHtmlReport()", captureErr);
  //       capturedHtml = buildHtmlReport(recruiterData, formData);
  //     }

  //     // 2) Attachment HTML: always use the programmatic builder so the attached Word doc is consistent
  // const docHtml = buildHtmlReport(recruiterData, formData);

  // // Create a Word-compatible Blob (HTML inside .doc). Use application/msword so recipients can open it in Word.
  // const docBlob = new Blob([docHtml], { type: "application/msword" });

  // // Convert Blob -> data URI (base64). EmailJS accepts data URIs in many setups for attachments.
  // const blobToDataUri = (blob) =>
  //   new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.onload = () => resolve(String(reader.result)); // e.g. "data:application/msword;base64,..."
  //     reader.onerror = (err) => reject(err);
  //     reader.readAsDataURL(blob);
  //   });

  // const attachmentDataUri = await blobToDataUri(docBlob);

  // // Build template params. Many EmailJS templates accept an `attachments` array of data-URIs.
  // const filenameSafe = (recruiterData?.candidateName || "candidate").replace(/\s+/g, "_");
  // const templateParams = {
  //   to_email: to,
  //   subject: `Interview Feedback — ${recruiterData?.candidateName || "Candidate"}`,
  //   message_html: emailHtml,
  //   // Attach data URI(s); check your EmailJS template variable name if different
  //   attachments: [attachmentDataUri],
  //   // Optional: some EmailJS setups/templates use a variable for the filename
  //   attachment_filename: `${filenameSafe}_interview.doc`,
  // };

  //     // Debugging helpers (uncomment to inspect before sending)
  //     // console.log("capturedHtmlPreview:", capturedHtml.slice(0, 1200));

  //     // const templateParams = {
  //     //   to_email: to,
  //     //   subject: `Interview Feedback — ${recruiterData?.candidateName || "Candidate"}`,
  //     //   message_html: capturedHtml,
  //     //   // defensive flag for templates that have conditionals
  //     //   show_to_email: false,
  //     // };

  //     await emailjs.send(serviceId, templateId, templateParams, publicKey);

  //     setSendStatus(`Email sent to ${to}. Check inbox/spam.`);
  //   } catch (err) {
  //     console.error("EmailJS send error:", err);
  //     setSendStatus("Failed to send email — check console and EmailJS dashboard for details.");
  //   } finally {
  //     setSending(false);
  //   }
  // }
async function handleSendEmailJS() {
  setSendStatus("");
  const to = (recipientEmail || "").trim();
  if (!to || !/^[\w.+-]+@[\w-]+\.[\w.-]+$/.test(to)) {
    setSendStatus("Please enter a valid recipient email address.");
    return;
  }

  // Read EmailJS params from Vite env variables
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC;

  if (!serviceId || !templateId || !publicKey) {
    setSendStatus("Email service not configured. Please set VITE_EMAILJS_SERVICE, VITE_EMAILJS_TEMPLATE and VITE_EMAILJS_PUBLIC in your .env.");
    return;
  }

  setSending(true);
  setSendStatus("Sending...");

  try {
    // Try to capture the live page HTML (if capturePageHtml exists and the selector is present).
    // Fall back to the programmatic builder to guarantee a result.
    let emailHtml;
    try {
      if (typeof capturePageHtml === "function") {
        // capturePageHtml may throw; guard with try/catch
        emailHtml = await capturePageHtml("#interview-root");
      }
    } catch (captureErr) {
      console.warn("capturePageHtml failed, falling back to buildHtmlReport:", captureErr);
    }

    if (!emailHtml) {
      emailHtml = buildHtmlReport(recruiterData, formData);
    }

    const templateParams = {
      to_email: to,
      subject: `Interview Feedback — ${recruiterData?.candidateName || "Candidate"}`,
      message_html: emailHtml,
      show_to_email: true,
    };

    // EmailJS browser send
    await emailjs.send(serviceId, templateId, templateParams, publicKey);

    setSendStatus(`Email sent to ${to}. Check inbox/spam.`);
  } catch (err) {
    console.error("EmailJS send error:", err);
    setSendStatus("Failed to send email — check console and EmailJS dashboard for details.");
  } finally {
    setSending(false);
  }
}
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleDownload = () => {
    const fullData = { recruiterData, interviewerData: formData };
    exportToWord(fullData);
  };

  const ratingOptions = (
    <>
      <option value="">Choose an item.</option>
      <option value="1">1 — Needs Significant Improvement</option>
      <option value="2">2</option>
      <option value="3">3 — Meets Expectations</option>
      <option value="4">4</option>
      <option value="5">5 — Exceptional</option>
    </>
  );

  const bestRoleList = ["Choose an item.", "SDE-Backend", "SDE-Fullstack", "SDE-FrontEnd", "Data Engineer", "Data Analyst", "AI Engineer", "SDET", "Manual Test Engineer", "DevOps Engineer", "SRE", "Technical PM", "Non-Tech PM", "D365-App Developer", "D365 - Technical - Support", "D365 - Functional - Support", "D365 - Platform Developer", "Inside-Sales", "Marketing", "L2/L3 - Technical Support", "L1 Technical Support", "Graphics Designer", "UX/UI Designer", "Audit & Compliance", "Biz Dev / Sales", "Talent Acquisition", "Other"];

  // Shared styles
  const pageWrapper = { width: "100%", display: "flex", justifyContent: "center", padding: "28px 20px" };
  const innerMax = { width: "100%", maxWidth: 1200 };
  const cardBg = "#0b1220";
  const inputDark = {
    background: "#0f1724",
    color: "#fff",
    border: "1px solid #374151",
    padding: "8px 10px",
    borderRadius: 6,
    width: "100%",
    boxSizing: "border-box",
    minWidth: 0,
  };

  const headerStyle = {
    background: "#d97706",
    color: "#fff",
    padding: "12px 18px",
    fontWeight: 700,
    borderRadius: 6,
    textAlign: "center",
    marginBottom: 12,
  };

  if (!recruiterData) {
    return (
      <div className="p-10 text-center text-red-600 text-lg font-semibold">
        ⚠️ Invalid or missing recruiter link data.
      </div>
    );
  }

  return (
    <div style={pageWrapper}>
      <div style={innerMax} id="interview-root">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Interview Feedback Form</h2>

        {/* Recruiter Info */}
        <section style={{ marginBottom: 18 }}>
          <div style={headerStyle}>Recruiter Info</div>

          {/* <style>{`
            .three-col { display: grid; gap: 16px; grid-template-columns: 1fr; }
            @media (min-width: 720px) {
              .three-col { grid-template-columns: repeat(3, minmax(0, 1fr)); }
            }
            .three-col > * { min-width: 0; }
          `}</style> */}

          <style>{`
            .three-col { display: flex; justify-content: space-evenly; }
          `}</style>

          <div className="three-col" style={{ marginTop: 8 }}>
            <div style={{ background: cardBg, padding: 18, borderRadius: 8, width: "25%" }}>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", rowGap: 12, columnGap: 12, alignItems: "center", gap: "10px" }}>
                {/* <div style={{display: "flex", flexDirection: "space-between" }}> */}
                <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Candidate Name</label>
                <input readOnly value={recruiterData.candidateName || ""} style={inputDark} />
                {/* </div> */}
                {/* <div style={{display: "flex", flexDirection: "space-between" }}> */}
                <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Candidate Location</label>
                <input readOnly value={recruiterData.candidateLocation || ""} style={inputDark} />
                {/* </div> */}
                {/* <div style={{display: "flex", flexDirection: "space-between" }}> */}
                <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Work Site</label>
                <input readOnly value={recruiterData.workSite || ""} style={inputDark} />
                {/* </div> */}
              </div>
            </div>

            <div style={{ background: cardBg, padding: 18, borderRadius: 8, width: "25%"  }}>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", rowGap: 12, columnGap: 12, alignItems: "center", gap: "10px"}}>
                <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Interview Date</label>
                <input readOnly value={recruiterData.interviewDate || ""} style={inputDark} />
                <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Interview Time</label>
                <input readOnly value={recruiterData.interviewTime || ""} style={inputDark} />
                <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Interview Level</label>
                <input readOnly value={recruiterData.interviewLevel || ""} style={inputDark} />
                <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Role</label>
                <input readOnly value={recruiterData.role || ""} style={inputDark} />
              </div>
            </div>

            <div style={{ background: cardBg, padding: 18, borderRadius: 8, width: "25%"  }}>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", rowGap: 12, columnGap: 12, alignItems: "center", gap: "10px" }}>
                <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Total Experience</label>
                <input readOnly value={recruiterData.totalExp || ""} style={inputDark} />
                <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Relevant Experience</label>
                <input readOnly value={recruiterData.relevantExp || ""} style={inputDark} />
                <label style={{ color: "#cbd5e1", textAlign: "right", paddingRight: 12, fontWeight: 700 }}>Interviewer Name</label>
                <input readOnly value={recruiterData.interviewerName || ""} style={inputDark} />
              </div>
            </div>
          </div>
        </section>

        {/* Interview details table */}
        <section style={{ marginBottom: 18 }}>
          <div style={headerStyle}>Interview Details</div>

          <style>{`
            .if-table-wrap { overflow-x: auto; border-radius: 8px; }
            .if-table { width: 100%; border-collapse: collapse; min-width: 900px; background: ${cardBg}; color: #fff; }
            .if-table th { background: #0284c7; color: #fff; padding: 12px; text-align: left; border-bottom: 2px solid rgba(255,255,255,0.06); font-weight: 700; }
            .if-table td { padding: 8px; vertical-align: top; border-bottom: 1px solid rgba(255,255,255,0.04); }
            .if-left-col { width: 30%; max-width: 360px; padding-left: 12px; font-weight: 700; color: #e6eef6; }
            .if-input, .if-select, .if-textarea { background: #0f1724; color: #fff; border: 1px solid #374151; padding: 8px; border-radius: 6px; width: 100%; box-sizing: border-box; min-width: 0; }
            .if-textarea { min-height: 64px; resize: vertical; padding: 10px; }
            .if-rating-cell { width: 12%; max-width: 140px; }
            .if-pros-cons { width: 29%; }
          `}</style>

          <div className="if-table-wrap" style={{ marginTop: 8 }}>
            <table className="if-table" role="table" aria-label="Interview details table">
              <thead>
                <tr>
                  <th>Interview Details (Mention the skills interviewed and add more than 5 if required)</th>
                  <th className="if-rating-cell">Ratings (1 to 5)<br /><small style={{ fontWeight: 400 }}>1 = Needs Significant improvement, 3 = meets expectations, 5 = Exceptional</small></th>
                  <th className="if-pros-cons">Areas did Well (Pros)</th>
                  <th className="if-pros-cons">Areas of Improvement (Cons)</th>
                </tr>
              </thead>

              <tbody>
                {[1,2,3,4,5].map((n) => {
                  const key = `skill${n}`;
                  return (
                    <tr key={key}>
                      <td className="if-left-col">
                        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                          <div style={{ minWidth: 72, color: "#cbd5e1", fontWeight: 700 }}>Skill {n}:</div>
                          <input
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                            placeholder={`e.g. Skill ${n}`}
                            className="if-input"
                          />
                        </div>
                      </td>

                      <td>
                        <select name={`${key}_rating`} value={formData[`${key}_rating`]} onChange={handleChange} className="if-select">
                          {ratingOptions}
                        </select>
                      </td>

                      <td>
                        <textarea name={`${key}_pros`} value={formData[`${key}_pros`]} onChange={handleChange} className="if-textarea" placeholder="Details Must" />
                      </td>

                      <td>
                        <textarea name={`${key}_cons`} value={formData[`${key}_cons`]} onChange={handleChange} className="if-textarea" placeholder="Details Must" />
                      </td>
                    </tr>
                  );
                })}

                {/* Problem Solving */}
                <tr>
                  <td className="if-left-col">
                    <div style={{ minWidth: 72, color: "#cbd5e1", fontWeight: 700 }}>Problem Solving / Critical Thinking</div>
                  </td>

                  <td>
                    <select name="problemSolving_rating" value={formData.problemSolving_rating} onChange={handleChange} className="if-select">
                      {ratingOptions}
                    </select>
                  </td>

                  <td>
                    <textarea name="problemSolving_pros" value={formData.problemSolving_pros} onChange={handleChange} className="if-textarea" placeholder="Pros" />
                  </td>

                  <td>
                    <textarea name="problemSolving_cons" value={formData.problemSolving_cons} onChange={handleChange} className="if-textarea" placeholder="Cons" />
                  </td>
                </tr>

                {/* Live coding / platform link */}
                <tr>
                  <td className="if-left-col">
                    <div style={{ minWidth: 72, color: "#cbd5e1", fontWeight: 700 }}>Live Coding Platform Link (if applicable)</div>
                    <input name="liveCodingLink" value={formData.liveCodingLink} onChange={handleChange} className="if-input" style={{ marginTop: 8 }} placeholder="https://..." />
                  </td>

                  <td>
                    <div style={{ color: "#cbd5e1", fontWeight: 600 }}>—</div>
                  </td>

                  <td colSpan={2}>
                    <textarea name="liveCodingObservation" value={formData.liveCodingObservation} onChange={handleChange} className="if-textarea" placeholder="Observation during live coding interview (if applicable)" />
                  </td>
                </tr>

                {/* Communication */}
                <tr>
                  <td className="if-left-col">
                    <div style={{ minWidth: 72, color: "#cbd5e1", fontWeight: 700 }}>Communication:</div>
                  </td>

                  <td>
                    <select name="communication_rating" value={formData.communication_rating} onChange={handleChange} className="if-select">
                      {ratingOptions}
                    </select>
                  </td>

                  <td>
                    <textarea
                      name="communication_pros"
                      value={formData.communication_pros}
                      onChange={handleChange}
                      className="if-textarea"
                      rows={6}
                    />
                  </td>

                  <td>
                    <textarea
                      name="communication_cons"
                      value={formData.communication_cons}
                      onChange={handleChange}
                      className="if-textarea"
                      rows={6}
                    />
                  </td>
                </tr>

                {/* Adaptability */}
                <tr>
                  <td className="if-left-col">
                    <div style={{ minWidth: 72, color: "#cbd5e1", fontWeight: 700 }}>Adaptability:</div>
                  </td>

                  <td>
                    <select name="adaptability_rating" value={formData.adaptability_rating} onChange={handleChange} className="if-select">
                      {ratingOptions}
                    </select>
                  </td>

                  <td>
                    <textarea
                      name="adaptability_pros"
                      value={formData.adaptability_pros}
                      onChange={handleChange}
                      className="if-textarea"
                      rows={6}
                    />
                  </td>

                  <td>
                    <textarea
                      name="adaptability_cons"
                      value={formData.adaptability_cons}
                      onChange={handleChange}
                      className="if-textarea"
                      rows={6}
                    />
                  </td>
                </tr>

                {/* WCT Culture Fit */}
                <tr>
                  <td className="if-left-col">
                    <div style={{ minWidth: 72, color: "#cbd5e1", fontWeight: 700 }}>WCT Culture Fit</div>
                  </td>

                  <td>
                    <select name="cultureFit_rating" value={formData.cultureFit_rating} onChange={handleChange} className="if-select">
                      {ratingOptions}
                    </select>
                  </td>

                  <td>
                    <textarea
                      name="cultureFit_pros"
                      value={formData.cultureFit_pros}
                      onChange={handleChange}
                      className="if-textarea"
                      rows={6}
                    />
                  </td>

                  <td>
                    <textarea
                      name="cultureFit_cons"
                      value={formData.cultureFit_cons}
                      onChange={handleChange}
                      className="if-textarea"
                      rows={6}
                    />
                  </td>
                </tr>

                {/* Qualification / Suggestions rows */}
                <tr>
                  <td className="if-left-col">Qualified for the role (Y/N)</td>
                  <td>
                    <select name="qualifiedRole" value={formData.qualifiedRole} onChange={handleChange} className="if-select">
                      <option value="">Choose an item.</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </td>
                  <td colSpan={2}>
                    <textarea name="qualifiedRoleReason" value={formData.qualifiedRoleReason} onChange={handleChange} className="if-textarea" placeholder="Provide Reasoning (Must)" />
                  </td>
                </tr>

                <tr>
                  <td className="if-left-col">Qualified for Company — Other Teams (Y/N)</td>
                  <td>
                    <select name="qualifiedCompany" value={formData.qualifiedCompany} onChange={handleChange} className="if-select">
                      <option value="">Choose an item.</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </td>
                  <td colSpan={2}>
                    <textarea name="qualifiedCompanyReason" value={formData.qualifiedCompanyReason} onChange={handleChange} className="if-textarea" placeholder="Provide Reasoning (Must)" />
                  </td>
                </tr>

                <tr>
                  <td className="if-left-col">Suggested level of Candidate</td>
                  <td>
                    <select name="suggestedLevel" value={formData.suggestedLevel} onChange={handleChange} className="if-select">
                      <option value="">Choose an item.</option>
                      <option value="Junior">Junior</option>
                      <option value="Mid">Mid</option>
                      <option value="Senior">Senior</option>
                    </select>
                  </td>
                  <td colSpan={2}>
                    <textarea name="suggestedLevelReason" value={formData.suggestedLevelReason} onChange={handleChange} className="if-textarea" placeholder="Provide Reasoning (Must)" />
                  </td>
                </tr>

                <tr>
                  <td className="if-left-col">Best suited Role (post Interview)</td>
                  <td>
                    <select
                      name="bestRole"
                      value={formData.bestRole}
                      onChange={handleChange}
                      className="if-select"
                      style={{ width: '100%' }}
                    >
                      {bestRoleList.map((opt, i) => (
                        <option key={i} value={opt === "Choose an item." ? "" : opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td colSpan={2}>
                    <textarea name="bestRoleReason" value={formData.bestRoleReason} onChange={handleChange} className="if-textarea" placeholder="Provide Suggested Role (if different) and Reasoning (Must)" />
                  </td>
                </tr>

                {/* Overall Interview Comments row */}
                <tr>
                  <td className="if-left-col">Overall Interview Comments:</td>
                  <td colSpan={3}>
                    <textarea name="comments" value={formData.comments} onChange={handleChange} className="if-textarea" placeholder="Add your final observations and feedback..." rows={6} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

                {/* small email controls (these are marked so capture removes them) */}
        <div id="send-report-footer" data-no-email style={{ display: "flex", gap: 8, marginBottom: 12, alignItems: "center" }}>
          <input
            type="email"
            placeholder="recipient@example.com"
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
            style={{ padding: "8px 10px", borderRadius: 6, border: "1px solid #ccc", width: 320 }}
          />
          <button onClick={handleSendEmailJS} disabled={sending} style={{ background: "#0369a1", color: "#fff", padding: "8px 12px", borderRadius: 6, border: "none", cursor: "pointer" }}>
            {sending ? "Sending…" : "Send Email"}
          </button>
          <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
            <button onClick={handleDownload} data-no-email style={{ background: "#16a34a", color: "#fff", padding: "8px 12px", borderRadius: 6, border: "none", cursor: "pointer" }}>
              Download as Word
            </button>
            <div style={{ color: "#666", alignSelf: "center", fontSize: 13 }}>{sendStatus}</div>
          </div>
        </div>
      </div>
    </div>
  );
}