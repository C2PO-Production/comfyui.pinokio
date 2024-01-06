const { exec } = require('child_process');
const path = require('path');

module.exports = function(kernel, args, callback) {
  // Ajoutez le chemin complet vers votre fichier .bat
  const batFilePath = path.join(__dirname, 'update-python.bat');

  // Utilisez la commande exec pour exécuter le fichier .bat
  exec(`cmd /c start ${batFilePath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return callback(error);
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return callback(stderr);
    }
    console.log(`stdout: ${stdout}`);
    callback(null, 'Command executed successfully');
  });
};
