var x = require("./list.json")

cats = x.entries.map(function (entry) { return (entry.categories) })

stats = {}

cats.forEach(function(cat) {
    if(stats[cat] != undefined) {
        stats[cat] = stats[cat] + 1
    } else {
        stats[cat] = 1
    }
})

console.log(stats)
