This is a tiny single-page application that picks items from a list in random order, built in literally a few minutes.
It was made for a very specific purpose, but turned out more general-purpose than expected.

# Usage

Encode list elements as a comma-separated list in as a url parameter named `words`.

```
index.html?words=hello,foo,bar
```

The application will read the items from the url and show them in random order.


# Privacy Concerns?

The following section is a lie for now (unimplemented feature)

No need. The data given as input to this application stays within the browser. The fragment identifier part of the URL encodes the items in the list. A standards compliant browser will not send fragments to the server, making the application is completely standalone. The only reason for it being hosted on the web is ease of access. Nothing prevents one from copying the `index.html` file and `index.js` and running the application on their system. Accessing the files using the `file://` protocol identifier will suffice, and the application will work offline.

- state in HTML localstorage
- names in fragment
- list names from an input form
-
