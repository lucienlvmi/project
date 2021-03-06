function lineWrap(text, width) {
    let wrappedText = ""
    let paragraphs = text.split("\n")
    paragraphs.forEach((paragraphText) => {
        wrappedText += "  "
        columnCount = 2
        let words = paragraphText.split(" ")
        words.forEach((word) => {
            let endColumn = columnCount+word.length
            if (endColumn > width) {
                wrappedText += "\n"
                columnCount = 0
            }
            wrappedText += word+" "
            columnCount += word.length+1
        })
        wrappedText += "\n\n"
    })
    return wrappedText
}
function formatSceneAsText(scene, width, baseUrl) {
    let body = lineWrap(scene.description, width)+"\n"
    if (scene.options.length > 0) {
        body += "What do you want to do?\n"
        scene.options.forEach((option) => {
            body += option.description + "\n"
            body += "--> click what you want to do : "+baseUrl+"/scene/"+option.scene+"\n\n"
        })
    }
    return body
}

module.exports = formatSceneAsText
