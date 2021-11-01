function encurtar(){
    let long_url = document.getElementById("url").value;

    const api_token = "b85f94141c447a3deb8d61cf042f15b63bddb854";
    let api_url = "https://encurtaon.com/api?api="+api_token+"&url="+long_url;

    let request = new XMLHttpRequest();
    request.open("GET", api_url, false);
    request.send()
    const result = JSON.parse(request.responseText)
    if(result["status"] != "error"){
        let inputUrl = document.getElementById("url");
            inputUrl.value = result["shortenedUrl"];
    }else{ 
        console.log(result["erro"]);
    }
}