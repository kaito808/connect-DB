nvm use 20
npx create-react-app 1024react
y
(creating)
"""
Inside that directory, you can run several commands:

npm start
Starts the development server.

npm run build
Bundles the app into static files for production.

npm test
Starts the test runner.

npm run eject
Removes this tool and copies build dependencies, configuration files
and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

cd 1024react
npm start

Happy hacking!
"""
cd 1024react

mkdir server
cd server
npm init -y

Created a file server.js in server folder

"""
kaijp@higashiaitosMBP server % node server.js

Server is running on port 5001
"""

│
├── node_modules/ (React dependencies)
├── public/
│ └── index.html (React's HTML template)
│
├── src/
│ ├── App.js (Main React component with routing)
│ ├── NewsList.js (Component for listing news)
│ ├── NewsEdit.js (Component for editing news)
│ ├── NewsUpdate.js (Component for updating news)
│
├── server/
│ ├── node_modules/ (Express dependencies)
│ ├── server.js (Express server file with API endpoints)
│ └── package.json (Express package configuration)
│
├── package.json (React project configuration)
├── package-lock.json
├── README.md
├── .gitignore

help me with NewsList.js

psql mylocaldb < data.sql
