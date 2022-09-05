import {readFileSync, writeFileSync, existsSync, mkdirSync, writeFile } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import moment from 'moment/moment.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

export function loadCorpus(src) {
    const path = resolve(__dirname, '..', src)
    const data = readFileSync(path, {encoding: 'utf-8'})
    return JSON.parse(data)
}

export function saveCorpus(title, article) {
    const outputDir = resolve(__dirname, '..', 'output')
    const time = moment().format('|YYYY-MM-DD|HH:mm:ss')
    const outputFile = resolve(outputDir, `${title}${time}.js`)
    console.log(" saveCorpus ~ outputFile", outputFile)
    console.log(" saveCorpus ~ outputFile", existsSync(outputFile))

    if(!existsSync(outputDir)) {
        mkdirSync(outputDir)
    }

    const text = `${title}\n\n    ${article.join('\n      ')}`
    console.log("🚀 ~ file: corpus.js ~ line 26 ~ saveCorpus ~ text", text)

    // writeFileSync(outputFile, text)
    writeFile('outputFile.txt', text, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
    return outputFile
}

