# Installation

1. npm install

2. make a new file called env.development.local and add these contents to it, adding your secrets as values:
# PORT
PORT=5500
SERVER_URL="http://localhost:5500"

# ENVIRONMENT
NODE_ENV=development

# DATABASE
DB_URI=

# JWT AUTH
JWT_SECRET=
JWT_EXPIRES_IN="1d"

# ARCJET
ARCJET_KEY=
ARCJET_ENV="development"

3. npm run dev

4. Send requests using a separate application such as httpie