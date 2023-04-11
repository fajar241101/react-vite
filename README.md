# dbJson

## Instalasi Json Server

    - To Do:

    1. Instalasi Json Server
        - alamat instalasi https://www.npmjs.com/package/json-server
        - npm install -g json-server

    2. Setelah instalasi dilakukan, jalankan perintah dibawah ini
        - json-server --watch db.json (menjalankan json server dan men-generate file dbJson)

## Instalasi Axios

    - To Do:

    1. Instalasi Axios pada terminal
        - npm install axios (untuk fetching data)

## Edit file db.json dengan data users sebagai data

    - To Do:

    1. membuat data users menggunakan json (Javascript Object Notation)
    2. data menggunakan username, email, password

## Import dan Input useState dan useEffect di Halaman Home.jsx

    - To Do:

    1. import useState, useEffect, Axios
    2. bikin const users dan setUsers
    3. menggunakan method .get() untuk melakukan request get
    4. melakukan callback .then() untuk mengakses data JSON = respon sukses
    5. melakukan callback .catch() untuk respon error

## Input props data dari dbJSON ke dalam halaman Home.jsx

    -To Do:

    1. buat users.map yang di dalamnya terdapat users dan index
    2. tambahkan key yang di dalamnya terdapat index
    3. tambahkan props yang diawali dengan data dbJSON
