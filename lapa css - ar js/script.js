const picture = document.querySelector('.js-pic')
const show = document.querySelector('.js-show')
const hide = document.querySelector('.js-hide')

hide.addEventListener('click', () => {
    picture.classList.add('hidden')
})

show.addEventListener('click', () => {
    picture.classList.remove('hidden')
})


const commentBox = document.querySelector('js-comments')
let html = ''
const getComments = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    const comments = await data.json()

    console.log(comments)
    comments.forEach((comment) => {
        const { name, email, body } = comment

        html = html + `
        <div class="comment">
           <h4 class="name">Vārds: ${name}</h4>
           <span class="email">E-pasts: ${email}</span>
           <p class="text">${body}</p>
        </div>   
        `
    })

    commentBox.innerHTML = html
}

getComments()

const form = document.querySelector('.js-form')

form.addEventListener('submit', () => {
    e.preventDefault()
    js-form-email
    js-form-body
    const name = document.querySelector('.js-form-text').value
    const email = document.querySelector('.js-form-email').value
    const body = document.querySelector('.js-form-body').value
    console.log(name)
    console.log(email)
    console.log(body.trim())


    html = html + `
        <div class="comment">
           <h4 class="name">Vārds: ${name}</h4>
           <span class="email">E-pasts: ${email}</span>
           <p class="text">${body}</p>
        </div>   
        `
        commentBox.innerHTML = html
})