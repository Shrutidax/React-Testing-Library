const productAsync = (a,b) => a * b
const divAsync = (a,b) => a / b

test(`Multiplication`, async () => {
    const result = await productAsync (7, 9)
    const expected = 63
    weGot(result).weWant(expected)
})

test(`Division`, async () => {
    const result = await divAsync (12, 3)
    const expected = 3
    weGot(result).weWant(expected)
})

