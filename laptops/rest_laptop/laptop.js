const IP="192.168.100.207";
const PORT=2004
const URL="http://"+IP+":"+PORT+"/"

export const getAllLaptops=(fnRefreshList)=>{
    console.log("getAllLaptops")
    fetch(
        URL+"laptops"
    ).then(
        (response)=>{ return response.json()}
    ).then(
        (body)=>{
           fnRefreshList(body);

        }
    )
}
export const saveLaptopsRest=(laptop, fnShowMessage)=>{
    const config ={
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            marca:laptop.marca,
            precesador:laptop.procesador,
            memoria:laptop.memoria,
            disco:laptop.disco
        })
    }
    fetch(
        URL+"laptops",
    ).then(response=>response.json())
    .then(body=>{
        fnShowMessage("Se ha creado el mensaje");
        console.log(body)
    })
}

export const updateLaptopsRest=(laptop, fnShowMessage)=>{
    const config ={
        method: "PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            id:laptop.id,
            marca:laptop.marca,
            precesador:laptop.procesador,
            memoria:laptop.memoria,
            disco:laptop.disco
        })
    }
    fetch(
        URL+"laptops/"+laptop.id,config
    ).then(response=>response.json())
    .then(body=>{
        fnShowMessage("Laptop actualizado");
        console.log(body)
    })
}
export const deleteLaptopsRest=(laptop, fnShowMessage)=>{
    const config ={
        method: "DELETE"
    }
    fetch(
        URL+"laptops/"+laptop.id,config
    )
    .then(response=>response.json())
    .then(body=>{
        fnShowMessage("Se ha eliminado la laptop");
        console.log(body)
    })
}