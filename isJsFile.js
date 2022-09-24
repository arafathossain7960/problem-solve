/*
This take a  file with  dote and extension after check it will return 
this file is javaScript file or not, it is return true or false.
*/


function isJavaScriptFile(file){
    if(!file.includes('.')){
        return 'Please! give me a file with extension.'
    }
    if(file.endsWith('.js')){
        return true;
    }else{
        return false;
    }
}

 isJavaScriptFile('image.jpg.js');