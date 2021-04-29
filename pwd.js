module.exports = function () {
  process.stdout.write("prompt > ");

  process.stdin.on("data", (data) => {
    const cmd = data.toString();

    process.stdout.write(process.cwd());
    process.stdout.write("\nprompt > ");
  });
};
