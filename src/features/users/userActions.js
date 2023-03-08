import configAxios from "../../config/configAxios";


export const addUser = async (state, {payload}) => {
    console.log(payload)

    const token = localStorage.getItem('token')
    if (!token) return
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'token': token
      },
    }
    try {
         const {data} = await configAxios.post('/registerUser', payload ,config  )
         console.log(data)
      } catch (error) {
        console.log(error)
      }
 
}