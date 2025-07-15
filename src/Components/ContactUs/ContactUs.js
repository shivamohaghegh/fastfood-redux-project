const ContactUs = () => {
  return (
    <div className="container mt-5">
      <div className="row my-5">
        <div className="col-md-6">
          <div className="mb-3">
            <input
              type="email"
              className="form-control form-control-lg"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={7}
              defaultValue={""}
            />
          </div>
          <button className="btn btn-outline-success mt-3">Send</button>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <div className="mb-2 ">
              <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.4689629983833!2d51.388973975689476!3d35.68919713074096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0171e7bc1c17%3A0xeebdb1fc2d3f6b64!2sTehran%2C%20Iran!5e0!3m2!1sen!2s!4v1652807079572!5m2!1sen!2s"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded"
              ></iframe>
            </div>
            <p className="text-secondary mt-2">
              Tehran, Valiasr Street, Building No. 123
              <br />
              Phone: +98 912 003 8325
              <br />
              Email: info@example.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
