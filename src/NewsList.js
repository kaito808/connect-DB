import React, { useState, useEffect } from "react";

function NewsList() {
  const [newsList, setNewsList] = useState([]);

  // You can replace this sample data with your actual API call to fetch news items
  const sampleData = [
    {
      id: 1,
      title: "Sample News 1",
      content: "This is the content of sample news item 1.",
    },
    {
      id: 2,
      title: "Sample News 2",
      content: "This is the content of sample news item 2.",
    },
    {
      id: 3,
      title: "Sample News 3",
      content: "This is the content of sample news item 3.",
    },
  ];

  useEffect(() => {
    // Simulate fetching data from an API
    setNewsList(sampleData);
  }, []); // The empty dependency array ensures this effect runs once

  return (
    <div>
      <h1>News List</h1>
      <ul>
        {newsList.map((newsItem) => (
          <li key={newsItem.id}>
            <a href={`/edit/${newsItem.id}`}>{newsItem.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsList;
