# Cloud Storage Simulator (S3-like)
## Overview
Simulates object storage (Amazon S3 / Azure Blob / Google Cloud Storage) in the browser. Buckets hold objects; data persists in localStorage.
## Cloud concepts covered
Object storage, buckets/objects, durability, pay-per-use storage, CRUD on cloud resources.
## Features
Create/delete buckets, upload (max 1 MB) / download / delete objects, usage summary.
## How to run
Unzip and open `index.html` in any browser. No installation or internet needed.
## Files
`index.html` UI | `style.css` styling | `script.js` logic
## Future scope
Versioning, access policies (public/private), real AWS S3 via SDK.
## Viva questions
1. Object vs block vs file storage? 2. What is a bucket? 3. What is S3 durability (11 9s)?
