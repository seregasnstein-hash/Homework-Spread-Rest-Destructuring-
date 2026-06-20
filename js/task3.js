function useDestructuring({id,title}){
    console.log(`Пользователь ${id}. Заметка: ${title}`); 
}

async function getPosts() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const result = await response.json()
        useDestructuring(result)
        
    }
    catch(err){
        console.log(err);
        
    }
}
getPosts()