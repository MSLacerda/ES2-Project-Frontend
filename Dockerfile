# Create image based on the official Node 6 image from dockerhub
FROM node:10.15.0


# The qq is for silent output in the console
# You are welcome to modify this part as it
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev vim

ENV NODE_ROOT /usr/src/app 

# Create a directory where our app will be placed
RUN mkdir -p $NODE_ROOT

# Change directory so that our commands run inside this new directory
WORKDIR $NODE_ROOT

# Copy dependency definitions
COPY . .

# Install all the packages
RUN npm install -g create-react-app firebase-tools
RUN npm install
RUN npm rebuild node-sass --force



# Expose the port the app runs in
EXPOSE 3000 49153
