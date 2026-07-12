import { useMemo, useState } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { Button } from "../../shared/Button.jsx";
import { Container } from "../../shared/Container.jsx";
import { SectionHeading } from "../../shared/SectionHeading.jsx";
import {
  contactDetails,
  formConfig,
} from "../../../utils/constant.jsx";

const initialValues = {
  budget: formConfig.budgetRanges[0] || "",
  company: "",
  email: "",
  message: "",
  name: "",
  service: formConfig.serviceOptions[0] || "",
};

export function Contact() {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ message: "", type: "idle" });
  const [submitting, setSubmitting] = useState(false);
  const [values, setValues] = useState(initialValues);

  const endpointReady = useMemo(
    () =>
      Boolean(formConfig.endpoint) &&
      !formConfig.endpoint.includes("REPLACE_WITH_FORM_ID"),
    [],
  );

  const validate = () => {
    const nextErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!values.message.trim()) {
      nextErrors.message = "Please share a short project message.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ message: "", type: "idle" });

    if (!validate()) {
      return;
    }

    if (!endpointReady) {
      setStatus({
        message:
          "Replace the Formspree placeholder endpoint in src/utils/constant.jsx before enabling submissions.",
        type: "setup",
      });
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(formConfig.endpoint, {
        body: JSON.stringify(values),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setValues(initialValues);
      setStatus({
        message: "Thanks. Your message has been sent.",
        type: "success",
      });
    } catch {
      setStatus({
        message: "Something went wrong while sending. Please email directly.",
        type: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <Container className="contact-grid">
        <div>
          <SectionHeading
            eyebrow="Contact"
            intro="A small, direct project brief is enough to start the conversation."
            title="Tell me what you are building."
          />

          <div className="contact-cards">
            {contactDetails.email ? (
              <a href={`mailto:${contactDetails.email}`}>
                <FiMail aria-hidden="true" />
                <span>{contactDetails.email}</span>
              </a>
            ) : null}
            {contactDetails.phone ? (
              <a href={`tel:${contactDetails.phone.replaceAll(" ", "")}`}>
                <FiPhone aria-hidden="true" />
                <span>{contactDetails.phone}</span>
              </a>
            ) : null}
            {contactDetails.location ? (
              <span>
                <FiMapPin aria-hidden="true" />
                {contactDetails.location}
              </span>
            ) : null}
          </div>
        </div>

        <form className="contact-form" noValidate onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input
              aria-describedby={errors.name ? "name-error" : undefined}
              aria-invalid={Boolean(errors.name)}
              id="name"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name ? <p id="name-error">{errors.name}</p> : null}
          </div>

          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              aria-describedby={errors.email ? "email-error" : undefined}
              aria-invalid={Boolean(errors.email)}
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email ? <p id="email-error">{errors.email}</p> : null}
          </div>

          <div className="form-row">
            <label htmlFor="company">Company or organization</label>
            <input
              id="company"
              name="company"
              type="text"
              value={values.company}
              onChange={handleChange}
            />
          </div>

          <div className="form-row form-row--split">
            <div>
              <label htmlFor="service">Service interested in</label>
              <select
                id="service"
                name="service"
                value={values.service}
                onChange={handleChange}
              >
                {formConfig.serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="budget">Budget range</label>
              <select
                id="budget"
                name="budget"
                value={values.budget}
                onChange={handleChange}
              >
                {formConfig.budgetRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <label htmlFor="message">Project message</label>
            <textarea
              aria-describedby={errors.message ? "message-error" : undefined}
              aria-invalid={Boolean(errors.message)}
              id="message"
              name="message"
              rows="6"
              value={values.message}
              onChange={handleChange}
            />
            {errors.message ? <p id="message-error">{errors.message}</p> : null}
          </div>

          {status.message ? (
            <p className={`form-status form-status--${status.type}`}>
              {status.message}
            </p>
          ) : null}

          <Button disabled={submitting} icon="none" type="submit" variant="primary">
            {submitting ? "Sending..." : "Send project brief"}
          </Button>
        </form>
      </Container>
    </section>
  );
}
