---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Explain Plans

<Tabs>
 
<TabItem value="compass" label="Compass">

When compass is open on `sample_mflix` database and set on `movies` collection, lets run a query to work with and analyse its explain plan:
#### Filter : 
```json
	{
    	"cast": "Bill Murray",
    	"year": {$gte: 2000}
	}
```
#### Sort :
```json
	{"title": 1}
```
 #### Preview

   <img
    alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
    src={useBaseUrl('/img/chapter-2-atlas/query-filter-sort-compass.png')}
    border="1px"
/>

Now lets review the "Explain Plan" tab. You should observe that the query is using a `COLLSCAN` to go through all the available documents. In memory sort is being applied and ` No index available for this query.`

   <img
    alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
    src={useBaseUrl('/img/chapter-2-atlas/query-explain-compass.png')}
     border="1px"
/>

  </TabItem>
  <TabItem value="shell" label="MongoDB Shell">
When logged into our Atlas cluster, lets identify a query to work with and analyse its explain plan

```json
use sample_mflix

db.movies.find(
	{
    	"cast": "Bill Murray",
    	"year": {$gte: 2000}
	}
)
.sort(
	{"title": 1}
)
```

If we use the `.explain(true)` output on that query we will see no index is used with `COLLSCAN` plan chosen
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
{ executionStats: {
  executionSuccess: true,
  nReturned: 12,
  executionTimeMillis: 36,
  totalKeysExamined: 0,
  totalDocsExamined: 23533,
  executionStages: {
    stage: 'SORT',
    nReturned: 12,
    executionTimeMillisEstimate: 5,
    works: 23548,
    advanced: 12,
    needTime: 23535,
    needYield: 0,
    saveState: 23,
    restoreState: 23,
    isEOF: 1,
    sortPattern: {
      title: 1
    },
    memLimit: 33554432,
    type: 'simple',
    totalDataSizeSorted: 24676,
    usedDisk: false,
    inputStage: {
      stage: 'COLLSCAN',
      filter: {
        '$and': [
          {
            cast: {
              '$eq': 'Bill Murray'
            }
          },
          {
            year: {
              '$gte': 2000
            }
          }
        ]
      },
      nReturned: 12,
      executionTimeMillisEstimate: 5,
      works: 23535,
      advanced: 12,
      needTime: 23522,
      needYield: 0,
      saveState: 23,
      restoreState: 23,
      isEOF: 1,
      direction: 'forward',
      docsExamined: 23533
    }
  }
  ```

  </TabItem>
</Tabs>

Lets learn how indexes can speedup our queries and lower the database utilisation overhead.

