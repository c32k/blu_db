/*
Paste the following into your world code (accesable by clicking F8 in bloxd
You can remove this comment when you copy this document.
*/

onPlayerChat = (pId, msg) => {
  let pDb = api.getPlayerDbId(pId);
  if (pDb === '') { // Insert your DbId.
    // Manage Database manually
    let cmd = msg.substring(0,4);
    switch(cmd) {
      case ":add":
        // Add an Item to the database
        break;
      case ":del":
        // Remove an Item from the databse
        break;
      case ":get":
        // Find an Item in the databse
        break;
    }
  }
}
