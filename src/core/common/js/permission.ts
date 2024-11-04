const admin:string[] = ['yk961102']
const user:string[] = ['logincode']

const allUser:string[] = [
  ...user,
  ...admin
]

const permission: any = {
  user,
  admin,
  allUser
}
export {
  user,
  admin,
  allUser,
  permission
}