const asyncHandler = require("express-async-handler");
//@desc Get all students
//@route GET /api/students
//@access public

const getStudents = asyncHandler(async (req,res)=>{
    res.status(200).json({message : `Get All Students`});
});

//@desc Get all students
//@route POST /api/create_student_profile
//@access public

const createStudentProfile = asyncHandler(async (req,res)=>{
    console.log("the request body is :", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(201).json({message : `Created new profile`});
});

//@desc Update Student Profile
//@route PUT /api/update_student_profile/:id
//@access public

const updateStudentProfile = asyncHandler(async (req,res)=>{
    res.status(200).json({message : `Update Profile ${req.params.id}`});
});

//@desc Get student profile
//@route GET /api/student_profile/:id
//@access public

const getStudentProfile = asyncHandler(async (req,res)=>{
    res.status(200).json({message : `Get Profile ${req.params.id}`});
});

//@desc Delete student account
//@route DELETE /api/delete_student/:id
//@access public

const deleteStudentProfile = asyncHandler((req,res)=>{
    res.status(200).json({message : `Delete Student Profile ${req.params.id}`});
});

module.exports = {
    getStudents,
    createStudentProfile,
    updateStudentProfile,
    getStudentProfile,
    deleteStudentProfile
};
