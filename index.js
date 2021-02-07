const core = require("@actions/core");
const github = require("@actions/github");
const https = require("https");

var version = github.context.ref.replace(/refs[/].*[/]/, "");

var url = "https://jitpack.io/com/github/" + github.context.repo.owner + "/" + github.context.repo.repo + "/" + version + "/build.log";

core.info("Sending request to " + url);

https.get(url, { timeout: 2000 });
