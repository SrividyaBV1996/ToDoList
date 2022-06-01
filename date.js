exports.getDate = function() {   // we can write module.exports or just exports
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  return today.toLocaleDateString("en-US", options);
}