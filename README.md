# Javascript-Repository
An easy way to learn JavaScript with proper Examples and definition from scratch

# Javascript Functions

    Javascript functions are used for reusability of code and performance
    A JavaScript function is a block of code designed to perform a particular task.
    A JavaScript function is executed when "something" invokes it (calls it).
    A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

    Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

    The parentheses may include parameter names separated by commas:
    (parameter1, parameter2, ...)

    The code to be executed, by the function, is placed inside curly brackets: {}


    The code inside the function will execute when "something" invokes (calls) the function:

    1. When an event occurs (when a user clicks a button)
    2. When it is invoked (called) from JavaScript code
    Automatically (self invoked)
    
    * We will learn a lot more about function invocation later in this tutorial.

# Local Variables
    1. Variables declared within a JavaScript function, become LOCAL to the function.

    2. Local variables can only be accessed from within the function.

    3. Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.

    4. Local variables are created when a function starts, and deleted when the function is completed.

# Global Variables
    A JavaScript global variable is declared outside the function or declared with window object. It can be accessed from any function.
    Let’s see the simple example of global variable in JavaScript

    <script>  
    var value=50;//global variable  
    function a(){  
    alert(value);  
    }  
    function b(){  
    alert(value);  
    }  
    </script> 

    when we refresh it always shows the global variable value assigned to it.

# Callbacks in JavaScript functions:
    Lets see this through an practical example of it.

    Robin, a  small boy from Wonderland, loves to eat pizza. One morning he picks up his mother's phone and orders pizza using the PizzaHub app. Robin selects his favorite cheese barbeque pizza and press the order button.

    The PizzaHub app registers the order and informs Robin that it will notify him when the pizza is ready and on the way. Robin, the happy boy, waits for a while and finally gets a notification confirming that the pizza is on its way!

    So, if we break down the story, the sequence of events goes like this:

    1. Robin orders the pizza
    2. The app notes down the order
    3. PizzaHub prepares the pizza, and it is ready after a while.
    4. The app notifies Robin, confirming the pizza is on the way.

    N.B: The mechanism of notifying Robin about the pizza works by using the callback function.

    The whole process is demonstarted with with code in function.js
# IIFE (Immediately Invoked Function Expression)
    Because our application could include many functions and global variables from different source files, it's important to limit the number of global variables. If we have some initiation code that we don't need to use again, we could use the IIFE pattern. As we will not reuse the code again, using IIFE in this case is better than using a function declaration or a function expression.