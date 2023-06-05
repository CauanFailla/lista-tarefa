const btn_task = document.querySelector('.btn_terefa')
const btn_back = document.querySelector('.btn_back')
const btn_generate = document.querySelector('.btn_criar')
const btn_confirmar = document.querySelector('.btn_confirmar')
const btn_cont = document.querySelector('.btn_contin')
const sec_perso = document.querySelector('.sec_personalizacao')
const list_task = document.querySelector('.list_task')
const vazio  = document.querySelector('.men_vaz')
let taskName = document.querySelector('#itaskName')
let teste = document.querySelector('.teste')
const box_error = document.querySelector('.b_e')

let processoRotina = ()=>{
    generateTask(taskName.value)
    sec_perso.style.display = 'none'
    taskName.value = ''
    completeTask()
}

btn_task.addEventListener('click',()=>{
    sec_perso.style.display = 'block'
})

btn_generate.addEventListener('click',()=>{
    if (taskName.value.length == 0) {
       box_error.style.display  = 'block'
    } else {
        processoRotina()
    }
    
})

btn_confirmar.addEventListener('click',()=>{
    box_error.style.display  = 'none'
})

btn_cont.addEventListener('click',()=>{
    box_error.style.display  = 'none'
    processoRotina()
})

const generateTask = (name)=>{
    let div_task = document.createElement('div')

    let input_task =  document.createElement('input')
    input_task.setAttribute('type','checkbox')

    let text_task = document.createElement('p')
    text_task.innerHTML = `${name}`

    div_task.appendChild(input_task)
    div_task.appendChild(text_task)
    list_task.appendChild(div_task)
}


const verificationTask = ()=>{
    let list = [...document.querySelector('.list_task')]
    console.log(list)
    if  (list.length == 0) {
       
    }
}

const completeTask = ()=>{
    let check = [...document.querySelectorAll('input[type=checkbox')]
    check.map((c)=>{
        c.addEventListener('click',()=>{
            c.parentNode.remove()
            mens(c.nextSibling.textContent)
        })
    })
     
}




btn_back.addEventListener('click',()=>{
    sec_perso.style.display = 'none'
})

let mens = (n)=>{
    console.log(n)
    let i = setInterval(()=> {
        teste.style.display = 'flex'
    }, 200);
    setTimeout(() => {
        clearInterval(i)
        teste.style.display = 'none'
    }, 3000);
}