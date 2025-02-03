import fs from "fs";

const logData = async (req, res, next) => {
  const log = `${Date.now()} ${req.url}\n`;
  fs.appendFile("src/utils/log.txt", log, (err, res) => {
    next();
  });
};

export default logData;
