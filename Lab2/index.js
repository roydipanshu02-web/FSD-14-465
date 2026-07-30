import {writeFile, readFile , appendFile} from "fs/promises";
 

// await writeFile('stud.txt' , 'Dipesh Chaudhary\nRollNo:2503201000466');
// console.log("File Written");

// const data =  await readFile("stud.txt" , "utf-8");
 // console.log(`file contents: ${data}`);

 const addContent =  async (fname , content) => {
    await writeFile(fname,content);     // until and unless the function becomes async await will not work
    console.log(`${content} written in file: ${fname}` );
 };

 const readContent = async (fname) => {
    const data = await readFile(fname , 'utf-8');
    return data;
 };

 const appendContent = async (fname, content) => {
     await appendFile(fname ,"\n" + content);
     console.log("data appended");

 }

 await addContent("notes.txt" , "FS is easy in JS");
 console.log("Contents\n", await readContent("notes.txt"));
 await appendFile("notes.txt" , "it can add , read and update contents");
 console.log("Updated Contents\n" , await readContent("notes.txt"));

