import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddressBook = () => {
    const [book, setBook] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
  
    const formik = useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        phone: "",
      },
      validationSchema: Yup.object({
        firstName: Yup.string().required("The first name is required"),
        lastName: Yup.string().required("The last name is required"),
        phone: Yup.string().required("The phone number is required"),
      }),
      onSubmit: (values, { resetForm }) => {
        if (editingIndex !== null) {
          const updatedBook = [...book];
          updatedBook[editingIndex] = { ...values, id: book[editingIndex].id };
          setBook(updatedBook);
          setEditingIndex(null);
        } else {
          setBook([
            ...book,
            { id: book.length + 1, ...values },
          ]);
        }
        resetForm();
      },
    });
  
    const handleEdit = (index) => {
      const entry = book[index];
      formik.setValues({
        firstName: entry.firstName,
        lastName: entry.lastName,
        phone: entry.phone,
      });
      setEditingIndex(index);
    };
  
    const filteredBook = book.filter(
      (entry) =>
        entry.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.phone.includes(searchQuery)
    );
  
    return (
      <div className="container">
        <h1>Address Book</h1>
  
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label>First Name*</label>
            <input
              type="text"
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              className={formik.errors.firstName ? "error" : ""}
            />
            {formik.errors.firstName && formik.touched.firstName && (
              <div className="error-message">{formik.errors.firstName}</div>
            )}
          </div>
  
          <div>
            <label>Last Name*</label>
            <input
              type="text"
              name="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              className={formik.errors.lastName ? "error" : ""}
            />
            {formik.errors.lastName && formik.touched.lastName && (
              <div className="error-message">{formik.errors.lastName}</div>
            )}
          </div>
  
          <div>
            <label>Phone*</label>
            <input
              type="text"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              className={formik.errors.phone ? "error" : ""}
            />
            {formik.errors.phone && formik.touched.phone && (
              <div className="error-message">{formik.errors.phone}</div>
            )}
          </div>
  
          <button type="submit">
            {editingIndex !== null ? "Edit Entry" : "Add Entry"}
          </button>
        </form>
  
        <input
          type="search"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
  
        {filteredBook.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBook.map((entry, index) => (
                <tr key={entry.id}>
                  <td>{entry.id}</td>
                  <td>{entry.firstName}</td>
                  <td>{entry.lastName}</td>
                  <td>{entry.phone}</td>
                  <td>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-data">No data to display</p>
        )}
      </div>
    );
  };
  
  export default AddressBook;
  