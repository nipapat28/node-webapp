//utility.js

const request = require("request-promise");
const EXTERNAL_API="https://tools.ecpe.nu.ac.th/network/api/student/"; // put url
const accessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90b29scy5lY3BlLm51LmFjLnRoXC9uZXR3b3JrXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjYxNjg1NjAwLCJleHAiOjE2NjE2ODkyMDAsIm5iZiI6MTY2MTY4NTYwMCwianRpIjoidTV2a1Jmb0tXdVBHWFFqbSIsInN1YiI6MzYsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.aznAWEUdO_YT-KT5bSzjh3k8ANxfDF00bhPgv6o4rxw"; // put access token
const student = {
  id_student:63363454,
  name: 'Nipapat', // replace with your full name.
  age: 21, // put your age.
  gender: 'Female', // replace with your gender
  department: 'CPE'
};


exports.findStudentbyId = function (student_id, cb) {
  //-- call external api 
          request({
            method: "GET",
            uri: EXTERNAL_API+student_id,
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then((response) => {
            console.log('Sent');
            console.log({
                "request": student_id,
                "response": response
            });

           cb(response);

        }).catch((err) => {
            console.log('Error:', err.message);
            console.log({
                "Error": err.message
            });
        });
}

//exports.fakeStudentbyInfo = function (student_id, cb) {

  //cb(student);}