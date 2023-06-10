const btn_task = document.querySelector('.btn_terefa')
const btn_back = document.querySelector('.btn_back')
const btn_generate = document.querySelector('.btn_criar')
const btn_confirmar = document.querySelector('.btn_confirmar')
const btn_cont = document.querySelector('.btn_contin')
const btn_historico =  document.querySelector('.btn-historico')
const btn_home = document.querySelector('.btn-home')
const sec_perso = document.querySelector('.sec_personalizacao')
const list_task = document.querySelector('.list_task')
const vazio  = document.querySelector('.men_vaz')
const div_historico = document.querySelector('.historico')
const main = document.querySelector('main')
let taskName = document.querySelector('#itaskName')
let teste = document.querySelector('.teste')
const box_error = document.querySelector('.b_e')
let  bd = document.body
let img  = document.querySelector('.men_vaz img')
let very = []

//--Telas maiores--

const sec_menu = document.querySelector('.sec_menu')
const btn_menu = document.querySelector('.btn_menu')
const btn_close_menu = document.querySelector('.header_menu .material-icons')
const btn_home_menu =  document.querySelectorAll('.main_menu div')[0]
const btn_historico_menu =  document.querySelectorAll('.main_menu div')[1]

btn_home_menu.addEventListener('click',()=>{
    sec_menu.style.display  = 'none'
    main.style.display = 'block'
    div_historico.style.display = 'none'
})

btn_menu.addEventListener('click',()=>{
    sec_menu.style.display  = 'block'
})

btn_close_menu.addEventListener('click',()=>{
    sec_menu.style.display  = 'none'
})

btn_historico_menu.addEventListener('click',()=>{
    sec_menu.style.display  = 'none'
    div_historico.style.display = 'flex'
    main.style.display = 'none'
    processoHistorico()
})


//END
if (bd.offsetWidth >= '600') {
    img.src  = 'imagens/tarefa - Copia.png'
}

window.addEventListener('resize',(g)=>{
    if (bd.offsetWidth >= '600') {
        img.src  = 'imagens/tarefa - Copia.png'
    } else {
        img.src  = 'imagens/tarefa.png'
        sec_menu.style.display  = 'none'
    }
})

btn_task.addEventListener('click',()=>{
    taskName.focus()
    sec_perso.style.display = 'flex'
})

btn_generate.addEventListener('click',()=>{
    if (taskName.value.length == 0) {
       box_error.style.display  = 'block'
    } else {
        processoRotina()
    }
    
})

let processoRotina = ()=>{
    generateTask(taskName.value)
    sec_perso.style.display = 'none'
    taskName.value = ''
    completeTask()
}

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

function rep(a) {
    let v = Number(0)
    very.map((c)=>{
        if  (a.target.nextSibling.textContent == c) {
            v += 1 
        }
    })
    return v
}

function completeTask() {
    let check = [...document.querySelectorAll('.list_task > div')]
    check.map((c,p)=>{
        c.firstChild.addEventListener('click',(e)=>{
            console.log(e.target.nextSibling.textContent)
            let n = rep(e)
            if (n == 0) {
                very.push(e.target.nextSibling.textContent)
            }
            c.remove()
            mens()
        })
    })
}



btn_confirmar.addEventListener('click',()=>{
    box_error.style.display  = 'none'
})

btn_cont.addEventListener('click',()=>{
    box_error.style.display  = 'none'
    processoRotina()
})
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

btn_home.addEventListener('click',()=>{
    div_historico.style.display = 'none'
    main.style.display = 'block'
})

function vert_teste(val) {
    let n =  Number(0)
    let li = [...document.querySelectorAll('li')]
    li.map((l)=>{
        if (val == l.textContent) {
            n  += 1
        }
    })
    return n
   
}

function processoHistorico() {
    let completed_list =document.querySelector('.completed-list')
    very.map((v)=>{
        let n = vert_teste(v)
        if (n == 0) {
            let element_list = document.createElement('li')
            element_list.innerText = v

            completed_list.appendChild(element_list)
        }
        
    })
}

btn_historico.addEventListener('click',()=>{
    div_historico.style.display = 'flex'
    main.style.display = 'none'
    processoHistorico()
    
})
