import NavBar from './components/NavBar';
import DocketBar from './components/DocketBar';
import HeaderBar from './components/HeaderBar';
import './App.css';
import {generateData} from './data/data';
import {filterType} from './components/FilterDocket';
import {useState} from 'react';
import {Docket} from './Model/dockets';

export default function App() {
  const [filterState, setFilterState] = useState<filterType>("All dockets");
  const docketList: Docket[] = generateData();

  var docketBarList: JSX.Element[] = [];
  var docketGroup: JSX.Element[] = [];
  var groupedDockets: JSX.Element[] = [];

  function isDueToday(docket:Docket):boolean{
    if (docket.endDate !== null){
      return new Date(docket.endDate.toString()).toDateString() === new Date().toDateString();
    }
    return false;
  }

  const filterByProjects = docketList.reduce((group: { [key: string]: Array<Docket> }, docket: Docket) => {
    const {project} = docket;
    if (project !== null){
      group[project] = group[project] ?? [];
      group[project].push(docket);
    }
    return group;
  }, {});

  if (filterState === "All dockets"){
    docketBarList = docketList.map(docket => 
      <li key = {docket.docketId}>
        <DocketBar docketName = {docket.docketName} docketId = {docket.docketId} 
        statusColor = {docket.statusColor} projectSiteAddress= {docket.projectSiteAddress}/>
      </li>
    );
  }
  else if (filterState === "Due today"){
    const docketBarFiltered:Docket[] = docketList.filter(isDueToday);
    docketBarList = docketBarFiltered.map(docket => 
      <li key = {docket.docketId}>
        <DocketBar docketName = {docket.docketName} docketId = {docket.docketId} 
        statusColor = {docket.statusColor} projectSiteAddress= {docket.projectSiteAddress}/>
      </li>
    );
  }
  else{
    for (const key of Object.keys(filterByProjects)){
      docketGroup = filterByProjects[key].map(docket=>
        <li key = {docket.docketId}>
          <DocketBar docketName = {docket.docketName} docketId = {docket.docketId} 
          statusColor = {docket.statusColor} projectSiteAddress= {docket.projectSiteAddress}/>
        </li>
      );

      groupedDockets.push(
        <li key={key}>
            <div className="docketGroup">
                <div className="groupHeader">{key}</div>
                {docketGroup}
            </div>
        </li>
      );
    }
  };
  
  return (
    <>
      <NavBar/>
      <HeaderBar filterState={filterState} setFilterState={setFilterState}/>
      <div className="DocketBar">
        <ul>{filterState === "Filter by projects"? groupedDockets: docketBarList}</ul>
      </div>
    </>
  );
};