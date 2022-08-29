# Free Code Camp: Backend Project 5 - File Metadata Microservice

## File Metadata Microservice

The aim of this project was to build a small web app with functionality similar to: https://file-metadata-microservice.freecodecamp.rocks

- **HTML**
- **JavaScript** with **[Node.js](https://nodejs.org/en/) / [NPM](https://www.npmjs.com/)** for package management.
- **[Express](https://expressjs.com/)** web framework to build the web API.
- **[multer](https://www.npmjs.com/package/multer)** to handle `multipart/form-data` file uploads.
- **[Bootstrap](https://getbootstrap.com/)** for styling with some custom **CSS**.
- **[FontAwesome](https://fontawesome.com/)** for icons.
- **[nodemon](https://nodemon.io/)** for automatic restarting of server during development.

### Project Requirements:

- **User Story #1:** You can submit a form that includes a file upload.

- **User Story #2:** The form file input field has the `name` attribute set to `upfile`.

- **User Story #3:** When you submit a file, you receive the file `name`, `type`, and `size` in bytes within the JSON response.

### Project Writeup:

The fifth Free Code Camp: Back End Development Project is a File Metadata Microservice. Users can:

- Get file metadata by uploading a file via the form on the app home page, or by sending a POST request to `/api/fileanalyse` with a body containing `multipart/form-data` with a field named `upfile` containing the file.

### Project Files

- `index.js` - the main entry point of the application, an express web server handling the routes defined in the specification.

- `public/` - contains static files for the web app (stylesheet, logo, favicons etc), served by express using `express.static()`.

- `views/` - contains the single html page for the web app, `index.html`, which is served by express on `GET` requests to `/`.

### Usage:

Requires Node.js / NPM in order to install required packages. After downloading the repo, install required dependencies with:

`npm install`

A development mode (with auto server restart on file save), can be started with:

`npm run dev`

The application can then be viewed at `http://localhost:3000/` in the browser.

To start the server without auto-restart on file save:

`npm start`

# File Metadata Microservice BoilerPlate

The initial boilerplate for this app can be found at https://github.com/freeCodeCamp/boilerplate-project-filemetadata/

Instructions for building the project can be found at https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/file-metadata-microservice
