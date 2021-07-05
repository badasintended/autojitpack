const core = require("@actions/core");
const github = require("@actions/github");
const https = require("https");

try {
  let version = core.getInput("version", { required: true });
  let timeout = parseInt(core.getInput("timeout"));
  if (timeout == -1) {
    timeout = undefined;
  }
  let repo = github.context.repo;

  let url = `https://jitpack.io/com/github/${repo.owner}/${repo.repo}/${version}/build.log`;

  core.info("Sending request to " + url);

  let req = https.get(url, { timeout: timeout });
  req.on("timeout", () => req.destroy());
  req.on("error", () => req.destroy());
} catch (error) {
  core.setFailed(error.message);
}
