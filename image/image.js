String newFileName = "my-image";

File imageFile = new File("/Users/rodri/Pictures/escritorio/image.png");

GridFS gfsPhoto = new GridFS(db, "photo");

GridFSInputFile gfsFile = gfsPhoto.createFile(imageFile);

gfsFile.setFilename(newFileName);

gfsFile.save();

