---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Indexing Basics

In any database, indexes support the efficient execution of queries. Without them, the database must scan every document in a collection or table to select those that match the query statement. If an appropriate index exists for a query, the database can use the index to limit the number of documents it must inspect.

MongoDB offers a broad range of [index types and features](https://docs.mongodb.com/manual/indexes) with language-specific sort orders to support complex access patterns to your data. MongoDB indexes can be created and dropped on-demand to accommodate evolving application requirements and query patterns and can be declared on any field within your documents, including fields nested within arrays.

The order of a compound index in MongoDB has a best practices rule called ESR. This rule stands for Equality, Sort and Range field placement in the index definition. 

Let's create some indexes for our query.


<Tabs>
  <TabItem value="data-explorer" label="Data Explorer" default>


  Data explorer allows us to create an index by going to the collection "Indexes" tab and creating a new index. Add the fields in the following order to try and cover our query predicts:

  ```json
  {
  "cast" :1,
  "year" : 1,
  "title" : 1
}
```

 
  
   <img
        alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
        src={useBaseUrl('/img/chapter-2-atlas/data-explorer-index.png')}
        border="1px"
    
    />

  

  </TabItem>
  <TabItem value="compass" label="Compass">


  Data explorer allows us to create an index by going to the collection "Indexes" tab and creating a new index. Add the fields in the following order to try and cover our query predicts:

  ```json
  {
  "cast" :1,
  "year" : 1,
  "title" : 1
}
```

   <img
    alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
    src={useBaseUrl('/img/chapter-2-atlas/index-compass.png')}
    border="1px"
/>

 
  </TabItem>
  <TabItem value="shell" label="MongoDB Shell">

With the shell creating indexes is done via the `createIndex` command:
```js

db.movies.createIndex(  {
  "cast" :1,
  "year" : 1,
  "title" : 1
})
```


  </TabItem>
</Tabs>

Now lets see the explain plans post index creation

<Tabs>
  <TabItem value="compass" label="Compass">


 The query now is using an index to minimize the amount of scanned documents, however, the query is still doing an in-memory sort


   <img
    alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
    src={useBaseUrl('/img/chapter-2-atlas/compass-no-sort.png')}
   border="1px"
/>

 
  </TabItem>
  <TabItem value="shell" label="MongoDB Shell">
If we use the `.explain(true)` output on that query we will see that an index is used (`IXSCAN` stage), however, there is in memory sort.

```json
 db.movies.find(
	{
    	"cast": "Bill Murray",
    	"year": {$gte: 2000}
	}
)
.sort(
	{"title": 1}
).explain(true)
```
```json
 inputStage: {
        stage: 'SORT',
        nReturned: 12,
        executionTimeMillisEstimate: 0,
        works: 26,
        advanced: 12,
        needTime: 13,
        needYield: 0,
        saveState: 0,
        restoreState: 0,
        isEOF: 1,
        sortPattern: {
          title: 1
        },
        memLimit: 33554432,
        type: 'default',
        totalDataSizeSorted: 1281,
        usedDisk: false,
        inputStage: {
          stage: 'IXSCAN',
  ```

  </TabItem>
</Tabs>

Lets change the order of the fields to reflect the Equality, Sort and Range order:

<Tabs>
  <TabItem value="compass" label="Compass">


  To follow the ESR rule lets use the  order according to our query `cast - Equality`, `title- Sort` and last `year - Range`:

  ```json
{
  "cast" :1,
  "title" : 1,
  "year" : 1
}
```

And drop the previous index.

   <img
    alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
    src={useBaseUrl('/img/chapter-2-atlas/compass-ESR.png')}
    border="1px"
/>

 
  </TabItem>
  <TabItem value="shell" label="MongoDB Shell">

 To follow the ESR rule lets use the  order according to our query `cast - Equality`, `title- Sort` and last `year - Range`:
```js

db.movies.createIndex(  {
  "cast" :1,
    "title" : 1
  "year" : 1

})

db.movies.dropIndex({
  "cast" :1,
  "year" : 1,
  "title" : 1
})
```
```json
 db.movies.find(
	{
    	"cast": "Bill Murray",
    	"year": {$gte: 2000}
	}
)
.sort(
	{"title": 1}
).explain(true)
```
```json
 executionStages: {
      stage: 'FETCH',
      nReturned: 12,
      executionTimeMillisEstimate: 0,
      works: 21,
      advanced: 12,
      needTime: 8,
      needYield: 0,
      saveState: 0,
      restoreState: 0,
      isEOF: 1,
      docsExamined: 12,
      alreadyHasObj: 0,
      inputStage: {
        stage: 'IXSCAN',
```



  </TabItem>
</Tabs>

As you can see only an index is used and no sort stage is present.
