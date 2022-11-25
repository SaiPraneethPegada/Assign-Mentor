# Assign Mentor to Student API

## [Deployed URL](https://assign-mentor-students.onrender.com)

### API Endpoints:

| Method | End point | Description |
| ---- | ---- | ---- |
| POST | /student/add | will add a Student |
| GET | /student | will fetch all Students |
| POST | /mentor/add | will add a Mentor |
| GET | /mentor | will fetch all Mentors |
| PATCH | /assign/students | Select Mentor and assign multiple students |
| PATCH | /assign/mentor | Select a student and assign/update mentor |
| GET | /mentor/:id | will fetches all the students assigned to a mentor |
