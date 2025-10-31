"use client";

import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useRouter, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import styled from "styled-components";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";

export default function ApplicationForm(){
    const router = useRouter();
    const searchParams = useSearchParams();
    const formRef = React.useRef(null);

    // Use Redux state instead of context
    const { career } = useSelector((state) => state.content);
    
    // Get career ID from URL params instead of location state
    const careerId = searchParams.get('id');

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
        watch,
    } = useForm({
        defaultValues: {
            position_id: careerId,
            first_name: '',
            last_name: '',
            address: '',
            email: '',
            phone: '',
            experience: '',
            resume: null
        },
    });

    const watchPhone = watch("phone");

    // Handle phone number formatting
    const handlePhoneChange = (e) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 10);
        setValue("phone", value);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setValue("resume", file);
    };
    
    const onSubmit = async (data) => {
        const formDataToSend = new FormData();
        formDataToSend.append('position_id', data.position_id);
        formDataToSend.append('first_name', data.first_name);
        formDataToSend.append('last_name', data.last_name);
        formDataToSend.append('address', data.address);
        formDataToSend.append('email', data.email);
        formDataToSend.append('phone', data.phone);
        formDataToSend.append('experience', data.experience);
        formDataToSend.append('resume', data.resume[0]);
        
        try {
            // Use environment variable for API URL
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_DEV_URL}/applicant`, {
                method: 'POST',
                body: formDataToSend,
                headers: {
                    'Accept': 'application/json'
                }
            });
    
            if (response.ok) {
                Swal.fire('Success', 'Form submitted successfully!', 'success');
                // Reset form after successful submission
                reset({
                    position_id: careerId,
                    first_name: '',
                    last_name: '',
                    address: '',
                    email: '',
                    phone: '',
                    experience: '',
                    resume: null
                });
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            Swal.fire('Error', error.message, 'error');
            console.log(error.response);
        }
    };
        

    function onChange(value) {
        console.log("Captcha value:", value);
    }

    return(
        <React.Fragment>            
            <div className="bg-image" style={{backgroundImage: "url('/frontend/assets/image/dark-theme-background.jpg')"}}>
                <div className="py-3 position-relative" style={{zIndex: "999"}}>
                    <Container fluid>
                        <h1 className="page-name">Applicant</h1>
                        <div className="breadcrumb">
                            <button className="breadcrumb-item" onClick={() => router.back()}>career</button>
                            <p className="breadcrumb-item active">Applicant</p>
                        </div>
                    </Container>
                </div>
            </div>
            <div style={{padding: '3em 0px'}}>
                <Container fluid>
                    <Button variant="link" onClick={() => router.back()}>Back to Job Description</Button>
                    <h3>Applicant Form</h3>
                    <Form className="my-3" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
                        <Row>
                            <Col lg="12">
                                <Form.Group className="mb-3" controlId="positionForm.ControlInput1">
                                    <Form.Label>Position</Form.Label>
                                    <Form.Select 
                                        {...register("position_id", {
                                            required: "Position is required"
                                        })}
                                    >
                                        <option value="">Select...</option>
                                        {
                                            career ? career.map((ele, index) => (
                                                <option key={index} value={ele.id}>{ele.title}</option>
                                            )) :
                                            <option value="1">Business Developer</option>
                                        }
                                    </Form.Select>
                                    <div className="text-danger">{errors.position_id?.message}</div>
                                </Form.Group>
                            </Col>
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="firstNameForm.ControlInput2">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        {...register("first_name", {
                                            required: "First name is required"
                                        })}
                                    />
                                    <div className="text-danger">{errors.first_name?.message}</div>
                                </Form.Group>
                            </Col>
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="lastNameForm.ControlInput3">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        {...register("last_name", {
                                            required: "Last name is required"
                                        })}
                                    />
                                    <div className="text-danger">{errors.last_name?.message}</div>
                                </Form.Group>
                            </Col>
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="emailForm.ControlInput4">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control 
                                        type="email" 
                                        placeholder="name@example.com" 
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[^@]+@[^@]+\.[^@]+$/,
                                                message: "Email is invalid"
                                            }
                                        })}
                                    />
                                    <div className="text-danger">{errors.email?.message}</div>
                                </Form.Group>
                            </Col>
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="phoneForm.ControlInput5">
                                    <Form.Label>Mobile Number</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        value={watchPhone}
                                        onChange={handlePhoneChange}
                                        {...register("phone", {
                                            required: "Phone number is required",
                                            pattern: {
                                                value: /^\d{10}$/,
                                                message: "Phone number must be 10 digits"
                                            }
                                        })}
                                    />
                                    <div className="text-danger">{errors.phone?.message}</div>
                                </Form.Group>
                            </Col>
                            <Col lg="12">
                                <Form.Group className="mb-3" controlId="addressForm.ControlInput6">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        {...register("address", {
                                            required: "Address is required"
                                        })}
                                    />
                                    <div className="text-danger">{errors.address?.message}</div>
                                </Form.Group>
                            </Col>
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="experienceForm.ControlInput7">
                                    <Form.Label>Experience</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        {...register("experience", {
                                            required: "Experience is required"
                                        })}
                                    />
                                    <div className="text-danger">{errors.experience?.message}</div>
                                </Form.Group>
                            </Col>
                            <Col lg="6">
                                <Form.Group className="mb-3" controlId="formFile">
                                    <Form.Label>Updated Resume <span className="text-danger">*</span> <span className="text-danger">(file size should be max 2 mb)</span></Form.Label>
                                    <Form.Control 
                                        type="file"  
                                        accept=".doc,.docx,application/msword,.pdf" 
                                        onChange={handleFileChange}
                                        {...register("resume", {
                                            required: "Resume is required",
                                            validate: (value) => {
                                                if (!value) return "Resume is required";
                                                if (value.size === 0) return "Please select a non-empty file";
                                                return true;
                                            }
                                        })}
                                    />
                                    <span className="text-success">accept only .pdf or .doc/.docx format</span>
                                    <div className="text-danger">{errors.resume?.message}</div>
                                </Form.Group>
                            </Col>
                            <div className="mb-3">
                                <ReCAPTCHA sitekey="6LfcBCApAAAAAGBfGdxOUlHfOoMdZgc-wmJ0nysQ" onChange={onChange}/>
                            </div>
                            <Col md="12">
                                <Button type="submit" variant="contained">Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        </React.Fragment>
    )
}
