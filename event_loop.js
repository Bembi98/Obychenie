const timeout2sec = () => console.log('timeout2sec')
window.setTimeout(function() {
    console.log('test')
}, 5000)
setTimeout(timeout2sec, 2000)