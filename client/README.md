# sw-tools-hw-week9
โค้ดที่ทำทั้งหมดอยู่ที่ ./src/App.jsx ครับ
## หลังจาก clone ลงมา
- cd ไปที่ folder ที่โคลนมา
- npm i
- npm run dev เพื่อเปิด
## ปัญหาที่เจอตอนทำ
- ติด CORS -> วิธีแก้คือเข้าไปไฟล์ main.py จาก Lab5 ที่เราโคลนของอาจารย์มาเพื่อกำหนดให้ทุก origin เข้าถึงได้จะได้ยิงapiสะดวกๆ เสร็จแล้ว build image docker และ docker run image ตัวที่ build มาใหม่ ฝัง frontend ก็จะไม่ติด CORS policy

## รูปที่แก้ไฟล์ main.py

![image](https://imgur.com/GFiDgXu.jpg)

## ผลลัพธ์

![image](https://imgur.com/7JpwMlo.jpg)
