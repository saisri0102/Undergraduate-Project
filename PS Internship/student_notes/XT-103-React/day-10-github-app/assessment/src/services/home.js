import axios from 'axios'

async function getFilteredDetails(input , category){
    let url;
    if(input===''){
        if(category==='user'){
            url=`https://api.github.com/users`;
        }else{
            url= `https://api.github.com/repositories`;
        }
    }
    else {
        if(category==='user'){
            url=`https://api.github.com/users/${input}`;
        }else{
            url= `https://api.github.com/users/${input}/repos`;
        }
    }
    //console.log(keyword)
    let videos = await  axios.get(url)
    console.log(videos.data)
        return videos.data
}
async function getFilteredVideosByType(input){
    console.log(input)
    let videos = await  axios.get(`https://api.github.com/users/${input}/repos`)
    console.log(videos.data)
        return videos.data
}


export{
    getFilteredDetails,
    getFilteredVideosByType
}