const admin = ['yk961102']
const user = ['logincode']

const allUser = [
  ...user,
  ...admin
]

const permission = {
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