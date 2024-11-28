# Garbage Feedback Management System
<h2 align="left">Introduction:</h2>

The Garbage Feedback Management System is a platform designed to compile, organize, and act upon user comments on waste management and garbage collecting rules, the Garbage Feedback Management System is a Two basic models User and Feeds which cooperate to increase service efficiency and responsibility define the system.

<h2 align="left"> Key Features:</h2>

- **User Model:**
    - Manages user registration, authentication, and role-based identification to permit users (e.g., residents, waste management staff) contribute comments or supervise actions depending on their roles.
- **Feeds Model**:
    - Ensuring openness and traceability, gathers and records comments entries including particulars on the problem description, location, date, and resolution status.
- **User Management**
    - Safe user login and registration
    - Role-based access of residents' and waste management employees
    - Change of user data: profile management
- **Feedback Submission**
    - Easy submission of garbage-related complaints with detailed descriptions.
    - Integration of location data to pinpoint the exact problem area.
- **Feedback Tracking**
    - Real-time status updates on submitted feedback (e.g., pending, in-progress, resolved).
- **Eco-Friendly Awareness**
    - Platform for educating users about proper waste disposal and recycling practices.

<h2 align="left"> Tools Used:</h2>

![Zendevx Technology](https://github.com/user-attachments/assets/36c979fe-929e-44a4-8958-9c15dc466e35)

<h2 align="left"> Testing Tools Used:</h2>

![PostMan Github](https://github.com/user-attachments/assets/3381c639-715f-40b9-85d3-08384553ee12)

<h2 align="left">Library:</h2>


- bcryptjs
- connect-mongo
- body-parser
- cors
- dotenv
- express
- express-session
- express-validator
- jsonwebtoken
- mongoose
- nodemon
- validator

<h2 align="left">Database Structure</h2>

The platform will require a relational database to manage User,Doctor and Booking . Below is a proposed database structure with the key tables.

### **Tables**:

---

### a) feed

| **Field Name** | **Type** |
| --- | --- |
| currentId | String |
| name | String |
|  rate | String |
| Description | String |

### b)  user

| **Field Name** | **Type** |
| --- | --- |
| username | String |
| email | String |
| password | Number |
| avatar | String |
| isAdmin | Boolean |
| address | String |
| lane | enum['Lane A', 'Lane B', 'Lane C'] |



<h2 align="left">Use Cases:</h2>

- **Feedback Submission by Users**
    - Residents that is, consumers can document issues such illegal dumping, missing pickup, or overflowing garbage cans.
- **Tracking Feedback Status**
    - Users would view their turned in remarks from appreciation to corrections.
- **Role-Based Access**
    - Managers oversee all operations and run the system; waste management personnel discovers and correct issues.
- **Issue Resolution**
    - Once the problem has been satisfactorially addressed, waste management teams can adjust the resolution status, forward comments to pertinent staff members, and close the item.
- **Location-Based Reporting**
    - Report grounded on location Feedback data lets service providers exactly locate and resolve issues.
- **Notifications and Alerts**
    - Users receive alerts about changes in the feedback status, that is, either acknowledged, in-progress, fixed.
- **Data Analysis and Reporting**
    - Policies on waste management, complaint trends, issue areas, and self-help strategies should be checked by managers.
- **Eco-Friendly Engagement**
    - Users could acquire instructions on ecologically acceptable disposal techniques as well as on project policies.

<h2 align="left">Development with ZenDevx:</h2>

<a href="https://www.zendevx.com/" target="blank"><img align="center" src="https://github.com/user-attachments/assets/7dd7220f-e83c-4490-9ac2-beab3bcf8c35" alt="ZenDevX" height="auto" width="auto" /></a>

<h2 align="left">🐦 Connect With Me:</h2>
<a href="https://www.linkedin.com/company/zendevx/" target="blank"><img align="center" src="https://github.com/user-attachments/assets/9a6080ca-4265-43e5-8652-9454651970a9" alt="ZenDevX" height="50" width="50" /></a>
<a href="https://www.youtube.com/@zendevx" target="blank"><img align="center" src="https://github.com/user-attachments/assets/1beefdd6-fa17-49c9-bde7-e8f30f539b96" alt="ZenDevX" height="50" width="50" /></a>
<a href="https://x.com/IamZenDevX" target="blank"><img align="center" src="https://github.com/user-attachments/assets/f1eeb865-3d23-407a-9a2b-d76b4e85c6dd" alt="ZenDevX" height="50" width="50" /></a>


I hope you like the project. Thanks for reading :)
