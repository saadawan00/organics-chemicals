import React from 'react'

const SubmitMail = () => {
  return (
    <div className="m-b30">
    {/* TITLE START */}
    <h2 className="m-b30">Get In Touch</h2>
    {/* TITLE END */}
    <div className="row">
      <div className="col-md-6 col-sm-6">
        <div className="form-group">
          <input
            name="username"
            type="text"
            required
            className="form-control"
            placeholder="Name"
          />
        </div>
      </div>
      <div className="col-md-6 col-sm-6">
        <div className="form-group">
          <input
            name="email"
            type="text"
            className="form-control"
            required
            placeholder="Email"
          />
        </div>
      </div>
      <div className="col-md-6 col-sm-6">
        <div className="form-group">
          <input
            name="phone"
            type="text"
            className="form-control"
            required
            placeholder="Phone"
          />
        </div>
      </div>
      <div className="col-md-6 col-sm-6">
        <div className="form-group">
          <input
            name="subject"
            type="text"
            className="form-control"
            required
            placeholder="Subject"
          />
        </div>
      </div>
      <div className="col-md-12">
        <div className="form-group">
          <textarea
            name="message"
            className="form-control"
            rows={4}
            placeholder="Message"
            defaultValue={""}
          />
        </div>
      </div>
      <div className="col-md-12">
        <button
          type="button"
          className="site-button site-btn-effect"
        >
          Submit Now
        </button>
      </div>
    </div>
  </div>
  )
}

export default SubmitMail


