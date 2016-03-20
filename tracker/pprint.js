// Pretty Print Bug Infomation in Markdown Format

var x = require("./list.json");

var do_tag_source = false;

function only_digit_hash(s) {
    for(var i in s) {
        if (!((s[i] >= '0' && s[i] <= '9') || s[i] == '#')) {
            return false
        }
    }

    return true
}

function link_to_name(link) {
    var segs = link.split("/");
    if (segs[2] == "stackoverflow.com") {
        var i = segs.length - 1;

        if(only_digit_hash(segs[i])) {
            return segs[i - 1];
        } else {
            return segs[i];
        }

    } else {
        throw "Don't support link_to_name for " + segs[2];
    }
}

function md_listify(lst) {
    var ret = "";
    for(var i in lst) {
        ret += ("- " + lst[i] + "\n");
    }
    return ret;
}

function md_linkify(link) {
    return "[" + link + "](" + link + ")\n";
}

middle = x.entries.map(function (entry) {
    var subsections = [];
    var h3 = "";

    if (entry.name != undefined) {
        h3 = entry.name;
    } else {
        h3 = link_to_name(entry.link);
    }

    if (do_tag_source && entry.source) {
        subsections.push({
            h4 : "Source",
            content : entry.source
        });
    };

    if (entry.categories) {
        subsections.push({
            h4 : "Categories",
            content : md_listify(entry.categories)
        });
    }

    if (entry.link) {
        subsections.push({
            h4 : "Link",
            content : md_linkify(entry.link)
        });
    } else {
        throw "No link";
    }

    if (entry.remark) {
        subsections.push({
            h4 : "Remark",
            content : entry.remark
        });
    }

    if (entry.fix) {
        subsections.push({
            h4 : "Possible fix",
            content : entry.fix
        });
    }

    if (entry.related) {
        subsections.push({
            h4 : "Related",
            content : md_listify(entry.related)
        });
    }


    return {
        h3 : h3,
        subsections : subsections
    }
});

// Output to consecutive markdown

var result = "";

middle.forEach(function (section) {
    result += ("### " +  section.h3 + "\n\n");
    section.subsections.forEach(function (sub) {
        result += ("#### " + sub.h4 + "\n\n");
        result += sub.content;
        result += "\n\n";
    });
});

console.log(result);
