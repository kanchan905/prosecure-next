"use client";
import { useForm } from "react-hook-form";
import { Row, Col, Form } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import "@/style/Contact.css";
import Swal from "sweetalert2";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      mobile: "",
      message: "",
    },
  });

  const watchMobile = watch("mobile");

  // Handle mobile number formatting
  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setValue("mobile", value);
  };

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_DEV_URL}/api/contact-post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        Swal.fire("Success", "Form submitted successfully!", "success");
        reset();
      } else {
        const errorData = await response.json();
        Swal.fire("Error", "Form submission failed: " + errorData.message, "error");
      }
    } catch (error) {
      Swal.fire("Error", "Form submission failed due to a network error. Please try again later.", "error");
    }
  };

  function onChange(value) {
    // handle captcha value if needed
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row className="responsive-reverse">
        <Col sm={12} md={12} lg={6}>
          <Form.Group className="mb-3" controlId="exampleFName.Controlinput1">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              {...register("first_name", {
                required: "First Name is required",
              })}
            />
            <div className="text-danger">{errors.first_name?.message}</div>
          </Form.Group>
        </Col>
        <Col sm={12} md={12} lg={6}>
          <Form.Group className="mb-3" controlId="exampleLName.Controlinput1">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              {...register("last_name", {
                required: "Last Name is required",
              })}
            />
            <div className="text-danger">{errors.last_name?.message}</div>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3" controlId="exampleForm.Controlinput2">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })}
        />
        <div className="text-danger">{errors.email?.message}</div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.Controlinput3">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="10 digit mobile number"
          value={watchMobile}
          onChange={handleMobileChange}
          {...register("mobile", {
            required: "Mobile number is required",
            pattern: {
              value: /^\d{10}$/,
              message: "Please enter a valid 10-digit mobile number",
            },
          })}
        />
        <div className="text-danger">{errors.mobile?.message}</div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.Controlinput4">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Your message here..."
          {...register("message", {
            required: "Message is required",
          })}
        />
        <div className="text-danger">{errors.message?.message}</div>
      </Form.Group>
      <div>
        <ReCAPTCHA sitekey="6LfcBCApAAAAAGBfGdxOUlHfOoMdZgc-wmJ0nysQ" onChange={onChange} />
      </div>
      <button type="submit" className="eva-btn eva-outline-white my-3 contact-btn">
        Send me quote
      </button>
    </Form>
  );
}