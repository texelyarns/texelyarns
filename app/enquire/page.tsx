import EnquiryForm from "@/app/components/EnquiryForm";

export const metadata = {
  title: "Enquire | Texel Yarns",
};

export default function EnquirePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Place an Enquiry</h1>

      <p className="text-neutral-600 mb-8">
        Submit your requirements and our team will get back to you shortly.
      </p>

      <EnquiryForm formName="enquiry-page" />
    </div>
  );
}
