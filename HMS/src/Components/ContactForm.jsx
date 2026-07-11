
function ContactForm() {
  return (
    <section className="HMSContactFormSection">

      <div className="HMSContactForm">

        <h2>Send Us a Message</h2>

        <p>
          Have a question or need assistance? Fill out the form below and our
          team will get back to you as soon as possible.
        </p>

        <form>

          <div className="HMSInputRow">

            <div className="HMSInputGroup">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
              />
            </div>

            <div className="HMSInputGroup">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>

          </div>

          <div className="HMSInputRow">

            <div className="HMSInputGroup">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="HMSInputGroup">
              <label>Subject</label>
              <input
                type="text"
                placeholder="Subject"
              />
            </div>

          </div>

          <div className="HMSInputGroup">
            <label>Message</label>

            <textarea
              rows="7"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button type="submit" className="HMSSendBtn">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default ContactForm;