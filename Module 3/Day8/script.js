
window.onload = () => {
    shopData()
}

const shopData = async () => {
    let response = await fetch('https://striveschool-api.herokuapp.com/api/product/', {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyYTYyZWFhY2FhMjAwMTU1MmE1OGUiLCJpYXQiOjE2MzU5NTIxNzQsImV4cCI6MTYzNzE2MTc3NH0.r6UjMr4j4TPX6MjOXPj-pP_7YwXBiQtSDlt1HroH9aw"
        }
    })

    const body = await response.json()
    console.log(body)

}