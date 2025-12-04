// "use client";

// import { useState } from "react";
// import EnquiryForm from "./old equiryform";

// export default function EnquiryModal() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <button
//         onClick={() => setOpen(true)}
//         className="px-5 py-2 rounded-lg text-white font-medium"
//         style={{
//           background: "var(--theme-brand-primary)",
//         }}
//       >
//         Enquire
//       </button>

//       {open && (
//         <div
//           className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
//           onClick={() => setOpen(false)}
//         >
//           <div
//             className="bg-white rounded-lg p-6 max-w-md w-full relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute top-3 right-3 text-gray-500 text-xl"
//             >
//               ×
//             </button>

//             <h2 className="text-xl font-semibold mb-4">Send an Enquiry</h2>

//             <EnquiryForm compact />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// "use client";

// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// export default function EnquiryModal({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* ============ TRIGGER BUTTON (YOUR PLACEHOLDER) ============ */}
//       <span onClick={() => setOpen(true)} className="cursor-pointer">
//         {children}
//       </span>

//       {/* ============ BACKDROP + MODAL ============ */}
//       <AnimatePresence>
//         {open && (
//           <>
//             {/* Backdrop */}
//             <motion.div
//               className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90]"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setOpen(false)}
//             />

//             {/* Modal Wrapper */}
//             <motion.div
//               className="fixed inset-0 z-[100] flex items-center justify-center px-4"
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               transition={{ type: "spring", damping: 22, stiffness: 220 }}
//             >
//               <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg p-6 relative border border-neutral-200">
//                 {/* Close button */}
//                 <button
//                   onClick={() => setOpen(false)}
//                   className="absolute top-3 right-3 text-neutral-500 hover:text-neutral-700"
//                 >
//                   ✕
//                 </button>

//                 {/* ---------------------------- */}
//                 {/*         ENQUIRY FORM         */}
//                 {/* ---------------------------- */}
//                 <h2 className="text-xl font-semibold text-gray-900 mb-1">
//                   Send an Enquiry
//                 </h2>
//                 <p className="text-neutral-500 text-sm mb-6">
//                   Share your requirements; we’ll respond shortly.
//                 </p>

//                 <form
//                   name="texel-enquiry-modal"
//                   method="POST"
//                   data-netlify="true"
//                   encType="multipart/form-data"
//                   className="space-y-5"
//                 >
//                   {/* Netlify hidden field */}
//                   <input
//                     type="hidden"
//                     name="form-name"
//                     value="texel-enquiry-modal"
//                   />

//                   {/* FULL NAME */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Full Name
//                     </label>
//                     <input
//                       name="name"
//                       required
//                       type="text"
//                       className="w-full rounded-lg border border-neutral-300 px-4 py-2 focus:ring-2 focus:ring-brand-primary/60 focus:border-brand-primary"
//                     />
//                   </div>

//                   {/* EMAIL */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Email
//                     </label>
//                     <input
//                       name="email"
//                       required
//                       type="email"
//                       className="w-full rounded-lg border border-neutral-300 px-4 py-2 focus:ring-2 focus:ring-brand-primary/60 focus:border-brand-primary"
//                     />
//                   </div>

//                   {/* PHONE */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Phone Number
//                     </label>
//                     <input
//                       name="phone"
//                       required
//                       type="text"
//                       className="w-full rounded-lg border border-neutral-300 px-4 py-2 focus:ring-2 focus:ring-brand-primary/60 focus:border-brand-primary"
//                     />
//                   </div>

//                   {/* MESSAGE */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Your Message
//                     </label>
//                     <textarea
//                       name="message"
//                       rows={4}
//                       required
//                       className="w-full rounded-lg border border-neutral-300 px-4 py-2 focus:ring-2 focus:ring-brand-primary/60 focus:border-brand-primary"
//                     ></textarea>
//                   </div>

//                   {/* FILE UPLOAD */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Attach Files (Optional)
//                     </label>
//                     <input
//                       name="attachment"
//                       type="file"
//                       multiple
//                       className="block w-full text-sm text-gray-700 border border-neutral-300 rounded-lg cursor-pointer bg-neutral-50 file:px-4 file:py-2 file:rounded-lg file:border-none file:bg-brand-primary file:text-white"
//                     />
//                   </div>

//                   {/* SUBMIT */}
//                   <button
//                     type="submit"
//                     className="w-full rounded-lg bg-brand-primary text-white py-3 font-semibold shadow hover:bg-brand-primary/90 transition"
//                   >
//                     Submit Enquiry
//                   </button>
//                 </form>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

"use client";

import { useState } from "react";

export default function EnquiryModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [files, setFiles] = useState<FileList | null>(null);

  if (!isOpen) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6"
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">
          Enquiry Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="w-full border rounded-lg px-3 py-2" placeholder="Full Name" required />
          <input className="w-full border rounded-lg px-3 py-2" placeholder="Email" required />
          <input className="w-full border rounded-lg px-3 py-2" placeholder="Phone Number" />
          <textarea
            className="w-full border rounded-lg px-3 py-2 h-28"
            placeholder="Your Message"
          />

          <div>
            <label className="block text-sm text-gray-600 mb-1">Attach Files (Optional)</label>
            <input
              type="file"
              multiple
              onChange={(e) => setFiles(e.target.files)}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-brand-primary text-white py-3 rounded-lg font-medium"
          >
            Submit Enquiry
          </button>
        </form>

        <button
          onClick={onClose}
          className="w-full text-center mt-3 text-sm text-gray-500 hover:text-gray-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}
