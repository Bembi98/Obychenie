    const url = 'https://jsonplaceholder.typicode.com/todos'
    const delay = ms => {
        return new Promise(r => setTimeout(() => r(), ms))
    }
    async function fetchAsyncFu() {
        console.log('Featch started...')
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log('Data:', data)
    }
    fetchAsyncFu()