#!/bin/bash

# This script deploys the my-dev-website application.

# Build the frontend
cd frontend
npm install
npm run build

# Build the backend
cd ../backend
npm install
npm run build

# Start the backend server
npm start &

# Start the frontend application
cd ../frontend
npm start &

echo "Deployment completed successfully."