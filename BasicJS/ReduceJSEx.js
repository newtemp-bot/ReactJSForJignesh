let r1 = [10,20,12,40]

const printR1 = () => {
    let value = r1.reduce((acc,curr)=> acc + curr,0);
    console.log(value);
};

printR1();