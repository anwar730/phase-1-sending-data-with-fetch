// Add your code here

function submitData(name,email){
  return fetch('http://localhost:3000/users',{
    method:"POST",
    headers:{
      "Content-Type": "application/json",
       Accept: "application/json",
    },
    body:JSON.stringify({
      name:name,
      email:email,

    })
  })
  
  .then(res=>res.json())
  .then(data=>{
    let p = document.createElement('p')
    p.textContent=data.id
    document.querySelector('body').appendChild(p)
  })
  .catch(error=>{
    let p1 = document.createElement('p')
    p1.textContent=error.message
    document.querySelector('body').appendChild(p1)
  })
}


// const form=document.querySelector('form')
// form.addEventListener("submit",handleSubmit)

// function handleSubmit(e){
//   e.preventDefault()
  
//    const userName=e.target.userName.value
//    const userEmail=e.target.userEmail.value
  
  
// }








