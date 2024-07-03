let car = ['BMW','Tata','KIA','Mahindra','Hyundai','KIA','Maruti Swift']
let str = "";

const listCar = () => {
    /* for (let i = 0; i < car.length; i++) {
        str += "<li>"+car[i]+"</li>";        
    }
    return str;*/
    return car;
} 
let HII = listCar().map((value)=>{
    return value==="KIA"?"<li>"+value+"<ul><li>KIA SONET</li><li>KIA SELTOS</li></ul></li>":
    "<li>"+value+"</li>";
});

window.onload = (event) => {
    HII.map((v)=>{str+=v});
    document.getElementById("demo").innerHTML = str;     
};