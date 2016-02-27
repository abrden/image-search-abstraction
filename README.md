# API: Image Search Abstraction Layer
[FCC API Projects Challenge](http://www.freecodecamp.com/challenges/image-search-abstraction-layer)

## User Stories
- [x] I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
- [x] I can paginate through the responses by adding a ?offset=2 parameter to the URL.
- [x] I can get a list of the most recently submitted search strings.

## Example usage
To search for 'millenium falcon' images try `https://abrden-bing-search.herokuapp.com/imgsearch/millenium falcon`<br>
You can get 5 results by adding '?offset=5' like `https://abrden-bing-search.herokuapp.com/imgsearch/millenium falcon?offset=5`<br>
To see the last 10 searches go to `https://abrden-bing-search.herokuapp.com/latest`

## Example output
Output for the image results
```javascript
  [ { url: 'http://...',
      snippet: '...',
      thumbnail: 'http://...',
      context: 'http://...'
    },
     ...
  ]
```

Output for the most recent searches
```javascript
  [ { term: '...',
      when: '...'
    },
     ...
  ]
```

## Live site
<https://abrden-bing-search.herokuapp.com>