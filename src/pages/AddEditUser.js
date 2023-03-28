import React, { useState } from 'react'
import {Button, Form, Grid, Loader } from "semantic-ui-react";
import { storage } from "../firebase";
import {useParams, useNavigate } from "react-router-dom";



const initialState = {
    name: "",
    email: "",
    info: "",
    contact:""
}

const AddEditUser = () => {
    const [data, setData] = useState(initialState);
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(null);
    const [error, setError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  return (
    <div>
      
    </div>
  )
}

export default AddEditUser
