import React, { useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./MainPage.css";
import Header from "../components/Header";

const MainPage = ({
  searchField,
  onSearchChange,
  robots,
  isPending,
  onRequestRobots,
}) => {
  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots]);

  const filterRobots = () => {
    return robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
  };

  return isPending ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <Header />
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filterRobots()} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
};

export default MainPage;
