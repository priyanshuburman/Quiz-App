export const quizData = {
    quiz: [{
        title: "JavaScript",
        icon: "/images/icon-js.svg",
        questions: [{
                question: "Which syntax is correct to output 'Hello World' in an alert box?",
                options: [
                    "alertBox('Hello World');",
                    "msg('Hello World');",
                    "alert('Hello World');",
                    "msgBox('Hello World');",
                ],
                answer: "alert('Hello World');",
            },
            {
                question: "How do you call a function named 'myFunction'?",
                options: [
                    "call function myFunction()",
                    "call myFunction()",
                    "myFunction()",
                    "execute myFunction()",
                ],
                answer: "myFunction()",
            },
            {
                question: "How to write an IF statement in JavaScript?",
                options: ["if i = 5 then", "if (i == 5)", "if i == 5", "if i = 5"],
                answer: "if (i == 5)",
            },
            {
                question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
                options: [
                    "if (i <> 5)",
                    "if i =! 5 then",
                    "if (i != 5)",
                    "if i not = 5",
                ],
                answer: "if (i != 5)",
            },
            {
                question: "How does a FOR loop start?",
                options: [
                    "for (i = 0; i <= 5)",
                    "for i = 1 to 5",
                    "for (i <= 5; i++)",
                    "for (i = 0; i <= 5; i++)",
                ],
                answer: "for (i = 0; i <= 5; i++)",
            },
        ],
    }],
};