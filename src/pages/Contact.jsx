import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const defaultValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Full name must be at least 3 characters")
      .required("Full name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            Shop No 5, <br /> PANCHKULA, S.A.S NAGAR, PUNJAB
          </p>
          <p className="text-gray-500">
            Tel: (+91) 555-0132 <br /> Email: admin@forever.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Forever
          </p>
          <p className="text-gray-500">
            Learn more about our team and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>

      {/* Contact us */}
      <Formik
        initialValues={defaultValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <section className="py-6 bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900">
              <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <div className="py-6 md:py-0 md:px-6">
                  <h1 className="text-4xl font-bold">Get in touch</h1>
                  <p className="pt-2 pb-4">
                    Fill in the form to start a conversation
                  </p>
                  <div className="space-y-4">
                    <p className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 mr-2 sm:mr-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>Panchkula, Haryana</span>
                    </p>
                    <p className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 mr-2 sm:mr-6"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                      </svg>
                      <span>123456789</span>
                    </p>
                    <p className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 mr-2 sm:mr-6"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                      <span>forever@gmail.com</span>
                    </p>
                  </div>
                </div>

                {/* This was previously a <form> tag, changed to <div> */}
                <div className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                  <label className="block">
                    <span className="mb-1">Full name</span>
                    <Field
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      className="block w-full rounded-md shadow-sm dark:bg-gray-100 border border-gray-600 p-2"
                    />
                    {errors.name && touched.name ? (
                      <div className="text-red-500 text-sm">{errors.name}</div>
                    ) : null}
                  </label>

                  <label className="block">
                    <span className="mb-1">Email address</span>
                    <Field
                      name="email"
                      type="email"
                      placeholder="leroy@jenkins.com"
                      className="block w-full rounded-md shadow-sm border border-gray-600 dark:bg-gray-100 p-2"
                    />
                    {errors.email && touched.email ? (
                      <div className="text-red-500 text-sm">{errors.email}</div>
                    ) : null}
                  </label>

                  <label className="block">
                    <span className="mb-1">Message</span>
                    <Field
                      name="message"
                      as="textarea"
                      placeholder="Enter your message"
                      rows="3"
                      className="block w-full rounded-md border border-gray-600 dark:bg-gray-100"
                    />
                    {errors.message && touched.message ? (
                      <div className="text-red-500 text-sm">{errors.message}</div>
                    ) : null}
                  </label>

                  <button
                    type="submit"
                    className="self-center rounded active border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </section>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
