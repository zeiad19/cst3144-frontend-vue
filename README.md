# CST3144 Front-End (Vue 3 + GitHub Pages)

This is the front-end for my CST3144 Full Stack coursework.

It is a single-page Vue 3 application using CDN imports (no build tools).  
It communicates with my deployed Express API using `fetch` and promises only.

---

##  Live Site
https://zeiad19.github.io/cst3144-frontend-vue/

---

##  Connected API
https://cst3144-express-api.onrender.com

---

##  Features

### Lessons
- Fetch all lessons from the API  
- Sort by subject / price  
- Live search through backend (GET /search)

### Cart
- Add lessons to cart  
- Remove items  
- Prevent exceeding available spaces

### Checkout
- Validates name and phone number  
- Sends order to backend using POST /orders  
- Automatically reduces lesson spaces via PUT /lessons/:id

---

##  Running locally
Just open `index.html` with Live Server (recommended).  
Opening directly from file explorer disables fetch due to CORS.

---

##  Included in submission
- index.html  
- src/api.js  
- src/styles.css  
- README.md  
