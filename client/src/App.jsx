import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  //การทำงาน//
  //1. อัปภาพจากคอม แล้วใช้ FileReader แปลงเป็น base64 ไว้ส่งไปหาปลายทาง//
  //2. แก้โค้ดใน main.py ที่ clone มาจาก git อาจารย์ที่ติด CORS Policy//
  //3. Server response base64 ที่แปลงภาพมาแล้วเอามาแสดงในหน้าเว็บ//
  const [base64, setBase64] = useState()
  const [converted, setConverted] = useState()
  const [isLoaded, setIsLoaded] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleChange = (e) => {
    setIsLoaded(false)
    setIsProcessing(false)
    let image = e.target.files[0]
    console.log(typeof(image));
    let fileReader = new FileReader();
    fileReader.onload = () => {
      setBase64(fileReader.result)
    }
    fileReader.readAsDataURL(image);
  }


  const sendImage = () => {
    let payload = {
      "image": base64,
      "name": "Raul",
      "surname": "Miguel",
      "numbers": [1, 2, 3, 4, 5]
    }
    console.log(typeof(base64));
    setIsProcessing(true)
    axios.post("http://13.212.32.131:8088/process-image", payload, {
      headers: {'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'}
    }).then((response) => {
      let res = response.data.processed_image
      setConverted(res);
      setIsLoaded(true)
    }).catch((err) => {
      console.log(err);
      setIsProcessing(false)
      setIsLoaded(false)
    })
  }
  return (
    <div className="App">
      <div style={{display : 'flex', width: "1000px", gap: 10, justifyContent : 'center'}}>
        <div style={{width : '450px', height : '450px', border : base64 == null ? '1px solid white' : ""}}>
          {base64 == null ? <h2>Choose your image</h2> :
          <img src={base64} width='450px' height='450px'/>
          }
        </div>
        {isProcessing ? 
            <div style={{width : '450px', height : '450px', justifyContent : 'center', alignItems : 'center'}}>
              {isLoaded ?
                <img src={converted} width='450px' height='450px'/>
              :
                <div className="lds-facebook"><div></div><div></div><div></div></div>
              }
            </div>
        : null}
      </div>
      <div style={{marginTop : '1em'}}>
        <input type="file" onChange={handleChange} />
        {base64 == null ? null :
          <button type='submit' style={{color : '#fff'}} onClick={sendImage}>
          Submit
          </button>
          }
      </div>
    </div>
  )
}

export default App
