export const debounce = (fn, ms) => {
    let timeoutId

    return function (...args) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => fn.apply(this, args), ms)
    }
}
