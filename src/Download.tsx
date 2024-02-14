import React, { useState } from 'react'

const Download: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
        const file = e.target.files[0]
        const fileSizeLimit = 10 * 1024 * 1024; //10mb制限
        if(file.size > fileSizeLimit){
            alert("ファイルサイズが大きすぎます。10MB以下のファイルを選択してください")
            return
        }
      setSelectedFile(file)
    }
  }

  const handleDownload = () => {
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile)
      const link = document.createElement('a')
      link.href = url
      link.download = selectedFile.name
      document.body.appendChild(link)
      
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)

    }
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleDownload} disabled={!selectedFile}>
        ダウンロード
      </button>
    </div>
  )
}

export default Download
