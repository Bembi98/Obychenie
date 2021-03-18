const heading = document.getElementById('head1')
const heading2 = document.querySelector('head2')
const heading3 = heading2.nextElementSibling

setTimeout(() => {
    param(heading)
}, 1500)
setTimeout(() => {
    param(heading2) 
}, 2000)
setTimeout(() => {
    param(heading3)
}, 2500)

const param = (node) => {
    node.textContent = 'Java Script'
    node.style.color = 'red'
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
}
headin.onclick = () => {
    if (heading.style.color == 'red') {
        heading.style.color == 'black'
        heading.style.backgroundColor == '#fff'
    } else {
        heading.style.color == 'blue'
        heading.style.backgroundColor == '#000'
    }

}
heading.addEventListener('dblclick' = () => {
    if (heading.style.color == 'red') {
        heading.style.color == 'black'
        heading.style.backgroundColor == '#fff'
    } else {
        heading.style.color == 'blue'
        heading.style.backgroundColor == '#000'
    }
})