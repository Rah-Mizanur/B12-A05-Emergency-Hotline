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

        Event Bubbling is a process of event handling in DOM where when a event is apply on a element it first work on this element then it move up to this parentDiv after that that's parent element at last in document .. 

        example : if i click a <button> in will work in this button first then it works in its parent element then its body and so on ....




answer 4  .

        Event Delegation is method of JavaScript where we give a single event listener to parent element without giving separately to the child elements . with help of Event Bubbling when child element happens a event it will goes to its parent element .it works by a specific target from parent element .

        it is useful because
        1. no need to apply event listener to many child element ,need only on event listener so performance will be better .
        2. if new child element add to DOM , it can still work with parent element's event listener . so it will be dynamic .
        3.code is less and easier to maintain 

answer 5  .

        preventDefault() and stopPropagation() both are useful for event handling . but works differently.

        preventDefault() works for Stop the default action of form submission. not stop event bubbling .

        stopPropagation() works for Stop the Event bubbling which means the event will not go to parent element ..
        

