// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
    const greetings =
        ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

    // Pick a random greeting.
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];

    // Add it to the page.
    const greetingContainer = document.getElementById('greeting-container');
    greetingContainer.innerHTML = greeting;
    // greetingContainer.appendChild(greeting);
}

function myFavoriteQuotes() {
    //my favorite motivational quotes
    const quotes =
        ['Do what you cant',
            'Not everything that counts can be counted and not everything that can be counted counts',
            'What you acheieve inwardly will change outer reality',
            'The most important meeting you can have today, is with yourself, dont skip it!'
        ];

    // below function generates a random quote from the above quotes array

    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    //adding the quote to the page

    const quotesBox = document.getElementById('quote-box');
    quoteBox.innerText = quote;

}

async function showQuote() {
  const responseFromServer = await fetch('/hello');
  //const textFromResponse = await responseFromServer.text();
  const quotesList = await responseFromServer.json();

  const quoteContainer = document.getElementById('quote-box');
  quoteContainer.innerText = quotesList[Math.floor(Math.random() * quotesList.length)];
//   quoteContainer.appendChild(quotesList[Math.floor(Math.random() * quotesList.length)]);
}


