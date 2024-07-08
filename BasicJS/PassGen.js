const passGen = (n,capValid=true,smallValid=true,numValid=false,speValid=false) => {
    let cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let small = 'abcdefghijklmnopqrstuvwxyz';
    let num = '0123456789';
    let spe = '%&^!~@#$';
    let str = '';
    str+=capValid?cap:'';
    str+=smallValid?small:'';
    str+=numValid?num:'';
    str+=speValid?spe:'';

    let pass = '';
    for (let i = 0; i < n; i++) {
        let num = Math.floor((Math.random() * str.length)) + 1; 
        let char = str.charAt(num)
        pass+=char;
    }
    console.log(pass);
}


passGen(16,false,false,true,true);