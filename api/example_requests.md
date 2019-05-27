GraphQL api examples: 

Query all translators:
```
query{
  translators{
    id,
    endpoints {
      id
    },
    requestFunction,
    responseFunction,
    tests {
      id
    }
  }
}
```

Query for single translator:
```
query {
  translator (where: {
    id: "cjw5jr8lm000l07274tpxkpkv"
  }) {
    id
  }
}
```

Query endpoints for translator
```
query{
  endpoints(
    where: {
      translator: { 
        id:"cjw5lez2q002e0727lol0370o"
      }
    }
  ) {
    id,
    url
  }
}
```

Create translator without any endpoints:
```
mutation {
  createTranslator (
    data: {
      endpoints: 
      requestFunction: "(a) => { a + 1 }"
    }
  ) {
    id,
    requestFunction
  }
}
```

Create translator with endpoints:
```
mutation {
  createTranslator (
    data: {
      endpoints: {
        create: [
          {
            url: "github.com",
            type: GET
          },{
            url: "youtube.com",
            type: POST
          }
        ]
      }
      requestFunction: "(a) => { a + 1 }"
    }
  ) {
    id,
    requestFunction
  }
}
```

Update translator and it's endpoints:
```
mutation {
  updateTranslator (
    data: {
      endpoints: {
        update: [
          {
            data: {
              url: "test.com",
              type: GET
            },
            where: { id: "cjw5lez2t002f072778bmcw44" }
          },{
            data: {
              url: "youtube.com",
              type: POST
            },
            where: { id: "cjw5lez2w002g0727ljgricdo" }
          }
        ]
      }
      requestFunction: "(a) => { a + 1 }"
    },
    where: {
      id: "cjw5lez2q002e0727lol0370o"
    }
  ) {
    id,
    requestFunction
  }
}
```

Create endpoint and link to existing translator:
```
mutation{
  createEndpoint(
    data: {
      translator: {
        connect:{
          id: "cjw5jr8lm000l07274tpxkpkv"
        }
      },
      type: GET,
      url: "https://google.com",
    }
  ) {
    id
  }
}
```

Update endpoint
```
mutation{
  updateEndpoint(
    data: {
      type: POST,
      url: "https://google.com",
    },
    where: {
      id: "cjw5kthy2001r0727bosjsn3p"
    }
  ) {
    id,
    url,
    type
  }
}
```