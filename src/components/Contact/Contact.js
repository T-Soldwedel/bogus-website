import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

const Contact = () => {
  return (
    
    <div id="anchor-name" className="contact-section">

      <div className="contact-img-background">
        <section className="message-container">
          <h1 id="contact">Get in Touch with us</h1>
          <div class="row">
            <div class=" col-md-6 col-md-6">
              <label for="exampleFormControlInput1" class="form-label">
                First Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your first name here..."
              />
            </div>

            <div id="lastNameFix" class="col-md-6 mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Last Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your last name here..."
              />
            </div>
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Subject
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Message
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="wrap">
            <button>Submit</button>
          </div>
        </section>

        <div className="contact-info-container">
          <div className="contact-symbols">
            <FontAwesomeIcon className="contact-symbols" icon={faEnvelope} />
            <FontAwesomeIcon className="contact-symbols" icon={faPhone} />
          </div>

          <div className="contact-info">
            <p>triomio@gmail.com</p>
            <p>030 3322 123 323</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
