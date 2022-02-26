# 一般的なファイルアップロード実装

ファイルアップロードの実装を考えた時、ファイルデータをバイナリに変換し、分割して送るなど考えられる。  
調べてみると、以下のような方法が一般的らしいので、メモしておく。  

## Content-Type: 'multipart/form-data'

RFC: https://www.ietf.org/rfc/rfc2388.txt  

フォームの様々な形式のデータを送信する場合に使用される。  
データを境界で複数のパートに区切ることができ、さらにバイナリで扱う仕様のため、ファイル送信ではよく使われる。  
ただし、JSONデータの送信には向いていない。（JSONデータと組み合わせる際は、画像ファイルのみエンドポイントを分けるなどするのが良さそう？）  
```application/octet-stream``` にてバイナリ形式でアップロードする方法もなくはないが、multipartはboundaryを設定できるため、複数ファイルアップロードにも対応しやすい。


### Reactコンポーネント実装
multipart アップロードにて、選択したファイルをアップロードするReactコンポーネントを書いてみた。  
CSSはChakra UIを使用。

```typescript
import React, { useState } from "react"
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Image,
  Button,
} from "@chakra-ui/react"

const FileUpload: React.VFC<{}> = ({}) => {
  const [imgFile, setImgFile] = useState<File | null>(null)
  const onSubmit = () => {
    const formData = new FormData()
    if (imgFile) {
      formData.append("fileData", imgFile)
    }

    const options: { method: string; body: any; headers?: any } = {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
    // Remove 'Content-Type' header to allow browser to add
    // along with the correct 'boundary'
    delete options.headers["Content-Type"]

    fetch("http://localhost:1234/file_upload", options)
  }
  return (
    <Box>
      <FormControl>
        <FormLabel htmlFor="upload-file">画像を選択してね</FormLabel>
        <Input
          type="file"
          id="upload-file"
          accept=".jpg, .jpeg, .png"
          onChange={e => {
            const fileDatas = e.currentTarget.files
            if (fileDatas && fileDatas.length > 0) {
              console.log("fileData", fileDatas[0])
              const f = fileDatas[0]
              setImgFile(f)
            }
          }}
        />
        <Button type="submit" onClick={onSubmit}>
          アップロード
        </Button>
      </FormControl>
      <Box>
        {imgFile && (
          <Image src={URL.createObjectURL(imgFile)} w="300" h="200"></Image>
        )}
      </Box>
    </Box>
  )
}

export default FileUpload

```

```delete options.headers["Content-Type"]``` がなければ、boundaryを設定していないとみなされ、エラーになる。  
このコードには、Content-Typeを削除し、ブラウザ側に任意のboundaryを追加してもらう意図がある。  

#### 参考
- https://muffinman.io/blog/uploading-files-using-fetch-multipart-form-data/
- https://stackoverflow.com/questions/3508338/what-is-the-boundary-in-multipart-form-data

### Encode
デフォルトでは、メール送信用の7BIT Encodeが使用されるが、カスタマイズできる。  
```Transfer-Encoding``` にて設定できる。
https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/Transfer-Encoding

### TODO
- chunkサイズを指定する方式のmultipart実装

## Base64 Encode
Base64でエンコードし、文字列を送信する。  
GitHubやTumblrのAPIにて使用される手法。  
データの分割は行わないので、送信するデータサイズがmultipartに比べて大きくなる。
文字列としてファイルデータを扱えるようになるので、JSONデータにして送信することが簡単になる。  
一方で、文字列データとして一括で送信する形になるため、ペイロードのサイズは大きくなる。  

