<template>

</template>

<script>
// Default V2 theme
import 'survey-core/defaultV2.min.css';
// Modern theme
// import 'survey-core/modern.min.css';
const surveyJson = {
    showTimerPanel: "top",
    title: "Biology",
    pages: [{
        elements: [{
            type: "radiogroup",
            name: "civilwar",
            title: "When was the American Civil War?",
            choices: [
                "1796-1804", "1810-1814", "1861-1865", "1939-1945"
            ],
            correctAnswer: "1861-1865"
        }, {
            type: "radiogroup",
            name: "war",
            title: "When was the American Civil War?",
            choices: [
                "1996-1803", "1910-1814", "1891-1865", "1999-1945"
            ],
            correctAnswer: "1891-1865"
        }]
    }, {
        elements: [{
            type: "radiogroup",
            name: "libertyordeath",
            title: "Whose quote is this: \"Give me liberty, or give me death\"?",
            choicesOrder: "random",
            choices: [
                "John Hancock", "James Madison", "Patrick Henry", "Samuel Adams"
            ],
            correctAnswer: "Patrick Henry"
        }]
    }, {
        elements: [{
            type: "radiogroup",
            name: "magnacarta",
            title: "What is Magna Carta?",
            choicesOrder: "random",
            choices: [
                "The foundation of the British parliamentary system",
                "The Great Seal of the monarchs of England",
                "The French Declaration of the Rights of Man",
                "The charter signed by the Pilgrims on the Mayflower"
            ],
            correctAnswer: "The foundation of the British parliamentary system"
        }]
    }]
};

const survey = new Survey.Model(surveyJson);
</script>