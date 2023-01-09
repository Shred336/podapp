import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";

export function PodGrid(props) {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    fetch(props.rssfeed)
      .then((response) => response.text())
      .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
      .then((data) => {
        const itemList = data.querySelectorAll("item");
        const items = [];

        itemList.forEach((el) => {
          items.push({
            pubDate: new Date(el.querySelector("pubDate").textContent),
            title: el.querySelector("title").innerHTML,
            mp3: el.querySelector("enclosure").getAttribute("url"),
          });
        });

        setRowData(items);
      });
  }, [props.rssfeed]);
  var columnDefs = [
    {
      headerName: "Episode Title",
      field: "title",
    },
    {
      headerName: "Published",
      field: "pubDate",
    },
    {
      headerName: "Episode",
      field: "mp3",
      flex: 2,
      autoHeight: true,
      cellRenderer: (params) => `
            <audio controls preload="none"
                style="height:2em; vertical-align: middle;">
                <source src=${params.value} type="audio/mpeg" />
            </audio>`,
    },
  ];
  return (
    <div id="container">
      <div
        id="grid"
        className="ag-theme-alpine"
        style={{ height: props.height, width: props.width }}
      >
        <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
      </div>
    </div>
  );
}
