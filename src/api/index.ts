export const getInfo = () => {
    return fetch('/').then(() => {
        return 'this is the info'
    })
}