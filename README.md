# Metamorpheus 
[![forthebadge](https://forthebadge.com/images/featured/featured-built-with-love.svg)](https://forthebadge.com)

An AI assistant made as part of [Arcade by Hackclub](https://hackclub.com) using Google Gemini API

## How does metamorpheus work ?

Its simple really. It has a really basic backend involving an API call to gemini api. The API call involves a ```gemini.js``` file in the backend folder which calls the gemini API and contains the code required for the website to actually work. The code is available on the [Google Gemini Api Webpage](https://ai.google.dev/gemini-api?gad_source=1&gclid=Cj0KCQjw-5y1BhC-ARIsAAM_oKnsJ6zuW0wo0H_7arbLcB_cAtHEyUSnmjPYLAZEg22do8rWquJ6QnwaAqKtEALw_wcB) . 

### But How does Google Gemini API help the website work?

The API provides a way to receive responses from generative AI models. It receives them as a **DATA STREAM**. A streamed response sends incremental pieces of data back to metamorpheus as it is generated by the model. 

Oh and yeah I just copied all that from google.

#### Uh oh! A flaw??

Unlike OpenAI API, gemini API contains **Older data** . It only contains data upto 2021. Looks like the creators of the API still haven't recovered from the lockdown eh?

#### But how can an API from google have old data?

Don't believe me? Try it out yourself.

We are gonna take my favourite footballer (sorry americans, its called football) **Lionel Messi**. Lionel Messi played for French club Paris Saint German till 2023 and initially joined the club in 2021. In 2023 , he transferred to an american club called Inter Miami.

Let's work

```Who is lionel messi```

Metamorpheus prompt:

```Lionel Andrés Messi Cuccittini (born 24 June 1987) is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team```

See what I mean?


##### Wait a second, more flaws?

Yes, there are some of the bugs we are currently working on

1. If you are using a computer, pressing the enter key won't send the prompt. Use your mouse to click the send button
2. Oh, I guess thats the only other flaw Metamorpheus had

 So basically Metamorpheus is an AI assistant with user friendly Ui and old data, 
But don't take my word for how good the website is and the cartoonish UI is so good. Try it out yourself.
