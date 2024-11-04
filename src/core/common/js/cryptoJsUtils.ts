import CryptoJs from 'crypto-js'
const key:string = CryptoJs.enc.Utf8.parse('qweqwe')
const iv = CryptoJs.enc.Utf8.parse('')

export function Encrypt(word:any){
  const srcs = CryptoJs.enc.Utf8.parse(word)
  const encrypted = CryptoJs.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJs.mode.ECB,
    padding: CryptoJs.pad.Pkcs7
  })
  return CryptoJs.enc.Base64.stringify(encrypted.ciphertext)
}