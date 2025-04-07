/*
You can use this world code to manually edit the DB.
Paste the following into your world code (accesable by clicking F8 in bloxd
You can remove this comment when you copy this document.
*/

onPlayerChat = (pId, msg) => {
  let pDb = api.getPlayerDbId(pId);
  if (pDb === '') { // Insert your DbId
    let cmd = msg.substring(0,4); // All DB commands are 3 letters long
    switch(cmd) {
      case ":add":
        if (api.getHeldItem(pId).name == "Book") {
          // Read book contents
        } else {
          api.log("Error: You must use a book to add information to the database manually");
        }
        break;
      case ":del":
        let itemToDel = msg.replace(cmd + " ", " ") // Get the rest of the text
        break;
      case ":get":
        // Find an Item in the database
        break;
      case ":set":
        if (api.getHeldItem(pId).name == "Book") {
          // Read book contents
        } else {
          api.log("Error: You must use a book to change values");
        }
        break;
    }
  }
}
