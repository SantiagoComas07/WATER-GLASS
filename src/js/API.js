// Endpoint
const endPoint = "http://localhost:3000";

// Funcion get

export async function getData() {
  try {
    const response = await fetch(`${endPoint}/products`);
    const data = await response.json();
    console.table(data);
    return data;
  } catch (error) {
    console.log("error: ", error);
  }
}

export function showCard(data, content) {
  // console.log("Entre")
  content.innerHTML = "";
  for (let property of data) {
    // console.log(property.name)
    console.log(property);
    content.innerHTML += `
      <div class="p-2 m-2 bg-white rounded-sm w-[8rem]">
              <h3 class="text-center font-bold text-blue-950">Product</h3>
              <p class="text-blue-900">Product:  ${property.name} </p>
              <p class="text-blue-900">Capacity:   ${property.capacity} </p>
              <p class="text-blue-900">Cost:  ${property.cost}  </p>
              <div class="my-1">
              <button class="btn-delete bg-red-700 py-1 px-2 text-white rounded-sm cursor-pointer active:bg-red-800" data-id="${property.id}">Delete</button>
              <button class="btn-edit bg-amber-400 py-1 px-2 text-white rounded-sm cursor-pointer hover:bg-amber-700 " data-edit-id="${property.id}">edit</button>
              </div>
      </div>
      `;
  }
}

export async function postData(name, capacity, cost, newProduct) {
  const sendProduct = {
    name: name.value,
    capacity: capacity.value,
    cost: cost.value,
  };
  try {
    const response = await fetch(`${endPoint}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    if (response.ok) {
      console.log("El usuario esta creado");
      console.table(newProduct);
    } else {
      console.log("No fue posible");
    }
  } catch (error) {
    console.log("error: ", error);
  }
}



export async function getOneProduct(id){

try{

  const response = await fetch(`${endPoint}/products/${id}`);
  const data = await response.json();
  let dataFound;
  console.log("data",data);
  for(let element in data){
    if(element.id === id){
      dataFound = element;
    }
  }
  return dataFound

}catch(error){
    console.log("Error: ", error);

}

}





export async function putData(id, updateProduct) {
  try {
    const response = await fetch(`${endPoint}/products/${idupdate}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    });
  } catch (error) {
    console("Error: ", error);
  }
}

export async function deleteProduct(idDelete) {
  try {
    const response = await fetch(`${endPoint}/products/${idDelete}`, {
      method: "DELETE",
    });

    if (response.ok) {
      console.log("The product has been deleted successfuly");
    }
  } catch (error) {
    console.log("Error: ", error);
  }
}
