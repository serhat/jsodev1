let ad=prompt("lütfen isminizi giriniz:")

if(ad == ""){
 window.alert("!!!!Lütfen isminizi giriniz!!!!") 
 window.location.reload();
}

let htmlGosterim = document.querySelector('#myName') 

htmlGosterim.innerHTML = ad; 


let gunler=[ 'Pazar','Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']; 



function tarihSaat() {
  
    
    document.getElementById("myClock").innerHTML =`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} ${gunler[new Date().getDay()]}`
   

}


setInterval(tarihSaat, 100)


