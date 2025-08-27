Answer 1 .
    difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll 
        getElementById use for find a specific and unique document that are indicates with id .it returns one element 
        getElementsByClassName use for find many element in HTML .it return a html collation that is looks like a array not it's not .
        querySelector use CSS selector to finds element in document , give only first element of this CSS selectors .
        querySelectorAll also use CSS selector to finds element ,but it returns a nodeList of element ..

Answer 2 .
    we create a new element by using document.createElement method 

    to insert this we caught a document and add using append or prepend 

    i give js code to create and insert a element below ;

            const newElement = document.createElement("tagName")
            newElement.innerHTML = "to add innerHTML"

            const insertAbleTag =document.getElementById to caught this element where we wants to insert new element 
            insertAbleTag.append(newElement)



Answer 3  .