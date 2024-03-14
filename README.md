# Wix Clone

A fully functional Wix clone created in React. It has drag and drop functionality along with animations.

## Features

- Drag and drop interface
- Create multi-page website
- Pexels image search, so finding the correct royalty-free image is easy
- Inbuilt animation effects which can be applied anywhere
- Can create custom layouts
- Creates the user-generated website preview to show on their dashboard
- Nesting of elements is possible
- Layers panel with hover effect shown on the element
- Publishing the user website on a unique link to the user
- Responsive preview for the user-generated pages
- Google font manager, to manage Google fonts for the page at a single place
- Detailed element editing options
- Layout modification options
- SEO settings like page title, description, favicon along with the preview (To be implemented)
- CSS Gradients creator for the background
- Element min-height adjuster
- Preview page for unpublished websites, which will only show preview to authorized user
- Website management dashboard

## How to Run

### Frontend

1. Run `npm install` to install the required dependencies.
2. Create the .env file in the directory with the following details:
   - REACT_APP_GOOGLE_API_KEY="[Google font API KEY : https://developers.google.com/fonts/docs/developer_api]"
   - REACT_APP_PEXELS_API_KEY="[Pexels API key : https://www.pexels.com/api/]"
3. Run `npm run build` to create a build version of the front-end.
   - If you want to modify the frontend you can `npm start` the frontend and `npm run dev` for the backend

### Backend

1. Copy the build folder generated into the backend folder.
2. Go in the backend folder `cd backend/`.
3. Run `npm install -y` to install the dependencies.
4. Create the .env file in the directory with the following details:
   - JWT_SECRET=" [RANDOM STRING USED TO CREATE JWT TOKEN ]"
   - PORT=8000
   - API_DB_NAME="[DATABASE_NAME]"
   - API_LOGIN_PERIOD="2d"
   - API_MONGO_URI="[ REMOVED FROM THE CODE ]"
   - API_MONGO_PASS="[ MONGODB PASSWORD ]"
   - API_MONGO_USER="[ MONGO DB NAME ]"
   - API_MONGO_LOCATION="[ mongodb for local instance, mongodb+srv for remote ]"
5. Run `npm run dev` to run on a local machine. For deployment use `node ./src/server.js`
   - It should be available on the port 8000.
