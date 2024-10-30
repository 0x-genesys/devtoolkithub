import React from 'react';
import './RegexCheatSheet.css';

const RegexCheatSheet = () => {
    const regexPatterns = [
        {
            description: "Matches any digit",
            pattern: "\\d",
            example: "123"
        },
        {
            description: "Matches any non-digit",
            pattern: "\\D",
            example: "abc"
        },
        {
            description: "Matches any whitespace character",
            pattern: "\\s",
            example: " "
        },
        {
            description: "Matches any non-whitespace character",
            pattern: "\\S",
            example: "a"
        },
        {
            description: "Matches any word character (alphanumeric + underscore)",
            pattern: "\\w",
            example: "word_1"
        },
        {
            description: "Matches any non-word character",
            pattern: "\\W",
            example: "!@#"
        },
        {
            description: "Matches the start of a string",
            pattern: "^",
            example: "Hello"
        },
        {
            description: "Matches the end of a string",
            pattern: "$",
            example: "World"
        },
        {
            description: "Matches any character (except newline)",
            pattern: ".",
            example: "any character"
        },
        {
            description: "Matches a specific number of occurrences (e.g., {2} means exactly 2)",
            pattern: "\\d{2}",
            example: "12"
        },
        {
            description: "Matches zero or more occurrences (e.g., * means zero or more)",
            pattern: "a*",
            example: "aaa"
        },
        {
            description: "Matches one or more occurrences (e.g., + means one or more)",
            pattern: "a+",
            example: "aaa"
        },
        {
            description: "Matches either/or (e.g., (abc|def) means matches abc or def)",
            pattern: "(abc|def)",
            example: "abc"
        },
        {
            description: "A group to create a subexpression",
            pattern: "(abc)",
            example: "abc"
        },
        {
            description: "Matches any character in the set (e.g., [abc] matches a, b, or c)",
            pattern: "[abc]",
            example: "b"
        },
        {
            description: "Matches any character not in the set (e.g., [^abc] matches anything except a, b, or c)",
            pattern: "[^abc]",
            example: "d"
        },
    ];

    return (
        <div className="regex-cheat-sheet" id="RegexCheatSheet">
            <h2>Regex Cheat Sheet</h2>
            <ul>
                {regexPatterns.map((item, index) => (
                    <li key={index}>
                        <strong>Description:</strong> {item.description} <br />
                        <strong>Pattern:</strong> <code>{item.pattern}</code> <br />
                        <strong>Example:</strong> <code>{item.example}</code>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RegexCheatSheet;
