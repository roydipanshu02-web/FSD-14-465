# fs -> file System
# CRUD -> Create Read Update Delete
fs module main purpose is to communicate with the operating System.
The large file that we want to take in chunks and display it for this we use STREAMS and this is possible due fast network connection.This features is also available in fs module. Simlarly, image -> pixel by pixel and text file -> bytes by bytes.
# File System of NodeJs
It allows JS code running outside the browser and interact dit=rectly to operating system
## Common operations on file/folder 
- Reading and writing files -> readFile() , writeFile , appendFile()
- Directory management -> mkdir() , rmdir() , readdir()
- Metadata /information -> stat() , lstat() , fstat()
- Watching for changes -> watch() , watchFile() , unwatchFile()
- Streaming Large Files -> createReadStream(), createWriteStream()
- File operations -> rename() , truncate() , unlink(), link() , syslink()

 ## Await can be used with any promise in async function . That async function will also accessed by await keyword