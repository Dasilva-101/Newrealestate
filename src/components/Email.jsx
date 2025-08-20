import { Link, useNavigate } from "react-router-dom";
import Lagoslocations from "../data/Lagoslocations";
import React, {useState} from "react";

function Email() {
   const navigate = useNavigate();
const [status, setStatus] = useState("idle");

const handleContactSubmit = async (e) => {
  e.preventDefault();
  setStatus("loading");

  const form = e.target;
  const data = new FormData(form);

  const res = await fetch("https://formspree.io/f/mdkdvqkg", {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" },
  });

  if (res.ok) {
    form.reset();
    setStatus("success");
    navigate("/thankyou");         
  } else {
    setStatus("error");
  }
};
return(
        <div className="row justify-content-center">
      <div className="col-md-8">
        <form onSubmit={handleContactSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="mb-4">
                <textarea
                  name="message"
                  className="form-control"
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "error" && (
                <p className="text-danger mt-3 mb-0">
                  ⚠️ Could not send. Please try again.
                </p>
              )}
            </form>
            </div>
            </div>
)
}
export default Email;