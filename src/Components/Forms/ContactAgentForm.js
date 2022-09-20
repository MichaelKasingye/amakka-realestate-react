import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { postData } from "../../services/fetchData";
import Swal from "sweetalert2";

export default function ContactAgentForm({ unit, title }) {
  function sendData(data) {
    postData("interested_clients", { data, unit });
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Information sent successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      email: "",
      message: `I am interested in ${unit.title} ${unit.address} of ${unit.bedrooms} bedrooms - ${unit.developerName}`,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(17, "Must be 17 characters or less")
        .required("Required"),
      phoneNumber: Yup.number(),
      email: Yup.string().email("invalid email address").required("Required"),
      message: Yup.string()
        .max(100, "Must be characters 50 or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      sendData(values);
    },
  });

  return (
    <form className=" contact-form" onSubmit={formik.handleSubmit}>
      <h3 className="title-d" style={{ color: "#3D8AB9" }}>
        {title}
      </h3>
      <div className="d-flex flex-column">
        <input
          type="text"
          className=" border"
          id="inputName"
          placeholder="Name "
          name="name"
          onBlur={formik.handleBlur}
          value={formik.values.name}
          onChange={formik.handleChange}
          required
        />
        <br />
        {formik.touched.name && formik.errors.name ? (
          <p className="text-danger">{formik.errors.name}</p>
        ) : null}

        <input
          type="text"
          className="border"
          id="inputName"
          name="phoneNumber"
          placeholder="Phone number "
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <p className="text-danger">
            Input {formik.errors.phoneNumber.slice(12, 30)} this{" "}
            {formik.values.phoneNumber} is invalid
          </p>
        ) : null}
        <input
          type="email"
          className=" border"
          id="inputEmail1"
          placeholder="Email "
          name="email"
          onBlur={formik.handleBlur}
          value={formik.values.email}
          onChange={formik.handleChange}
          required
        />
        {formik.touched.email && formik.errors.email ? (
          <p className="text-danger">{formik.errors.email}</p>
        ) : null}
        <textarea
          id="textMessage"
          className="  border "
          placeholder="Comment "
          name="message"
          cols={30}
          rows={5}
          required
          // defaultValue="I am interested in this unit"
          onBlur={formik.handleBlur}
          value={formik.values.message}
          onChange={formik.handleChange}
        />
        {formik.touched.message && formik.errors.message ? (
          <p className="text-danger">{formik.errors.message}</p>
        ) : null}

        <div className="col-md-12 mt-4">
          <button type="submit" className="btn btn-danger">
            contact
          </button>
        </div>
      </div>
    </form>
  );
}
