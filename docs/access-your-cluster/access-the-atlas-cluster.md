---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Access your cluster

<Tabs>
  <TabItem value="data-explorer" label="1. Data Explorer" default>


  Data Explorer is enabled by default and is accsessible via the **Browse Collections** button on the cluster tile, or **Collections** tab on the cluster view.
  
   <img
        alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
        src={useBaseUrl('/img/chapter-1-atlas/data-explorer-dbs.png')}
        border="1px"
    width="700"
    />

  #### Edit/Add Documents

  Please see the following [documentation](https://www.mongodb.com/docs/atlas/atlas-ui/documents/#create--view--update--and-delete-documents) on how to "Modify", "Create" and "Delete" documents.

  As an excersize you can create a collection under `test` database named `users`:
  <img
    alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
    src={useBaseUrl('/img/chapter-1-atlas/createCollection.png')}
    border="1px"
    width="700"
/>


  Insert an array of user documents in the insert document tab.
  ```json
  [
    {
      "name": "Alice",
      "age": 26,
      "email": "alice@abc.com"
    },
    {
      "name": "Bob",
      "age": 43,
      "email": "bob@def.com"
    },
    {
      "name": "Carol",
      "age": 19,
      "email": "carol@xyz.com"
    }
]
  ```
  #### Preview

   <img
    alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
    src={useBaseUrl('/img/chapter-1-atlas/insertData.png')}
    border="1px"
    width="700"
/>


  </TabItem>
  <TabItem value="compass" label="2. Compass">

### Install compass

export const Highlight = ({children, color, link}) => (
  <a href={link}><span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    >
    {children}
  </span></a>
);


:::tip Choose Your Platform
<br></br>
<div className="compass-platforms"><Highlight color="#555555" link="https://downloads.mongodb.com/compass/mongodb-compass-latest-darwin-x64.dmg">Compass on MacOS</Highlight> <Highlight color="#00A4EF" link="https://downloads.mongodb.com/compass/mongodb-compass-1.36.1-win32-x64.exe">Compass on Windows</Highlight> <Highlight color="#E95420" link="https://downloads.mongodb.com/compass/mongodb-compass_1.36.1_amd64.deb">Compass on Ubuntu</Highlight></div>

:::

Go to the following [guide](https://www.mongodb.com/docs/compass/master/install/) to install your compass relevant binary on your working station OS.

### Use compass

Once you open compass you will get the connection string input screen.

  <img
    alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
    src={useBaseUrl('/img/chapter-1-atlas/default-connection.png')}
    border="1px"
    width="700"
/>

Use the Atlas "Connection" tab to get the string you need to access your Atlas deployment.

  <img
    alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
    src={useBaseUrl('/img/chapter-1-atlas/atlas-compass.png')}
    border="1px"
    width="500"
/>

Copy the connection string.

  <img
    alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
    src={useBaseUrl('/img/chapter-1-atlas/copy-paste-conn.png')}
    border="1px"
    width="500"
/>

Paste and connect via Compass:

  <img
    alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
    src={useBaseUrl('/img/chapter-1-atlas/compass-connect.png')}
    border="1px"
    width="500"
/>

Please see the following [documentation](https://www.mongodb.com/docs/compass/current/documents/) on how to "Modify", "Create" and "Delete" documents.

As an excersize you can create a collection under `test` database named `users`:
  <img
    alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
    src={useBaseUrl('/img/chapter-1-atlas/compass-database-create.png')}
    width="500"
/>


  Insert an array of user documents in the "ADD DATA" > "Insert document" json view.
  ```json
  [
    {
      "name": "Alice",
      "age": 26,
      "email": "alice@abc.com"
    },
    {
      "name": "Bob",
      "age": 43,
      "email": "bob@def.com"
    },
    {
      "name": "Carol",
      "age": 19,
      "email": "carol@xyz.com"
    }
]
  ```
 #### Preview

   <img
    alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
    src={useBaseUrl('/img/chapter-1-atlas/insertData.png')}
    width="500"
/>


  </TabItem>
  <TabItem value="shell" label="3. MongoDB Shell">

### Install the `mongosh`

Go to the connection tab on your Atlas cluster and choose the "Connect with MongoDB Shell" option

 <img
    alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
    src={useBaseUrl('/img/chapter-1-atlas/atlas-shell.png')}
    border="1px"
    width="500"
/>

Download the relevant shell for your Operating System and lunch the connection command

 <img
    alt="'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button" 
    src={useBaseUrl('/img/chapter-1-atlas/shell-connect.png')}
    border="1px"
    width="500"
/>

See the following [guide](https://www.mongodb.com/docs/mongodb-shell/connect/) for more details.

As an excersize you can create a collection under `test` database named `users`:

```js
show databases
```

```js
use test
```

```js
db.users.insertMany([
    {
      "name": "Alice",
      "age": 26,
      "email": "alice@abc.com"
    },
    {
      "name": "Bob",
      "age": 43,
      "email": "bob@def.com"
    },
    {
      "name": "Carol",
      "age": 19,
      "email": "carol@xyz.com"
    }
])
```
```js
db.users.find()
```


  </TabItem>
</Tabs>

