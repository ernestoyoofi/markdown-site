const app = require("express")();
const fs = require("fs")
const { conf } = require("./config")
const md = require("markdown-it")({
 langPrefix: true
}).use(require('markdown-it-center-text'));

const listmarkdown = fs.readdirSync("./markdown/", "utf-8")
app.set("view engine", "ejs")
app.get("/assets", (req, res) => {
  res.sendFile(__dirname + "/assets/" + req.query.i )
})
app.get("/", (req, res) => {
  const dataA = {
    htmlMarkdown: md.render(fs.readFileSync("./markdown/index.md", "utf-8")),
    title: fs.readFileSync(`./markdown/index.md`, "utf-8").split(/\r?\n/)[0].replace(/# /g, "").replace(/->/g, "").replace(/<-/g, "").replace(/##/g, ""),
    desc: fs.readFileSync(`./markdown/index.md`, "utf-8").replace(/\r?\n/g, "").slice(0, 120),
    author: conf.author,
    navbar: listmarkdown
  }
  res.render("index", dataA)
})
app.get("/:content", (req, res) => {
  const dataA = {
    htmlMarkdown: md.render(fs.readFileSync(`./markdown/${req.params.content}.md`, "utf-8")),
    title: fs.readFileSync(`./markdown/${req.params.content}.md`, "utf-8").split(/\r?\n/)[0].replace(/# /g, "").replace(/->/g, "").replace(/<-/g, "").replace(/## /g, ""),
    desc: fs.readFileSync(`./markdown/${req.params.content}.md`, "utf-8").replace(/\r?\n/g, "").slice(0, 120),
    author: conf.author,
    navbar: listmarkdown
  }
  res.render("index", dataA)
})
app.listen(5000, () => { console.log("Start Running Server") })