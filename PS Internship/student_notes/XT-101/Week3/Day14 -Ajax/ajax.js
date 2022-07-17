function ajax( url, method, onSuccess, onError){
    const xhr= new XMLHttpRequest();
    xhr.addEventListener('readystatechange', function(){
        if(xhr.readyState==4){
            if(xhr.status>=200 && xhr.status<300){ 
                    onSuccess(xhr.responseText);
                }else if(xhr.status>=400){
                    onError(xhr.statusText);
                }
            }
    });

    xhr.open(method, url, true);
    xhr.send();
}