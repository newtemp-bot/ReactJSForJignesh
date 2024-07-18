let a1 = [10,20,12,40]

const printA1 = () => {
    let result = a1.filter((age)=>{
           return age>=18;
    })
    console.log(result);
};

printA1();