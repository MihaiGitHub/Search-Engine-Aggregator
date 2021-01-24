import React, { useState } from "react";
import Search from "./Search";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { googleSearch, duckduckgoSearch } from "./apiCore";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [google, setGoogle] = useState([]);
  const [duckduckgo, setDuckduckgo] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    googleSearch(searchTerm).then((response) => {
      setGoogle(response.data);
    });

    duckduckgoSearch(searchTerm).then((response) => {
      setDuckduckgo(response.data.RelatedTopics);
    });
  };

  return (
    <div className="s002">
      <form>
        <fieldset>
          <legend>SEARCH ENGINE</legend>
        </fieldset>
        <Search searchSubmit={handleSearch} searchTerm={handleChange} />
        <Tabs>
          <TabList>
            <Tab>Google</Tab>
            <Tab>Duckduckgo</Tab>
          </TabList>

          <TabPanel>
            <table>
              {google.map((item, index) => (
                <tr>
                  <td style={{ color: "white", paddingBottom: 10 }}>
                    <table>
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            style={{ color: "white" }}
                            href={item.url}
                          >
                            {item.title}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>{item.description}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              ))}
            </table>
          </TabPanel>
          <TabPanel>
            <table>
              {duckduckgo.map((item, index) => (
                <tr>
                  <td style={{ color: "white", paddingBottom: 10 }}>
                    <table>
                      <tr>
                        <td>
                          <a
                            target="_blank"
                            style={{ color: "white" }}
                            href={item.FirstURL}
                          >
                            {item.Text}
                          </a>
                        </td>
                      </tr>
                      {/* <tr>
                        <td>{item.Result}</td>
                      </tr> */}
                    </table>
                  </td>
                </tr>
              ))}
            </table>
          </TabPanel>
        </Tabs>
      </form>
    </div>
  );
};

export default Home;
