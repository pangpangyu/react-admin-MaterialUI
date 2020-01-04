import React from "react";
import Button from "../components/button.js";
import Table from "../components/table.js";

export default function Index() {
  return (
    <div>
      Index
      <Button type="button" color="primary">Primary</Button>
      <Table
        tableHeaderColor="primary"
        tableHead={['Name','Country','City','Salary']}
        tableData={[
            [ "Dakota Rice" , "Niger" , "Oud-Turnhout" , "$36,738" ] ,
            [ "Minerva Hooper" , "Curaçao" , "Sinaai-Waas" , "$23,789" ] ,
            [ "Sage Rodriguez" , "Netherlands" , "Baileux" , "$56,142" ] ,
            [ "Philip Chaney" , "Korea, South" , "Overland Park" , "$38,735" ] ,
            [ "Doris Greene" , "Malawi" , "Feldkirchen in Kärnten" , "$63,542" ] ,
            [ "Mason Porter" , "Chile" , "Gloucester" , "$78,615" ]
        ]}
      />
    </div>
  );
}
