---
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Get Started with MongoDB Atlas

MongoDB Atlas is a developer data platform, integrating a multi-cloud database with a diverse set of data services. Atlas simplifies database deployment and management while enabling modern data-driven application development.

## Register a new Atlas account

You can start by register for MongoDB Atlas:

1. With the [Atlas registration page](https://account.mongodb.com/account/register).

## Deploy a free cluster

Let’s deploy our first forever-free database in MongoDB Atlas! We’ll do that using the Atlas UI, so before starting, make sure you’re logged into your account.

### Use the Web UI @ cloud.mongodb.com

1. Click on the **Build a Database** button.

    <img
        alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
        src={useBaseUrl('/img/chapter-1-atlas/create-a-database.png')}
        border="1px"
        width="700"
    />

2. Select **M0 Free**, Select a cloud provider and the region closest to your physical location. 
Rename your cluster to **MyCluster** and hit **Create**.

 <img
    alt="Cluster type selection page highlighting the shared cluster option"
    src={useBaseUrl('/img/chapter-1-atlas/select-cluster-type.png')}
    border="1px"
    width="700"
 />


3. Use the following wizard to create a first user and passowrd. Finally take a note of your database user and password.
    <img
        alt="Security quickstart page highlighting the 'Database' tab in the left-hand menu"
        src={useBaseUrl('/img/chapter-1-atlas/security-quickstart-highlighted-database-button.png')}
        border="1px"
    width="700"
    />

4. To navigate back to your deployments, select **Database** from the left-hand menu.
Creating the cluster may take a couple of minutes. Once the deployment is complete, you'll see your first cluster in the list!

 <img
    alt="The 'Database Deployments' page with a cluster named 'MyCluster'"
    src={useBaseUrl('/img/chapter-1-atlas/database-deployments.png')}
    border="1px"
    width="700"
 />

5. To navigate back to your deployments, select **Network Access** from the left-hand menu.
add access list ip "0.0.0.0/0" temporarly whitelisted in the IP Access List.

 <img
    alt="The 'Database Deployments' page with a cluster named 'MyCluster'"
    src={useBaseUrl('/img/chapter-1-atlas/database-accesslist.png')}
    border="1px"
    width="700"
 />


<!--  
### CMD Setup

#### CLI Install
- Follow the docs:
https://www.mongodb.com/docs/atlas/cli/stable/install-atlas-cli/ 

- Run the setup command and follow on screen instructions:
```
> atlas setup --clusterName MyCluster  --username <USER> --password <PASSWORD> --accessListIp "0.0.0.0/0"
```
-->
