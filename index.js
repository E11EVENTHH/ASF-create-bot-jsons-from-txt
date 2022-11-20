const fs = require("fs");
const fse = require("fs-extra");
let logPassArray = new Array()
let tempall = new Array()
let templog
let temppass
let countFounded
let content

console.log(""+
"╔═════════════════════════════════════════════════════════════╗" + "\n" +
"║  t.me/e11eventhhh    ╔═══╗╔╗─╔╗╔═══╦╗──╔╦═══╦═╗─╔╦════╦╗─╔╗ ║"+ "\n" +
"║ ╔═════╦╦═══╦╦═════╗  ║╔══╬╝║╔╝║║╔══╣╚╗╔╝║╔══╣║╚╗║║╔╗╔╗║║─║║ ║" + "\n" +
"║ ║╔═╦═╦╝╠═╗ ║╚╗╔╦╗ ║  ║╚══╬╗║╚╗║║╚══╬╗║║╔╣╚══╣╔╗╚╝╠╝║║╚╣╚═╝║ ║" + "\n" +
"║ ║║╠╣║║║║╩╣ ║║║║║║ ║  ║╔══╝║║─║║║╔══╝║╚╝║║╔══╣║╚╗║║─║║─║╔═╗║ ║" + "\n" +
"║ ║╚═╩═╩═╩═╝ ╚═╝╠╗║ ║  ║╚══╦╝╚╦╝╚╣╚══╗╚╗╔╝║╚══╣║─║║║─║║─║║─║║ ║" + "\n" +
"║ ╚═════════════╚═╝═╝  ╚═══╩══╩══╩═══╝─╚╝─╚═══╩╝─╚═╝─╚╝─╚╝─╚╝ ║" + "\n" +
"╚═════════════════════════════════════════════════════════════╝" + "\n")

if(fs.existsSync('Files/JSONS')){
    console.log("Deleting the old JSONs folder and creating a new one")
    fse.remove('Files/JSONS', err => {
        if (err) return console.error(err)
        go()
    })
} else {
    go()
}

function go(){
    addFolders()
    initjsons()
}

function addFolders(){ 
    if (!fs.existsSync('Files/JSONS')) {
        fs.mkdirSync('Files/JSONS');
    }
}

function initjsons(){ 
    logPassArray = fs.readFileSync('Files/logpass.txt').toString().split("\r\n");
        for(let i in logPassArray){
            tempall = logPassArray[i].split(":")
            templog = tempall[0]
            temppass = tempall[1]
            countFounded++
            createJSON()
        }
}

function createJSON(){
    content = fs.readFileSync("Files/JSON_sample.txt", "utf8");
    let content2 = content.replace("templog",templog)
    content2 = content2.replace("temppass",temppass)
    let directory = 'Files/JSONS/' + templog + '.json'
    fs.writeFileSync(directory, content2);
}