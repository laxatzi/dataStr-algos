//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

// <:&lt; >:&gt; &:&amp; ":&quot; ':&apos;

{

    function convertHTML(str){
    let entities = {
        "<":"&lt;",
        ">":"&gt;",
        "&":"&amp;",
        "\"":"&quot;",
        "'":"&apos;"
    }
     
        return str.replace(/[&,<,>,',"]/g, key => entities[key]);
    }
 

console.log(convertHTML("Dolce & Gabbana"));


}//end block
