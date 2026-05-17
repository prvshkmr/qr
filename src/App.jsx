import { useEffect, useRef, useState } from 'react'
import QRCode from 'qrcode'
import './App.css'

function App() {
  const [qrText, setQrText] = useState('QR')
  const qrCanvasRef = useRef(null)

  useEffect(() => {
    if (!qrCanvasRef.current) return

    const qrSize = qrCanvasRef.current.parentElement.clientWidth

    QRCode.toCanvas(qrCanvasRef.current, qrText || ' ', {
      width: qrSize,
      margin: 1,
    })
  }, [qrText])

  return (
    <>
      <section id="center">
        <div className="main-box">
          <div className="qr-area">
            <canvas ref={qrCanvasRef}></canvas>
          </div>

          <div className="text-area">
            <input
              value={qrText}
              placeholder="QR"
              onChange={(event) => setQrText(event.target.value)}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default App
