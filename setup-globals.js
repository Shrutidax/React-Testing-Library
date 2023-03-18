async function test (title , callback) {
    try {
        await callback()
        console.log(`✓ ${title}`)
    }
    catch (error) {
        console.log(`✕ ${title}`)
    }
}

function weGot (actual) {
    return {
        weWant(ans) {
            if (actual !== ans) 
                throw new Error( `${actual} is not equal to ${ans}`)
        }
    }
}

global.test = test
global.weGot = weGot