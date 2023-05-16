const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText // getting text
        .split('') // splitting each letter
        .map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`) // mapping each letter as it is now array
        .join('') // using join to convert array back to string
})