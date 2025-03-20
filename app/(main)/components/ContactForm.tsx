function ContactForm() {
  return (
    <fieldset className="p-4 border fieldset w-sm bg-base-200 border-base-300 rounded-box">
      <h1 className="text-xl font-bold text-center">Send us a message</h1>
      <label className="fieldset-label">Name</label>
      <input type="name" className="w-full input" placeholder="Name" />

      <label className="fieldset-label">Email</label>
      <input type="email" className="w-full input" placeholder="Email" />

      <label className="fieldset-label">Message</label>
      <textarea className="w-full textarea" placeholder="Message"></textarea>

      <button className="mt-4 w-full btn btn-primary">Send Message</button>
    </fieldset>
  );
}

export default ContactForm;
