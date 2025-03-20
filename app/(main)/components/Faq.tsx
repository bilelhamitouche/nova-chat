function Faq() {
  return (
    <div className="space-y-16 max-w-2xl">
      <h2 className="text-2xl font-bold text-center">
        Frequently Asked Questions
      </h2>
      <div>
        <div className="border collapse collapse-plus bg-base-100 border-base-300">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="text-lg font-semibold collapse-title">
            How secure is NovaChat?
          </div>
          <div className="text-base collapse-content">
            NovaChat uses end-to-end encryption for all messages, ensuring that
            only you and your intended recipients can read them. We employ
            industry-leading security measures to protect your data.
          </div>
        </div>
        <div className="border collapse collapse-plus bg-base-100 border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="text-lg font-semibold collapse-title">
            Is NovaChat free to use?
          </div>
          <div className="text-base collapse-content">
            Yes, NovaChat is free for personal use. We also offer premium plans
            for businesses with additional features and support.
          </div>
        </div>
        <div className="border collapse collapse-plus bg-base-100 border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="text-lg font-semibold collapse-title">
            Can I use NovaChat for business?
          </div>
          <div className="text-base collapse-content">
            Absolutely! We offer specialized business plans with advanced
            features like team management, analytics, and priority support.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
