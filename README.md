# SIT725 Project - Node.js API

This project is a simple Node.js API built using the Express framework. It exposes a set of RESTful routes to interact with a stored number. The API allows users to:

- Update a stored number using the `PUT` method.
- Retrieve the current stored number (via `GET` method).
- Reset the stored number to `0` using the `DELETE` method.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (which includes npm)
- [Postman](https://www.postman.com/) (optional, for testing API)
- [cURL](https://curl.se/) (optional, for testing API via the command line)

### Installing

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/Anu-2096/SIT725.git
    ```

2. Navigate to the project folder:
    ```bash
    cd SIT725
    ```

3. Install the necessary dependencies:
    ```bash
    npm install
    ```

4. Run the server:
    ```bash
    node server1.js
    ```

5. The server will be running on `http://localhost:3000`.

---

## API Endpoints

### 1. `PUT /update`

Update the stored number.

#### Request:
```bash
curl -X PUT http://localhost:3000/update -H "Content-Type: application/json" -d "{\"num1\": 10}"
 

---

#### **3. Key Sections to Include in Your README**

- **Project Title and Description**: Give a brief overview of the project and what it does.
- **Getting Started**: Provide instructions on how to set up the project locally.
  - Prerequisites (e.g., Node.js, npm, etc.)
  - Step-by-step installation instructions (cloning the repo, installing dependencies, running the server).
- **API Endpoints**: Document all the API endpoints (`GET`, `POST`, `PUT`, `DELETE`) you’ve created, along with their usage.
- **Testing Instructions**: Provide instructions on how to test the API, including examples using **Postman** and **cURL**.
- **License**: If applicable, include a license for your project.

---

#### **4. Save the Changes**

After making all the updates to the `README.md` file, save the file.

#### **5. Push the Changes to GitHub**

If you have already committed your code to a GitHub repository, don't forget to push the updated `README.md` to your remote repository.

Here’s how to do it:

1. Stage the changes:
   ```bash
   git add README.md
