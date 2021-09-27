
export const newdata =()=>{
    return async(dispatch, getState)=>{
        const uid = getState().auth.uid
       
        const newDatosService = {
            name:"",
            email:"",
            phone:"",
            message:"",
            street:"",
            city:"",
            region:"",
            postal:"123456"
            // date: new Date().getTime()
        }





    }
}