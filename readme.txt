Readme

1. Install MongoDB
Download terlebih dahulu MongoDB nya, sesuaikan dengan OS yang digunakan
kalau saya pakai Windows 7, downloadnya yang versi 3.6.23
Download MongoDB nya disini: 
https://www.mongodb.com/try/download/community?tck=docs_server
Sesuaikan dengan OS yang akan digunakan

Untuk petunjuk instalasi MongoDB yang disesuaikan dengan OS bisa disini:
https://docs.mongodb.com/manual/administration/install-community/

Penting!!! (Untuk OS Windows)
Create terlebih dahulu database directory, buat folder data di drive C, setelah itu
masuk ke folder data dan buat lagi folder baru, nama foldernya db
Agar program nya bisa berjalan, run mongod.exe as administrator (ini untuk Windows, kalau linux saya kurang tahu)
kalau tulisannya: [initandlisten] waiting for connections, berarti sudah benar prosedurnya

2. Create Administrator
Sebelumnya, untuk mengedit user admin, buka di VSCode file yang ada di
backend/routes/userRoute.js
Edit mulai dari line 52, disana ada username, email, password, dan isAdmin (wajib diisi true)

Untuk buat administrator (secara otomatis), di address ketik:
localhost:5002/api/users/createadmin, maka akan otomatis terinput ke database
MongoDB nya
(Ingat hanya sekali saja)

3. Create react-app
Wajib dilakukan karena di github tidak include node modules, alasannya karena isi foldernya sangat banyak.
create react-app dilakukan di folder frontend

4. Instal package yang dibutuhkan
Wajib dilakukan agar programnya dapat berjalan, untuk yang di frontend instal di folder frontend
sedangkan untuk yang di backend instal di luar folder frontend

* Backend
  "dependencies":
    "body-parser": "^1.19.0",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.12.5"
  
  "devDependencies": {
    "@babel/cli": "^7.13.14",
    "@babel/core": "^7.13.15",
    "@babel/node": "^7.13.13",
    "@babel/preset-env": "^7.13.15",
    "nodemon": "^2.0.7"

* Frontend
    "@testing-library/jest-dom": "^5.11.10",
    "@testing-library/react": "^11.2.6",
    "@testing-library/user-event": "^12.8.3",
    "axios": "^0.21.1",
    "js-cookie": "^2.2.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-redux": "^7.2.3",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.0.5",
    "redux-thunk": "^2.3.0",
    "web-vitals": "^1.1.1"

5. Terkait user
Untuk logout, karena ini mengandalkan cookies, buka tab cookies, kemudian delete, otomatis akan logout
soalnya user info terlihat disitu allowed.
Create user bisa dilakukan di halaman sign-in. Untuk login admin bisa dilihat user passwordnya di 
backend/routes/userRoute.js

6. Terkait products
Untuk akses products, buka http://localhost:3000/products
disitu akan ada tabel products, beserta tombol edit dan delete
Bisa juga tambah product, klik create products (Ingat hanya admin yang bisa create, ubah dan delete products
bila tidak akan error)