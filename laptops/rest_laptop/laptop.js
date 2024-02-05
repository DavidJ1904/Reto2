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