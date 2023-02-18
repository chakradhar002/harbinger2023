const rankings = array => {
    array.sort((a, b) => a.ranking < b.ranking ? -1 : a.ranking == b.ranking ? 0 : 1 )
    return array
}

const aditya = {
    name : 'Aditya', 
    ranking : 2
}

const amol = {
    name : 'Amol',
    ranking : 3
}

console.log(rankings([amol , aditya]))
