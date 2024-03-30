const express = require('express')
const cors = require("cors")
const fs = require('fs'); 
const { query } = require('express');
const dataItems = fs.readFileSync("./itemsInfo.txt",{ encoding: "utf-8" }).split("\n")
const dataGero = fs.readFileSync("./infoGero.txt",{ encoding: "utf-8" }).split("\n")
const dataSkills = fs.readFileSync("./skillsInfo.txt",{ encoding: "utf-8" }).split("\n")
const PORT = 3001

const app = express()
app.use(cors())

app.listen(PORT, () =>{
    console.log("Server starn port 3001")
})

app.get("/api/items", (req, res) => {
    let infoItem = dataItems.find(elem => elem.includes(req.query.name)).split(';')
    let nameItem = infoItem[1]
    let propertyItem = infoItem[2].replaceAll(",", "<br/>")
    let skillItem = infoItem[3].replaceAll(",", "<br/>")
    res.send({
        name: nameItem,
        property: propertyItem,
        skill: skillItem
    })
})

app.get("/api/geroInfo", (req, res) => {
    let geroArr = dataGero.find(elem => elem.includes(req.query.gero)).split(';')
    res.send({
        name: geroArr[1],
        stats: geroArr[2],
        skillPassive: geroArr[3],
        skillFirst: geroArr[4],
        skillSecond: geroArr[5],
        skillThird: geroArr[6],
        costBO: geroArr[7],
        costDiamond: geroArr[8],
        zver: geroArr[9],
        vud: geroArr[10],
        history:geroArr[11],
    })
})

app.get("/api/skillInfo", (req, res) =>{
    let skillArr = dataSkills.find(elem => elem.includes(req.query.name)).split(";")
    res.send({
        info:skillArr[1].replaceAll("*", "<br/>"),
        mana:skillArr[2],
        reload:skillArr[3],
    })
})