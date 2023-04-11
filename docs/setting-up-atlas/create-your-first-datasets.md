---
sidebar_position: 2
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Loading data into MyCluster

Intercating with a MongoDB cluster can be done in a wide variaty of ways  **including the following**:

- One of the **Drivers**
- The **MongoDB Shell**
- **MongoDB Compass**
- The Atlas **Data Explorer**

To better understand the MongoDB data structers and the possible intercations we can load **Sample Data** into our cluster.


<!-- 
## Load the sample data set into your cluster
:::tip
This section can be skipped if you used the CLI setup as it was done for you already.
:::
-->

### Load the sample data set into your cluster
:::tip
Estimated completion time: 5 minutes
:::

Atlas provides sample data you can load into your Atlas database deployments. 

For a list of datasets in the sample and a description of each, see 
[Available Sample Datasets](https://www.mongodb.com/docs/atlas/sample-data/#std-label-available-sample-datasets)
. Each dataset page contains information on the databases, collections, and indexes in the dataset.

<!-- 
#### Procedure
You can load sample data into your Atlas database deployment in several ways. You can load sample data from the Atlas UI Database Deployments view, or use the Atlas CLI.
-->

### Atlas UI

1. Navigate to your **Database Deployments** view.
In the left navigation pane in Atlas, click **Database**.

1. Open the Load Sample Dataset dialog.
Locate the database deployment where you want to load sample data.
Click the Ellipses **(...)** button for your database deployment.

1. Click **Load Sample Dataset**.

:::tip
If prompted, select all available datasets.
:::

4. In the dialog, click **Load Sample Dataset**
The dialog closes and Atlas begins loading your sample dataset into your database deployment.

  <img
    alt="Cluster type selection page highlighting the shared cluster option"
    src={useBaseUrl('/img/chapter-1-atlas/load-sampledata.png')}
    border="1px"
    width="700"
  /> 
5. View your sample data. To view your sample data by click your database deployment's Browse Collections button. You should see the following databases in your database deployment:

```
sample_airbnb
sample_geospatial
sample_guides
sample_mflix
sample_supplies
sample_training
sample_weatherdata
```
For details on the collections and documents included in these datasets, see 
Available Sample Datasets.