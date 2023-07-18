const express = require("express");
const router = express.Router();
const {
    getStudents,
    createStudentProfile,
    updateStudentProfile,
    getStudentProfile,
    deleteStudentProfile
} = require("../controllers/studentController");

router.route('/students').get(getStudents);

router.route('/create_student_profile').post(createStudentProfile);

router.route('/student_profile/:id').get(getStudentProfile);

router.route('/update_student_profile/:id').put(updateStudentProfile);

router.route('/delete_student/:id').delete(deleteStudentProfile)

module.exports = router;
