"use client";

import EnquiryForm from "./EnquiryForm";

export default function EnquiryModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 relative animate-fadeIn">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-neutral-500 hover:text-neutral-700"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-4">Place an Enquiry</h2>

        <EnquiryForm formName="enquiry-modal" />
      </div>
    </div>
  );
}
