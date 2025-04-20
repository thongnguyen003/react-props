export async function getData(){
    var data = await fetch("https://656ca88ee1e03bfd572e9c16.mockapi.io/products");
    return await data.json(); 
}

