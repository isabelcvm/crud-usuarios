import configAxios from "../../config/configAxios";


export const addUser = async (datos) => {
  try {
    const { data } = await configAxios.post('/registerUser', datos)
    
  } catch (error) {
    console.log(error)
  }

}