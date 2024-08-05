const getTodos = () => {
    let todoData;
    console.log("Code Started...");
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => {
            const simplifiedData = data.map((todo) => ({
                id: todo.id,
                title: todo.title,
                completed: todo.completed
            }));
            let str='';
            simplifiedData.forEach(e => {
                str+='<div class="list"><b>'+e.id+'.</b> ';
                str+=(e.completed)?'<span><del>'+e.title+'</del></span>':'<span>'+e.title+'</span>';
                str+='</div></br>';
            });
            document.getElementById("demo").innerHTML = str;
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
};
getTodos();