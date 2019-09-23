#!/bin/bash
echo "cleaning prev build"
rm -rf /backend/public/
echo "Building Frontend"
cd frontend
npm run-script build
echo "Coping Files"
cp -r build/ ../backend/public
cd ..
cd backend 
echo "Running Docker"
docker-compose up --build
